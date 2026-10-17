import * as THREE from 'three';
import {KTX2Loader} from 'three/addons/loaders/KTX2Loader.js';

// Physical classification is independent of a coating/condition choice.
export const BASES = {
  paint: {color:0xffffff, roughness:.34, metalness:0, clearcoat:.8, clearcoatRoughness:.12, tileMetres:.25, mapped:true, substrate:'painted metal'},
  chrome: {color:0xc7c8c1, roughness:.18, metalness:1, substrate:'metal'},
  rubber: {color:0x171a19, roughness:.92, metalness:0, substrate:'rubber'},
  glass: {color:0x18343c, roughness:.13, metalness:0, clearcoat:1, substrate:'opaque glazing control'},
  light: {color:0xece7d8, roughness:.18, metalness:0, substrate:'lamp cover'},
  bark: {color:0xffffff, roughness:.96, metalness:0, tileMetres:.45, mapped:true, substrate:'bark'},
  leaf: {color:0xffffff, roughness:.85, metalness:0, tileMetres:.20, mapped:true, substrate:'leaf'},
  fabric: {color:0xffffff, roughness:.94, metalness:0, sheen:.7, sheenRoughness:.65, tileMetres:.20, mapped:true, substrate:'woven fabric'},
  wood: {color:0xffffff, roughness:.46, metalness:0, clearcoat:.18, clearcoatRoughness:.28, tileMetres:.50, mapped:true, substrate:'wood'},
  stitch: {color:0xcbb58c, roughness:.9, metalness:0, substrate:'thread'},
  leather: {color:0x153f32, roughness:.67, metalness:0, substrate:'constant untextured leather control'},
  brass: {color:0xb89e56, roughness:.3, metalness:1, substrate:'brass'},
  dark: {color:0x161716, roughness:.65, metalness:0, substrate:'painted plinth'},
};

export const FINISHES = {
  matte: {paint:{roughness:.88,clearcoat:0}, wood:{roughness:.92,clearcoat:0}},
  satin: {paint:{roughness:.34,clearcoat:.8,clearcoatRoughness:.12}, wood:{roughness:.46,clearcoat:.18,clearcoatRoughness:.28}},
  glossy: {paint:{roughness:.19,clearcoat:1,clearcoatRoughness:.045}, wood:{roughness:.23,clearcoat:1,clearcoatRoughness:.07}},
};
export const CONDITIONS = ['clean','worn','graphic'];
export const TEXTURE_TIERS = ['reference','avif90','avif80','uastc1024','uastc512'];

export function validateDescriptor({baseId,finishId,conditionId,physicalScale}) {
  if (!BASES[baseId]) throw Error(`Unknown base material: ${baseId}`);
  if (!FINISHES[finishId]) throw Error(`Unknown finish: ${finishId}`);
  if (!CONDITIONS.includes(conditionId)) throw Error(`Unknown condition: ${conditionId}`);
  if (!(physicalScale>0) || !Number.isFinite(physicalScale)) throw Error('Physical scale must be positive finite metres');
  return {baseId,finishId,conditionId,physicalScale,
    finishApplied:!!FINISHES[finishId][baseId],
    fallback:FINISHES[finishId][baseId]?null:'Coating preset inapplicable; retain the base material response',
    conditionApplied:conditionId==='clean'||['paint','wood','fabric','bark','leaf'].includes(baseId),
    conditionFallback:conditionId!=='clean'&&!['paint','wood','fabric','bark','leaf'].includes(baseId)?'No authored condition for this base; retain its response':null,
    metalness:BASES[baseId].metalness};
}

function conditionShader(material,role,condition) {
  if(condition==='clean' || !['paint','wood','fabric','bark','leaf'].includes(role))return;
  material.onBeforeCompile = shader => {
    shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vStudyLocal; varying vec3 vStudyNormal;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvStudyLocal = position; vStudyNormal = normal;');
    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vStudyLocal; varying vec3 vStudyNormal;');
    const placement = role==='fabric' ? 'smoothstep(.38,.48,vStudyLocal.y)*(1.-smoothstep(.54,.64,vStudyLocal.y))' :
      role==='paint' ? 'smoothstep(.60,.9,abs(vStudyLocal.x)) + .25*max(0.,vStudyNormal.y)' :
      role==='bark' ? '(.3+.7*max(0.,vStudyNormal.x))*(1.-smoothstep(1.,3.,vStudyLocal.y))' :
      role==='leaf' ? '.65' : '.8*exp(-pow((vStudyLocal.y-.68)*9.,2.))+.2*exp(-pow((vStudyLocal.y-.08)*14.,2.))';
    const field = `float studyField = .5+.22*sin(vStudyLocal.x*13.1+vStudyLocal.z*5.7)*sin(vStudyLocal.z*15.3+vStudyLocal.y*4.7)+.18*sin(vStudyLocal.x*37.9+sin(vStudyLocal.z*17.2)+vStudyLocal.y*9.);
      float studyWear = clamp((${placement})*smoothstep(.68,.88,studyField),0.,1.);`;
    const color = condition==='graphic' ?
      'float studyStripe=step(.55,fract((vStudyLocal.x+vStudyLocal.z)*9.)); diffuseColor.rgb=mix(diffuseColor.rgb, mix(vec3(.025,.20,.18),vec3(.75,.53,.15),studyStripe),.6);' :
      'diffuseColor.rgb=mix(diffuseColor.rgb, diffuseColor.rgb*.83+vec3(.065,.05,.03),studyWear*.65);';
    shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>\n${field}\n${color}`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor+studyWear*.22,0.04,1.);');
  };
  material.customProgramCacheKey = () => `study-condition-1:${role}:${condition}`;
}

export class TrialResources {
  constructor(renderer,gpu,manifest) {
    this.renderer=renderer; this.manifest=manifest; this.disposed=false;
    this.cache=new Map(); this.textures=new Set(); this.materials=new Set(); this.groups=new Set(); this.assets=new Map();
    this.ktx=new KTX2Loader().setTranscoderPath('assets/basis/').setWorkerLimit(2).detectSupport(renderer);
    this.policy='Three.js capability-selected compressed format';
    if(/AMD|Radeon/i.test(gpu)&&this.ktx.workerConfig.bptcSupported) {
      this.ktx.workerConfig.astcSupported=false; this.policy='BC7 on the previously tested AMD desktop path';
    }
  }
  async texture(desc,channel,role) {
    if(this.disposed)throw new DOMException('Obsolete preparation','AbortError');
    const key=desc.url;
    if(!this.cache.has(key)) {
      const pending=(async()=>{
        const texture=desc.url.endsWith('.ktx2') ? await this.ktx.loadAsync(desc.url) : await new THREE.TextureLoader().loadAsync(desc.url);
        if(this.disposed){texture.dispose();throw new DOMException('Obsolete preparation','AbortError');}
        texture.colorSpace=channel==='color'?THREE.SRGBColorSpace:THREE.NoColorSpace;
        texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
        texture.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());
        const repeat=role==='leaf'?1:1/BASES[role].tileMetres;
        texture.repeat.set(repeat,repeat);
        this.textures.add(texture); this.assets.set(desc.url,desc);
        return texture;
      })();
      this.cache.set(key,pending);
    }
    return this.cache.get(key);
  }
  async materialSet(roles,tier,finish='satin',condition='clean',features={}) {
    if(!TEXTURE_TIERS.includes(tier))throw Error(`Unknown delivery tier ${tier}`);
    const materials={};
    // Wait for all role jobs so an error does not leave successful allocations unowned.
    const jobs=await Promise.allSettled(roles.map(async role=>{
      const spec=BASES[role];
      if(!spec)throw Error(`Missing base ${role}`);
      const {tileMetres,mapped,substrate,...base}=spec;
      const descriptor=validateDescriptor({baseId:role,finishId:finish,conditionId:condition,physicalScale:tileMetres||1});
      const maps={};
      if(mapped) {
        const channels=this.manifest.roles[role].tiers[tier].channels;
        const results=await Promise.allSettled(Object.entries(channels).map(async([channel,desc])=>[channel,await this.texture(desc,channel,role)]));
        const failed=results.find(r=>r.status==='rejected');
        if(failed)throw failed.reason;
        for(const {value:[channel,t]} of results)maps[channel==='color'?'map':`${channel}Map`]=t;
      }
      if(this.disposed)throw new DOMException('Obsolete preparation','AbortError');
      const m=new THREE.MeshPhysicalMaterial({...base,...FINISHES[finish][role],...maps});
      m.name=`${role}:${tier}:${finish}:${condition}`;
      m.userData={...descriptor,tier,substrate,source:spec.mapped?this.manifest.provenance:'Scalar authored control'};
      if(role==='leaf'){m.side=THREE.DoubleSide;m.alphaTest=.48;m.alphaToCoverage=true;}
      if(role==='fabric')m.sheenColor=new THREE.Color(0xe2c99e);
      if(role==='glass'&&features.glass){m.color.set(0xe5f0ee);m.transmission=.92;m.thickness=.035;m.ior=1.5;}
      conditionShader(m,role,condition); this.materials.add(m); materials[role]=m;
    }));
    const failed=jobs.find(r=>r.status==='rejected');
    if(failed)throw failed.reason;
    return materials;
  }
  track(group){this.groups.add(group);return group;}
  dispose(){
    if(this.disposed)return;this.disposed=true;
    for(const g of this.groups)g.traverse(o=>o.geometry?.dispose());
    for(const m of this.materials)m.dispose();
    for(const t of this.textures)t.dispose();
    this.ktx.dispose();this.cache.clear();
  }
}

export function textureMipBytes(t) {
  if(t.isCompressedTexture)return t.mipmaps.reduce((sum,m)=>sum+m.data.byteLength,0);
  let w=t.image?.width||0,h=t.image?.height||0,total=0;
  if(!w||!h)return 0;
  do{total+=w*h*4;if(!t.generateMipmaps)break;w=Math.max(1,Math.floor(w/2));h=Math.max(1,Math.floor(h/2));}while(w>1||h>1);
  if(t.generateMipmaps)total+=4;
  return total;
}

export function groupMetrics(group,materials,resources) {
  const buffers=new Set(),textures=new Set(),urls=new Set();let triangles=0,geometryBytes=0;
  group.traverse(o=>{
    if(!o.geometry)return;
    const g=o.geometry;triangles+=(g.index?g.index.count:g.attributes.position.count)/3;
    for(const a of [...Object.values(g.attributes),...(g.index?[g.index]:[])]) {
      const data=a.isInterleavedBufferAttribute?a.data.array:a.array;
      if(!buffers.has(data)){buffers.add(data);geometryBytes+=data.byteLength;}
    }
  });
  const formats=[];
  for(const [role,m] of Object.entries(materials))for(const [channel,t] of [['color',m.map],['normal',m.normalMap],['roughness',m.roughnessMap]]) {
    if(!t)continue;textures.add(t);
    formats.push({role,channel,format:t.format,type:t.type,width:t.image?.width||t.mipmaps[0]?.width,height:t.image?.height||t.mipmaps[0]?.height,
      colorSpace:t.colorSpace,mipLevels:t.isCompressedTexture?t.mipmaps.length:Math.floor(Math.log2(Math.max(t.image.width,t.image.height)))+1});
    const desc=resources.manifest.roles[role].tiers[m.userData.tier].channels[channel];urls.add(desc.url);
  }
  return {triangles,drawMeshes:group.children.length,geometryBufferBytes:geometryBytes,
    textureMipBytes:[...textures].reduce((n,t)=>n+textureMipBytes(t),0),
    encodedAssetBytes:[...urls].reduce((n,url)=>n+resources.assets.get(url).bytes,0),
    assets:[...urls].map(url=>resources.assets.get(url)),formats,
    materials:Object.fromEntries(Object.entries(materials).map(([role,m])=>[role,m.userData])),
    memoryMeaning:'Buffer and mip payload accounting, not measured driver VRAM; shared dependencies excluded from asset bytes'};
}

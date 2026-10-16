import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

// Original metric study models. Recipes are shared by both geometry tiers.
export const SUBJECT_ROLES = {
  car: ['paint', 'chrome', 'rubber', 'glass', 'light'],
  tree: ['bark', 'leaf'],
  chair: ['fabric', 'wood', 'stitch'],
};
export const SUBJECTS = {
  car: { label: 'Unbranded touring coupe', dimensions: [2.15, 1.42, 4.44], seed: 3081,
    description: 'Section-swept painted coachwork, curved opaque glazing, panel lines, wheels and trim.',
    views: { close: {position: [2.0,1.36,2.65],target:[.56,.82,1.12],fov:35}, medium:{position:[4.9,3.0,6.3],target:[0,.72,0],fov:35}, silhouette:{position:[8.6,1.30,.25],target:[0,.72,0],fov:35} } },
  tree: { label: 'Branched broadleaf tree', dimensions: [3.02,4.4,3.28], seed: 6197,
    description: 'Curving tapered trunk and three branch orders with deterministic clustered leaf cards.',
    views: {close:{position:[1.5,2.6,2.0],target:[.16,2.58,.08],fov:35},medium:{position:[6.8,4.7,7.4],target:[0,2.1,0],fov:35},silhouette:{position:[10.8,2.85,.25],target:[0,2.1,0],fov:35}} },
  chair: { label: 'Upholstered lounge chair',dimensions:[.844,.953,.816],seed:9271,
    description:'Soft shaped cushions, stitched piping, curved timber arms and splayed wooden legs.',
    views:{close:{position:[.86,.87,1.0],target:[.18,.57,.23],fov:35},medium:{position:[1.65,1.25,1.9],target:[0,.46,0],fov:35},silhouette:{position:[2.65,.78,.10],target:[0,.46,0],fov:35}} },
};
for (const [id,s] of Object.entries(SUBJECTS)) s.roles = SUBJECT_ROLES[id];
const V = (x,y,z) => new THREE.Vector3(x,y,z);
function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let n = Math.imul(seed ^ seed >>> 15,1|seed); n ^= n + Math.imul(n ^ n >>> 7,61|n); return ((n ^ n >>> 14) >>> 0)/4294967296; }; }
function finish(g) { g.computeVertexNormals(); if (g.index && g.attributes.uv) g.computeTangents(); return g; }
function surface(nu,nv,point,uv=(u,v)=>[u,v]) {
  const p=[], t=[], ix=[];
  for(let j=0;j<=nv;j++) for(let i=0;i<=nu;i++) {const u=i/nu,v=j/nv,q=point(u,v);p.push(q.x,q.y,q.z);t.push(...uv(u,v));}
  for(let j=0;j<nv;j++)for(let i=0;i<nu;i++){let a=j*(nu+1)+i,b=a+1,c=a+nu+1,d=c+1;ix.push(a,b,c,b,d,c);}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(t,2));g.setIndex(ix);return finish(g);
}
function rounded(w,h,d,r,steps) { const g=new RoundedBoxGeometry(w,h,d,steps,r);const p=g.attributes.position,n=g.attributes.normal,uv=g.attributes.uv;for(let i=0;i<p.count;i++){const a=[Math.abs(n.getX(i)),Math.abs(n.getY(i)),Math.abs(n.getZ(i))];const k=a.indexOf(Math.max(...a));uv.setXY(i,k===0?p.getZ(i):p.getX(i),k===1?p.getZ(i):p.getY(i));}return g; }
function tube(points,r0,r1,segments,radial) {const curve=new THREE.CatmullRomCurve3(points);const frames=curve.computeFrenetFrames(segments,false);let length=curve.getLength();return surface(radial,segments,(u,v)=>{let j=Math.round(v*segments),a=u*Math.PI*2,r=THREE.MathUtils.lerp(r0,r1,v);return curve.getPointAt(v).addScaledVector(frames.normals[j],Math.cos(a)*r).addScaledVector(frames.binormals[j],Math.sin(a)*r);},(u,v)=>[u*2*Math.PI*r0,v*length]);}
function add(group,geometry,material,name,position,rotation) {
  const uv=geometry.attributes.uv,p=geometry.parameters;
  if(uv && p && ['TorusGeometry','CylinderGeometry','BoxGeometry'].includes(geometry.type))for(let i=0;i<uv.count;i++){
    if(geometry.type==='TorusGeometry')uv.setXY(i,uv.getX(i)*2*Math.PI*p.radius,uv.getY(i)*2*Math.PI*p.tube);
    if(geometry.type==='CylinderGeometry')uv.setXY(i,uv.getX(i)*Math.PI*(p.radiusTop+p.radiusBottom),uv.getY(i)*p.height);
    if(geometry.type==='BoxGeometry'){const n=geometry.attributes.normal,q=geometry.attributes.position;uv.setXY(i,Math.abs(n.getX(i))>.5?q.getZ(i):q.getX(i),Math.abs(n.getY(i))>.5?q.getZ(i):q.getY(i));}
  }
  const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.castShadow=true;mesh.receiveShadow=true;if(position)mesh.position.set(...position);if(rotation)mesh.rotation.set(...rotation);group.add(mesh);return mesh; }
function path(group,points,r,material,name,hi) {return add(group,tube(points.map(p=>Array.isArray(p)?V(...p):p),r,r,hi?64:20,hi?8:4),material,name);}
function batch(group,geometries,material,name) {const normalized=geometries.map(g=>{const q=g.index?g.toNonIndexed():g;const a=q.clone();for(const key of Object.keys(a.attributes))if(!['position','normal','uv'].includes(key))a.deleteAttribute(key);return a;});const raw=mergeGeometries(normalized,false),g=mergeVertices(raw,1e-7);raw.dispose();g.computeTangents();for(const q of normalized)q.dispose();for(const q of geometries)q.dispose();return add(group,g,material,name);}

function buildCar(group,m,hi) {
  // Longitudinal control sections describe an original rounded touring body.
  const sections=[[-2.2,.64,.58,.20],[-2.08,.81,.62,.28],[-1.6,.90,.67,.30],[-.9,.91,.68,.31],[0,.915,.69,.31],[1.15,.89,.67,.29],[1.85,.83,.61,.25],[2.13,.71,.58,.20],[2.2,.55,.56,.14]];
  const curve=new THREE.CatmullRomCurve3(sections.map(s=>V(s[1],s[2],s[3])),false,'catmullrom',.3);
  const zCurve=new THREE.CatmullRomCurve3(sections.map(s=>V(s[0],0,0)),false,'catmullrom',.3);
  const body=surface(hi?80:24,hi?64:20,(u,v)=>{let a=u*Math.PI*2,s=curve.getPoint(v),z=zCurve.getPoint(v).x;let x=s.x*Math.sign(Math.cos(a))*Math.pow(Math.abs(Math.cos(a)),.65),y=s.y+Math.sin(a)*s.z;
    // Open the lower side surfaces into genuine wheel arches; the painted shoulder stays continuous.
    const axle=Math.min(Math.abs(z-1.36),Math.abs(z+1.35));if(axle<.43&&Math.abs(x)>.64&&Math.sin(a)<.35){const arch=.355+Math.sqrt(Math.max(0,.43*.43-axle*axle));y=Math.max(y,arch);}
    return V(x,y,z);},(u,v)=>[u*4.4,v*4.4]);add(group,body,m.paint,'paint-coachwork');
  for(const z of [-2.19,2.19])add(group,rounded(1.12,.24,.035,.07,hi?6:2),m.paint,'paint-end-panel',[0,.57,z]);
  // Cabin cross sections form convex glazing and a separate painted roof.
  const cabin=(u,v)=>{const z=THREE.MathUtils.lerp(-1.27,.94,v),bulge=Math.sin(Math.PI*v),w=.64+.11*Math.sin(Math.PI*v),height=.89+.48*Math.pow(Math.max(0,bulge),.55);const a=u*Math.PI;return V(Math.cos(a)*w,.88+Math.sin(a)*(height-.88),z);};
  add(group,surface(hi?48:12,hi?48:12,cabin,(u,v)=>[u*2.1,v*2.21]),m.glass,'glass-curved-cabin');
  add(group,surface(hi?20:6,hi?36:10,(u,v)=>{const q=cabin(.37+u*.26,.17+v*.62);q.y+=.012;return q;},(u,v)=>[u*.65,v*1.4]),m.paint,'paint-roof');
  for(const side of [-1,1]) {
    path(group,[[-.01,.89,-1.29],[side*.66,.89,-1.25],[side*.75,.89,-.35],[side*.69,.89,.95],[0,.89,.96]],.014,m.chrome,'chrome-window-sill',hi);
    for(const v of [.16,.55,.83]) {const ps=[];for(let i=0;i<=20;i++)ps.push(cabin(side<0?i/40:1-i/40,v).add(V(0,.009,0)));path(group,ps,v===.55?.028:.022,m.paint,'paint-window-pillar',hi);}
    path(group,[[side*.905,.76,.63],[side*.922,.58,.59],[side*.914,.43,.44],[side*.91,.40,-.83],[side*.92,.59,-.99],[side*.906,.81,-.98]],.0035,m.rubber,'rubber-door-gap',hi);
    add(group,rounded(.10,.028,.22,.012,hi?4:1),m.chrome,'chrome-door-handle',[side*.926,.80,-.59]);
    path(group,[[side*.70,.98,.64],[side*.95,1.00,.64]],.019,m.paint,'paint-mirror-stalk',hi);
    add(group,rounded(.20,.105,.27,.048,hi?6:2),m.paint,'paint-mirror-shell',[side*.966,1.035,.64]);
    add(group,rounded(.007,.073,.18,.025,hi?4:1),m.glass,'glass-mirror',[side*1.071,1.041,.625]);
    path(group,[[side*.70,.93,1.82],[side*.64,.973,1.18],[side*.59,.975,.93]],.003,m.rubber,'rubber-hood-gap',hi);
    for(const z of [-1.35,1.36]){
      const x=side*.82;
      add(group,new THREE.TorusGeometry(.279,.084,hi?16:6,hi?96:28),m.rubber,'rubber-tire',[x,.363,z],[0,Math.PI/2,0]);
      add(group,new THREE.CylinderGeometry(.235,.235,.12,hi?64:16),m.chrome,'chrome-wheel',[side*.907,.363,z],[0,0,Math.PI/2]);
      add(group,new THREE.CylinderGeometry(.185,.185,.126,hi?48:12),m.rubber,'rubber-wheel-inset',[side*.912,.363,z],[0,0,Math.PI/2]);
      add(group,new THREE.CylinderGeometry(.061,.061,.138,hi?32:10),m.chrome,'chrome-wheel-hub',[side*.921,.363,z],[0,0,Math.PI/2]);
      for(let k=0;k<10;k++){const a=k*Math.PI/5;add(group,rounded(.018,.16,.028,.008,hi?3:1),m.chrome,'chrome-wheel-spoke',[side*.982,.363+Math.sin(a)*.13,z+Math.cos(a)*.13],[a-Math.PI/2,0,0]);}
      for(let k=0;k<40;k++){const a=k*Math.PI/20;const geom=new THREE.BoxGeometry(.105,.003,.027);const mesh=add(group,geom,m.rubber,'rubber-tire-tread',[x,.363+Math.cos(a)*.363,z+Math.sin(a)*.363],[a,0,.18]);mesh.rotateX(0);}
    }
    for(const front of [-1,1])add(group,rounded(.39,.105,.075,.045,hi?6:2),m.light,front>0?'light-headlamp':'light-taillamp',[side*.53,.70,front*2.12]);
  }
  add(group,rounded(1.0,.13,.055,.055,hi?6:2),m.rubber,'rubber-front-grille',[0,.48,2.19]);
  for(let i=-4;i<=4;i++)add(group,rounded(.007,.085,.012,.003,hi?3:1),m.chrome,'chrome-grille-slat',[i*.10,.48,2.224]);
  for(const z of [-2.17,2.17])path(group,[[-.65,.40,z],[0,.38,z+.015],[.65,.40,z]],.016,m.chrome,'chrome-bumper-edge',hi);
}

function buildTree(group,m,hi) {
  const random=rng(SUBJECTS.tree.seed),wood=[],leaves=[];
  const trunk=[V(0,0,0),V(-.07,.8,.025),V(.06,1.65,-.02),V(-.035,2.48,.08),V(.05,3.23,.02),V(.02,3.94,0)];
  wood.push(tube(trunk,.17,.012,hi?64:16,hi?16:6));
  // Root flares make trunk contact physically readable.
  for(let j=0;j<7;j++){let a=j*2*Math.PI/7;wood.push(tube([V(Math.cos(a)*.43,.015,Math.sin(a)*.43),V(Math.cos(a)*.22,.09,Math.sin(a)*.22),V(0,.42,0)],.025,.075,hi?14:5,hi?8:4));}
  function leaf(center,direction,size,phase){const bend=.035;const g=surface(hi?4:1,hi?6:1,(u,v)=>V((u-.5)*size*.56,Math.sin(v*Math.PI)*bend, (v-.5)*size),(u,v)=>[u,v]);const q=new THREE.Quaternion().setFromUnitVectors(V(0,0,1),direction.clone().normalize());const mat=new THREE.Matrix4().compose(center,q,new THREE.Vector3(1,1,1));g.applyMatrix4(mat);g.rotateY(0);leaves.push(g);}
  for(let b=0;b<17;b++){
    const a=b*2.39996323+random()*.28, h=1.34+b*.128, reach=(1-Math.pow((h-2.5)/2,2))*(.99+random()*.33),base=V(Math.sin(h*2)*.05,h,0);
    const end=V(Math.cos(a)*reach,h+.49+random()*.22,Math.sin(a)*reach);
    wood.push(tube([base,base.clone().lerp(end,.40).add(V(0,-.10,0)),end],.055*(1-(h-1.3)*.2),.008,hi?24:7,hi?10:5));
    for(let t=0;t<6;t++){
      const f=.36+t*.115,origin=base.clone().lerp(end,f),ta=a+(t%2?1:-1)*(.46+random()*.55),len=.29+random()*.28;
      const tip=origin.clone().add(V(Math.cos(ta)*len,.22+random()*.25,Math.sin(ta)*len));
      wood.push(tube([origin,origin.clone().lerp(tip,.5).add(V(0,.035,0)),tip],.012,.0025,hi?12:4,hi?7:3));
      for(let k=0;k<10;k++){
        const s=.2+random()*.9,p=origin.clone().lerp(tip,Math.min(s,1));const az=random()*Math.PI*2,rad=.05+random()*.16;
        p.add(V(Math.cos(az)*rad,(random()-.3)*.18,Math.sin(az)*rad));
        const dir=V(Math.cos(az),.35+random()*.8,Math.sin(az));leaf(p,dir,.15+random()*.085,random());
      }
    }
  }
  batch(group,wood,m.bark,'bark-trunk-branches-twigs');batch(group,leaves,m.leaf,'leaf-cluster-cards');
  group.userData.leafCount=leaves.length;group.userData.branchCount=wood.length;group.userData.leafUv='individual normalized alpha silhouette; leaf length 0.15–0.235 m';
}

function buildChair(group,m,hi){
  const steps=hi?7:2;
  add(group,rounded(.76,.16,.76,.075,steps),m.fabric,'fabric-seat-cushion',[0,.45,.045]);
  const back=add(group,rounded(.73,.50,.16,.085,steps),m.fabric,'fabric-back-cushion',[0,.712,-.285],[-.15,0,0]);
  add(group,rounded(.73,.09,.65,.035,steps),m.wood,'wood-seat-frame',[0,.337,.02]);
  for(const side of [-1,1]){
    for(const front of [-1,1]){
      const p0=V(side*.365,.015,front*.355),p1=V(side*.315,.345,front*.285);add(group,tube([p0,p0.clone().lerp(p1,.5),p1],.027,.038,hi?16:4,hi?12:5),m.wood,'wood-splayed-leg');
    }
    path(group,[[side*.367,.36,.255],[side*.375,.54,.20],[side*.375,.65,.11]],.026,m.wood,'wood-arm-front-support',hi);
    path(group,[[side*.375,.38,-.28],[side*.375,.67,-.30]],.026,m.wood,'wood-arm-rear-support',hi);
    path(group,[[side*.376,.64,.33],[side*.385,.665,.18],[side*.385,.68,-.12],[side*.375,.67,-.34]],.035,m.wood,'wood-curved-arm',hi);
  }
  // Rounded rectangles trace cushion edges, independently of tessellation tier.
  function outline(w,d,r,y,z=0){let p=[];for(let c=0;c<4;c++){const angle=-Math.PI/2+c*Math.PI/2,cx=(c===0||c===1?1:-1)*(w/2-r),cz=(c===1||c===2?1:-1)*(d/2-r);for(let j=0;j<=10;j++){let a=angle+j*Math.PI/20;p.push(V(cx+Math.cos(a)*r,y,cz+Math.sin(a)*r+z));}}p.push(p[0].clone());return p;}
  const seat=outline(.745,.745,.09,.473,.045);path(group,seat,.0038,m.stitch,'stitch-seat-piping',hi);
  // Back cushion piping is authored in local coordinates, then follows the back rake.
  const backLine=outline(.706,.465,.08,0).map(p=>V(p.x,p.z,.075).applyEuler(back.rotation).add(back.position));path(group,backLine,.0038,m.stitch,'stitch-back-piping',hi);
  const stitchGeometries=[];
  for(const points of [seat,backLine]){
    const c=new THREE.CatmullRomCurve3(points,true,'centripetal');let n=Math.floor(c.getLength()/.014);
    for(let i=0;i<n;i++){const p=c.getPointAt(i/n),p2=c.getPointAt(Math.min(1,i/n+.006/c.getLength()));stitchGeometries.push(tube([p,p2],.00085,.00085,1,hi?5:3));}
  }
  batch(group,stitchGeometries,m.stitch,'stitch-individual-thread-dashes');
  for(const x of [-.18,.18])path(group,[[x,.535,.28],[x,.538,.04],[x,.534,-.16]],.0013,m.stitch,'stitch-seat-tailoring',hi);
}

export function createSubject(id,materials,geometryTier='master') {
  if(!SUBJECTS[id])throw new Error(`Unknown study subject: ${id}`);
  if(!['master','reduced'].includes(geometryTier))throw new Error(`Unknown geometry tier: ${geometryTier}`);
  for(const role of SUBJECT_ROLES[id])if(!materials[role])throw new Error(`Missing ${id} material role: ${role}`);
  const group=new THREE.Group();group.name=`${id}-${geometryTier}`;group.userData={subjectId:id,geometryTier,seed:SUBJECTS[id].seed,authorship:'Original procedural study geometry',uvUnits:'metres; leaf cards normalized'};
  ({car:buildCar,tree:buildTree,chair:buildChair})[id](group,materials,geometryTier==='master');
  // Consolidate identical material roles to bound draw calls while retaining the role in mesh names.
  if(id==='car'||id==='chair')for(const role of SUBJECT_ROLES[id]){const meshes=group.children.filter(x=>x.isMesh&&x.name.startsWith(`${role}-`));if(meshes.length<2)continue;const geometry=meshes.map(mesh=>{mesh.updateMatrix();return mesh.geometry.clone().applyMatrix4(mesh.matrix);});const assembled=batch(group,geometry,materials[role],`${role}-assembled-details`);assembled.userData.parts=meshes.map(mesh=>mesh.name);for(const mesh of meshes){group.remove(mesh);mesh.geometry.dispose();}}
  // Fixed recipe offsets establish ground contact identically across geometry tiers.
  const groundOffset={car:.011,tree:.016,chair:-.008}[id];
  for(const mesh of group.children)mesh.geometry.translate(0,groundOffset,0);
  group.userData.groundOffset=groundOffset;
  group.updateMatrixWorld(true);return group;
}

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
function tube(points,r0,r1,segments,radial,capped=false) {
  const curve=new THREE.CatmullRomCurve3(points);
  if(capped)return curveTube(curve,r0,r1,segments,radial);
  // The tree recipe retains its original open, intersecting branch construction.
  const frames=curve.computeFrenetFrames(segments,false),length=curve.getLength();
  return surface(radial,segments,(u,v)=>{let j=Math.round(v*segments),a=u*Math.PI*2,r=THREE.MathUtils.lerp(r0,r1,v);return curve.getPointAt(v).addScaledVector(frames.normals[j],Math.cos(a)*r).addScaledVector(frames.binormals[j],Math.sin(a)*r);},(u,v)=>[u*2*Math.PI*r0,v*length]);
}
function curveFrom(point) {
  const curve=new THREE.Curve();curve.arcLengthDivisions=512;
  curve.getPoint=(t,target=V(0,0,0))=>target.copy(point(t));return curve;
}
function curveTube(curve,r0,r1,segments,radial,closed=false) {
  const frames=curve.computeFrenetFrames(segments,closed),length=curve.getLength(),p=[],n=[],uv=[],ix=[];
  for(let j=0;j<=segments;j++){
    const t=j/segments,c=curve.getPointAt(t),r=THREE.MathUtils.lerp(r0,r1,t);
    for(let i=0;i<=radial;i++){
      const a=i/radial*Math.PI*2,q=frames.normals[j].clone().multiplyScalar(Math.cos(a)).addScaledVector(frames.binormals[j],Math.sin(a));
      p.push(...c.clone().addScaledVector(q,r).toArray());
      n.push(...q.addScaledVector(frames.tangents[j],-(r1-r0)/length).normalize().toArray());uv.push(i/radial*2*Math.PI*r0,t*length);
    }
  }
  for(let j=0;j<segments;j++)for(let i=0;i<radial;i++){const a=j*(radial+1)+i,b=a+1,c=a+radial+1,d=c+1;ix.push(a,b,c,b,d,c);}
  // Separate cap vertices preserve flat end-grain normals instead of rounding them into the sides.
  if(!closed)for(const end of [0,segments]){
    const c=curve.getPointAt(end/segments),r=end?r1:r0,normal=frames.tangents[end].clone().multiplyScalar(end?1:-1),center=p.length/3;
    p.push(...c.toArray());n.push(...normal.toArray());uv.push(0,0);
    for(let i=0;i<=radial;i++){
      const a=i/radial*Math.PI*2,x=Math.cos(a)*r,y=Math.sin(a)*r;
      p.push(...c.clone().addScaledVector(frames.normals[end],x).addScaledVector(frames.binormals[end],y).toArray());n.push(...normal.toArray());uv.push(x,y);
    }
    for(let i=0;i<radial;i++)end?ix.push(center,center+i+1,center+i+2):ix.push(center,center+i+2,center+i+1);
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(n,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(ix);g.computeTangents();return g;
}
function surfaceNormal(point,u,v) {
  const e=.0001,du=point(Math.min(1,u+e),v).sub(point(Math.max(0,u-e),v)),dv=point(u,Math.min(1,v+e)).sub(point(u,Math.max(0,v-e)));
  return du.cross(dv).normalize();
}
function gridPoint(geometry,nu,nv,u,v,offset=0) {
  // Barycentric attachment to the rendered triangle, including the independently tessellated reduced body.
  const x=THREE.MathUtils.clamp(u,0,1)*nu,y=THREE.MathUtils.clamp(v,0,1)*nv,i=Math.min(nu-1,Math.floor(x)),j=Math.min(nv-1,Math.floor(y)),a=j*(nu+1)+i,fx=x-i,fy=y-j;
  const ids=fx+fy<=1?[a,a+1,a+nu+1]:[a+1,a+nu+2,a+nu+1],weights=fx+fy<=1?[1-fx-fy,fx,fy]:[1-fy,fx+fy-1,1-fx],point=V(0,0,0),normal=V(0,0,0);
  for(let k=0;k<3;k++){point.addScaledVector(V(0,0,0).fromBufferAttribute(geometry.attributes.position,ids[k]),weights[k]);normal.addScaledVector(V(0,0,0).fromBufferAttribute(geometry.attributes.normal,ids[k]),weights[k]);}
  normal.normalize();return {point:point.addScaledVector(normal,offset),normal};
}
function add(group,geometry,material,name,position,rotation) {
  const uv=geometry.attributes.uv,p=geometry.parameters;
  if(uv && p && ['TorusGeometry','CylinderGeometry','BoxGeometry'].includes(geometry.type))for(let i=0;i<uv.count;i++){
    if(geometry.type==='TorusGeometry')uv.setXY(i,uv.getX(i)*2*Math.PI*p.radius,uv.getY(i)*2*Math.PI*p.tube);
    if(geometry.type==='CylinderGeometry')uv.setXY(i,uv.getX(i)*Math.PI*(p.radiusTop+p.radiusBottom),uv.getY(i)*p.height);
    if(geometry.type==='BoxGeometry'){const n=geometry.attributes.normal,q=geometry.attributes.position;uv.setXY(i,Math.abs(n.getX(i))>.5?q.getZ(i):q.getX(i),Math.abs(n.getY(i))>.5?q.getZ(i):q.getY(i));}
  }
  const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.castShadow=true;mesh.receiveShadow=true;if(position)mesh.position.set(...position);if(rotation)mesh.rotation.set(...rotation);group.add(mesh);return mesh; }
function curvePath(group,curve,r,material,name,hi,closed=false) {return add(group,curveTube(curve,r,r,hi?96:32,hi?8:4,closed),material,name);}
function path(group,points,r,material,name,hi) {return curvePath(group,new THREE.CatmullRomCurve3(points.map(p=>Array.isArray(p)?V(...p):p)),r,material,name,hi);}
function batch(group,geometries,material,name) {const normalized=geometries.map(g=>{const q=g.index?g.toNonIndexed():g;const a=q.clone();for(const key of Object.keys(a.attributes))if(!['position','normal','uv'].includes(key))a.deleteAttribute(key);return a;});const raw=mergeGeometries(normalized,false),g=mergeVertices(raw,1e-7);raw.dispose();g.computeTangents();for(const q of normalized)q.dispose();for(const q of geometries)q.dispose();return add(group,g,material,name);}

function buildCar(group,m,hi) {
  // Longitudinal control sections describe an original rounded touring body.
  const sections=[[-2.2,.64,.58,.20],[-2.08,.81,.62,.28],[-1.6,.90,.67,.30],[-.9,.91,.68,.31],[0,.915,.69,.31],[1.15,.89,.67,.29],[1.85,.83,.61,.25],[2.13,.71,.58,.20],[2.2,.55,.56,.14]];
  const curve=new THREE.CatmullRomCurve3(sections.map(s=>V(s[1],s[2],s[3])),false,'catmullrom',.3);
  const zCurve=new THREE.CatmullRomCurve3(sections.map(s=>V(s[0],0,0)),false,'catmullrom',.3);
  function sectionV(z){let lo=0,high=1;for(let k=0;k<30;k++){const mid=(lo+high)/2;if(zCurve.getPoint(mid).x<z)lo=mid;else high=mid;}return (lo+high)/2;}
  function upperBody(x,z){const s=curve.getPoint(sectionV(z));return s.y+s.z*Math.sqrt(Math.max(0,1-Math.pow(Math.abs(x)/s.x,2/.65)));}
  function archAngle(v){
    const z=zCurve.getPoint(v).x,s=curve.getPoint(v),distance=Math.min(Math.abs(z-1.36),Math.abs(z+1.35));
    if(distance>=.43)return -Math.PI/2;
    const edge=.363+Math.sqrt(.43*.43-distance*distance);
    return Math.asin(THREE.MathUtils.clamp((edge-s.y)/s.z,-1,1));
  }
  // Cut the angular domain at the wheel opening. Retained points stay on the original
  // smooth sweep; no theta ring is flattened onto the arch or folded back under it.
  const bodyU=hi?80:32,regularRows=hi?64:28,archSegments=hi?24:8,rows=[];
  for(let j=0;j<=regularRows;j++)rows.push(j/regularRows);
  for(const axle of [-1.35,1.36])for(let j=0;j<=archSegments;j++)rows.push(sectionV(axle+.43*Math.cos(j/archSegments*Math.PI)));
  const bodyRows=rows.sort((a,b)=>a-b).filter((v,j,a)=>!j||v-a[j-1]>1e-8),bodyV=bodyRows.length-1;
  function rowSection(t){const q=t*bodyV,j=Math.min(bodyV-1,Math.floor(q));return THREE.MathUtils.lerp(bodyRows[j],bodyRows[j+1],q-j);}
  function rowCoordinate(v){let lo=0,high=bodyV;while(high-lo>1){const j=(lo+high)>>1;if(bodyRows[j]<v)lo=j;else high=j;}return (lo+(v-bodyRows[lo])/(bodyRows[high]-bodyRows[lo]))/bodyV;}
  function bodyAngle(u,v){const a=archAngle(v);return THREE.MathUtils.lerp(a,Math.PI-a,u);}
  const bodyPoint=(u,t)=>{const v=rowSection(t),a=bodyAngle(u,v),s=curve.getPoint(v);return V(s.x*Math.sign(Math.cos(a))*Math.pow(Math.abs(Math.cos(a)),.65),s.y+Math.sin(a)*s.z,zCurve.getPoint(v).x);};
  const body=surface(bodyU,bodyV,bodyPoint,(u,t)=>{const v=rowSection(t);return [bodyAngle(u,v)/(Math.PI*2)*4.4,v*4.4];});
  // The implicit superellipse gradient gives the uncut coachwork normal even at the
  // opening boundary. Boundary triangles cannot pull a highlight into the wheel well.
  for(let j=0;j<=bodyV;j++){
    const v=bodyRows[j],s=curve.getPoint(v),lo=Math.max(0,v-.0001),high=Math.min(1,v+.0001),derivative=curve.getPoint(high).sub(curve.getPoint(lo)).divideScalar(zCurve.getPoint(high).x-zCurve.getPoint(lo).x),power=2/.65;
    for(let i=0;i<=bodyU;i++){
      const a=bodyAngle(i/bodyU,v),cx=Math.sign(Math.cos(a))*Math.pow(Math.abs(Math.cos(a)),.65),sy=Math.sin(a),f=Math.pow(Math.abs(cx),power);
      const n=V(power/s.x*Math.sign(cx)*Math.pow(Math.abs(cx),power-1),2*sy/s.z,-power*f*derivative.x/s.x-2*sy*derivative.y/s.z-2*sy*sy*derivative.z/s.z).normalize();body.attributes.normal.setXYZ(j*(bodyU+1)+i,n.x,n.y,n.z);
    }
  }
  body.computeTangents();add(group,body,m.paint,'paint-coachwork');
  function bodyGrid(a,v,offset){const edge=archAngle(v);return gridPoint(body,bodyU,bodyV,(a-edge)/(Math.PI-2*edge),rowCoordinate(v),offset);}
  function bodySide(side,y,z,offset=.0004){const v=sectionV(z),s=curve.getPoint(v),angle=Math.asin(THREE.MathUtils.clamp((y-s.y)/s.z,-.999,.999));return bodyGrid(side>0?angle:Math.PI-angle,v,offset);}
  function bodyTop(x,z,offset=.0003){const v=sectionV(z),s=curve.getPoint(v),a=Math.acos(Math.sign(x)*Math.pow(Math.min(1,Math.abs(x)/s.x),1/.65));return bodyGrid(a,v,offset).point;}
  for(const z of [-2.19,2.19])add(group,rounded(1.12,.24,.035,.07,hi?6:2),m.paint,'paint-end-panel',[0,.57,z]);
  // One continuous canopy is partitioned into glazing, a broad roof, and adjoining pillars.
  // Shared boundaries and differential normals avoid stacked shells and roof-spanning pillar tubes.
  const cabin=(u,v)=>{
    const z=THREE.MathUtils.lerp(-1.27,.96,v),w=.69+.075*Math.sin(Math.PI*v),a=u*Math.PI,x=Math.cos(a)*w;
    const ramp=v<.27?Math.sin(v/.27*Math.PI/2):v>.73?Math.sin((1-v)/.27*Math.PI/2):1;
    return V(x,upperBody(x,z)+.38*Math.max(0,ramp)*Math.pow(Math.max(0,Math.sin(a)),.45),z);
  };
  const uc=[0,.19,.225,.775,.81,1],vc=[0,.245,.27,.49,.515,.73,.755,1];
  for(let j=0;j<vc.length-1;j++)for(let i=0;i<uc.length-1;i++){
    const u0=uc[i],u1=uc[i+1],v0=vc[j],v1=vc[j+1],roof=i===2&&v0>=.245&&v1<=.755,pillar=i===1||i===3||((i===0||i===4)&&v0===.49);
    const nu=Math.max(2,Math.ceil((u1-u0)*(hi?80:24))),nv=Math.max(2,Math.ceil((v1-v0)*(hi?72:24)));
    const g=surface(nu,nv,(u,v)=>cabin(THREE.MathUtils.lerp(u0,u1,u),THREE.MathUtils.lerp(v0,v1,v)),(u,v)=>[(u0+u*(u1-u0))*2.1,(v0+v*(v1-v0))*2.23]);
    for(let y=0;y<=nv;y++)for(let x=0;x<=nu;x++){const n=surfaceNormal(cabin,THREE.MathUtils.lerp(u0,u1,x/nu),THREE.MathUtils.lerp(v0,v1,y/nv));g.attributes.normal.setXYZ(y*(nu+1)+x,n.x,n.y,n.z);}
    g.computeTangents();add(group,g,roof||pillar?m.paint:m.glass,roof?'paint-roof':pillar?'paint-window-pillar':'glass-curved-cabin');
  }
  for(const v of [0,1])curvePath(group,curveFrom(t=>cabin(t,v).addScaledVector(surfaceNormal(cabin,t,v),.001)),.009,m.chrome,'chrome-window-header',hi);
  for(const side of [-1,1]) {
    const u=side>0?0:1;
    curvePath(group,curveFrom(t=>cabin(u,t).addScaledVector(surfaceNormal(cabin,u,t),.001)),.010,m.chrome,'chrome-window-sill',hi);
    const door=new THREE.CatmullRomCurve3([V(0,.88,.65),V(0,.65,.62),V(0,.47,.45),V(0,.45,-.72),V(0,.61,-.91),V(0,.87,-.97)]);
    curvePath(group,curveFrom(t=>{const q=door.getPoint(t);return bodySide(side,q.y,q.z).point;}),.003,m.rubber,'rubber-door-gap',hi);
    const mount=bodySide(side,.81,-.59,.013),handle=add(group,rounded(.028,.025,.19,.010,hi?4:1),m.chrome,'chrome-door-handle',mount.point.toArray());
    const along=V(0,0,1).addScaledVector(mount.normal,-mount.normal.z).normalize(),up=along.clone().cross(mount.normal).normalize();handle.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(mount.normal,up,along));
    const mirrorRoot=bodySide(side,.91,.72,.004).point;
    path(group,[mirrorRoot,V(side*.95,1.00,.64)],.019,m.paint,'paint-mirror-stalk',hi);
    add(group,rounded(.20,.105,.27,.048,hi?6:2),m.paint,'paint-mirror-shell',[side*.966,1.035,.64]);
    add(group,rounded(.007,.073,.18,.025,hi?4:1),m.glass,'glass-mirror',[side*1.071,1.041,.625]);
    const hood=new THREE.CatmullRomCurve3([V(side*.57,0,1.00),V(side*.61,0,1.45),V(side*.57,0,1.96)]);
    curvePath(group,curveFrom(t=>{const q=hood.getPoint(t);return bodyTop(q.x,q.z);}),.0028,m.rubber,'rubber-hood-gap',hi);
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
  const seat=add(group,rounded(.76,.16,.76,.075,steps),m.fabric,'fabric-seat-cushion',[0,.45,.045]);
  const back=add(group,rounded(.73,.50,.16,.08,steps),m.fabric,'fabric-back-cushion',[0,.712,-.285],[-.15,0,0]);
  add(group,rounded(.73,.09,.65,.035,steps),m.wood,'wood-seat-frame',[0,.337,.02]);
  for(const side of [-1,1]){
    for(const front of [-1,1]){
      const p0=V(side*.365,.015,front*.355),p1=V(side*.315,.345,front*.285);add(group,tube([p0,p0.clone().lerp(p1,.5),p1],.027,.038,hi?16:4,hi?12:5,true),m.wood,'wood-splayed-leg');
    }
    path(group,[[side*.367,.36,.255],[side*.375,.54,.20],[side*.375,.65,.11]],.026,m.wood,'wood-arm-front-support',hi);
    path(group,[[side*.375,.38,-.28],[side*.375,.67,-.30]],.026,m.wood,'wood-arm-rear-support',hi);
    path(group,[[side*.376,.64,.33],[side*.385,.665,.18],[side*.385,.68,-.12],[side*.375,.67,-.34]],.035,m.wood,'wood-curved-arm',hi);
  }
  // The rounded-box surface is the Minkowski sum of its inner box and a sphere.
  // A constant-depth section therefore has an exact rounded-rectangle perimeter.
  function roundedRectangle(t,hx,hy,r){
    const arc=Math.PI*r/2,lx=2*(hx-r),ly=2*(hy-r),lengths=[arc,ly,arc,lx,arc,ly,arc,lx];
    let d=(t%1)*lengths.reduce((a,b)=>a+b,0),part=0;while(part<7&&d>lengths[part])d-=lengths[part++];const f=d/lengths[part];
    if(part%2===0){const corner=part/2,a=Math.PI/2-corner*Math.PI/2-f*Math.PI/2,cx=(corner<2?1:-1)*(hx-r),cy=(corner===0||corner===3?1:-1)*(hy-r);return V(cx+Math.cos(a)*r,cy+Math.sin(a)*r,0);}
    if(part===1)return V(hx,THREE.MathUtils.lerp(hy-r,-hy+r,f),0);
    if(part===3)return V(THREE.MathUtils.lerp(hx-r,-hx+r,f),-hy,0);
    if(part===5)return V(-hx,THREE.MathUtils.lerp(-hy+r,hy-r,f),0);
    return V(THREE.MathUtils.lerp(-hx+r,hx-r,f),hy,0);
  }
  function cushionPoint(p,size,r,mesh,offset){
    const inner=V(...size).multiplyScalar(.5).subScalar(r),base=V(THREE.MathUtils.clamp(p.x,-inner.x,inner.x),THREE.MathUtils.clamp(p.y,-inner.y,inner.y),THREE.MathUtils.clamp(p.z,-inner.z,inner.z));
    return base.addScaledVector(p.clone().sub(base).normalize(),r+offset).applyEuler(mesh.rotation).add(mesh.position);
  }
  function seatCurve(y,offset){const r=.075,section=Math.sqrt(r*r-Math.pow(y-.005,2));return curveFrom(t=>{const p=roundedRectangle(t,.305+section,.305+section,section);return cushionPoint(V(p.x,y,p.y),[.76,.16,.76],r,seat,offset);});}
  function backCurve(z,offset){const r=.08,section=Math.sqrt(r*r-z*z);return curveFrom(t=>{const p=roundedRectangle(t,.285+section,.17+section,section);return cushionPoint(V(p.x,p.y,z),[.73,.50,.16],r,back,offset);});}
  curvePath(group,seatCurve(.026,.00025),.0032,m.stitch,'stitch-seat-piping',hi,true);
  curvePath(group,backCurve(.050,.00025),.0032,m.stitch,'stitch-back-piping',hi,true);
  const stitchGeometries=[];
  for(const c of [seatCurve(.048,.0002),backCurve(.063,.0002)]){
    const length=c.getLength(),n=Math.floor(length/.014);
    for(let i=0;i<n;i++){const p=c.getPointAt(i/n),p2=c.getPointAt(Math.min(1,i/n+.006/length));stitchGeometries.push(tube([p,p2],.00085,.00085,1,hi?5:3,true));}
  }
  batch(group,stitchGeometries,m.stitch,'stitch-individual-thread-dashes');
  for(const x of [-.18,.18])curvePath(group,curveFrom(t=>cushionPoint(V(x,.08,THREE.MathUtils.lerp(.235,-.205,t)),[.76,.16,.76],.075,seat,.00015)),.001,m.stitch,'stitch-seat-tailoring',hi);
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

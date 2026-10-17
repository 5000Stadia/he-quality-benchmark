import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {SUBJECTS,createSubject} from './cases/subjects.js';
import {TrialResources,groupMetrics} from './cases/materials.js';
import {RANDOMIZATION,makeTrials,trialDefinition,randomSource,distribution} from './cases/protocol.js';
import BUILD from './cases/build-info.json';

const $=id=>document.getElementById(id), frame=()=>new Promise(r=>requestAnimationFrame(r));
const clone=value=>JSON.parse(JSON.stringify(value));
const debugEnabled=new URLSearchParams(location.search).get('debug')==='1';
const sessionSeed=crypto.getRandomValues(new Uint32Array(1))[0];
const started=performance.now(),longTasks=[];
const DESK={label:'Desk finish control',seed:0,roles:['wood','leather','brass','dark'],dimensions:[1.56,.78,.70],
  views:{close:{position:[-.85,.85,1.05],target:[-.535,.60,.35],fov:28},medium:{position:[2,1.65,2.9],target:[0,.39,0],fov:35},silhouette:{position:[3.3,.6,.05],target:[0,.39,0],fov:35}}};
const subjects={...SUBJECTS,desk:DESK};
let renderer,gl,scene,camera,controls,environment,root,ktxManifest,keyLight,fillLight,gpuTimer;
let current=null,resources=null,generation=0,queue=makeTrials(sessionSeed),queueIndex=0;
let activeSide='A',status='preparing',timeline=0,lastFrame=0,basePose=null,contextLost=false,measureJob=null;
let visibilityOverride=null,latestShaderError=null,exploring=false;
let lastVisit=null;
try{lastVisit=!!localStorage.getItem('he-study-visited');localStorage.setItem('he-study-visited','1');}catch{}
const result={schema:'he-quality-study/2',version:'2026-10-16-v2',buildId:BUILD.buildId,
  startedUTC:new Date().toISOString(),moduleEvaluationStartMs:started,timingOrigin:'performance.timeOrigin (navigation); durations are labeled separately',sessionSeed,randomization:RANDOMIZATION,
  environment:{userAgent:navigator.userAgent,platform:navigator.platform,three:THREE.REVISION,rendererBackend:'WebGLRenderer',
    devicePixelRatio,firstStudyVisit:lastVisit===null?null:!lastVisit,hardwareConcurrency:navigator.hardwareConcurrency||null,
    deviceMemoryGiB:navigator.deviceMemory||null,network:navigator.connection?{effectiveType:navigator.connection.effectiveType,downlink:navigator.connection.downlink,rtt:navigator.connection.rtt}:null},
  baseline:{benchmarkCommit:'2b0d25db1b9e956a04a634dd595e552d4b9427a1',realPhoneEvidence:'STUDY-IPHONE13-BASELINE.txt',
    note:'The v1 automatic close scene label means overview; this version records actual poses.'},
  votes:[],measurements:[],interruptions:[],skips:[],explorations:[],warnings:[],
  limitations:['Authored diagnostic masters/channels, not scanned material truth or a production engine.',
    'One observer; a tie does not establish population equivalence.',
    'Texture mip and geometry payload bytes are accounting, not driver VRAM.',
    'Shadows and wind are off; glass transmission is a separate informed feature.',
    'CPU timing is render submission; first GPU completion includes upload and compilation.'],
};
try{new PerformanceObserver(list=>longTasks.push(...list.getEntries().map(e=>({start:e.startTime,duration:e.duration})))).observe({type:'longtask',buffered:true});}catch{}

function say(text){$('studyStatus').textContent=text;}
function hidden(){return visibilityOverride===null?document.hidden:visibilityOverride;}
function voteFor(id){return result.votes.find(v=>v.trialId===id);}
function isActive(token){return generation===token&&!contextLost&&!hidden();}
function assertActive(token){if(!isActive(token))throw new DOMException('Comparison interrupted','AbortError');}
function viewport(){return {width:renderer.domElement.width,height:renderer.domElement.height,cssWidth:$('studyViewport').clientWidth,cssHeight:$('studyViewport').clientHeight,dpr:renderer.getPixelRatio()};}
function pose(){return {position:camera.position.toArray(),target:controls.target.toArray(),fov:camera.fov,near:camera.near,far:camera.far};}
function settings(){return {viewId:$('view').value,camera:pose(),output:viewport(),lightSetup:$('lightSetup').value,
  timeline,lightPhase:timeline,motion:$('motion').checked,finish:$('finish').value,condition:$('condition').value,
  shadows:false,wind:false,glassTransmission:$('glass').checked,exposure:renderer.toneMappingExposure,
  alphaTest:.48,alphaToCoverage:true,msaa:gl.getContextAttributes()?.antialias??null};}
function safeCurrent(){return current?{trialId:current.definition.id,subjectId:current.definition.subjectId,
  kind:current.definition.kind,status,side:activeSide,viewId:$('view').value,camera:basePose?pose():null,
  output:renderer?viewport():null}:null;}
function update(){
  result.current=safeCurrent();result.updatedUTC=new Date().toISOString();
  $('studyJson').value=JSON.stringify(result,null,2);
  $('sessionSummary').textContent=`${result.votes.length} saved blind ${result.votes.length===1?'choice':'choices'} · ${result.interruptions.length} interrupted ${result.interruptions.length===1?'trial':'trials'}. Results stay here until you share them.`;
  window.studyResult=clone(result);
  try{localStorage.setItem('he-quality-study-result',JSON.stringify(result));}catch{}
}
function enableUI(){
  const ready=status==='ready'&&!contextLost,hasVote=current&&!!voteFor(current.definition.id);
  window.studyReady=ready;
  for(const id of ['sideA','sideB','runMeasure'])$(id).disabled=!ready;
  for(const id of ['voteA','voteB','voteTie'])$(id).disabled=!ready||hasVote||exploring;
  for(const id of ['view','lightSetup','motion','trialSet'])$(id).disabled=!ready;
  for(const id of ['finish','condition','glass','finishSubject'])$(id).disabled=!ready||!hasVote&&!exploring;
  $('glass').disabled=$('glass').disabled||current?.definition.subjectId!=='car';
  $('nextTrial').disabled=!ready&&!['stopped','invalid'].includes(status);
  $('restartTrial').disabled=contextLost||status==='preparing'||status==='measuring';
  $('stopStudy').disabled=['stopped','invalid'].includes(status);
  $('defectNote').readOnly=hasVote||exploring;
}
function setSide(side){
  if(!current?.groups||contextLost)return;
  activeSide=side;current.groups.A.visible=side==='A';current.groups.B.visible=side==='B';
  for(const s of ['A','B'])$(`side${s}`).setAttribute('aria-pressed',String(s===side));
  applyTimeline(timeline);render();
}
function render(){if(!contextLost&&renderer&&scene&&camera)renderer.render(scene,camera);}
function lightState(){
  const raking=$('lightSetup').value==='raking';
  keyLight.intensity=raking?3.5:3.2;fillLight.intensity=raking?.35:1.1;
  const s=current?Math.max(...subjects[current.definition.subjectId].dimensions):2;
  keyLight.position.set((raking?-1.2:-.8)*s,s*(raking?.6:1.5),s*.8);
}
function applyTimeline(t,forceMotion=false){
  if(!basePose)return;
  const s=Math.max(...subjects[current.definition.subjectId].dimensions),motion=forceMotion||$('motion').checked;
  const pos=new THREE.Vector3(...basePose.position),target=new THREE.Vector3(...basePose.target);
  if(motion){const angle=Math.sin(t*Math.PI/4)*.08;pos.sub(target).applyAxisAngle(new THREE.Vector3(0,1,0),angle).add(target);}
  camera.position.copy(pos);controls.target.copy(target);camera.lookAt(target);
  lightState();if(motion)keyLight.position.x+=Math.sin(t*Math.PI/4)*s*.75;
  camera.updateMatrixWorld();
}
function choosePose(){
  if(!current?.bounds)return;
  const meta=subjects[current.definition.subjectId],view=meta.views[$('view').value];
  basePose=clone(view);camera.fov=view.fov;camera.updateProjectionMatrix();
  const target=new THREE.Vector3(...view.target),direction=new THREE.Vector3(...view.position).sub(target).normalize();
  if($('view').value!=='close'){
    const right=new THREE.Vector3().crossVectors(new THREE.Vector3(0,1,0),direction).normalize(),up=new THREE.Vector3().crossVectors(direction,right).normalize();
    const tanV=Math.tan(THREE.MathUtils.degToRad(view.fov/2)),tanH=tanV*camera.aspect;
    let distance=0;
    for(const x of [current.bounds.min.x,current.bounds.max.x])for(const y of [current.bounds.min.y,current.bounds.max.y])for(const z of [current.bounds.min.z,current.bounds.max.z]){
      const p=new THREE.Vector3(x,y,z).sub(target),depth=p.dot(direction);
      distance=Math.max(distance,depth+Math.abs(p.dot(right))/tanH*1.10,depth+Math.abs(p.dot(up))/tanV*1.10);
    }
    basePose.position=target.clone().addScaledVector(direction,distance).toArray();
  }
  applyTimeline(timeline);render();
}
function resize(){
  if(!renderer||contextLost)return;
  const box=$('studyViewport').getBoundingClientRect(),ratio=Math.min(devicePixelRatio,1.5);
  renderer.setPixelRatio(ratio);renderer.setSize(Math.max(1,box.width),Math.max(1,box.height));
  camera.aspect=box.width/box.height;camera.updateProjectionMatrix();
  if(status==='measuring')stop('Viewport changed during measurement','invalid');
  else if(current?.groups){choosePose();render();update();}
}
async function makeGroup(id,materials,geometryTier,pool){
  if(id!=='desk')return pool.track(createSubject(id,materials,geometryTier));
  const model=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync('assets/desk.glb');
  if(pool.disposed){model.scene.traverse(o=>o.geometry?.dispose());throw new DOMException('Obsolete desk load','AbortError');}
  model.scene.updateMatrixWorld(true);
  const group=pool.track(new THREE.Group());
  model.scene.traverse(o=>{
    if(!o.isMesh)return;const role=Object.keys(materials).find(role=>o.name===role||o.parent?.name===role);
    if(!role)throw Error('Desk control has unknown material role');
    const g=o.geometry.clone();
    // Quantized node coordinates are not metres. Decode before baking transforms,
    // so local wear fields cannot alias over 16-bit coordinate magnitudes.
    for(const key of ['position','normal']){
      const at=g.attributes[key],values=new Float32Array(at.count*3);
      for(let i=0;i<at.count;i++)values.set([at.getX(i),at.getY(i),at.getZ(i)],i*3);
      g.setAttribute(key,new THREE.Float32BufferAttribute(values,3));
    }
    g.applyMatrix4(o.matrixWorld);
    const mesh=new THREE.Mesh(g,materials[role]);mesh.name=role;group.add(mesh);
    o.geometry.dispose();o.material.dispose();
  });
  group.userData={subjectId:'desk',geometryTier:'master',seed:0,provenance:'Preserved meshopt desk geometry, metric transforms baked into float buffers; this study wood and constant leather control'};
  return group;
}
function clearPair(){
  if(current?.groups)for(const group of Object.values(current.groups))root.remove(group);
  resources?.dispose();resources=null;
  if(current)current.groups=null;
}
function resourceTimings(urls){
  return performance.getEntriesByType('resource').filter(r=>urls.has(new URL(r.name).pathname.split('/he-quality-benchmark/').pop())||[...urls].some(url=>new URL(r.name).pathname.endsWith('/'+url)))
    .map(r=>({path:new URL(r.name).pathname.split('/').slice(-4).join('/'),transferSize:r.transferSize,encodedBodySize:r.encodedBodySize,duration:r.duration,
      cacheMeaning:'transferSize zero may indicate cache or unavailable timing, not proof of a particular cache layer'}));
}
async function beginTrial(definition,{keepAppearance=false,informed=false}={}){
  // A revisit must display the assignment attached to its immutable first vote.
  if(voteFor(definition.id))definition={...definition,mapping:clone(voteFor(definition.id).mapping)};
  const token=++generation;measureJob=null;clearPair();status='preparing';exploring=informed;
  if(!keepAppearance){$('finish').value='satin';$('condition').value='clean';$('glass').checked=false;}
  current={definition:clone(definition),groups:null,metrics:{},preparation:{},measurements:[],valid:false};
  $('subjectTitle').textContent=subjects[definition.subjectId].label;
  $('finishSubject').value=definition.subjectId;
  $('defectNote').value=voteFor(definition.id)?.note||'';
  $('revealPanel').hidden=!voteFor(definition.id)&&!informed;
  $('variantCosts').textContent='';activeSide='A';timeline=0;basePose=null;
  enableUI();update();say('Preparing both versions. Voting opens when both are ready.');
  const t=performance.now(),pool=new TrialResources(renderer,result.environment.gpu,ktxManifest);resources=pool;
  latestShaderError=null;
  try{
    const roles=subjects[definition.subjectId].roles;
    const jobs=await Promise.allSettled(['A','B'].map(async side=>{
      const spec=definition.mapping[side];
      const mats=await pool.materialSet(roles,spec.textureTier,$('finish').value,$('condition').value,{glass:$('glass').checked});
      assertActive(token);
      const group=await makeGroup(definition.subjectId,mats,spec.geometryTier,pool);
      assertActive(token);
      return {side,mats,group};
    }));
    const failed=jobs.find(r=>r.status==='rejected');if(failed)throw failed.reason;
    assertActive(token);
    current.groups=Object.fromEntries(jobs.map(({value})=>[value.side,value.group]));
    current.bounds=new THREE.Box3();
    for(const {value:{side,mats,group}} of jobs){
      group.updateMatrixWorld(true);current.bounds.union(new THREE.Box3().setFromObject(group));
      root.add(group);group.visible=false;
      current.metrics[side]=groupMetrics(group,mats,pool);
      current.metrics[side].sourceRecipeBytes=definition.subjectId==='desk'?BUILD.baselineDeskAssetBytes:BUILD.subjectRecipeBytes;
      current.metrics[side].sharedRecipeMeaning=definition.subjectId==='desk'?'Preserved encoded geometry; shared engine excluded':'Shared recipe module contains all three subjects; not standalone render-ready bytes';
    }
    current.preparation.materialAndGeometryReadyMs=performance.now()-t;
    current.preparation.compressedFormatPolicy=pool.policy;
    choosePose();
    for(const side of ['A','B']){
      assertActive(token);while(gl.getError()!==gl.NO_ERROR&&!contextLost){}
      const first=performance.now();setSide(side);gl.finish();
      const error=gl.getError();
      if(error!==gl.NO_ERROR||latestShaderError)throw Error(`Invalid rendered candidate: GL ${error}${latestShaderError?' / '+latestShaderError:''}`);
      current.preparation[side]={firstRenderAndGPUCompletionMs:performance.now()-first};
      await frame();
    }
    assertActive(token);setSide('A');
    current.preparation.pairReadyMs=performance.now()-t;
    current.preparation.cacheState='New pair resource wrappers; HTTP/decoder/shader/OS state may be warm. See resource timings.';
    current.valid=true;status='ready';
    result.firstUsefulSubjectFrameMs??=performance.now();
    result.firstUsefulSubjectAfterModuleMs??=performance.now()-started;
    if(informed)result.explorations.push({trialId:definition.id,subjectId:definition.subjectId,settings:settings(),preparedUTC:new Date().toISOString(),metrics:clone(current.metrics),preparation:clone(current.preparation)});
    enableUI();if(voteFor(definition.id)||informed)reveal();update();
    say(informed?'Finish exploration is ready. Your original blind choices are preserved.':'Both versions are ready. Switch A/B, inspect the views, then choose.');
  }catch(error){
    if(token!==generation)return;
    if(error.name==='AbortError'){stop('Preparation interrupted','stopped');return;}
    result.warnings.push(String(error));stop('Candidate failed validation; no quality vote was recorded. '+error.message,'invalid');
  }
}
function stop(reason='Stopped by the observer',nextStatus='stopped'){
  const interrupted=current&&['preparing','ready','measuring'].includes(status);
  ++generation;measureJob=null;
  if(interrupted)result.interruptions.push({trialId:current.definition.id,subjectId:current.definition.subjectId,
    kind:current.definition.kind,status:nextStatus,reason,phase:status,atUTC:new Date().toISOString(),
    discardedTiming:status==='measuring',settings:basePose?settings():null,qualityVoteRecorded:false});
  clearPair();if(current)current.valid=false;status=nextStatus;enableUI();update();say(reason+(contextLost?' Reload the page to restore graphics.':' Restart the comparison when ready.'));
}
function reveal(){
  if(!current?.valid)return;
  const saved=voteFor(current.definition.id);
  $('revealPanel').hidden=false;
  $('voteSaved').textContent=exploring?'Informed finish exploration. This does not add a blind vote.':saved?.choice==='tie'?'You saw no visible difference.':`You preferred ${saved?.choice}.`;
  const lines=[];
  for(const side of ['A','B']){
    const spec=current.definition.mapping[side],metrics=current.metrics[side];
    lines.push(`${side}: ${spec.textureTier} · ${spec.geometryTier} geometry`,
      `  ${Math.round(metrics.triangles).toLocaleString()} triangles · ${(metrics.geometryBufferBytes/1048576).toFixed(2)} MiB geometry buffers`,
      `  ${(metrics.encodedAssetBytes/1048576).toFixed(2)} MiB encoded surface files · ${(metrics.textureMipBytes/1048576).toFixed(2)} MiB texture mip payload`);
    for(const row of current.measurements.filter(m=>m.side===side))lines.push(`  Frame p50 / p95 / p99: ${row.frameMs.p50.toFixed(1)} / ${row.frameMs.p95.toFixed(1)} / ${row.frameMs.p99.toFixed(1)} ms (${row.sampleCount} frames)`);
  }
  lines.push('AVIF changes color encoding; reference normal/roughness stay lossless. UASTC tiers change all three channels. Mip payload is not measured driver VRAM.');
  $('variantCosts').textContent=lines.join('\n');
}
function castVote(choice){
  if(status!=='ready'||!current?.valid||exploring||voteFor(current.definition.id))return;
  const urls=new Set(Object.values(current.metrics).flatMap(m=>m.assets.map(a=>a.url)));
  const vote={trialId:current.definition.id,subjectId:current.definition.subjectId,kind:current.definition.kind,
    choice,note:$('defectNote').value,blind:true,votedUTC:new Date().toISOString(),mapping:clone(current.definition.mapping),
    settings:settings(),metrics:clone(current.metrics),preparation:clone(current.preparation),resourceTimings:resourceTimings(urls),
    sourceManifestVersion:ktxManifest.version,observerMeaning:'One local browser session, not an independent observer for every trial'};
  result.votes.push(vote);
  for(const row of current.measurements)result.measurements.push({...clone(row),trialId:vote.trialId,phase:'before-first-vote'});
  enableUI();reveal();update();say('Your first blind choice is saved. Costs are revealed; you can inspect further or continue.');
}
async function measureSide(side,token){
  setSide(side);const oldMotion=$('motion').checked;$('motion').checked=true;
  for(let i=0;i<12;i++){assertActive(token);timeline=0;applyTimeline(0);render();await frame();}
  const frameTimes=[],cpu=[],gpu=[],pending=[],t0=performance.now();let previous=await frame(),n=0;
  const startPose=clone(basePose);const output=viewport();
  try{
    while(performance.now()-t0<2000||frameTimes.length<30){
      assertActive(token);const now=await frame();assertActive(token);
      const dt=now-previous;previous=now;
      if(dt>1000)throw Error('A prolonged frame interrupted measurement');
      timeline=(now-t0)/1000;applyTimeline(timeline);
      let query=null;
      if(gpuTimer&&n%8===0&&pending.length<4){query=gl.createQuery();gl.beginQuery(gpuTimer.TIME_ELAPSED_EXT,query);}
      const before=performance.now();render();cpu.push(performance.now()-before);
      if(query){gl.endQuery(gpuTimer.TIME_ELAPSED_EXT);pending.push(query);}
      for(let i=pending.length-1;i>=0;i--){const q=pending[i];if(gl.getQueryParameter(q,gl.QUERY_RESULT_AVAILABLE)){
        if(!gl.getParameter(gpuTimer.GPU_DISJOINT_EXT))gpu.push(gl.getQueryParameter(q,gl.QUERY_RESULT)/1e6);
        gl.deleteQuery(q);pending.splice(i,1);
      }}
      frameTimes.push(dt);n++;
    }
    return {side,sampleCount:frameTimes.length,frameCount:frameTimes.length,frameMs:distribution(frameTimes),
      cpuRenderSubmitMs:distribution(cpu),gpuMs:{...distribution(gpu),sampleCount:gpu.length},
      camera:{...startPose,near:camera.near,far:camera.far},viewId:$('view').value,output,
      lightSetup:$('lightSetup').value,motion:true,trajectory:'Shared 8-second camera orbit and light sweep, each side starts phase 0',
      finish:$('finish').value,condition:$('condition').value,glassTransmission:$('glass').checked,
      draws:renderer.info.render.calls,triangles:renderer.info.render.triangles,
      longTasks:longTasks.filter(e=>e.start>=t0&&e.start<performance.now()),valid:true};
  }finally{
    for(const q of pending)if(!contextLost)gl.deleteQuery(q);
    $('motion').checked=oldMotion;
  }
}
async function runMeasurement(){
  if(status!=='ready'||!current?.valid)return;
  const token=generation,priorSide=activeSide,priorTimeline=timeline;
  status='measuring';measureJob={token};enableUI();say('Measuring A, then B with the same motion. Keep this tab visible.');
  let wake;
  try{
    try{wake=await navigator.wakeLock?.request('screen');}catch{}
    const rows=[];
    for(const side of ['A','B']){assertActive(token);say(`Measuring ${side}…`);rows.push(await measureSide(side,token));}
    assertActive(token);current.measurements.push(...rows);
    if(voteFor(current.definition.id)||exploring)for(const row of rows)result.measurements.push({...clone(row),trialId:current.definition.id,phase:exploring?'informed-exploration':'after-first-vote'});
    status='ready';measureJob=null;timeline=priorTimeline;setSide(priorSide);enableUI();
    if(voteFor(current.definition.id)||exploring)reveal();update();say(voteFor(current.definition.id)||exploring?'Both measurements are saved below.':'Both measurements are ready. Make your quality choice to reveal the costs.');
  }catch(error){if(token===generation)stop('Measurement interrupted: '+error.message,'invalid');}
  finally{await wake?.release().catch(()=>{});}
}
function next(){
  if(current&&status==='ready'&&!voteFor(current.definition.id)&&!exploring)result.skips.push({trialId:current.definition.id,subjectId:current.definition.subjectId,atUTC:new Date().toISOString(),reason:'Observer selected Next without a quality vote'});
  queueIndex=(queueIndex+1)%queue.length;return beginTrial(queue[queueIndex]);
}
async function appearanceChange(){
  if(!current?.valid||!voteFor(current.definition.id)&&!exploring)return;
  const def=clone(current.definition);return beginTrial(def,{keepAppearance:true,informed:true});
}
function file(){return new File([JSON.stringify(result,null,2)],'he-quality-study.json',{type:'application/json'});}
function download(){update();const url=URL.createObjectURL(file()),a=document.createElement('a');a.href=url;a.download='he-quality-study.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}

$('sideA').onclick=()=>{setSide('A');update();};$('sideB').onclick=()=>{setSide('B');update();};
$('voteA').onclick=()=>castVote('A');$('voteB').onclick=()=>castVote('B');$('voteTie').onclick=()=>castVote('tie');
$('nextTrial').onclick=next;$('stopStudy').onclick=()=>stop();
$('restartTrial').onclick=()=>{if(current&&!contextLost)beginTrial(current.definition,{keepAppearance:exploring,informed:exploring});};
$('runMeasure').onclick=runMeasurement;
$('view').onchange=()=>{choosePose();update();};$('lightSetup').onchange=()=>{applyTimeline(timeline);render();update();};
$('motion').onchange=()=>{lastFrame=0;applyTimeline(timeline);render();update();};
$('finish').onchange=appearanceChange;$('condition').onchange=appearanceChange;$('glass').onchange=appearanceChange;
$('finishSubject').onchange=()=>{
  const id=$('finishSubject').value;
  const definition={id:`${id}:explore:control`,subjectId:id,kind:'explore',mapping:{A:{textureTier:'reference',geometryTier:'master'},B:{textureTier:'reference',geometryTier:'master'}}};
  beginTrial(definition,{keepAppearance:true,informed:true});
};
$('trialSet').onchange=()=>{queue=makeTrials(sessionSeed,$('trialSet').value==='full');queueIndex=0;beginTrial(queue[0]);};
$('exportStudy').onclick=download;
$('copyStudy').onclick=async()=>{update();try{await navigator.clipboard.writeText(JSON.stringify(result,null,2));say('Results copied. Paste or attach them in chat.');}
  catch{$('rawDetails').open=true;$('studyJson').select();say('Copy is unavailable. Select the raw results below, or download the file.');}};
$('shareStudy').onclick=async()=>{update();const data=file();try{
  if(navigator.canShare?.({files:[data]}))await navigator.share({files:[data],title:'HE + Photonic quality study'});
  else if(navigator.share)await navigator.share({title:'HE + Photonic quality study',text:JSON.stringify(result,null,2)});
  else download();
}catch(error){if(error.name!=='AbortError'){say('Sharing is unavailable. Download or copy the results.');$('rawDetails').open=true;}}};
document.addEventListener('visibilitychange',()=>{if(hidden()&&['ready','preparing','measuring'].includes(status))stop('Tab became hidden; comparison interrupted','invalid');});
window.addEventListener('resize',resize);

function animate(now){
  requestAnimationFrame(animate);
  if(status==='ready'&&!hidden()&&!contextLost&&current?.valid){
    if($('motion').checked){if(lastFrame)timeline+=(now-lastFrame)/1000;applyTimeline(timeline);render();}
  }
  lastFrame=now;
}

async function init(){
  renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
  $('studyViewport').appendChild(renderer.domElement);gl=renderer.getContext();
  const debug=gl.getExtension('WEBGL_debug_renderer_info');
  result.environment.gpu=debug?gl.getParameter(debug.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER);
  result.environment.glExtensions=gl.getSupportedExtensions();gpuTimer=gl.getExtension('EXT_disjoint_timer_query_webgl2');
  result.environment.asynchronousGPUTime=!!gpuTimer;
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.95;
  renderer.debug.onShaderError=()=>{latestShaderError='Shader compilation or linking failed';};
  renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();contextLost=true;stop('Graphics context lost','invalid');});
  scene=new THREE.Scene();scene.background=new THREE.Color(0x31423f);
  camera=new THREE.PerspectiveCamera(35,1,.01,200);camera.position.set(4,3,6);
  controls=new OrbitControls(camera,renderer.domElement);controls.enabled=false;
  root=new THREE.Group();scene.add(root);
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();environment=pmrem.fromScene(room,.04).texture;
  scene.environment=environment;room.dispose();pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xe1edf1,0x79705d,1.4));
  keyLight=new THREE.DirectionalLight(0xffedd2,3.2);fillLight=new THREE.DirectionalLight(0xc8dfff,1.1);fillLight.position.set(4,4,-3);
  scene.add(keyLight,fillLight);
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(40,40),new THREE.MeshStandardMaterial({color:0x43514c,roughness:1}));
  floor.rotation.x=-Math.PI/2;floor.position.y=-.018;scene.add(floor);
  resize();render();result.firstSceneFrameMs=performance.now();
  ktxManifest=await(await fetch('assets/study/manifest.json')).json();
  result.sourceManifest={version:ktxManifest.version,provenance:ktxManifest.provenance,seed:ktxManifest.seed,nativeSize:ktxManifest.nativeSize};
  requestAnimationFrame(animate);
  if(debugEnabled)window.studyDebug={state:()=>({status,side:activeSide,trialId:current?.definition.id,subjectId:current?.definition.subjectId,
    geometryTiers:current?Object.fromEntries(Object.entries(current.definition.mapping).map(([s,v])=>[s,v.geometryTier])):null,
    textureTiers:current?Object.fromEntries(Object.entries(current.definition.mapping).map(([s,v])=>[s,v.textureTier])):null,
    pose:basePose?pose():null,lightPhase:timeline,timeline,contextLost,valid:!!current?.valid,
    measurements:current?clone(current.measurements):[],metrics:current?.valid?clone(current.metrics):{},preparation:current?clone(current.preparation):{},bounds:current?.bounds?{min:current.bounds.min.toArray(),max:current.bounds.max.toArray()}:null}),
    selectTrial:({subjectId,kind='texture',candidate='uastc1024'})=>beginTrial(trialDefinition(subjectId,kind,candidate,randomSource(sessionSeed+42))),
    abort:reason=>stop(reason),setVisibilityForTest:value=>{visibilityOverride=value;if(value)stop('Tab became hidden; comparison interrupted','invalid');},
    setTimeline:(value,forceMotion=false)=>{timeline=value;applyTimeline(value,forceMotion);render();},result:()=>clone(result)};
  await beginTrial(queue[0]);
}
init().catch(error=>{result.warnings.push(String(error));status='invalid';window.studyReady=false;update();say('Unable to initialize the study: '+error.message);});

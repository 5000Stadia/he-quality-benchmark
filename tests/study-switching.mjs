// Render-output regression: no implementation imports or source inspection.
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || '/home/k/Projects/holo-emitter/node_modules/playwright-core/index.mjs');
const url=process.env.STUDY_URL || 'http://127.0.0.1:8770/quality-lab/phone-site/study.html?debug=1';
const out=process.env.STUDY_SWITCH_OUT || '/tmp/quality-study-switching-local'; await mkdir(out,{recursive:true});
const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH || '/opt/google/chrome/chrome',headless:true,args:['--no-sandbox','--enable-gpu','--use-angle=gl-egl','--ignore-gpu-blocklist']});
let p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true});p.setDefaultTimeout(15000);
const errors=[];p.on('pageerror',e=>errors.push(e.stack));const results=[];const pixelProof=[];
const ready=()=>p.waitForFunction(()=>window.studyReady===true,null,{timeout:90000});
const result=()=>p.evaluate(()=>JSON.parse(JSON.stringify(window.studyResult)));
const pause=async()=>{await p.locator('#motion').uncheck();await p.waitForTimeout(150);};
async function toggleCheck(){if(!await p.locator('#switchCheck').isVisible())await p.locator('#switchCheckDetails > summary').click();await p.locator('#switchCheck').click();}
async function shot(name,side){await p.locator('#side'+side).click();await p.waitForTimeout(200);const path=`${out}/${name}.png`;await p.locator('#studyViewport canvas').screenshot({path});return path;}
function diff(a,c){return JSON.parse(execFileSync('python3',['-c',`from PIL import Image,ImageChops,ImageStat\nimport sys,json\na=Image.open(sys.argv[1]).convert('RGB');b=Image.open(sys.argv[2]).convert('RGB');d=ImageChops.difference(a,b);h=d.histogram();px=d.getdata();print(json.dumps({'meanAbsoluteRGBDelta':sum(ImageStat.Stat(d).mean)/3,'maxChannelDelta':max(i%256 for i,n in enumerate(h) if n),'changedPixels':sum(max(v)>0 for v in px),'pixels':a.width*a.height,'identical':d.getbbox() is None}))`,a,c],{encoding:'utf8'}));}
async function check(name,fn){try{await fn();results.push({name,ok:true});console.log('PASS',name);}catch(e){results.push({name,ok:false,error:e.stack});console.error('FAIL',name,e.message);throw e;}}
function blind(r){assert.doesNotMatch(JSON.stringify(r),/uastc|avif(?:80|90)|textureTiers|geometryTiers|encodedAssetBytes|mapping/i);}
try{
 await p.goto(url);await ready();await pause();
 await check('all subjects render large diagnostic A/B differences and restore both originals exactly',async()=>{
  for(const subjectId of ['chair','car','tree']){
   await p.evaluate(subjectId=>window.studyDebug.selectTrial({subjectId,kind:'texture',candidate:'uastc512'}),subjectId);await ready();await pause();
   await p.locator('#defectNote').fill('Preserve this note');const before=await result();blind(before);
   const originalA=await shot(subjectId+'-original-A','A');const originalB=await shot(subjectId+'-original-B','B');
   await toggleCheck();assert.match(await p.locator('#switchCheck').innerText(),/return/i);
   for(const id of ['voteA','voteB','voteTie','runMeasure','view','motion','lightSetup','finish','condition'])assert.equal(await p.locator('#'+id).isDisabled(),true,id+' disabled during color check');
   const colorA=await shot(subjectId+'-color-A','A');assert.match(await p.locator('#sideStatus').innerText(),/Showing A/i);assert.match(await p.locator('#sideStatus').innerText(),/orange/i);
   const colorB=await shot(subjectId+'-color-B','B');assert.match(await p.locator('#sideStatus').innerText(),/Showing B/i);assert.match(await p.locator('#sideStatus').innerText(),/blue/i);
   const returnA=await shot(subjectId+'-color-A-roundtrip','A');const delta=diff(colorA,colorB);assert.ok(delta.meanAbsoluteRGBDelta>15,`${subjectId}: color sentinel must cause substantial visible difference`);assert.equal(diff(colorA,returnA).identical,true);
   await toggleCheck();assert.doesNotMatch(await p.locator('#sideStatus').innerText(),/orange|blue/i);
   const restoredA=await shot(subjectId+'-restored-A','A');const restoredB=await shot(subjectId+'-restored-B','B');
   const a=diff(originalA,restoredA),c=diff(originalB,restoredB);assert.equal(a.identical,true,subjectId+' A original restored');assert.equal(c.identical,true,subjectId+' B original restored');
   const after=await result();assert.deepEqual(after.votes,before.votes);assert.deepEqual(after.measurements,before.measurements);assert.equal(await p.locator('#defectNote').inputValue(),'Preserve this note');
   assert.ok(after.switchChecks.length>before.switchChecks.length,'separate diagnostic evidence');blind(after);
   pixelProof.push({subjectId,colorAB:delta,colorRoundtripIdentical:true,originalARestored:a.identical,originalBRestored:c.identical});
  }
 });
 await check('diagnostic preserves first blind vote and adds no quality votes or measurements',async()=>{
  await p.locator('#voteTie').click();const before=await result();assert.ok(before.votes.length);
  await toggleCheck();await shot('voted-diagnostic-B','B');await toggleCheck();
  const after=await result();assert.deepEqual(after.votes,before.votes);assert.deepEqual(after.measurements,before.measurements);assert.ok(after.switchChecks.length>before.switchChecks.length);
 });
 await check('Stop/Restart ends diagnostic and next trial inherits original materials',async()=>{
  await toggleCheck();await p.locator('#stopStudy').click();
  assert.match(await p.locator('#switchCheck').innerText(),/start/i);assert.equal(await p.evaluate(()=>window.studyReady),false);
  await p.locator('#restartTrial').click();await ready();await pause();assert.match(await p.locator('#switchCheck').innerText(),/start/i);
  const restored=await shot('restart-normal-A','A');await toggleCheck();const colored=await shot('restart-color-A','A');assert.ok(diff(restored,colored).meanAbsoluteRGBDelta>5,'restart material is not sentinel');
  await p.locator('#restartTrial').click();await ready();await pause();assert.match(await p.locator('#switchCheck').innerText(),/start/i);
  await p.locator('#nextTrial').click();await ready();assert.match(await p.locator('#switchCheck').innerText(),/start/i);
 });
 await check('ordinary non-debug chair deep link auto-enters check without quality vote or blind leakage',async()=>{
  // Fresh-link behavior must use isolated storage: reload intentionally recovers saved choices.
  await p.close();p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true});p.setDefaultTimeout(15000);p.on('pageerror',e=>errors.push(e.stack));
  const deep=new URL(url);deep.search='?subject=chair&switchcheck=1';await p.goto(deep.href);await ready();
  assert.match(await p.locator('#switchCheck').innerText(),/return/i);const r=await result();assert.equal(r.current.subjectId,'chair');assert.equal(r.votes.length,0);assert.equal(r.measurements.length,0);blind(r);
  const a=await shot('deep-chair-A','A'),c=await shot('deep-chair-B','B'),a2=await shot('deep-chair-A-roundtrip','A');const delta=diff(a,c);assert.ok(delta.meanAbsoluteRGBDelta>15);assert.equal(diff(a,a2).identical,true);pixelProof.push({subjectId:'chair-nondebug-deeplink',colorAB:delta,colorRoundtripIdentical:true});
  await toggleCheck();assert.equal(await p.locator('#voteTie').isEnabled(),true);assert.equal((await result()).votes.length,0);
 });
 assert.deepEqual(errors,[]);
}finally{
 const r=await result().catch(()=>({}));await writeFile(`${out}/results.json`,JSON.stringify({testedUTC:new Date().toISOString(),url,buildId:r.buildId,environment:r.environment,results,pixelProof,errors,method:'Canvas PNG RGB differences at paused pose; actual visible A/B controls; mean delta on 0..255 scale. Desktop GPU at mobile viewport, not iPhone Safari.'},null,2));await b.close();
}
console.log(`Evidence: ${out}/results.json`);

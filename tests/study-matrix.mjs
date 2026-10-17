// Controlled desktop evidence. Never invents or counts an automated human vote.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'/home/k/Projects/holo-emitter/node_modules/playwright-core/index.mjs');
const site=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=process.env.STUDY_MATRIX_OUT||path.join(site,'assets/study-evidence');
const baseURL=process.env.STUDY_URL||'http://127.0.0.1:8770/quality-lab/phone-site/study.html?debug=1';
const repetitions=Number(process.env.STUDY_REPETITIONS||3);
fs.mkdirSync(output,{recursive:true});
const record={schema:'he-quality-desktop-matrix/1',startedUTC:new Date().toISOString(),url:baseURL,repetitions,
  humanVotes:0,observer:'Automation; no perceptual preference claims',
  platformMeaning:'Desktop GPU at a mobile viewport; not an iPhone result',
  policy:'Fixed test order per repetition; fresh browser context each repetition; decoder/driver/OS caches may be warm. No network throttle or CPU slowdown.',
  viewport:{width:390,height:844,deviceScaleFactor:3,previewDPRCap:1.5},records:[],errors:[],environments:[],buildIds:[],initialPageTimings:[]};
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||'/opt/google/chrome/chrome',
  args:['--no-sandbox','--enable-gpu','--use-angle=gl-egl','--ignore-gpu-blocklist']});
const save=()=>fs.writeFileSync(path.join(output,'desktop-matrix.json'),JSON.stringify(record,null,2)+'\n');
try{
  for(let rep=0;rep<repetitions;rep++){
    const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true});
    const page=await context.newPage();
    page.on('pageerror',e=>record.errors.push({rep,error:e.stack}));
    page.on('response',r=>{if(r.status()>=400)record.errors.push({rep,status:r.status(),url:r.url()});});
    await page.goto(baseURL,{waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>window.studyReady,null,{timeout:90000});
    record.environments.push(await page.evaluate(()=>window.studyResult.environment));
    record.buildIds.push(await page.evaluate(()=>window.studyResult.buildId));
    record.initialPageTimings.push(await page.evaluate(()=>({moduleEvaluationStartMs:window.studyResult.moduleEvaluationStartMs,firstSceneFrameMs:window.studyResult.firstSceneFrameMs,firstUsefulSubjectFrameMs:window.studyResult.firstUsefulSubjectFrameMs,firstUsefulSubjectAfterModuleMs:window.studyResult.firstUsefulSubjectAfterModuleMs})));
    for(const subjectId of ['car','tree','chair'])for(const candidate of ['uastc1024','uastc512','avif90','avif80','geometry']){
      const kind=candidate==='geometry'?'geometry':'texture';
      await page.evaluate(opts=>window.studyDebug.selectTrial(opts),{subjectId,kind,candidate});
      await page.waitForFunction(()=>window.studyReady,null,{timeout:90000});
      await page.selectOption('#view','close');await page.uncheck('#motion');
      const entry={rep,subjectId,kind,candidate,images:{},views:{}};
      if(rep===0){
        for(const view of (candidate.startsWith('avif')?['close']:['close','medium','silhouette'])){
          await page.selectOption('#view',view);entry.images[view]={};
          for(const side of ['A','B']){
            await page.click('#side'+side);
            const filename=`${subjectId}-${candidate}-${side}-${view}.png`;
            await page.locator('#studyViewport').screenshot({path:path.join(output,filename)});
            entry.images[view][side]=filename;
          }
          entry.views[view]=(await page.evaluate(()=>window.studyDebug.state())).pose;
        }
        if(subjectId==='tree'&&candidate==='uastc512'){
          await page.selectOption('#view','close');await page.uncheck('#motion');entry.motionFrames=[];
          for(const phase of [0,2,4])for(const side of ['A','B']){
            await page.click('#side'+side);await page.evaluate(t=>window.studyDebug.setTimeline(t,true),phase);
            // Force a frozen frame of the same motion phase on both sides.
            const filename=`tree-motion-phase-${phase}-${side}.png`;
            await page.locator('#studyViewport').screenshot({path:path.join(output,filename)});
            entry.images[`motion-${phase}-${side}`]=filename;
            entry.motionFrames.push({phase,side,pose:(await page.evaluate(()=>window.studyDebug.state())).pose});
          }
        }
      }
      await page.selectOption('#view','close');await page.uncheck('#motion');
      await page.click('#runMeasure');
      await page.waitForFunction(()=>window.studyDebug.state().status==='measuring');
      await page.waitForFunction(()=>window.studyDebug.state().status!=='measuring',null,{timeout:90000});
      const state=await page.evaluate(()=>window.studyDebug.state());
      if(!state.valid||state.status!=='ready'||state.measurements.length!==2)throw Error(`Invalid matrix cell ${subjectId}/${candidate}: ${state.status}`);
      Object.assign(entry,state);record.records.push(entry);save();
      console.log(`rep ${rep+1}/${repetitions} ${subjectId} ${candidate}: ${state.measurements.map(m=>m.frameMs.p95.toFixed(1)).join('/')} ms p95`);
    }
    await context.close();
  }
}finally{record.finishedUTC=new Date().toISOString();save();await browser.close();}
if(record.errors.length)throw Error(JSON.stringify(record.errors));
console.log('Controlled matrix saved:',path.join(output,'desktop-matrix.json'));

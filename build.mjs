import {build} from 'esbuild';
import fs from 'node:fs';
import crypto from 'node:crypto';

const inputs=['src/study.js','src/cases/subjects.js','src/cases/materials.js','src/cases/protocol.js','assets/study/manifest.json','study.html'];
const hash=crypto.createHash('sha256');
for(const path of inputs)hash.update(path).update(fs.readFileSync(path));
const info={buildId:hash.digest('hex').slice(0,16),subjectRecipeBytes:fs.statSync('src/cases/subjects.js').size,
  materialRecipeBytes:fs.statSync('src/cases/materials.js').size,baselineDeskAssetBytes:fs.statSync('assets/desk.glb').size};
fs.writeFileSync('src/cases/build-info.json',JSON.stringify(info,null,2)+'\n');
await build({entryPoints:['src/app.js'],bundle:true,format:'esm',minify:true,outfile:'app.js'});
await build({entryPoints:['src/study.js'],bundle:true,format:'esm',minify:true,outfile:'study.js'});
console.log('Study build',info.buildId,'; v1 app and separate study bundles ready.');

export const RANDOMIZATION='mulberry32-v1';
export function randomSource(seed){return()=>{let t=seed+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
export function shuffle(items,rng){const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
export function trialDefinition(subjectId,kind,candidate,rng){
  const reference={textureTier:'reference',geometryTier:'master'};
  const changed=kind==='geometry'?{textureTier:'reference',geometryTier:'reduced'}:{textureTier:candidate,geometryTier:'master'};
  const swap=rng()>.5;
  // Public trial IDs cannot disclose the hidden candidate through raw export.
  const key=`${subjectId}:${kind}:${kind==='geometry'?'reduced':candidate}`;
  let hash=2166136261;for(const char of key){hash^=char.charCodeAt(0);hash=Math.imul(hash,16777619);}
  return {id:`trial-${(hash>>>0).toString(16)}`,subjectId,kind,
    mapping:swap?{A:changed,B:reference}:{A:reference,B:changed}};
}
export function makeTrials(seed,full=false){
  const rng=randomSource(seed),trials=[];
  for(const subject of ['car','tree','chair']) {
    for(const candidate of ['uastc1024','uastc512','avif90','avif80'])trials.push(trialDefinition(subject,'texture',candidate,rng));
    trials.push(trialDefinition(subject,'geometry','reduced',rng));
  }
  return shuffle(trials,rng).filter(t=>full||!Object.values(t.mapping).some(v=>v.textureTier.startsWith('avif')));
}
export function quantile(values,p){if(!values.length)return null;const a=[...values].sort((x,y)=>x-y);return a[Math.floor((a.length-1)*p)];}
export function distribution(values){return {p50:quantile(values,.5),p95:quantile(values,.95),p99:quantile(values,.99),max:values.length?Math.max(...values):null};}

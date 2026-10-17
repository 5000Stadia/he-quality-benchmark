"""Build the provisional report from the controlled matrix, without human votes."""
from pathlib import Path
from datetime import datetime, timezone
import json
import html
import gzip
import hashlib
import statistics as stats
import numpy as np
from PIL import Image, ImageDraw, ImageFont

SITE=Path(__file__).resolve().parents[1]
ROOT=SITE.parent
EVIDENCE=SITE/'assets/study-evidence'
NAMES={'reference':'Lossless authored reference','avif90':'AVIF90 color + lossless data',
       'avif80':'AVIF80 color + lossless data','uastc1024':'UASTC1024 all channels',
       'uastc512':'UASTC512 all channels','reduced':'Reduced geometry + reference maps'}
ORDER=list(NAMES)


def block_ssim(x,y):
    """Reuse the project's 8x8 grayscale block formula; not a realism metric."""
    x=x[:x.shape[0]//8*8,:x.shape[1]//8*8]
    y=y[:x.shape[0],:x.shape[1]]
    def blocks(z):return z.reshape(z.shape[0]//8,8,z.shape[1]//8,8).transpose(0,2,1,3).reshape(-1,64)
    x,y=blocks(x),blocks(y);mx=x.mean(1);my=y.mean(1);vx=x.var(1);vy=y.var(1)
    cov=((x-mx[:,None])*(y-my[:,None])).mean(1)
    return float(np.mean((2*mx*my+.01**2)*(2*cov+.03**2)/((mx*mx+my*my+.01**2)*(vx+vy+.03**2))))


def quality(a,b):
    x=np.asarray(Image.open(EVIDENCE/a).convert('RGB'),float)/255
    y=np.asarray(Image.open(EVIDENCE/b).convert('RGB'),float)/255
    if x.shape!=y.shape:raise ValueError('Mismatched image shapes')
    h,w,_=x.shape;bounds=[int(.1*w),int(.15*h),int(.9*w),int(.85*h)]
    x=x[bounds[1]:bounds[3],bounds[0]:bounds[2]];y=y[bounds[1]:bounds[3],bounds[0]:bounds[2]]
    luma=np.array([.2126,.7152,.0722])
    return {'centralCropPixels':bounds,'block8GrayscaleSSIM':block_ssim(x@luma,y@luma),
            'rgbRMSE':float(np.sqrt(np.mean((x-y)**2))),
            'meaning':'Matched rendered reference fidelity, not realism or a human preference score'}


def main():
    data=json.loads((EVIDENCE/'desktop-matrix.json').read_text())
    assert not data['errors'],data['errors']
    assert len(data['records'])==3*5*data['repetitions']
    rows=[];groups={};pictures={};quality_rows=[]
    for cell in data['records']:
        for side in ('A','B'):
            label='reduced' if cell['geometryTiers'][side]=='reduced' else cell['textureTiers'][side]
            key=(cell['subjectId'],label)
            groups.setdefault(key,[]).append((cell['metrics'][side],next(m for m in cell['measurements'] if m['side']==side),cell['preparation']))
            if cell['rep']==0:
                for view,images in cell['images'].items():
                    if isinstance(images,dict):pictures.setdefault((cell['subjectId'],label,view),images[side])
        if cell['rep']==0:
            ref_side=next(s for s in ('A','B') if cell['geometryTiers'][s]=='master' and cell['textureTiers'][s]=='reference')
            other='B' if ref_side=='A' else 'A'
            for view,images in cell['images'].items():
                if isinstance(images,dict):quality_rows.append({'subject':cell['subjectId'],'candidate':cell['candidate'],'view':view,
                    **quality(images[ref_side],images[other])})
    for subject in ('car','tree','chair'):
        for label in ORDER:
            runs=groups[(subject,label)];metrics=runs[0][0];frames=[m['frameMs']['p95'] for _,m,_ in runs]
            gpu=[m['gpuMs']['p50'] for _,m,_ in runs if m['gpuMs']['p50'] is not None]
            rows.append({'subject':subject,'variant':label,'name':NAMES[label],
                         'runs':len(runs),'frames':sum(m['sampleCount'] for _,m,_ in runs),
                         'frameP50Median':stats.median(m['frameMs']['p50'] for _,m,_ in runs),
                         'frameP95Median':stats.median(frames),'frameP99Median':stats.median(m['frameMs']['p99'] for _,m,_ in runs),
                         'gpuP50Median':stats.median(gpu) if gpu else None,
                         'cpuSubmitP95Median':stats.median(m['cpuRenderSubmitMs']['p95'] for _,m,_ in runs),
                         'triangles':metrics['triangles'],'geometryBufferBytes':metrics['geometryBufferBytes'],
                         'encodedSurfaceBytes':metrics['encodedAssetBytes'],'textureMipBytes':metrics['textureMipBytes'],
                         'cpuGeometryArrayBytes':metrics['geometryBufferBytes'],
                         'cpuCompressedMipArrayBytes':metrics['textureMipBytes'] if label.startswith('uastc') else 0,
                         'estimatedCPUImageRGBABytes':0 if label.startswith('uastc') else sum(f['width']*f['height']*4 for f in metrics['formats']),
                         'cpuMeaning':'Geometry and compressed mip array lengths are observable; browser image RGBA decode is an estimate. Browser/driver caches and overhead are unknown.',
                         'sourceRecipeBytesShared':metrics['sourceRecipeBytes'],
                         'formats':metrics['formats'],'output':runs[0][1]['output'],
                         'medianPairPreparationMs':stats.median(p['pairReadyMs'] for _,_,p in runs)})
    manifest=json.loads((SITE/'assets/study/manifest.json').read_text())
    build=json.loads((SITE/'src/cases/build-info.json').read_text())
    bundle=SITE/'study.js'
    bundle_sha=hashlib.sha256(bundle.read_bytes()).hexdigest()
    archived=json.loads((EVIDENCE/'summary.json').read_text()) if (EVIDENCE/'summary.json').exists() else {}
    matching_archive=archived.get('rendererBundleVerification',{}).get('sha256')==bundle_sha
    assert matching_archive or bundle.stat().st_mtime <= datetime.fromisoformat(data['startedUTC']).timestamp(), 'Renderer bundle differs from archived evidence; revalidate before summarizing'
    summary={'schema':'he-quality-provisional-summary/1','createdUTC':datetime.now(timezone.utc).isoformat(),
             'humanVotes':0,'desktopRepetitions':data['repetitions'],'environment':data['environments'][0],
             'rows':rows,'renderedFidelity':quality_rows,'initialPageTimings':data['initialPageTimings'],
             'surfacePreparationSeconds':manifest['elapsedSeconds'],
             'sharedStudyBundleBytes':(SITE/'study.js').stat().st_size,
             'sharedStudyBundleGzipBytes':len(gzip.compress((SITE/'study.js').read_bytes())),
             'subjectRecipeBytesShared':(SITE/'src/cases/subjects.js').stat().st_size,
             'materialRecipeBytesShared':(SITE/'src/cases/materials.js').stat().st_size}
    summary['rendererBundleVerification']={'buildId':build['buildId'],'sha256':bundle_sha,
      'method':'Bundle matches archived evidence SHA256, or its modification preceded original matrix start; renderer inputs were frozen throughout. Runtime IDs are recorded by newer driver revisions.'}
    summary['commonTranscoderFileBytes']={p.name:p.stat().st_size for p in (SITE/'assets/basis').iterdir() if p.is_file()}
    summary['surfaceTools']={'numpy':'2.5.4','Pillow':'12.3.0','KTX':'4.4.2','Three':'0.186.1'}
    informed_path=EVIDENCE/'informed-features.json'
    informed=json.loads(informed_path.read_text()) if informed_path.exists() else None
    if informed:
        assert not informed['errors'] and len(informed['records'])==8
        summary['informedFeatureChecks']=[]
        for row in informed['records']:
            gpu=[m['gpuMs']['p50'] for m in row['measurements'] if m['gpuMs']['p50'] is not None]
            summary['informedFeatureChecks'].append({'name':row['name'],'subject':row['subject'],
              'frameP95Median':stats.median(m['frameMs']['p95'] for m in row['measurements']),
              'gpuP50Median':stats.median(gpu) if gpu else None,
              'draws':[m['draws'] for m in row['measurements']],
              'meaning':'One automated informed setting, two matching sides; no human quality votes'})
    (EVIDENCE/'summary.json').write_text(json.dumps(summary,indent=2)+'\n')

    # Standalone comparison figures use exact captured pixels; no retouching.
    try:
        font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',18)
        small=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',14)
    except OSError:
        font=small=ImageFont.load_default()
    overview=Image.new('RGB',(1080,600),'#101b1d');overview_draw=ImageDraw.Draw(overview)
    for subject in ('car','tree','chair'):
        card=Image.new('RGB',(1080,1120),'#101b1d');draw=ImageDraw.Draw(card)
        for i,label in enumerate(ORDER):
            x=(i%3)*360;y=(i//3)*560
            draw.text((x+8,y+8),NAMES[label],font=small,fill='#edf4ef')
            im=Image.open(EVIDENCE/pictures[(subject,label,'close')]).convert('RGB')
            im.thumbnail((352,500),Image.Resampling.LANCZOS);card.paste(im,(x+(360-im.width)//2,y+38))
        card.save(EVIDENCE/f'{subject}-comparison.jpg',quality=94)
        hero=Image.open(EVIDENCE/pictures[(subject,'reference','medium')]).convert('RGB')
        hero.save(EVIDENCE/f'{subject}-reference.jpg',quality=95)
        # Overview figure crops empty sky/floor; fidelity calculations use originals.
        i=('car','tree','chair').index(subject);w,h=hero.size
        crop=(0,int(h*.22),w,int(h*.78)) if subject=='car' else (0,int(h*.08),w,int(h*.92))
        preview=hero.crop(crop);preview.thumbnail((344,550),Image.Resampling.LANCZOS)
        overview.paste(preview,(i*360+(360-preview.width)//2,40+(550-preview.height)//2))
        overview_draw.text((i*360+12,10),subject.title(),font=font,fill='#edf4ef')
    overview.save(EVIDENCE/'subjects-overview.jpg',quality=95)

    gpu_name=data['environments'][0]['gpu']
    page_times=[t['firstUsefulSubjectFrameMs'] for t in data['initialPageTimings']]
    lines=['HE + PHOTONIC — PROVISIONAL CONTROLLED SUBJECT STUDY',
           'Completed desktop evidence 2026-10-16; actual new-subject phone votes remain pending.','',
           'Recommendation and confidence',
           '-----------------------------',
           'Keep a per-material delivery shortlist. UASTC1024 is a useful bounded-mip',
           'candidate to test on the iPhone, not an automatically selected universal tier.',
           'The AVIF routes here change color only and retain lossless normal/roughness;',
           'UASTC routes compress all channels, and 512 changes resolution as well.',
           'A smaller transfer, smaller mip payload and a preferred appearance are',
           'different outcomes. Preserve native sources and inspect nearby detail.',
           'In this matrix UASTC1024 used about4x less mip payload than the reference;',
           'UASTC512 used about16x less. AVIF80 had the smaller encoded surface',
           'files than UASTC1024 for all three subjects, but retained full map residency.',
           'Every single-subject case remained near the desktop60Hz refresh plateau;',
           'this does not establish equal GPU cost or a production object budget.',
           'No human preference votes for these new subjects are claimed in this report.','',
           'What was actually measured',
           '--------------------------',gpu_name,
           f"{data['repetitions']} repetitions of 15 pairs = {len(data['records'])} pair runs / {len(data['records'])*2} timed candidate runs.",
           '390x844 CSS mobile viewport, requested DPR3 capped to1.5 for the canvas;',
           'actual pixel output is recorded in every row. Direct WebGL, ACES exposure',
           '.95, MSAA, no shadows or wind. No network throttle or CPU slowdown.',
           'These are desktop GPU timings, not iPhone FPS or full-engine capacity.',
           'Each side uses 12 warmup frames then about2seconds of identical camera/',
           'light motion from phase0. No per-frame gl.finish. GPU timers asynchronous.',
           'New context per repetition, but decoder/driver/OS caches may be warm.',
           'References repeat in several pairs; their run count is larger than each',
           'candidate. Table p95 is median of run p95s, not a pooled percentile.','',
           'Per-subject costs (surface files exclude shared recipe/renderer/transcoder)',
           '------------------------------------------------------------------------',
           'subject variant       encoded MiB / mip MiB / geom MiB / triangles / frame p50,p95 ms / GPU p50 ms / runs']
    for r in rows:
        gpu='n/a' if r['gpuP50Median'] is None else f"{r['gpuP50Median']:.2f}"
        lines.append(f"{r['subject']:<7} {r['variant']:<12} {r['encodedSurfaceBytes']/1048576:6.2f} / {r['textureMipBytes']/1048576:6.2f} / {r['geometryBufferBytes']/1048576:5.2f} / {r['triangles']:7.0f} / {r['frameP50Median']:5.1f},{r['frameP95Median']:5.1f} / {gpu:>5} / {r['runs']}")
    lines.extend(['','Geometry and surface interpretation',
      '-----------------------------------',
      'The master/reduced pair changes tessellation, not reference maps. Leaves keep',
      'their deterministic locations; lower leaf curvature, branch sections, rounded',
      'cushions and curved car sections can still change silhouettes and highlights.',
      'The three authored masters are diagnostic fixtures, not scanned reality or',
      'a claim that procedural authoring has won against all alternative pipelines.',
      'They expose paint highlights, twigs/cutout leaf edges, piping and weaving;',
      'the woven field is subtler at phone scale than the geometric seams.',
      'Simple studio lighting/shadows-off also limits absolute realism judgments.',
      'Rendered reference error was much larger for aggressive geometry reduction',
      'than texture encoding in these views, particularly the tree leaf curvature.',
      'That motivates inspecting geometry transitions before trading away curvature;',
      'it is not a human preference verdict or proof about all trees/materials.',
      'Car/desk wear and coating controls are intended appearance variations;',
      'their informed exploration records never overwrite first blind votes.','',
      'Fidelity evidence',
      '-----------------',
      'summary.json includes matched central80%width/70%height crops, an8x8-block',
      'grayscale SSIM-style value and RGB RMSE. These are reference-fidelity checks,',
      'not realism, perceptual thresholds or human votes. View the exact captures',
      'and motion in the page; a salient highlight/twig defect can evade a mean score.','',
      'Loading, authoring and accounting',
      '--------------------------------',
      f"Three fresh-context initial useful-subject frames (ms from navigation): {', '.join(f'{t:.0f}' for t in page_times)}.",
      'Initial assigned subjects/pairs are randomized; these are not per-method cold',
      'load comparisons. Pair preparation/first completion and resource timings are',
      'separate raw records. Cold production startup is still a later investigation.',
      f"Shared study bundle: {summary['sharedStudyBundleBytes']:,} file bytes; {summary['sharedStudyBundleGzipBytes']:,} gzip bytes (gzip is offline size, not a claim about Pages transport).",
      f"Shared three-subject recipe: {summary['subjectRecipeBytesShared']:,} bytes; shared material module: {summary['materialRecipeBytesShared']:,} bytes.",
      'Recipe bytes exclude Three.js, decoder, generated buffers/maps and source',
      'dependencies. Mip/buffer values are payload accounting, not driver VRAM.',
      'Per-side tables describe each representation: shared maps in an A/B pair',
      'can reuse one allocation, so adding their entries can double-count sharing.',
      'Within one side, shared texture objects/typed arrays are counted once.',
      'Summing sides or CPU/GPU columns does not measure whole-process memory.',
      'The summary separately records actual CPU geometry/mip array lengths and',
      'estimated browser-owned RGBA image decode bytes. Browser/driver caches and',
      'overhead remain unknown; those values are not a process-memory measurement.',
      f"Shared Basis files: {sum(summary['commonTranscoderFileBytes'].values()):,} bytes ({summary['commonTranscoderFileBytes']}).",
      f"Frozen renderer build: {build['buildId']}; bundle SHA256 is recorded in summary.json.",
      'Surface tools: NumPy2.5.4 / Pillow12.3.0 / KTX Software4.4.2; Three0.186.1.',
      f"Surface channel generation plus offline encoding recorded {manifest['elapsedSeconds']:.1f}s total steps; this is not artistic start-to-finished authoring time.",
      'Geometry implementation/repair timings and caveats are in subjects-notes.txt.',
      'Recipes reused the existing Three.js/tool setup; the historical desk and its',
      'real iPhone13 evidence are preserved separately. No new image generation or',
      'external model/texture import was used in this checkpoint.','',
      'Validation and exclusions',
      '-------------------------',
      'All55 unique surface files pass hashes, dimensions and KTX header checks;',
      'source normals are unit length within8-bit quantization. Leaf RGB remains',
      'colored outside alpha. Finite geometry/normals/UVs/tangents and nonzero',
      'master/reduced bounds were checked. Raw triangle counts include documented',
      'benign collapsed rounded-primitive triangles, not a watertight-topology claim.',
      'The car cutout has a documented small lower arch-entry sampling limitation;',
      'recipient review found its earlier pinched highlight resolved. See notes.',
      'Browser acceptance covers blind UI/export, immutable votes, exact paused',
      'camera/light/timeline matching, independent factors, real rAF counts, Stop',
      'during delayed loads, hidden tabs/context loss and export/storage fallbacks.',
      'A fresh recipient review prompted repairs to panel/piping attachments, wheel',
      'arch highlights and a quantized-coordinate wear-field bug before the matrix.',
      'Broken shader/GL uploads are invalid candidates, never assigned quality scores.','',
      'Implications for HE and Photonic',
      '-------------------------------',
      'Keep base material, coating and condition separate; preserve physical scale',
      'and color/data semantics. Compatible finishes can share source maps, while',
      'extra lobes, masks, refractive glass and program variants have runtime costs.',
      'HE already has material roles, worker caching, merged geometry and streamed',
      'tree/terrain tiers. Photonic already has procedural cloth/wear and shared',
      'crowd/motion tiers. This lab does not present them as new inventions or',
      'replace their interfaces. Photonic skin/hair/animated cloth still need their',
      'own movement-aware tests; a static prop result cannot select those tiers.',
      'Use these fixtures to test candidate delivery tiers first, then measure the',
      'mixed scene with current renderer paths and actual resource admission.','',
      'Next real-phone questions',
      '-------------------------',
      'Run the short study on the iPhone13, including close and side views and motion.',
      'For each pair choose A, B or no visible difference and note any highlight,',
      'leaf/twig or seam/shimmer defect. Measure both versions when useful, then',
      'share the JSON. Power/thermal/cache/network conditions remain contextual',
      'unknowns unless supplied; one phone/observer does not establish a universal',
      'default or safe production object budget. Future phases cover diverse mixed',
      'streaming, sustained motion and actual Photonic animation/contact behavior.','',
      'Evidence',
      '--------',
      'assets/study-evidence/desktop-matrix.json and summary.json; exact PNG frames;',
      'assets/study/manifest.json; source recipes; tests/study-browser.mjs and',
      'tests/study-matrix.mjs; STUDY-PROTOCOL.txt; STUDY-IPHONE13-BASELINE.txt.',
    ])
    if informed:
        lines.extend(['','Informed finish/condition feature checks','----------------------------------------',
          'Eight automated settings passed render/export validation. One pass per',
          'setting with two matching sides; not human votes or a controlled causal',
          'performance ranking. Whole-subject views differ from the close-view matrix.',
          'Refractive glass adds transmission rendering targets/passes beyond source',
          'map payload; those targets are not included in the mip-file accounting.'])
        for row in summary['informedFeatureChecks']:
            gpu='n/a' if row['gpuP50Median'] is None else f"{row['gpuP50Median']:.3f}"
            lines.append(f"{row['name']}: frame p95 {row['frameP95Median']:.1f} ms; GPU p50 {gpu} ms; draws {row['draws']}")
        lines.append('Exact settings and preparation costs: assets/study-evidence/informed-features.json.')
    lines.extend(['','Derived result reproduction','---------------------------',
      'scripts/summarize-study.py preserves aggregation, grayscale coefficients,',
      'crop bounds and the8x8 block formula/constants. It reads the raw matrix and',
      'captured PNGs; timestamps and figure fonts are presentation metadata.',
      'The included scientific figures compose the captured frames without',
      'retouching. Screenshot pixels are browser-composited at the simulated DPR;',
      'actual renderer-buffer dimensions remain separately recorded in raw rows.'])
    public_path=EVIDENCE/'browser-acceptance-public.json'
    http_path=EVIDENCE/'publication-validation.json'
    if public_path.exists() and http_path.exists():
        public=json.loads(public_path.read_text());http=json.loads(http_path.read_text())
        assert not public['errors'] and all(r['ok'] for r in public['results'])
        lines.extend(['','Public deployment checks','------------------------',
          f"Hosted browser acceptance: {len(public['results'])}/{len(public['results'])} groups passed, no browser errors.",
          f"HTTP/content checks: {len(http['checks'])} public paths matched the published source,",
          'including all 55 unique surfaces and Basis JS/WASM. This validates the',
          'desktop browser at the public URL, not actual iPhone quality or speed.',
          f"Tested content commit: {http['deployedContentCommit']}; renderer build unchanged.",
          'Evidence: assets/study-evidence/browser-acceptance-public.json and',
          'assets/study-evidence/publication-validation.json.'])
    text='\n'.join(lines)+'\n'
    for a,b in [('about4x','about 4×'),('about16x','about 16×'),('desktop60Hz','desktop 60 Hz'),('DPR3','DPR 3'),('to1.5','to 1.5'),('about2seconds','about 2 seconds'),('phase0','phase 0'),('central80%width/70%height','central 80% width / 70% height'),('an8x8-block','an 8×8 block'),('the8x8','the 8×8'),('All55','All 55'),('within8-bit','within 8-bit'),('NumPy2.5.4','NumPy 2.5.4'),('Pillow12.3.0','Pillow 12.3.0'),('Software4.4.2','Software 4.4.2'),('Three0.186.1','Three 0.186.1'),('iPhone13','iPhone 13')]:text=text.replace(a,b)
    (SITE/'STUDY-FINDINGS.txt').write_text(text)
    images=''.join(f'<section><h2>{s.title()}</h2><a href="assets/study-evidence/{s}-comparison.jpg"><img src="assets/study-evidence/{s}-comparison.jpg" alt="Matched {s} close views across delivery and geometry tiers"></a></section>' for s in ('car','tree','chair'))
    body='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>HE + Photonic · provisional subject findings</title><style>body{background:#101b1d;color:#edf4ef;font:16px/1.5 system-ui;max-width:1100px;margin:20px auto;padding:16px}a{color:#a6dfc4}img{max-width:100%}pre{white-space:pre-wrap;overflow-wrap:anywhere;font:14px/1.5 ui-monospace,monospace}</style><a href="study.html">Open the blind study</a><h1>Three subjects, measured costs</h1><p>Desktop evidence; new-subject phone quality choices remain open. Read this after your blind choices to avoid format/cost cues.</p>'+images+'<pre>'+html.escape(text)+'</pre><p><a href="assets/study-evidence/summary.json">Summary JSON</a> · <a href="assets/study-evidence/desktop-matrix.json">Raw matrix</a> · <a href="assets/study-evidence/browser-acceptance-public.json">Public browser checks</a> · <a href="assets/study-evidence/publication-validation.json">Public asset checks</a></p></html>'
    (SITE/'study-findings.html').write_text(body)
    print('Wrote provisional report, summary and three standalone comparison figures.')


if __name__=='__main__':main()

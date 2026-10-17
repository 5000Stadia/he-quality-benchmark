HE quality phone benchmark

Open index.html through HTTP(S), or use the published GitHub Pages site.
Build: npm ci && npm run build
Three.js r186.1, WebGLRenderer; shared generated desk material fixtures.
No analytics, remote result upload, service worker, or account required. Results are local and shared manually.
Data and code are an experiment, not the production holo-emitter engine. See RESULTS.txt and RESEARCH.txt for methodology and limitations.

Third-party: Three.js MIT license in THREE-LICENSE.txt. Basis Universal transcoder assets retain upstream license headers.

CONTROLLED STUDY V2
study.html adds original car/tree/upholstered-chair fixtures, independent texture
and geometry pairs, preserved blind choices, explicit camera poses and compatible
finish/condition controls. The v1 desk code/result schema remain preserved.
See STUDY-PROTOCOL.txt, STUDY-FINDINGS.txt and STUDY-IPHONE13-BASELINE.txt.

Original authored geometry: src/cases/subjects.js and subjects-notes.txt.
Analytic surfaces: scripts/prepare-study.py; native lossless sources, hashes and
exact conversion records in assets/study/manifest.json. These are not scans.
To regenerate, install scripts/requirements.txt in an isolated Python environment
and set KTX_ENCODER to KTX Software 4.4.2's toktx executable. Run
python scripts/prepare-study.py. Generation is separate from npm build.

Validation: tests/study-browser.mjs; controlled desktop evidence:
tests/study-matrix.mjs; informed finish checks: tests/study-finishes.mjs.
Supply PLAYWRIGHT_MODULE and CHROMIUM_PATH for the local
Playwright/Chromium installation, and STUDY_URL for the served study URL.
The matrix never supplies or counts human preference votes.
Reproduce summary tables, fidelity scores and figures from the captured evidence:
python scripts/summarize-study.py. This preserves the original matrix; rerunning
the browser matrix replaces evidence and requires reviewing the new report.

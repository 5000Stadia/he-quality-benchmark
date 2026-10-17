// Protocol acceptance tests. Intentionally does not import/read the implementation.
// Run: node tests/study-browser.mjs (server must already be running).
import assert from 'node:assert/strict';
import { access, readFile, mkdir, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || '/home/k/Projects/holo-emitter/node_modules/playwright-core/index.mjs');
const url = process.env.STUDY_URL || 'http://127.0.0.1:8770/quality-lab/phone-site/study.html?debug=1';
const out = process.env.STUDY_TEST_OUT || '/tmp/quality-study-browser';
await mkdir(out, { recursive: true });
let executablePath = process.env.CHROMIUM_PATH || '/opt/google/chrome/chrome';
try { await access(executablePath, constants.X_OK); } catch { executablePath = chromium.executablePath(); }
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox', '--enable-gpu', '--use-angle=gl-egl', '--ignore-gpu-blocklist'] });
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, acceptDownloads: true });
const results = [];
const errors = [];
context.on('page', page => page.on('pageerror', e => errors.push(e.stack || e.message)));
const page = await context.newPage();
page.setDefaultTimeout(15000);
const state = p => p.evaluate(() => window.studyDebug.state());
const result = p => p.evaluate(() => JSON.parse(JSON.stringify(window.studyResult)));
const ready = p => p.waitForFunction(() => window.studyReady === true && window.studyDebug?.state().status === 'ready', null, { timeout: 90000 });
const disabledVotes = async p => { for (const id of ['voteA', 'voteB', 'voteTie']) assert.equal(await p.locator('#' + id).isDisabled(), true, `${id} must be disabled`); };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function test(name, fn) {
  try { await fn(); results.push({ name, ok: true }); console.log('PASS', name); }
  catch (e) { results.push({ name, ok: false, error: e.stack }); console.error('FAIL', name, e.message); await page.screenshot({ path: `${out}/failure-${results.length}.png` }).catch(() => {}); await writeFile(`${out}/failure-${results.length}.json`, JSON.stringify(await page.evaluate(() => ({ state: window.studyDebug?.state(), result: window.studyResult, status: document.querySelector('#studyStatus')?.textContent, ready: window.studyReady })).catch(() => ({})), null, 2)); }
}
async function fresh(p = page) { await p.goto(url, { waitUntil: 'domcontentloaded' }); await ready(p); }
function votes(r) { assert.ok(Array.isArray(r.votes), 'public result.votes array required'); return r.votes; }
function interruptions(r) { assert.ok(Array.isArray(r.interruptions), 'public result.interruptions array required'); return r.interruptions; }
function rows(value) { return value && typeof value === 'object' ? [value, ...Object.values(value).flatMap(rows)] : []; }
function noBlindLeaks(value) {
  const text = typeof value === 'string' ? value : JSON.stringify(value);
  assert.doesNotMatch(text, /uastc|avif\s*(?:80|90)|lossless|reference\s*[:=]|master\s*[:=]|candidate\s*[:=]|encodedBytes|gpuBytes|textureTiers|geometryTiers|mapping/i, 'unvoted candidate identity/cost leaked');
}
try {
  await test('ready pair is blind in UI and public export', async () => {
    await fresh();
    assert.equal(await page.locator('#revealPanel').isVisible(), false);
    for (const id of ['voteA', 'voteB', 'voteTie']) assert.equal(await page.locator('#' + id).isEnabled(), true);
    const visible = await page.locator('body').innerText();
    assert.doesNotMatch(visible, /UASTC|AVIF\s*(?:80|90)|\b(?:512|1024|2048)\s*(?:px|×|x)|\b\d+(?:\.\d+)?\s*(?:KiB|MiB|MB|KB)\b/i);
    noBlindLeaks(await result(page));
    const before = page.waitForEvent('download'); await page.locator('#exportStudy').click();
    const download = await before; const data = JSON.parse(await readFile(await download.path(), 'utf8'));
    noBlindLeaks(data); assert.equal(votes(data).length, 0);
    await page.screenshot({ path: `${out}/mobile-blind.png` });
  });
  await test('paused A/B share exact pose, lighting and timeline in all views', async () => {
    await page.locator('#motion').uncheck();
    for (const view of ['close', 'medium', 'silhouette']) {
      await page.locator('#view').selectOption(view);
      await page.locator('#sideA').click(); const a = await state(page);
      await page.locator('#sideB').click(); const b = await state(page);
      assert.equal(a.side, 'A'); assert.equal(b.side, 'B');
      assert.deepEqual(b.pose, a.pose); assert.equal(b.timeline, a.timeline); assert.equal(b.lightPhase, a.lightPhase);
      assert.ok(a.pose.position && a.pose.target && Number.isFinite(a.pose.fov));
    }
  });
  await test('first tie is saved before reveal and remains immutable', async () => {
    await page.locator('#defectNote').fill('Acceptance probe: no visible difference.');
    await page.locator('#voteTie').click();
    await page.locator('#revealPanel').waitFor({ state: 'visible' });
    const first = structuredClone(votes(await result(page))[0]);
    assert.ok(first, 'first vote persisted');
    assert.match(JSON.stringify(first), /tie|no.visible.difference/i);
    assert.match(JSON.stringify(first), /Acceptance probe/);
    assert.match(JSON.stringify(first), /mapping|reference|candidate|variant/i, 'voted row must identify actual mapping');
    if (await page.locator('#voteA').isEnabled()) await page.locator('#voteA').click();
    assert.deepEqual(votes(await result(page))[0], first, 'first blind vote must never be overwritten');
    await page.locator('#restartTrial').click(); await ready(page);
    assert.deepEqual(votes(await result(page))[0], first, 'restart preserves evidence');
  });
  await test('geometry comparisons hold texture constant; texture comparisons hold geometry constant', async () => {
    for (const subjectId of ['car', 'tree', 'chair']) {
      await page.evaluate(subjectId => window.studyDebug.selectTrial({ subjectId, kind: 'geometry', candidate: 'uastc512' }), subjectId); await ready(page);
      const g = await state(page); assert.equal(g.subjectId, subjectId);
      assert.deepEqual(g.textureTiers.A, g.textureTiers.B); assert.notDeepEqual(g.geometryTiers.A, g.geometryTiers.B);
      await page.evaluate(subjectId => window.studyDebug.selectTrial({ subjectId, kind: 'texture', candidate: 'uastc512' }), subjectId); await ready(page);
      const t = await state(page); assert.deepEqual(t.geometryTiers.A, t.geometryTiers.B); assert.notDeepEqual(t.textureTiers.A, t.textureTiers.B);
    }
  });
  await test('measurement contains real rAF samples and numerical camera evidence', async () => {
    let callbacks = 0;
    await page.exposeFunction('__acceptanceRaf', () => { callbacks++; });
    await page.evaluate(() => { let n = 0; const tick = () => { window.__acceptanceRaf(); if (++n < 3000) requestAnimationFrame(tick); }; requestAnimationFrame(tick); });
    await page.locator('#runMeasure').click();
    await page.waitForFunction(() => window.studyDebug.state().status === 'measuring');
    await page.waitForFunction(() => window.studyDebug.state().status !== 'measuring', null, { timeout: 90000 });
    const internal = await state(page);
    assert.ok(rows(internal).some(x => Number.isFinite(x.sampleCount) && x.sampleCount > 0), 'debug state must expose valid internal samples');
    await page.locator('#voteTie').click();
    const r = await result(page);
    const measured = rows(r).filter(x => Number.isFinite(x.sampleCount) && x.sampleCount > 0);
    assert.ok(measured.length, 'export must include steady sampleCount');
    assert.ok(callbacks >= Math.max(...measured.map(x => x.sampleCount)), 'reported samples cannot exceed observed rAF callbacks');
    const frameRows = measured.filter(x => x.frameMs && typeof x.frameMs === 'object');
    assert.ok(frameRows.length, 'real rAF/frameMs measurement required');
    assert.ok(frameRows.every(x => x.sampleCount >= 20), 'real rAF measurement needs meaningful sample count');
    assert.match(JSON.stringify(r), /p50|median/); assert.match(JSON.stringify(r), /p95/); assert.match(JSON.stringify(r), /p99/);
    assert.ok(rows(r).some(x => Number.isFinite(x.fov) && x.position && x.target), 'export actual camera');
  });
  await test('hidden-tab interruption requires explicit restart', async () => {
    await page.locator('#runMeasure').click(); await page.waitForFunction(() => window.studyDebug.state().status === 'measuring');
    await page.evaluate(() => window.studyDebug.setVisibilityForTest(true));
    await page.waitForFunction(() => !window.studyReady && window.studyDebug.state().status !== 'measuring');
    await page.evaluate(() => window.studyDebug.setVisibilityForTest(false)); await sleep(300);
    assert.notEqual((await state(page)).status, 'ready'); await disabledVotes(page);
    assert.ok(interruptions(await result(page)).some(x => /hidden|visibility/i.test(JSON.stringify(x))));
    await page.locator('#restartTrial').click(); await ready(page);
  });
  await test('context loss invalidates trial and records interruption', async () => {
    const supported = await page.evaluate(() => { const c = document.querySelector('#studyViewport canvas'); const gl = c.getContext('webgl2') || c.getContext('webgl'); const ext = gl?.getExtension('WEBGL_lose_context'); if (!ext) return false; window.__acceptanceLostContext = ext; ext.loseContext(); return true; });
    assert.equal(supported, true, 'test GPU must support WEBGL_lose_context');
    await page.waitForFunction(() => window.studyDebug.state().contextLost && !window.studyReady);
    await disabledVotes(page); assert.ok(interruptions(await result(page)).some(x => /context/i.test(JSON.stringify(x))));
    await fresh();
  });
  await test('stopped asynchronous asset load cannot revive trial', async () => {
    const p = await context.newPage();
    let release; const held = new Promise(resolve => { release = resolve; }); let caught;
    const intercepted = new Promise(resolve => { caught = resolve; });
    await p.route(/\.(?:png|webp|avif|ktx2)(?:\?|$)/i, async route => { caught(route.request().url()); await held; await route.continue().catch(() => {}); });
    try {
      await p.goto(url, { waitUntil: 'domcontentloaded' });
      await Promise.race([intercepted, sleep(20000).then(() => { throw new Error('no delayed texture request observed'); })]);
      await p.locator('#stopStudy').click(); release();
      await sleep(2500); assert.equal((await state(p)).status, 'stopped'); assert.equal(await p.evaluate(() => window.studyReady), false);
      await disabledVotes(p); assert.ok(interruptions(await result(p)).length > 0);
      await p.locator('#restartTrial').click(); await ready(p);
    } finally { release(); await p.close(); }
  });
  await test('storage, clipboard and share failures preserve raw/download evidence', async () => {
    // A fresh-session scenario needs isolated storage; reload now preserves first votes.
    const isolated = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, acceptDownloads: true });
    isolated.on('page', p => p.on('pageerror', e => errors.push(e.stack || e.message)));
    const p = await isolated.newPage();
    await p.addInitScript(() => {
      Storage.prototype.setItem = () => { throw new DOMException('Acceptance storage failure', 'QuotaExceededError'); };
      Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('Acceptance clipboard unavailable'); } } });
      Object.defineProperty(navigator, 'share', { configurable: true, value: async () => { throw new DOMException('Acceptance share canceled', 'AbortError'); } });
    });
    try {
      await fresh(p); await p.locator('#voteTie').click();
      await p.locator('#copyStudy').click(); await p.locator('#shareStudy').click();
      assert.equal(await p.locator('#studyJson').isVisible(), true);
      const raw = await p.locator('#studyJson').evaluate(e => 'value' in e ? e.value : e.textContent);
      const data = JSON.parse(raw); assert.equal(votes(data).length, 1);
      const pending = p.waitForEvent('download'); await p.locator('#exportStudy').click();
      const download = await pending; const saved = JSON.parse(await readFile(await download.path(), 'utf8'));
      assert.deepEqual(votes(saved), votes(data));
    } finally { await isolated.close(); }
  });
  await test('next/restart plus desktop viewport remain usable', async () => {
    await fresh(); const before = (await state(page)).trialId;
    await page.locator('#nextTrial').click(); await ready(page); assert.notEqual((await state(page)).trialId, before);
    await page.locator('#restartTrial').click(); await ready(page);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.locator('#motion').uncheck(); await page.locator('#view').selectOption('medium');
    const box = await page.locator('#studyViewport').boundingBox(); assert.ok(box.width > 0 && box.height > 0);
    await page.screenshot({ path: `${out}/desktop-ready.png` });
    assert.deepEqual(errors, [], 'uncaught browser errors');
  });
} finally {
  await writeFile(`${out}/results.json`, JSON.stringify({ url, executablePath, viewport: '390x844 DPR3 (desktop GPU)', results, errors }, null, 2));
  await browser.close();
}
console.log(`Evidence: ${out}/results.json`);
if (results.some(r => !r.ok)) process.exitCode = 1;

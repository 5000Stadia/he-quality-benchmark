// Phone interaction journeys. Uses the rendered controls and portable-results UI only.
// No implementation imports, studyDebug calls, or synthetic internal state changes.
// Serve the site, then: node tests/study-interaction.mjs
import assert from 'node:assert/strict';
import { access, mkdir, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || '/home/k/Projects/holo-emitter/node_modules/playwright-core/index.mjs');
const url = process.env.STUDY_URL || 'http://127.0.0.1:8770/quality-lab/phone-site/study.html';
const out = process.env.STUDY_TEST_OUT || '/tmp/quality-study-interaction';
await mkdir(out, { recursive: true });
let executablePath = process.env.CHROMIUM_PATH || '/opt/google/chrome/chrome';
try { await access(executablePath, constants.X_OK); } catch { executablePath = chromium.executablePath(); }
const browser = await chromium.launch({ executablePath, headless: true, args: ['--no-sandbox', '--enable-gpu', '--use-angle=gl-egl', '--ignore-gpu-blocklist'] });
const results = [], evidence = [], errors = [];
const phone = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true, acceptDownloads: true };
const voteButtons = ['voteA', 'voteB', 'voteTie'];
const output = p => p.locator('#studyJson').inputValue().then(JSON.parse);
const currentId = async p => (await output(p)).current.trialId;
const status = p => p.locator('#studyStatus').innerText();
const ready = p => p.locator('#sideB:enabled').waitFor({ timeout: 90000 });
const voteReady = p => p.locator('#voteA:enabled').waitFor({ timeout: 90000 });
const clone = value => JSON.parse(JSON.stringify(value));
const note = p => p.locator('#defectNote');
const pause = (p, ms = 150) => p.waitForTimeout(ms);
async function typeNote(p, text) {
  assert.equal(await note(p).isEditable(), true, 'comment must accept typing');
  await note(p).tap();
  assert.equal(await p.evaluate(() => document.activeElement?.id), 'defectNote', 'touch should focus the comment');
  await p.keyboard.press('ControlOrMeta+A');
  await p.keyboard.type(text, { delay: 3 });
  assert.equal(await note(p).inputValue(), text, 'actual keystrokes must enter the comment');
}
async function snapshot(p, name) {
  const data = await p.evaluate(() => ({
    url: location.href, title: document.querySelector('#subjectTitle')?.textContent,
    status: document.querySelector('#studyStatus')?.textContent,
    summary: document.querySelector('#sessionSummary')?.textContent,
    body: document.body.innerText, activeElement: document.activeElement?.id, scrollY,
    canvasRect: (() => { const r = document.querySelector('#studyViewport').getBoundingClientRect(); return { top: r.top, bottom: r.bottom, height: r.height }; })(),
    viewport: { width: innerWidth, height: innerHeight, visualHeight: visualViewport?.height },
    controls: [...document.querySelectorAll('button,textarea,select')].map(e => ({ id: e.id, text: e.textContent, value: e.value, disabled: e.disabled, readOnly: e.readOnly, visible: !!e.getClientRects().length })),
  }));
  data.result = await output(p);
  evidence.push({ name, ...data });
  await p.screenshot({ path: `${out}/${name}.png`, fullPage: true });
}
async function next(p) {
  await p.locator('#nextTrial').tap(); await ready(p);
  // Inspect the actual viewport BEFORE another locator can auto-scroll to A/B.
  await p.waitForFunction(() => {
    const r = document.querySelector('#studyViewport').getBoundingClientRect();
    const visible = Math.max(0, Math.min(r.bottom, innerHeight) - Math.max(r.top, 0));
    return visible >= Math.min(r.height, innerHeight) / 2;
  }, null, { timeout: 3000 }).catch(() => assert.fail('Next must bring the new comparison into view before accepting another answer'));
}
function blindCurrent(r) {
  assert.doesNotMatch(JSON.stringify(r.current), /uastc|avif|mapping|encodedAssetBytes|textureTiers|geometryTiers/i, 'unanswered current pair must remain blind in portable results');
}
async function blindUI(p) {
  for (const id of voteButtons) assert.equal(await p.locator(`#${id}`).isEnabled(), true, `${id} should accept a first choice`);
  assert.equal(await p.locator('#revealPanel').isVisible(), false, 'a new blind pair must hide costs and informed controls');
  blindCurrent(await output(p));
}
async function journey(name, fn) {
  const context = await browser.newContext(phone);
  const p = await context.newPage(); p.setDefaultTimeout(12000);
  p.on('pageerror', e => errors.push({ journey: name, message: e.stack || e.message }));
  try {
    await p.goto(url, { waitUntil: 'domcontentloaded' }); await ready(p);
    await fn(p);
    results.push({ name, ok: true }); console.log('PASS', name);
  } catch (e) {
    results.push({ name, ok: false, error: e.stack }); console.error('FAIL', name, e.message);
    await snapshot(p, `failure-${results.length}`).catch(() => {});
  } finally { await context.close(); }
}
try {
  await journey('comment drafts survive keyboard focus, restart, navigation and reload', async p => {
    await blindUI(p);
    const first = await currentId(p), firstSeed = (await output(p)).sessionSeed;
    const firstText = 'AUTOMATION ONLY: first pair draft before choosing.';
    await typeNote(p, firstText);
    await p.locator('#restartTrial').tap(); await ready(p);
    assert.equal(await currentId(p), first);
    assert.equal(await note(p).inputValue(), firstText, 'restart must preserve an unsaved comment');
    assert.ok(JSON.stringify((await output(p)).draftNotes[first]).includes(firstText), 'portable results should preserve the draft separately from votes');
    await next(p);
    const second = await currentId(p);
    assert.notEqual(second, first, 'Next must actually advance');
    const secondText = 'AUTOMATION ONLY: second pair draft, not yet an answer.';
    await typeNote(p, secondText);
    await p.reload({ waitUntil: 'domcontentloaded' }); await ready(p);
    assert.equal(await currentId(p), second, 'reload must resume the current pair');
    assert.equal((await output(p)).sessionSeed, firstSeed, 'reload must preserve randomized pair order');
    assert.equal(await note(p).inputValue(), secondText, 'reload must preserve the active draft');
    let revisited = false;
    for (let n = 0; n < 9; n++) {
      await next(p);
      if (await currentId(p) === first) { revisited = true; break; }
    }
    assert.equal(revisited, true, 'unanswered first pair must be reachable after skipping forward');
    assert.equal(await note(p).inputValue(), firstText, 'navigation must restore each pair’s own draft');
    assert.equal((await output(p)).votes.length, 0, 'drafts/skips must not create answers');
    await snapshot(p, 'draft-navigation-reload');
  });

  await journey('first blind choice stays immutable while later comments remain editable and persist', async p => {
    await p.locator('#sideB').tap();
    await p.locator('#voteB').tap();
    const first = clone((await output(p)).votes[0]);
    assert.equal(first.choice, 'B', 'touchscreen answer must save the selected side');
    assert.equal(first.blind, true);
    const extraText = 'AUTOMATION ONLY: thought added after choosing B.';
    await p.setViewportSize({ width: 390, height: 480 });
    await typeNote(p, extraText);
    await p.setViewportSize({ width: 390, height: 844 });
    await p.locator('#sideA').tap();
    assert.deepEqual((await output(p)).votes[0], first, 'later typing must not rewrite the saved blind response');
    const r = await output(p);
    assert.ok(Array.isArray(r.comments), 'supplemental comments must be a separate exported collection');
    assert.ok(r.comments.some(row => row.phase === 'after-first-vote' && JSON.stringify(row).includes(extraText)), 'later comment needs its own after-first-vote tag');
    await p.locator('#restartTrial').tap(); await ready(p);
    assert.equal(await note(p).isEditable(), true, 'a saved pair may still receive comments after restart');
    assert.equal(await note(p).inputValue(), extraText);
    assert.deepEqual((await output(p)).votes[0], first);
    await p.reload({ waitUntil: 'domcontentloaded' }); await ready(p);
    assert.equal(await note(p).inputValue(), extraText, 'saved-pair comment must persist on reload');
    assert.deepEqual((await output(p)).votes[0], first, 'reload must preserve the exact first response');
    const text = await p.locator('body').innerText();
    assert.match(text, /saved|already|first choice/i, 'disabled answer buttons need a visible explanation');
    for (const id of voteButtons) assert.equal(await p.locator(`#${id}`).isDisabled(), true, 'saved first choices must not be overwritten');
    await snapshot(p, 'answer-first-later-comment');
  });

  await journey('ordinary nine-pair phone flow separates finish exploration and ends explicitly', async p => {
    const ids = new Set(); let firstVote;
    for (let n = 1; n <= 9; n++) {
      await blindUI(p);
      const id = await currentId(p);
      assert.equal(ids.has(id), false, 'Next must not silently return to a saved comparison'); ids.add(id);
      const visible = await p.locator('body').innerText();
      assert.match(visible, new RegExp(`(?:comparison|pair)\\s+${n}\\s*(?:of|/)\\s*9|${n}\\s*(?:of|/)\\s*9\\s*(?:comparison|pair)`, 'i'), `pair ${n} needs an explicit 9-pair progress indicator`);
      await p.locator('#sideB').tap(); await p.locator('#sideA').tap();
      if (n % 2) await typeNote(p, `AUTOMATION ONLY: pair ${n}, comment before answer.`);
      const choice = n % 3 === 1 ? 'voteA' : n % 3 === 2 ? 'voteB' : 'voteTie';
      await p.locator(`#${choice}`).tap();
      assert.equal((await output(p)).votes.length, n, 'each answer should add exactly one first response');
      if (n === 1) {
        firstVote = clone((await output(p)).votes[0]);
        await p.getByText('Explore finishes and condition', { exact: true }).tap();
        await p.locator('#finishSubject').selectOption('desk'); await ready(p);
        await p.locator('#finish').selectOption('glossy');
        await p.locator('#condition').selectOption('worn');
        await p.locator('#sideB').tap();
        assert.match(await status(p), /explor|informed/i, 'finish mode should identify itself');
        assert.deepEqual((await output(p)).votes[0], firstVote);
        for (const id of voteButtons) assert.equal(await p.locator(`#${id}`).isDisabled(), true, 'finish editing must not record a blind answer');
        await snapshot(p, 'informed-finish-exploration');
      }
      if (n < 9) {
        await next(p);
        if (n === 1) {
          await snapshot(p, 'new-pair-visible-after-next');
          await p.screenshot({ path: `${out}/new-pair-visible-after-next-viewport.png` });
        }
      }
    }
    assert.equal(ids.size, 9);
    const final = await output(p); assert.equal(final.votes.length, 9);
    assert.deepEqual(final.votes[0], firstVote, 'later comparisons must preserve the first result');
    if (await p.locator('#nextTrial').isEnabled()) {
      assert.doesNotMatch(await p.locator('#nextTrial').innerText(), /^Next comparison$/i, 'the ninth answer must not offer an endless Next loop');
      await p.locator('#nextTrial').tap();
    }
    assert.match(await p.locator('body').innerText(), /(?:study|comparison|pair)s?[^\n]{0,45}(?:complete|finished)|(?:complete|finished)[^\n]{0,45}(?:study|comparison|pair)s?/i, 'completion must be explicit');
    for (const id of voteButtons) assert.equal(await p.locator(`#${id}`).isDisabled(), true);
    await snapshot(p, 'nine-pair-complete');
    await p.reload({ waitUntil: 'domcontentloaded' });
    await p.waitForFunction(() => { try { return JSON.parse(document.querySelector('#studyJson').value).votes.length === 9; } catch { return false; } }, null, { timeout: 90000 });
    assert.equal((await output(p)).votes.length, 9, 'reload must preserve completed results');
    assert.match(await p.locator('body').innerText(), /complete|finished/i, 'reload must not start an unexplained tenth comparison');
    await snapshot(p, 'completion-after-reload');
  });

  await journey('keyboard and browser chrome resizing preserve answers; interrupted timing recovers', async p => {
    const text = 'AUTOMATION ONLY: keyboard and interrupted timing draft.';
    await typeNote(p, text);
    await p.setViewportSize({ width: 390, height: 480 }); await pause(p);
    assert.equal(await note(p).inputValue(), text);
    assert.equal(await note(p).isEditable(), true);
    await voteReady(p);
    await p.keyboard.type(' More typed while keyboard-height viewport is active.');
    const fullText = await note(p).inputValue();
    assert.match(fullText, /More typed while keyboard-height viewport is active/);
    await p.setViewportSize({ width: 390, height: 844 }); await pause(p);
    await p.locator('#sideB').tap();
    const before = await output(p);
    assert.ok(Array.isArray(before.measurementRuns), 'completed blind timing runs need separate safe receipts');
    const assertBlindTiming = async () => {
      const r = await output(p);
      assert.deepEqual(r.measurements, [], 'per-side timing/cost rows must stay hidden before choosing');
      assert.doesNotMatch(JSON.stringify(r.measurementRuns), /p50|p95|p99|durationMs|elapsedMs|cpuMs|gpuMs|encodedAssetBytes|textureTier|geometryTier|mapping|uastc|avif/i, 'blind timing receipt leaked results or candidate identity');
      blindCurrent(r);
    };
    await p.locator('#runMeasure').tap();
    await p.waitForFunction(() => /measur|warm|timing/i.test(document.querySelector('#studyStatus').textContent));
    assert.equal(await p.locator('#voteA').isDisabled(), true);
    await p.locator('#voteA').scrollIntoViewIfNeeded();
    const rect = await p.locator('#voteA').boundingBox();
    if (rect) await p.touchscreen.tap(rect.x + rect.width / 2, rect.y + rect.height / 2);
    assert.equal((await output(p)).votes.length, 0, 'a touch while measuring must not accidentally create a response');
    await p.setViewportSize({ width: 390, height: 664 });
    await voteReady(p); // Height-only keyboard/browser changes should finish the pair normally.
    const after = await output(p);
    assert.equal(await note(p).inputValue(), fullText, 'timing must not lose the draft');
    assert.deepEqual(after.current.output, before.current.output, 'height-only changes must keep the comparison output fixed');
    assert.equal(after.measurementRuns.length, before.measurementRuns.length + 1, 'height-only changes should permit a complete A/B timing run');
    assert.equal(after.interruptions.length, before.interruptions.length, 'keyboard/browser chrome height must not invalidate the trial');
    await assertBlindTiming();
    await snapshot(p, 'measurement-after-height-change');
    const completed = after.measurementRuns.length;
    await p.locator('#runMeasure').tap();
    await p.waitForFunction(n => JSON.parse(document.querySelector('#studyJson').value).measurementRuns.length > n, completed, { timeout: 90000 });
    await voteReady(p);
    const clean = await output(p);
    assert.equal(clean.measurementRuns.length, completed + 1, 'another complete timing run should be observable without leaking times');
    await assertBlindTiming();
    await p.locator('#runMeasure').tap();
    await p.waitForFunction(() => /measur|warm|timing/i.test(document.querySelector('#studyStatus').textContent));
    const editedText = fullText + ' Edited during measurement.';
    await typeNote(p, editedText); await voteReady(p);
    const edited = await output(p);
    assert.equal(edited.measurementRuns.length, clean.measurementRuns.length, 'typing must cancel rather than save partial timing');
    assert.ok(edited.interruptions.length > clean.interruptions.length);
    assert.equal(edited.interruptions.at(-1).discardedTiming, true);
    assert.match(await status(p), /comment|note|cancel|discard|measur/i, 'typing cancellation needs a visible reason');
    assert.equal(await note(p).inputValue(), editedText);
    await assertBlindTiming();
    await p.locator('#runMeasure').tap();
    await p.waitForFunction(() => /measur|warm|timing/i.test(document.querySelector('#studyStatus').textContent));
    await p.setViewportSize({ width: 430, height: 664 });
    await voteReady(p);
    const resized = await output(p);
    assert.equal(resized.measurementRuns.length, edited.measurementRuns.length, 'width resize must exclude partial timing');
    assert.ok(resized.interruptions.length > edited.interruptions.length);
    assert.equal(resized.interruptions.at(-1).discardedTiming, true);
    assert.match(await status(p), /resiz|viewport|layout|cancel|discard|measur/i, 'width resize cancellation needs a visible reason');
    assert.equal(await note(p).inputValue(), editedText);
    await p.locator('#runMeasure').tap();
    await p.waitForFunction(() => /measur|warm|timing/i.test(document.querySelector('#studyStatus').textContent));
    await p.locator('#stopStudy').tap();
    const stopped = await output(p);
    assert.equal(stopped.measurementRuns.length, clean.measurementRuns.length, 'Stop must discard its partial timing');
    assert.equal(stopped.votes.length, 0);
    assert.match(await status(p), /stop|interrupt|restart/i, 'stopped answers need an explanation and recovery');
    assert.equal(await p.locator('#restartTrial').isEnabled(), true);
    await p.locator('#restartTrial').tap(); await ready(p); await voteReady(p);
    assert.equal(await note(p).inputValue(), editedText);
    await p.locator('#voteTie').tap();
    const voted = await output(p);
    assert.equal(voted.votes.length, 1, 'a normal answer must work after recovery');
    assert.equal(voted.measurementRuns.length, clean.measurementRuns.length);
    assert.equal(voted.measurements.length, voted.measurementRuns.length * 2, 'choosing should reveal two full per-side measurement rows per completed run');
    await snapshot(p, 'stop-restart-answer');
  });
  await journey('legacy result-only storage restores first choice and saved draft without mutation', async p => {
    await typeNote(p, 'AUTOMATION ONLY: legacy first blind comment.');
    await p.locator('#voteA').tap();
    const first = clone((await output(p)).votes[0]);
    const text = 'AUTOMATION ONLY: legacy stored comment draft after answer.';
    await typeNote(p, text);
    const legacy = clone(await output(p));
    const seed = legacy.sessionSeed, trial = legacy.current.trialId;
    legacy.buildId = '7f6a64196156a3d2'; // The pre-fix public build, using its result-only storage contract.
    delete legacy.measurementRuns;
    delete legacy.comments;
    // Migration setup is the only direct storage mutation: it represents an older
    // installed page. All observations and assertions still use the ordinary UI.
    await p.evaluate(value => {
      localStorage.removeItem('he-quality-study-session');
      localStorage.setItem('he-quality-study-result', JSON.stringify(value));
    }, legacy);
    await p.reload({ waitUntil: 'domcontentloaded' }); await ready(p);
    const restored = await output(p);
    assert.equal(restored.sessionSeed, seed);
    assert.equal(restored.current.trialId, trial);
    assert.deepEqual(restored.votes[0], first, 'migrating a legacy key must preserve the complete first vote object');
    assert.deepEqual(restored.draftNotes, legacy.draftNotes, 'migrating must preserve every stored draft entry');
    assert.equal(await note(p).inputValue(), text);
    assert.equal(await note(p).isEditable(), true);
    await snapshot(p, 'legacy-session-restored');
  });

} finally {
  await writeFile(`${out}/interaction-results.json`, JSON.stringify({ url, results, errors, evidence }, null, 2));
  await browser.close();
}
if (errors.length) console.error('PAGE ERRORS', JSON.stringify(errors));
if (results.some(r => !r.ok) || errors.length) process.exitCode = 1;

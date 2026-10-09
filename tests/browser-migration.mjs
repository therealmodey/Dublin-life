import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:3100';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const outputDir = process.env.OUTPUT_DIR || 'docs/verification/current';
const cities = ['lagos', 'abuja', 'dublin'];
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];
const cameraDelta = (before, after) => {
  if (!before?.position || !before?.target || !after?.position || !after?.target) return null;
  return Math.max(
    ...after.position.map((value, index) => Math.abs(value - before.position[index])),
    ...after.target.map((value, index) => Math.abs(value - before.target[index])),
  );
};
async function waitForCameraSettled(page) {
  const settled = await page.evaluate(async () => {
    let previous = null, stableFrames = 0;
    for (let frame = 0; frame < 150; frame++) {
      await new Promise(requestAnimationFrame);
      const camera = window.__mapExplorer?.getSnapshot?.()?.camera;
      if (!camera) return false;
      const values = [...camera.position, ...camera.target];
      const delta = previous ? Math.max(...values.map((value, index) => Math.abs(value - previous[index]))) : Infinity;
      stableFrames = delta < .002 ? stableFrames + 1 : 0;
      if (stableFrames >= 6) return true;
      previous = values;
    }
    return false;
  });
  assert(settled, 'Camera controls did not settle before the view was saved');
}

await fs.mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const report = { baseUrl, capturedAt: new Date().toISOString(), pages: [] };

try {
  for (const viewport of viewports) {
    for (const city of cities) {
      const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
      const page = await context.newPage();
      const consoleErrors = [];
      const pageErrors = [];
      const failedRequests = [];
      const badResponses = [];
      const modelRequests = [];
      page.on('console', message => {
        if (message.type() === 'error') consoleErrors.push(message.text());
      });
      page.on('pageerror', error => pageErrors.push(error.message));
      page.on('requestfailed', request => failedRequests.push({ url: request.url(), error: request.failure()?.errorText }));
      page.on('response', response => {
        if (/\.glb(?:[?#]|$)/i.test(response.url())) modelRequests.push({ url: response.url(), status: response.status(), contentType: response.headers()['content-type'] || null });
        if (response.status() >= 400) badResponses.push({ url: response.url(), status: response.status() });
      });

      await page.goto(`${baseUrl}/?city=${city}`, { waitUntil: 'networkidle', timeout: 60000 });
      await page.locator('#map[data-ready="true"]').waitFor({ timeout: 30000 }).catch(() => {});
      await page.waitForTimeout(1200);
      const screenshot = `${city}-${viewport.name}.png`;
      await page.screenshot({ path: path.join(outputDir, screenshot), fullPage: true });
      const snapshot = await page.evaluate(() => {
        const map = document.querySelector('#map');
        const canvas = map?.querySelector('canvas');
        const debugSnapshot = window.__mapExplorer?.getSnapshot?.() ?? null;
        const labels = [...document.querySelectorAll('#labels .label')];
        return {
          title: document.title,
          city: map?.dataset.city || null,
          ready: map?.dataset.ready === 'true',
          canvas: canvas ? { width: canvas.width, height: canvas.height, rect: canvas.getBoundingClientRect().toJSON() } : null,
          runtime: debugSnapshot,
          hasDevelopmentSeek: typeof window.__mapExplorer?.seekDublinMotion === 'function',
          labels: labels.map(button => ({
            name: button.getAttribute('aria-label')?.replace(/^Select /, ''),
            visible: !button.hidden && button.getBoundingClientRect().width > 0,
          })),
          bodyText: document.body.innerText,
          controls: [...document.querySelectorAll('button')].map(button => ({
            text: button.innerText.trim(), aria: button.getAttribute('aria-label'), title: button.title,
          })),
        };
      });
      report.pages.push({ city, viewport, screenshot, snapshot, consoleErrors, pageErrors, failedRequests, badResponses, modelRequests });
      await context.close();
      console.log(`${city} ${viewport.name}: ${snapshot.ready ? 'ready' : 'not ready'}, ${snapshot.labels.filter(label => label.visible).length} visible labels, ${consoleErrors.length} console errors, ${pageErrors.length} page errors`);
    }
  }

  // Exercise the existing user-facing controls on a single desktop session.
  // These checks intentionally target behavior and accessible labels rather than
  // Three.js implementation details, so they remain useful after framework migration.
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`${baseUrl}/?city=lagos`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.locator('#map[data-ready="true"]').waitFor({ timeout: 30000 });
  const interactions = [];
  const record = async (name, state) => interactions.push({ name, state });

  for (const id of ['names', 'homes', 'boards']) {
    const toggle = page.locator(`#${id}`);
    assert.equal(await toggle.count(), 1, `Missing ${id} toggle`);
    const before = await toggle.getAttribute('aria-pressed');
    await toggle.click();
    const after = await toggle.getAttribute('aria-pressed');
    assert.notEqual(after, before, `${id} toggle did not change pressed state`);
    await record(id, { before, after });
    await toggle.click();
  }

  await page.waitForFunction(() => document.querySelectorAll('#labels .label:not([hidden])').length > 0, null, { timeout: 15000 });
  const label = page.locator('#labels .label:visible').first();
  const expectedPlaceName = (await label.getAttribute('aria-label'))?.replace(/^Select /, '');
  assert.ok(expectedPlaceName, 'A visible landmark label should be available for selection');
  await label.click();
  await page.locator('#detail:not([hidden])').waitFor();
  const selectedName = (await page.locator('#place-name').innerText()).trim();
  assert.ok(selectedName.includes(expectedPlaceName), `Selected place should be ${expectedPlaceName}`);
  await record('place-select', { name: selectedName, expectedPlaceName, district: (await page.locator('#district').innerText()).trim() });
  const cameraBeforeFocus = await page.evaluate(() => window.__mapExplorer?.getSnapshot?.()?.camera ?? null);
  await page.getByRole('button', { name: 'Look closer' }).click();
  await page.waitForTimeout(700);
  const cameraAfterFocus = await page.evaluate(() => window.__mapExplorer?.getSnapshot?.()?.camera ?? null);
  const focusDelta = cameraDelta(cameraBeforeFocus, cameraAfterFocus);
  await record('focus', { detailVisible: await page.locator('#detail').isVisible(), cameraBefore: cameraBeforeFocus, cameraAfter: cameraAfterFocus, cameraDelta: focusDelta });
  if (focusDelta !== null) assert.ok(focusDelta > 0.05, 'Look closer did not move the camera');
  await page.getByRole('button', { name: 'Close landmark details' }).click();
  assert.equal(await page.locator('#detail').isVisible(), false, 'Place detail did not close');
  await record('place-exit', { detailVisible: false });

  // Walking starts from a clean scene so an in-flight focus animation cannot
  // intercept the label or leave the camera transition unsettled.
  await page.goto(`${baseUrl}/?city=lagos`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.locator('#map[data-ready="true"]').waitFor({ timeout: 30000 });
  const firstVisibleLabel = page.locator('#labels .label:visible').first();
  const walkPlace = (await firstVisibleLabel.getAttribute('aria-label'))?.replace(/^Select /, '');
  await firstVisibleLabel.click();
  await page.locator('#detail:not([hidden])').waitFor();
  assert.ok((await page.locator('#place-name').innerText()).includes(walkPlace), 'Selected place changed before walking');
  await page.getByRole('button', { name: 'Walk here' }).click();
  await page.waitForFunction(() => window.__mapExplorer?.getSnapshot?.()?.state?.walking === true, null, { timeout: 10000 });
  assert.equal(await page.locator('#leave-walk').isVisible(), true, 'Walk here did not show walking controls');
  await record('walk-here', { place: walkPlace, state: await page.evaluate(() => window.__mapExplorer?.getSnapshot?.()?.state ?? null) });
  await page.getByRole('button', { name: 'Exit walk' }).click();
  await page.waitForFunction(() => window.__mapExplorer?.getSnapshot?.()?.state?.walking === false, null, { timeout: 10000 });
  assert.equal(await page.locator('#leave-walk').isVisible(), false, 'Exit walk did not hide walking controls');
  await record('walk-exit', { visible: await page.locator('#leave-walk').isVisible() });
  await page.locator('#walk').click();
  await page.waitForFunction(() => window.__mapExplorer?.getSnapshot?.()?.state?.walking === true, null, { timeout: 10000 });
  await record('walk-toggle-on', { pressed: await page.locator('#walk').getAttribute('aria-pressed') });
  await page.getByRole('button', { name: 'Exit walk' }).click();
  await page.waitForFunction(() => window.__mapExplorer?.getSnapshot?.()?.state?.walking === false, null, { timeout: 10000 });

  for (const district of ['mainland', 'island', 'lekki', 'all']) {
    const button = page.locator(`[data-district="${district}"]`);
    assert.equal(await button.count(), 1, `Missing ${district} district`);
    const before = await page.evaluate(() => window.__mapExplorer?.getSnapshot?.()?.camera ?? null);
    await button.click();
    await page.waitForTimeout(700);
    const after = await page.evaluate(() => window.__mapExplorer?.getSnapshot?.()?.camera ?? null);
    const delta = cameraDelta(before, after);
    assert.match(await button.getAttribute('class') || '', /active/, `${district} district did not become active`);
    if (delta !== null) assert.ok(delta > 0.05, `${district} district did not move the camera`);
    await record(`district-${district}`, { active: await button.getAttribute('class'), cameraDelta: delta });
  }
  for (const id of ['plus', 'minus', 'reset']) {
    if (id === 'reset') { await page.locator('#plus').click(); await page.waitForTimeout(100); }
    const before = await page.evaluate(() => window.__mapExplorer?.getSnapshot?.()?.camera ?? null);
    await page.locator(`#${id}`).click();
    await page.waitForTimeout(250);
    const after = await page.evaluate(() => window.__mapExplorer?.getSnapshot?.()?.camera ?? null);
    const delta = cameraDelta(before, after);
    if (delta !== null) assert.ok(delta > 0.001, `${id} did not change the camera`);
    await record(id, { cameraDelta: delta });
  }

  const canvas = page.locator('#map canvas').first();
  const dragMap = async () => {
    if (!(await canvas.count())) return null;
    const box = await canvas.boundingBox();
    if (!box) return null;
    const before = await page.evaluate(() => window.__mapExplorer?.getSnapshot?.()?.camera ?? null);
    await page.mouse.move(box.x + box.width * 0.55, box.y + box.height * 0.55);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.62, box.y + box.height * 0.59, { steps: 5 });
    await page.mouse.up();
    await waitForCameraSettled(page);
    const after = await page.evaluate(() => window.__mapExplorer?.getSnapshot?.()?.camera ?? null);
    const delta = cameraDelta(before, after);
    if (delta !== null) assert.ok(delta > 0.05, 'Dragging the map did not move the camera');
    return { before, after, delta };
  };
  if (await canvas.count()) {
    await record('drag-lagos', await dragMap());
  }

  const savedCameras = { lagos: await page.evaluate(() => window.__mapExplorer?.getSnapshot?.()?.camera ?? null) };
  for (const city of ['abuja', 'dublin', 'lagos', 'abuja', 'dublin']) {
    const runtimeBefore = await page.evaluate(() => window.__mapExplorer?.getSnapshot?.() ?? null);
    await page.locator(`[data-city="${city}"]`).click();
    await page.waitForFunction(expected => document.querySelector('#map')?.dataset.city === expected, city, { timeout: 30000 });
    await page.waitForFunction(() => window.__mapExplorer?.getSnapshot?.()?.ready === true, null, { timeout: 30000 });
    await waitForCameraSettled(page);
    const runtimeAfter = await page.evaluate(() => window.__mapExplorer?.getSnapshot?.() ?? null);
    let cameraRoundTrip = null;
    if (savedCameras[city] && runtimeAfter?.camera) {
      const delta = cameraDelta(savedCameras[city], runtimeAfter.camera);
      cameraRoundTrip = { expected: savedCameras[city], actual: runtimeAfter.camera, maxDelta: delta };
      assert.ok(delta === null || delta < 0.5, `Camera state for ${city} was not preserved (delta ${delta})`);
    } else {
      savedCameras[city] = runtimeAfter?.camera ?? null;
      const drag = await dragMap();
      savedCameras[city] = drag?.after ?? savedCameras[city];
    }
    await record(`city-${city}`, { mapCity: await page.locator('#map').getAttribute('data-city'), url: page.url(), runtimeBefore, runtimeAfter, cameraRoundTrip });
  }
  assert.deepEqual(errors, [], `Browser page errors during interactions: ${errors.join('; ')}`);
  report.interactions = interactions;
  report.interactionErrors = errors;
  await context.close();
  for (const result of report.pages) {
    const scope = `${result.city} ${result.viewport.name}`;
    assert.equal(result.snapshot.ready, true, `${scope} map did not become ready`);
    if (process.env.EXPECT_PRODUCTION === '1') assert.equal(result.snapshot.hasDevelopmentSeek, false, `${scope} exposes a development-only verification hook`);
    assert.deepEqual(result.consoleErrors, [], `${scope} raised console errors`);
    assert.deepEqual(result.pageErrors, [], `${scope} raised page errors`);
    assert.deepEqual(result.failedRequests, [], `${scope} has failed requests`);
    assert.deepEqual(result.badResponses, [], `${scope} has HTTP errors`);
    const invalidModels = result.modelRequests.filter(request => request.status >= 400 || /text\/html/i.test(request.contentType || ''));
    assert.deepEqual(invalidModels, [], `${scope} has missing or HTML-fallback GLB assets`);
  }
  assert.deepEqual(errors, [], 'Browser interaction pass raised page errors');
} catch (error) {
  report.failure = error.message;
  throw error;
} finally {
  await fs.writeFile(path.join(outputDir, 'browser-report.json'), `${JSON.stringify(report, null, 2)}\n`);
  await browser.close();
}

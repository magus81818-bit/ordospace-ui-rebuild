import childProcess from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = "http://127.0.0.1:5174/";
const dashboardMode = process.argv.includes("--dashboard");
const adminMode = process.argv.includes("--admin");
const clientMode = process.argv.includes("--client");
const workerMode = process.argv.includes("--worker");
const allMode = process.argv.includes("--all");
const accessibilityMode = process.argv.includes("--accessibility");
const longContentMode = process.argv.includes("--long-content");
const qualityMode = allMode || accessibilityMode || longContentMode;
const outputDir = qualityMode
  ? path.join(root, "artifacts", "ui-screenshots", "round09", accessibilityMode ? "accessibility" : longContentMode ? "long-content" : "regression")
  : path.join(root, "docs", "ui-migration", "screenshots", workerMode ? "round-08" : clientMode ? "round-07" : adminMode ? "round-06" : dashboardMode ? "round-05" : "round-04");
const browserPath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const users = {
  admin: ["user-admin-01", "Hana Lee", "admin@ordospace.test"],
  worker: ["user-worker-ux", "Min Park", "ux@ordospace.test"],
  workerDev: ["user-worker-dev", "Joon Choi", "dev@ordospace.test"],
  client: ["user-client-01", "Dohyung Kim", "client@example.test"],
};
const shellScenarios = [
  ["admin-desktop-1440", 1440, 900, "admin", "/workspace/admin"],
  ["admin-tablet-768", 768, 1024, "admin", "/workspace/admin"],
  ["admin-desktop-1024", 1024, 768, "admin", "/workspace/admin"],
  ["admin-mobile-nav-open-393", 393, 852, "admin", "/workspace/admin", "menu"],
  ["worker-desktop-1440", 1440, 900, "worker", "/workspace/worker"],
  ["client-mobile-393", 393, 852, "client", "/workspace/client"],
  ["detail-route-active-navigation", 1280, 800, "admin", "/workspace/admin/cards/card-002"],
  ["user-menu-open", 1440, 900, "admin", "/workspace/admin", "user"],
  ["admin-wide-1920", 1920, 1080, "admin", "/workspace/admin"],
];
const dashboardScenarios = [
  ["admin-dashboard-1440", 1440, 900, "admin", "/workspace/admin", "dashboard"],
  ["admin-dashboard-393", 393, 852, "admin", "/workspace/admin", "dashboard"],
  ["worker-dashboard-1440", 1440, 900, "worker", "/workspace/worker", "dashboard"],
  ["worker-dashboard-393", 393, 852, "worker", "/workspace/worker", "dashboard"],
  ["client-dashboard-1440", 1440, 900, "client", "/workspace/client", "dashboard"],
  ["client-dashboard-393", 393, 852, "client", "/workspace/client", "dashboard"],
  ["module-card-table-1024", 1024, 768, "admin", "/workspace/admin", "dashboard"],
  ["admin-dashboard-768", 768, 1024, "admin", "/workspace/admin", "dashboard"],
  ["admin-dashboard-1920", 1920, 1080, "admin", "/workspace/admin", "dashboard"],
  ["filtered-empty-state", 393, 852, "worker", "/workspace/worker", "filter-empty"],
  ["detail-common-surface", 1280, 800, "admin", "/workspace/admin/cards/card-002", "detail"],
];
const adminScenarios = [
  ["admin-operations-1440", 1440, 900, "admin", "/workspace/admin", "admin-root"],
  ["admin-operations-393", 393, 852, "admin", "/workspace/admin", "admin-root"],
  ["admin-review-queue", 1280, 800, "admin", "/workspace/admin", "admin-root"],
  ["admin-create-panel", 1440, 900, "admin", "/workspace/admin", "admin-create"],
  ["admin-detail-review-1440", 1440, 900, "admin", "/workspace/admin/cards/card-003", "admin-review"],
  ["admin-detail-review-393", 393, 852, "admin", "/workspace/admin/cards/card-003", "admin-review"],
  ["admin-detail-client-review", 1280, 800, "admin", "/workspace/admin/cards/card-002", "admin-readonly"],
  ["admin-detail-revision", 1280, 800, "admin", "/workspace/admin/cards/card-004", "admin-readonly"],
  ["admin-detail-approved", 1280, 800, "admin", "/workspace/admin/cards/card-001", "admin-readonly"],
  ["admin-operations-768", 768, 1024, "admin", "/workspace/admin", "admin-root"],
  ["admin-operations-1024", 1024, 768, "admin", "/workspace/admin", "admin-root"],
  ["admin-operations-1920", 1920, 1080, "admin", "/workspace/admin", "admin-root"],
];
const clientScenarios = [
  ["client-approval-root-1440", 1440, 900, "client", "/workspace/client", "client-root"],
  ["client-approval-root-393", 393, 852, "client", "/workspace/client", "client-root"],
  ["client-decision-queue", 1280, 800, "client", "/workspace/client", "client-root"],
  ["client-detail-review-1440", 1440, 900, "client", "/workspace/client/cards/card-002", "client-review"],
  ["client-detail-review-393", 393, 852, "client", "/workspace/client/cards/card-002", "client-review"],
  ["client-revision-form", 1280, 800, "client", "/workspace/client/cards/card-002", "client-revision-form"],
  ["client-revision-error", 1280, 800, "client", "/workspace/client/cards/card-002", "client-revision-error"],
  ["client-detail-approved", 1280, 800, "client", "/workspace/client/cards/card-001", "client-readonly"],
  ["client-detail-revision-requested", 1280, 800, "client", "/workspace/client/cards/card-004", "client-readonly"],
  ["client-approval-root-768", 768, 1024, "client", "/workspace/client", "client-root"],
  ["client-approval-root-1024", 1024, 768, "client", "/workspace/client", "client-root"],
  ["client-approval-root-1920", 1920, 1080, "client", "/workspace/client", "client-root"],
];
const workerScenarios = [
  ["worker-workspace-root-1440", 1440, 900, "worker", "/workspace/worker", "worker-root", "workerDev"],
  ["worker-workspace-root-393", 393, 852, "worker", "/workspace/worker", "worker-root", "workerDev"],
  ["worker-active-queue", 1280, 800, "worker", "/workspace/worker", "worker-root", "workerDev"],
  ["worker-revision-queue", 1280, 800, "worker", "/workspace/worker", "worker-root", "worker"],
  ["worker-detail-editable-1440", 1440, 900, "worker", "/workspace/worker/cards/card-005", "worker-editable", "workerDev"],
  ["worker-detail-editable-393", 393, 852, "worker", "/workspace/worker/cards/card-005", "worker-editable", "workerDev"],
  ["worker-update-validation", 1280, 800, "worker", "/workspace/worker/cards/card-005", "worker-validation", "workerDev"],
  ["worker-submit-ready", 1280, 800, "worker", "/workspace/worker/cards/card-005", "worker-submit-ready", "workerDev"],
  ["worker-detail-revision", 1280, 800, "worker", "/workspace/worker/cards/card-004", "worker-editable", "worker"],
  ["worker-detail-admin-review", 1280, 800, "worker", "/workspace/worker/cards/card-003", "worker-readonly", "workerDev"],
  ["worker-detail-client-review", 1280, 800, "worker", "/workspace/worker/cards/card-002", "worker-readonly", "worker"],
  ["worker-detail-approved", 1280, 800, "worker", "/workspace/worker/cards/card-001", "worker-readonly", "worker"],
];
const accessibilityScenarios = [
  ["skip-link-focus", 1440, 900, "admin", "/workspace/admin", "skip-focus"],
  ["mobile-sheet-open-393", 393, 852, "admin", "/workspace/admin", "menu"],
  ["user-menu-open", 1440, 900, "admin", "/workspace/admin", "user"],
  ["client-revision-error-393", 393, 852, "client", "/workspace/client/cards/card-002", "client-revision-error"],
  ["worker-submit-disabled-393", 393, 852, "worker", "/workspace/worker/cards/card-005", "worker-disabled", "workerDev"],
  ["zoom-200", 1440, 900, "admin", "/workspace/admin/cards/card-003", "zoom"],
  ["reduced-motion", 393, 852, "client", "/workspace/client", "reduced-motion"],
];
const longContentScenarios = [
  ["long-title", 393, 852, "admin", "/workspace/admin/cards/card-003", "long-title"],
  ["long-project-name", 393, 852, "client", "/workspace/client/cards/card-002", "long-project"],
  ["long-user-name", 768, 1024, "worker", "/workspace/worker", "long-user", "workerDev"],
  ["long-email", 1440, 900, "admin", "/workspace/admin", "long-email"],
  ["long-worker-note", 393, 852, "worker", "/workspace/worker/cards/card-005", "long-note", "workerDev"],
  ["long-revision-reason", 393, 852, "worker", "/workspace/worker/cards/card-004", "long-revision", "worker"],
  ["long-activity", 393, 852, "client", "/workspace/client/cards/card-002", "long-activity"],
  ["unknown-status", 393, 852, "admin", "/workspace/admin/cards/card-003", "unknown-status"],
];
const round09Scenarios = [
  ["admin-root-320", 320, 800, "admin", "/workspace/admin", "admin-root"],
  ["desktop-shell-1440", 1440, 900, "admin", "/workspace/admin", "admin-root"],
  ["tablet-rail-768", 768, 1024, "admin", "/workspace/admin", "admin-root"],
  ["desktop-shell-1024", 1024, 768, "admin", "/workspace/admin", "admin-root"],
  ["wide-shell-1920", 1920, 1080, "admin", "/workspace/admin", "admin-root"],
  ["public-overview-393", 393, 852, "admin", "/", "public"],
  ["auth-form-393", 393, 852, "admin", "/auth", "auth"],
  ["not-found-393", 393, 852, "admin", "/not-a-route", "not-found"],
  ["admin-root-393", 393, 852, "admin", "/workspace/admin", "admin-root"],
  ["admin-detail-review-1440", 1440, 900, "admin", "/workspace/admin/cards/card-003", "admin-review"],
  ["admin-detail-approved-393", 393, 852, "admin", "/workspace/admin/cards/card-001", "admin-readonly"],
  ["client-root-1440", 1440, 900, "client", "/workspace/client", "client-root"],
  ["client-root-393", 393, 852, "client", "/workspace/client", "client-root"],
  ["client-detail-review-1440", 1440, 900, "client", "/workspace/client/cards/card-002", "client-review"],
  ["client-approved-readonly", 1280, 800, "client", "/workspace/client/cards/card-001", "client-readonly"],
  ["worker-root-1440", 1440, 900, "worker", "/workspace/worker", "worker-root", "workerDev"],
  ["worker-root-393", 393, 852, "worker", "/workspace/worker", "worker-root", "workerDev"],
  ["worker-detail-editable-1440", 1440, 900, "worker", "/workspace/worker/cards/card-005", "worker-editable", "workerDev"],
  ["worker-revision-393", 393, 852, "worker", "/workspace/worker/cards/card-004", "worker-editable", "worker"],
  ["worker-approved-readonly", 1280, 800, "worker", "/workspace/worker/cards/card-001", "worker-readonly", "worker"],
  ...accessibilityScenarios,
  ...longContentScenarios,
];
const scenarios = allMode ? round09Scenarios : accessibilityMode ? accessibilityScenarios : longContentMode ? longContentScenarios : workerMode ? workerScenarios : clientMode ? clientScenarios : adminMode ? adminScenarios : dashboardMode ? dashboardScenarios : shellScenarios;

class Cdp {
  constructor(url) { this.url = url; this.id = 0; this.pending = new Map(); }
  async connect() {
    this.ws = new WebSocket(this.url);
    await new Promise((resolve, reject) => { this.ws.addEventListener("open", resolve, { once: true }); this.ws.addEventListener("error", reject, { once: true }); });
    this.ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (!message.id || !this.pending.has(message.id)) return;
      const { resolve, reject } = this.pending.get(message.id); this.pending.delete(message.id);
      message.error ? reject(new Error(JSON.stringify(message.error))) : resolve(message.result || {});
    });
  }
  send(method, params = {}) {
    const id = ++this.id; this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
  close() { this.ws?.close(); }
}

function freePort() {
  return new Promise((resolve, reject) => { const server = net.createServer(); server.once("error", reject); server.listen(0, "127.0.0.1", () => { const { port } = server.address(); server.close(() => resolve(port)); }); });
}

async function waitFor(url, attempts = 100) {
  for (let i = 0; i < attempts; i += 1) {
    try { const response = await fetch(url); if (response.ok) return await response.json().catch(() => true); } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || "Runtime evaluation failed");
  return result.result?.value;
}

fs.mkdirSync(outputDir, { recursive: true });
const vite = childProcess.spawn(process.execPath, [path.join(root, "node_modules", "vite", "bin", "vite.js"), "--host", "127.0.0.1", "--port", "5174", "--strictPort"], { cwd: path.join(root, "apps", "web"), stdio: "ignore", windowsHide: true });
await waitFor(baseUrl);
const debugPort = await freePort();
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "ordo-shell-qa-"));
const chrome = childProcess.spawn(browserPath, [`--remote-debugging-port=${debugPort}`, `--user-data-dir=${profile}`, "--headless=new", "--disable-gpu", "--disable-background-networking", "--disable-extensions", "--no-first-run", "--window-size=1440,900", baseUrl], { stdio: "ignore", windowsHide: true });
let client;

try {
  const targets = await waitFor(`http://127.0.0.1:${debugPort}/json/list`);
  const target = targets.find((item) => item.type === "page" && item.webSocketDebuggerUrl);
  client = new Cdp(target.webSocketDebuggerUrl);
  await client.connect();
  await client.send("Page.enable"); await client.send("Runtime.enable");
  const results = [];

  for (const [name, width, height, role, pathname, action, userKey = role] of scenarios) {
    await client.send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768, screenWidth: width, screenHeight: height });
    await client.send("Emulation.setPageScaleFactor", { pageScaleFactor: 1 });
    await client.send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: action === "reduced-motion" ? "reduce" : "no-preference" }] });
    const [userId, userName, email] = users[userKey];
    const session = { version: 1, userId, role, name: userName, email, signedInAt: new Date(0).toISOString() };
    await client.send("Page.navigate", { url: baseUrl });
    await new Promise((resolve) => setTimeout(resolve, 250));
    await evaluate(client, `localStorage.setItem("ordospace.reactMvp.session.v1", ${JSON.stringify(JSON.stringify(session))}); location.hash=${JSON.stringify(pathname)}; location.reload()`);
    await new Promise((resolve) => setTimeout(resolve, 650));
    if (action === "worker-submit-ready") {
      await evaluate(client, `(() => { const key = 'ordospace.reactMvp.moduleCards.v1'; const state = JSON.parse(localStorage.getItem(key)); const card = state.moduleCards.find((item) => item.id === 'card-005'); Object.assign(card, { progress: 100, qcStatus: 'passed', status: 'qc_ready' }); localStorage.setItem(key, JSON.stringify(state)); location.reload(); })()`);
      await new Promise((resolve) => setTimeout(resolve, 650));
    }
    if (action === "skip-focus") await evaluate(client, `document.querySelector('.skip-link')?.focus()`);
    if (action === "zoom") await client.send("Emulation.setPageScaleFactor", { pageScaleFactor: 2 });
    if (action?.startsWith("long-") || action === "unknown-status") {
      await evaluate(client, `(() => {
        const long = 'ORDOSPACE quality fixture — '.repeat(14);
        const mode = ${JSON.stringify(action)};
        const selectors = {
          'long-title': '.admin-card-review-page__identity h1',
          'long-project': '.client-approval-detail__identity span',
          'long-user': '.user-menu-trigger__copy strong',
          'long-email': '.user-menu-trigger__copy small',
          'long-note': '.worker-update-panel textarea',
          'long-revision': '.worker-revision-notice p',
          'long-activity': '.client-review-history__list strong',
          'unknown-status': '.ordo-status-badge'
        };
        const target = document.querySelector(selectors[mode]);
        if (!target) throw new Error('Missing long-content target for ' + mode);
        if ('value' in target) target.value = long.slice(0, 240); else target.textContent = mode === 'unknown-status' ? '알 수 없는 상태' : long;
        target.scrollIntoView({ block: 'center' });
      })()`);
    }
    if (action === "menu") await evaluate(client, `document.querySelector('[aria-label="메뉴 열기"]')?.click()`);
    if (action === "user") await evaluate(client, `(() => { const trigger = document.querySelector('.app-header [aria-label="사용자 메뉴 열기"]'); trigger?.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, button: 0, pointerType: 'mouse' })); trigger?.click(); })()`);
    if (action === "filter-empty") await evaluate(client, `(() => { const button = Array.from(document.querySelectorAll('.ordo-filter-tabs button')).find((item) => /0$/.test(item.textContent?.trim() || '')); button?.click(); })()`);
    if (action === "admin-create") await evaluate(client, `document.querySelector('.admin-create-area')?.scrollIntoView({ block: 'start' })`);
    if (action === "client-revision-form" || action === "client-revision-error") await evaluate(client, `document.querySelectorAll('.client-decision-panel input[type="radio"]')[1]?.click()`);
    await new Promise((resolve) => setTimeout(resolve, 180));
    if (action === "client-revision-error") {
      await evaluate(client, `document.querySelector('.client-decision-panel form')?.dispatchEvent(new SubmitEvent('submit', { bubbles: true, cancelable: true }))`);
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
    if (action === "client-revision-form" || action === "client-revision-error") {
      await evaluate(client, `document.querySelector(${action === "client-revision-error" ? "'.form-feedback'" : "'.client-decision-panel'"})?.scrollIntoView({ block: 'center' })`);
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
    if (action === "worker-validation") {
      await evaluate(client, `document.querySelector('.worker-update-panel form')?.dispatchEvent(new SubmitEvent('submit', { bubbles: true, cancelable: true }))`);
      await new Promise((resolve) => setTimeout(resolve, 120));
      await evaluate(client, `document.querySelector('.form-feedback')?.scrollIntoView({ block: 'center' })`);
    }
    if (action === "worker-submit-ready") await evaluate(client, `document.querySelector('.worker-submit-panel')?.scrollIntoView({ block: 'center' })`);
    const metrics = await evaluate(client, `(() => ({
      width: innerWidth,
      documentOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      desktopSidebar: document.querySelector('.desktop-sidebar') ? getComputedStyle(document.querySelector('.desktop-sidebar')).display !== 'none' : false,
      compactRail: document.querySelector('.compact-sidebar-rail') ? getComputedStyle(document.querySelector('.compact-sidebar-rail')).display !== 'none' : false,
      mobileHeader: document.querySelector('.mobile-header') ? getComputedStyle(document.querySelector('.mobile-header')).display !== 'none' : false,
      activeNavigation: document.querySelector('[aria-current="page"]')?.textContent?.trim() || '',
      pageTitle: document.querySelector(${width < 768 ? "'.mobile-header__title strong'" : "'.shell-page-heading__title'"})?.textContent || '',
      dialogOpen: Boolean(document.querySelector('[role="dialog"]')),
      menuOpen: Boolean(document.querySelector('[role="menu"]'))
      ,h1Count: document.querySelectorAll('main h1').length
      ,mainCount: document.querySelectorAll('main').length
      ,navigationLabels: Array.from(document.querySelectorAll('nav')).map((item) => item.getAttribute('aria-label')).filter(Boolean)
      ,focused: document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim().slice(0, 80) || document.activeElement?.tagName
    }))()`);
    if (metrics.documentOverflow) throw new Error(`Document overflow in ${name}`);
    if (pathname.startsWith("/workspace/") && width >= 1024 && !metrics.desktopSidebar) throw new Error(`Desktop sidebar missing in ${name}`);
    if (pathname.startsWith("/workspace/") && width >= 768 && width < 1024 && !metrics.compactRail) throw new Error(`Compact rail missing in ${name}`);
    if (pathname.startsWith("/workspace/") && width < 768 && (!metrics.mobileHeader || metrics.desktopSidebar || metrics.compactRail)) throw new Error(`Mobile shell mismatch in ${name}`);
    if (action === "menu" && !metrics.dialogOpen) throw new Error(`Mobile Sheet did not open in ${name}`);
    if (action === "user" && !metrics.menuOpen) throw new Error(`User menu did not open in ${name}`);
    if ((action === "dashboard" || action === "filter-empty") && await evaluate(client, `document.querySelectorAll('.ordo-metric-card').length < 4 || !document.querySelector('.ordo-filter-tabs')`)) throw new Error(`Dashboard patterns missing in ${name}`);
    if (action === "dashboard" && !(await evaluate(client, `Boolean(document.querySelector('.ordo-status-badge'))`))) throw new Error(`Dashboard status pattern missing in ${name}`);
    if (action === "filter-empty" && !(await evaluate(client, `Boolean(document.querySelector('.ordo-empty-state'))`))) throw new Error(`Filtered empty state missing in ${name}`);
    if (action === "detail" && !(await evaluate(client, `Boolean(document.querySelector('.detail-stack .ordo-status-badge'))`))) throw new Error(`Detail common status surface missing in ${name}`);
    if ((action === "admin-root" || action === "admin-create") && !(await evaluate(client, `Boolean(document.querySelector('.admin-review-queue'))`))) throw new Error(`Admin review queue missing in ${name}`);
    if (action === "admin-create" && !(await evaluate(client, `Boolean(document.querySelector('.admin-create-area form'))`))) throw new Error(`Admin create form missing in ${name}`);
    if ((action === "admin-review" || action === "admin-readonly") && !(await evaluate(client, `Boolean(document.querySelector('.admin-review-summary')) && Boolean(document.querySelector('.admin-action-panel'))`))) throw new Error(`Admin detail IA missing in ${name}`);
    if (action === "admin-review" && !(await evaluate(client, `document.body.innerText.includes('Send to client review')`))) throw new Error(`Admin send action missing in ${name}`);
    if (action === "admin-readonly" && await evaluate(client, `document.body.innerText.includes('Send to client review') && Boolean(document.querySelector('.admin-action-panel form'))`)) throw new Error(`Readonly admin detail exposes send action in ${name}`);
    if (action === "client-root" && !(await evaluate(client, `Boolean(document.querySelector('.client-decision-queue')) && document.querySelectorAll('.ordo-metric-card').length >= 4`))) throw new Error(`Client approval root IA missing in ${name}`);
    if ((action === "client-review" || action === "client-revision-form" || action === "client-revision-error" || action === "client-readonly") && !(await evaluate(client, `Boolean(document.querySelector('.client-delivery-summary')) && Boolean(document.querySelector('.client-decision-area'))`))) throw new Error(`Client detail IA missing in ${name}`);
    if ((action === "client-review" || action === "client-revision-form" || action === "client-revision-error") && !(await evaluate(client, `Boolean(document.querySelector('.client-decision-panel form'))`))) throw new Error(`Client decision form missing in ${name}`);
    if (action === "client-revision-error" && !(await evaluate(client, `document.body.innerText.includes('Revision note is required')`))) throw new Error(`Client revision validation missing in ${name}`);
    if (action === "client-readonly" && await evaluate(client, `Boolean(document.querySelector('.client-decision-panel form'))`)) throw new Error(`Readonly Client detail exposes decision form in ${name}`);
    if (action === "worker-root" && !(await evaluate(client, `Boolean(document.querySelector('.worker-work-queue')) && document.querySelectorAll('.ordo-metric-card').length >= 4`))) throw new Error(`Worker workspace IA missing in ${name}`);
    if ((action === "worker-editable" || action === "worker-validation" || action === "worker-submit-ready" || action === "worker-readonly") && !(await evaluate(client, `Boolean(document.querySelector('.worker-context-summary')) && Boolean(document.querySelector('.worker-submission-area'))`))) throw new Error(`Worker detail IA missing in ${name}`);
    if ((action === "worker-editable" || action === "worker-validation" || action === "worker-submit-ready") && !(await evaluate(client, `Boolean(document.querySelector('.worker-update-panel form'))`))) throw new Error(`Worker update form missing in ${name}`);
    if (action === "worker-validation" && !(await evaluate(client, `document.body.innerText.includes('Change progress, hours, QC status, or add a note')`))) throw new Error(`Worker validation missing in ${name}`);
    if (action === "worker-submit-ready" && !(await evaluate(client, `Boolean(document.querySelector('.worker-submit-panel form'))`))) throw new Error(`Worker submit-ready action missing in ${name}`);
    if (action === "worker-disabled" && !(await evaluate(client, `Boolean(document.querySelector('#worker-submit-disabled-reason'))`))) throw new Error(`Worker disabled reason missing in ${name}`);
    if (action === "worker-readonly" && await evaluate(client, `Boolean(document.querySelector('.worker-update-panel form')) || Boolean(document.querySelector('.worker-submit-panel form'))`)) throw new Error(`Readonly Worker detail exposes action form in ${name}`);
    if (metrics.mainCount !== 1 || metrics.h1Count !== 1) throw new Error(`Heading or main landmark mismatch in ${name}: ${metrics.h1Count}/${metrics.mainCount}`);
    if (role && pathname.startsWith('/workspace/') && metrics.navigationLabels.length === 0) throw new Error(`Navigation label missing in ${name}`);
    const shot = await client.send("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false });
    fs.writeFileSync(path.join(outputDir, `${name}.png`), Buffer.from(shot.data, "base64"));
    if (action === "skip-focus") {
      await evaluate(client, `document.querySelector('.skip-link')?.click()`);
      await new Promise((resolve) => setTimeout(resolve, 80));
      const skipWorked = await evaluate(client, `document.activeElement?.id === 'main-content'`);
      if (!skipWorked) throw new Error(`Skip link did not move focus in ${name}`);
    }
    if (action === "menu") {
      await evaluate(client, `document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))`);
      await new Promise((resolve) => setTimeout(resolve, 160));
      const closedAndReturned = await evaluate(client, `!document.querySelector('[role="dialog"]') && document.activeElement?.getAttribute('aria-label') === '메뉴 열기'`);
      if (!closedAndReturned) throw new Error(`Mobile Sheet focus return failed in ${name}`);
      await evaluate(client, `document.querySelector('[aria-label="메뉴 열기"]')?.click()`);
      await new Promise((resolve) => setTimeout(resolve, 120));
      await evaluate(client, `document.querySelector('[role="dialog"] [aria-current="page"]')?.click()`);
      await new Promise((resolve) => setTimeout(resolve, 120));
      const closedAfterNavigation = await evaluate(client, `!document.querySelector('[role="dialog"]')`);
      if (!closedAfterNavigation) throw new Error(`Mobile Sheet navigation close failed in ${name}`);
    }
    if (action === "user") {
      await evaluate(client, `document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))`);
      await new Promise((resolve) => setTimeout(resolve, 120));
      const menuClosed = await evaluate(client, `!document.querySelector('[role="menu"]')`);
      if (!menuClosed) throw new Error(`User menu Escape close failed in ${name}`);
    }
    results.push({ name, role, pathname, ...metrics });
  }
  console.log(JSON.stringify({ ok: true, scenarios: results }, null, 2));
} finally {
  client?.close(); chrome.kill(); vite.kill();
  await new Promise((resolve) => setTimeout(resolve, 200));
  fs.rmSync(profile, { recursive: true, force: true });
}

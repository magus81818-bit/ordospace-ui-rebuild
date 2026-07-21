import childProcess from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const browserPath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const appPort = 5176;
const baseUrl = `http://127.0.0.1:${appPort}/`;

function invariant(value, message) { if (!value) throw new Error(message); }
async function waitFor(url, attempts = 100) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try { const response = await fetch(url); if (response.ok) return response; } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Timed out waiting for ${url}`);
}
function freePort() { return new Promise((resolve, reject) => { const server = net.createServer(); server.once("error", reject); server.listen(0, "127.0.0.1", () => { const address = server.address(); server.close(() => resolve(address.port)); }); }); }

class Cdp {
  constructor(url) { this.url = url; this.id = 1; this.pending = new Map(); this.events = new Map(); }
  async connect() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolve, reject) => { this.socket.addEventListener("open", resolve, { once: true }); this.socket.addEventListener("error", reject, { once: true }); });
    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) { const task = this.pending.get(message.id); this.pending.delete(message.id); message.error ? task.reject(new Error(JSON.stringify(message.error))) : task.resolve(message.result || {}); return; }
      const listeners = this.events.get(message.method) || []; listeners.splice(0).forEach((resolve) => resolve(message.params || {}));
    });
  }
  send(method, params = {}) { const id = this.id++; this.socket.send(JSON.stringify({ id, method, params })); return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject })); }
  once(method) { return new Promise((resolve) => { const listeners = this.events.get(method) || []; listeners.push(resolve); this.events.set(method, listeners); }); }
  close() { this.socket?.close(); }
}

async function pageTarget(port) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try { const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); const page = targets.find((item) => item.type === "page" && item.webSocketDebuggerUrl); if (page) return page; } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Chrome DevTools target unavailable");
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text || "Runtime evaluation failed");
  return result.result?.value;
}
async function key(client, keyName, code = keyName) {
  const keyCodes = { ArrowRight: 39, ArrowDown: 40, Enter: 13, Escape: 27 };
  const keyCode = keyCodes[keyName];
  const params = { key: keyName, code, windowsVirtualKeyCode: keyCode, nativeVirtualKeyCode: keyCode };
  await client.send("Input.dispatchKeyEvent", { type: "keyDown", ...params });
  await client.send("Input.dispatchKeyEvent", { type: "keyUp", ...params });
}
async function navigate(client, hash) {
  await client.send("Page.navigate", { url: `${baseUrl}#${hash}` });
  await new Promise((resolve) => setTimeout(resolve, 350));
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, "references", "salesops-source-vault", "source-manifest.json"), "utf8"));
invariant(manifest.components.length === 57, "Source Manifest completeness test failed");
invariant(new Set(manifest.components.map((item) => item.name)).size === 57, "Source Manifest uniqueness test failed");

const viteEntry = path.join(root, "node_modules", "vite", "bin", "vite.js");
const server = childProcess.spawn(process.execPath, [viteEntry, "--host", "127.0.0.1", "--port", String(appPort), "--strictPort"], { cwd: path.join(root, "apps", "ui-lab"), stdio: "ignore", windowsHide: true });
let browser;
let client;
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ordo-catalog-test-"));
try {
  await waitFor(baseUrl);
  const debugPort = await freePort();
  browser = childProcess.spawn(browserPath, [`--remote-debugging-port=${debugPort}`, `--user-data-dir=${profileDir}`, "--headless=new", "--disable-gpu", "--disable-extensions", "--no-first-run", baseUrl], { stdio: "ignore", windowsHide: true });
  const target = await pageTarget(debugPort);
  client = new Cdp(target.webSocketDebuggerUrl);
  await client.connect();
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Page.bringToFront");

  await navigate(client, "primitives");
  const buttonState = await evaluate(client, `(() => { const button = document.querySelector('button[aria-busy="true"]'); return { exists: !!button, disabled: button?.disabled, label: button?.textContent.trim() }; })()`);
  invariant(buttonState.exists && buttonState.disabled && buttonState.label.includes("저장 중"), "Button loading/disabled contract failed");

  const tabCount = await evaluate(client, `(() => { const items = [...document.querySelectorAll('[role="tab"]')]; items[0].click(); items[0].focus(); return items.length; })()`);
  await new Promise((resolve) => setTimeout(resolve, 100));
  await key(client, "ArrowRight");
  await new Promise((resolve) => setTimeout(resolve, 100));
  const tabs = { count: tabCount, active: await evaluate(client, `document.activeElement?.textContent?.trim()`) };
  invariant(tabs.count >= 3 && tabs.active === "내 작업", "Tabs keyboard navigation failed");

  await evaluate(client, `document.querySelector('[role="switch"]')?.click()`);
  await new Promise((resolve) => setTimeout(resolve, 80));
  const switched = await evaluate(client, `document.querySelector('[role="switch"]')?.getAttribute('aria-checked')`);
  invariant(switched === "false", "Switch checked state failed");

  await evaluate(client, `(() => { const trigger = document.querySelector('.ordo-select__trigger'); trigger.click(); return !!trigger; })()`);
  await key(client, "ArrowDown"); await key(client, "Enter");
  const selected = await evaluate(client, `document.querySelector('.ordo-select__trigger')?.textContent`);
  invariant(Boolean(selected), "Select keyboard selection failed");

  await evaluate(client, `(() => { const button=[...document.querySelectorAll('button')].find((item)=>item.textContent.includes('오른쪽 패널')); button.click(); return !!button; })()`);
  await new Promise((resolve) => setTimeout(resolve, 100));
  invariant(await evaluate(client, `!!document.querySelector('[role="dialog"]')`), "Sheet open failed");
  await key(client, "Escape"); await new Promise((resolve) => setTimeout(resolve, 120));
  invariant(!(await evaluate(client, `!!document.querySelector('[role="dialog"]')`)), "Sheet Escape close failed");

  const menuTrigger = await evaluate(client, `(() => { const button=[...document.querySelectorAll('button')].find((item)=>item.textContent.includes('작업 메뉴')); button?.focus(); return !!button; })()`);
  invariant(menuTrigger, "Dropdown trigger missing");
  await key(client, "Enter");
  await new Promise((resolve) => setTimeout(resolve, 120));
  await key(client, "ArrowDown");
  await new Promise((resolve) => setTimeout(resolve, 80));
  const menuState = await evaluate(client, `({items:document.querySelectorAll('[role^="menuitem"]').length,active:document.activeElement?.getAttribute('role')})`);
  invariant(menuState.items >= 4 && String(menuState.active).startsWith("menuitem"), "Dropdown keyboard operation failed");

  await navigate(client, "patterns");
  const patterns = await evaluate(client, `({value:[...document.querySelectorAll('.ordo-metric-card__value')].some((item)=>item.textContent.includes('7건')),loading:!!document.querySelector('.ordo-metric-card .ordo-skeleton'),tones:[...document.querySelectorAll('.ordo-status-badge')].map((item)=>item.dataset.tone),overflow:[...document.querySelectorAll('button')].some((item)=>item.getAttribute('aria-label')==='더 보기')})`);
  invariant(patterns.value && patterns.loading, "MetricCard loading/value test failed");
  invariant(["ok","warn","crit","pend","rej"].every((tone) => patterns.tones.includes(tone)), "StatusBadge tone test failed");
  invariant(patterns.overflow, "ActionGroup overflow test failed");

  console.log("UI Catalog interaction tests passed: Button, StatusBadge, Tabs, Select, Switch, Sheet, DropdownMenu, MetricCard, ActionGroup, Manifest.");
} finally {
  client?.close();
  browser?.kill();
  server.kill();
  await new Promise((resolve) => setTimeout(resolve, 200));
  fs.rmSync(profileDir, { recursive: true, force: true });
}

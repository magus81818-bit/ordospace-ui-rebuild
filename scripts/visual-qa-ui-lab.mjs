import childProcess from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const targetUrl = process.argv[2] || "http://127.0.0.1:5175/";
const outputDir = path.join(workspaceRoot, "docs", "ui-migration", "screenshots", "round-03");
const browserPath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const viewports = [
  [393, 852],
  [768, 1024],
  [1024, 768],
  [1280, 800],
  [1440, 900],
  [1920, 1080],
];
const pages = ["foundation", "primitives", "patterns", "states", "responsive", "source-inventory"];
const representativeScreens = new Set([
  "foundation-1440x900", "primitives-393x852", "primitives-1440x900", "patterns-1280x800",
  "states-1024x768", "responsive-1920x1080", "source-inventory-768x1024",
]);

class CdpClient {
  constructor(url) {
    this.url = url;
    this.nextId = 1;
    this.pending = new Map();
    this.events = new Map();
  }

  async connect() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolve, reject) => {
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });
    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        message.error ? reject(new Error(JSON.stringify(message.error))) : resolve(message.result || {});
        return;
      }
      const listeners = this.events.get(message.method) || [];
      listeners.splice(0).forEach((resolve) => resolve(message.params || {}));
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    this.socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }

  once(method) {
    return new Promise((resolve) => {
      const listeners = this.events.get(method) || [];
      listeners.push(resolve);
      this.events.set(method, listeners);
    });
  }

  close() {
    this.socket?.close();
  }
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => resolve(address.port));
    });
  });
}

async function waitForTarget(port) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await response.json();
      const page = targets.find((target) => target.type === "page" && target.webSocketDebuggerUrl);
      if (page) return page;
    } catch {
      // Chrome is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Timed out waiting for Chrome DevTools target");
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || "Runtime evaluation failed");
  return result.result?.value;
}

async function waitForApp(url) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try { const response = await fetch(url); if (response.ok) return; } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Timed out waiting for UI Lab at ${url}`);
}

fs.mkdirSync(outputDir, { recursive: true });
let appServer;
try {
  const response = await fetch(targetUrl);
  if (!response.ok) throw new Error("not ready");
} catch {
  const viteEntry = path.join(workspaceRoot, "node_modules", "vite", "bin", "vite.js");
  appServer = childProcess.spawn(process.execPath, [viteEntry, "--host", "127.0.0.1", "--port", "5175", "--strictPort"], {
    cwd: path.join(workspaceRoot, "apps", "ui-lab"), stdio: "ignore", windowsHide: true,
  });
  await waitForApp(targetUrl);
}
const debugPort = await getFreePort();
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "ordo-ui-lab-qa-"));
const browser = childProcess.spawn(browserPath, [
  `--remote-debugging-port=${debugPort}`,
  `--user-data-dir=${profileDir}`,
  "--headless=new",
  "--disable-gpu",
  "--disable-background-networking",
  "--disable-extensions",
  "--hide-scrollbars",
  "--no-first-run",
  "--window-size=1920,1080",
  targetUrl,
], { stdio: "ignore", windowsHide: true });

const results = [];
let client;

try {
  const target = await waitForTarget(debugPort);
  client = new CdpClient(target.webSocketDebuggerUrl);
  await client.connect();
  await client.send("Page.enable");
  await client.send("Runtime.enable");

  for (const [width, height] of viewports) {
    await client.send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768,
      screenWidth: width,
      screenHeight: height,
    });
    for (const page of pages) {
      await client.send("Page.navigate", { url: `${targetUrl.replace(/#.*$/, "")}#${page}` });
      await new Promise((resolve) => setTimeout(resolve, 240));

      const metrics = await evaluate(client, `(() => ({
        viewport: [window.innerWidth, window.innerHeight],
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        page: location.hash.slice(1),
        pageHeading: document.querySelector('main h1')?.textContent || '',
        navCurrent: document.querySelector('.lab-nav [aria-current="page"]')?.textContent || '',
        interactiveCount: document.querySelectorAll('main button, main input, main textarea, main [role="tab"], main [role="switch"]').length,
        clippedElements: Array.from(document.querySelectorAll('main *')).filter((el) => {
          if (el.closest('.ordo-table-wrap, .responsive-matrix, .lab-nav, .ordo-progress') || el instanceof SVGElement) return false;
          const rect = el.getBoundingClientRect();
          return rect.width > 0 && (rect.left < -1 || rect.right > document.documentElement.clientWidth + 1);
        }).slice(0, 12).map((el) => typeof el.className === 'string' ? el.className : el.tagName)
      }))()`);
      const screenKey = `${page}-${width}x${height}`;
      let fileName = null;
      if (representativeScreens.has(screenKey)) {
        const screenshot = await client.send("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false });
        fileName = `${screenKey}.png`;
        fs.writeFileSync(path.join(outputDir, fileName), Buffer.from(screenshot.data, "base64"));
      }
      results.push({ width, height, fileName, ...metrics });
    }
  }

  console.log(JSON.stringify({ ok: true, targetUrl, results }, null, 2));
} finally {
  client?.close();
  browser.kill();
  appServer?.kill();
  await new Promise((resolve) => setTimeout(resolve, 200));
  fs.rmSync(profileDir, { recursive: true, force: true });
}

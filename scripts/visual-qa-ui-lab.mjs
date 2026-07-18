import childProcess from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const targetUrl = process.argv[2] || "http://127.0.0.1:5175/";
const outputDir = path.join(workspaceRoot, "docs", "ui-migration", "screenshots", "round-02");
const browserPath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const viewports = [
  [393, 852],
  [768, 1024],
  [1024, 768],
  [1280, 800],
  [1440, 900],
  [1920, 1080],
];

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

fs.mkdirSync(outputDir, { recursive: true });
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
    const loaded = client.once("Page.loadEventFired");
    await client.send("Page.navigate", { url: targetUrl });
    await loaded;
    await new Promise((resolve) => setTimeout(resolve, 300));

    const metrics = await evaluate(client, `(() => ({
      viewport: [window.innerWidth, window.innerHeight],
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      sectionCount: document.querySelectorAll('.foundation-section').length,
      clippedElements: Array.from(document.querySelectorAll('main *')).filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && (rect.left < -1 || rect.right > document.documentElement.clientWidth + 1);
      }).slice(0, 12).map((el) => el.className || el.tagName)
    }))()`);
    const screenshot = await client.send("Page.captureScreenshot", {
      format: "png",
      fromSurface: true,
      captureBeyondViewport: false,
    });
    const fileName = `ui-lab-${width}x${height}.png`;
    fs.writeFileSync(path.join(outputDir, fileName), Buffer.from(screenshot.data, "base64"));
    results.push({ width, height, fileName, ...metrics });
  }

  console.log(JSON.stringify({ ok: true, targetUrl, results }, null, 2));
} finally {
  client?.close();
  browser.kill();
  await new Promise((resolve) => setTimeout(resolve, 200));
  fs.rmSync(profileDir, { recursive: true, force: true });
}

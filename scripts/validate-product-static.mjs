import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const product = path.join(root, "apps", "product-static");
const html = fs.readFileSync(path.join(product, "index.html"), "utf8");
const requiredScreens = ["landing", "auth", "select-workspace", "dashboard", "project", "approvals", "worker-home", "worker-cards", "admin-home", "admin-projects", "admin-cards", "admin-team", "admin-audit"];
for (const screen of requiredScreens) {
  if (!html.includes(`id="screen-${screen}"`)) throw new Error(`Missing product screen: ${screen}`);
}
for (const asset of ["app/styles/app.css", "app/styles/full-surface-redesign.css", "app/main.js", "app/router/hash-router.js", "app/config/api.config.js"]) {
  if (!fs.existsSync(path.join(product, asset))) throw new Error(`Missing product asset: ${asset}`);
}
if (!html.includes('name="ordo-api-base"')) throw new Error("Backend origin contract missing");
if (!html.includes("full-surface-redesign.css")) throw new Error("Redesign bridge is not loaded");
console.log(JSON.stringify({ ok: true, screens: requiredScreens.length, publicRoot: "existing-static-product" }, null, 2));

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "apps", "product-static");
const output = path.join(root, "dist", "product-static");

if (!fs.existsSync(path.join(source, "index.html"))) throw new Error("Product static entry is missing");
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.cpSync(source, output, { recursive: true });

const forbidden = [".env", ".vercel", ".git", "node_modules"];
const files = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    const relative = path.relative(output, absolute).replaceAll("\\", "/");
    if (forbidden.some((part) => relative.split("/").includes(part))) throw new Error(`Forbidden output path: ${relative}`);
    if (entry.isDirectory()) walk(absolute);
    else files.push(relative);
  }
}
walk(output);
console.log(JSON.stringify({ ok: true, output: "dist/product-static", files: files.length }, null, 2));

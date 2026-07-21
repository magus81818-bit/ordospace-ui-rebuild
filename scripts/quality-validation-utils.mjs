import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export function read(relativePath) { return fs.readFileSync(path.join(root, relativePath), "utf8"); }
export function assert(condition, message) { if (!condition) throw new Error(message); }
export function pass(name, checks) { console.log(JSON.stringify({ ok: true, name, checks }, null, 2)); }
export function walk(relativePath, extensions = /\.(jsx?|tsx?|css)$/) {
  const base = path.join(root, relativePath);
  return fs.readdirSync(base, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(base, entry.name);
    if (entry.isDirectory()) return walk(path.relative(root, child), extensions);
    return extensions.test(entry.name) ? [path.relative(root, child).replaceAll("\\", "/")] : [];
  });
}

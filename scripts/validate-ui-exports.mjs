import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "packages", "ui-catalog", "src");
const index = fs.readFileSync(path.join(src, "index.ts"), "utf8");
const targets = [...index.matchAll(/export \* from ["'](.+)["']/g)].map((match) => match[1]);
const failures = [];
if (new Set(targets).size !== targets.length) failures.push("duplicate public export target");
if (/source-vault|references/.test(index)) failures.push("Source Vault export found");
for (const target of targets) {
  const direct = path.join(src, `${target}.ts`);
  const tsx = path.join(src, `${target}.tsx`);
  const nested = path.join(src, target, "index.tsx");
  if (![direct, tsx, nested].some(fs.existsSync)) failures.push(`missing export target: ${target}`);
}
for (const expected of ["./primitives/core", "./primitives/overlays", "./patterns"]) if (!targets.includes(expected)) failures.push(`missing public export: ${expected}`);
if (failures.length) throw new Error(`UI export validation failed:\n- ${failures.join("\n- ")}`);
console.log(`UI export validation passed: ${targets.length} explicit public modules.`);

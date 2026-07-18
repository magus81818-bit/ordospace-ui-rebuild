import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { MODULE_STATUS } from "../apps/web/src/domain/module-card.model.mjs";

const workspaceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const mapPath = path.join(workspaceRoot, "apps", "web", "src", "design-system", "status-map.ts");
const source = fs.readFileSync(mapPath, "utf8");
const allowedTones = new Set(["ok", "warn", "crit", "pend", "rej"]);
const validated = [];

for (const status of Object.values(MODULE_STATUS)) {
  const blockPattern = new RegExp(`\\n\\s*${status}:\\s*\\{([\\s\\S]*?)\\n\\s*\\},`);
  const block = source.match(blockPattern)?.[1] ?? "";
  const label = block.match(/label:\s*"([^"]+)"/)?.[1] ?? "";
  const tone = block.match(/tone:\s*"([^"]+)"/)?.[1] ?? "";

  assert.ok(block, `Missing status mapping: ${status}`);
  assert.ok(label.trim(), `Missing label for status: ${status}`);
  assert.ok(allowedTones.has(tone), `Invalid tone for ${status}: ${tone}`);
  validated.push({ status, label, tone });
}

assert.match(source, /FALLBACK_STATUS_VIEW/);
assert.match(source, /label:\s*"Unknown status"/);
assert.match(source, /tone:\s*"rej"/);
assert.match(source, /return STATUS_VIEW\[status as keyof typeof STATUS_VIEW\] \?\? FALLBACK_STATUS_VIEW/);

console.log(JSON.stringify({
  ok: true,
  statuses: validated.length,
  tones: [...allowedTones],
  fallback: "Unknown status / rej",
  mappings: validated,
}, null, 2));

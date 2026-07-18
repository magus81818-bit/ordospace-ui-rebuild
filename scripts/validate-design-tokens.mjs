import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tokenRoot = path.join(workspaceRoot, "packages", "design-tokens", "src");
const tokenFiles = [
  "primitives.css",
  "semantic.css",
  "components.css",
  "typography.css",
  "motion.css",
];

const requiredTokens = [
  "--ordo-neutral-950", "--ordo-neutral-900", "--ordo-neutral-850", "--ordo-neutral-800",
  "--ordo-neutral-700", "--ordo-neutral-500", "--ordo-neutral-300", "--ordo-green-500",
  "--ordo-teal-400", "--ordo-amber-500", "--ordo-red-500", "--ordo-blue-500",
  "--ordo-bg-canvas", "--ordo-bg-sidebar", "--ordo-bg-header", "--ordo-bg-surface-1",
  "--ordo-bg-surface-2", "--ordo-bg-surface-3", "--ordo-bg-elevated", "--ordo-bg-hover",
  "--ordo-bg-selected", "--ordo-border-subtle", "--ordo-border-default", "--ordo-border-strong",
  "--ordo-border-focus", "--ordo-text-primary", "--ordo-text-secondary", "--ordo-text-tertiary",
  "--ordo-text-disabled", "--ordo-text-inverse", "--ordo-accent-primary",
  "--ordo-accent-primary-hover", "--ordo-accent-primary-active", "--ordo-accent-primary-muted",
  "--ordo-accent-secondary", "--ordo-accent-secondary-muted", "--ordo-sidebar-width",
  "--ordo-sidebar-rail-width", "--ordo-header-height", "--ordo-mobile-header-height",
  "--ordo-content-max-width", "--ordo-page-gutter", "--ordo-card-padding", "--ordo-control-height-sm",
  "--ordo-control-height-md", "--ordo-control-height-lg", "--ordo-table-row-height", "--ordo-focus-ring",
  "--ordo-font-sans", "--ordo-font-mono", "--ordo-radius-sm", "--ordo-radius-md",
  "--ordo-radius-lg", "--ordo-radius-xl", "--ordo-radius-pill", "--ordo-border-width",
  "--ordo-shadow-xs", "--ordo-shadow-sm", "--ordo-shadow-md", "--ordo-shadow-overlay",
  "--ordo-duration-fast", "--ordo-duration-normal", "--ordo-duration-slow", "--ordo-ease-standard",
  "--ordo-ease-enter", "--ordo-ease-exit",
];

const statusTones = ["ok", "warn", "crit", "pend", "rej"];
const chartRoles = [
  "primary", "secondary", "tertiary", "positive", "warning", "critical", "muted", "grid", "axis",
  "tooltip-background", "tooltip-border", "tooltip-text",
];

const declarations = new Map();

for (const fileName of tokenFiles) {
  const source = fs.readFileSync(path.join(tokenRoot, fileName), "utf8");
  const matcher = /(--ordo-[a-z0-9-]+)\s*:\s*([^;]+);/g;
  let match;

  while ((match = matcher.exec(source))) {
    const [, name, value] = match;
    assert.ok(value.trim(), `${name} has an empty value in ${fileName}`);
    assert.ok(!declarations.has(name), `${name} is declared more than once`);
    declarations.set(name, { fileName, value: value.trim() });
  }
}

for (const token of requiredTokens) {
  assert.ok(declarations.has(token), `Missing required token: ${token}`);
}

for (const tone of statusTones) {
  for (const role of ["fg", "bg", "border"]) {
    assert.ok(declarations.has(`--ordo-status-${tone}-${role}`), `Missing ${tone} ${role} token`);
  }
}

for (const role of chartRoles) {
  assert.ok(declarations.has(`--ordo-chart-${role}`), `Missing chart token: ${role}`);
}

const indexSource = fs.readFileSync(path.join(tokenRoot, "index.css"), "utf8");
for (const fileName of tokenFiles) {
  assert.match(indexSource, new RegExp(`@import\\s+["']\\./${fileName.replace(".", "\\.")}["']`));
}

console.log(JSON.stringify({
  ok: true,
  files: tokenFiles.length,
  declarations: declarations.size,
  requiredTokens: requiredTokens.length,
  statusTriplets: statusTones.length,
  chartTokens: chartRoles.length,
}, null, 2));

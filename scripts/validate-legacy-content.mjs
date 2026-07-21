import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = [
  "apps/web/src/components/dashboard/ModuleCardDashboard.jsx",
  "apps/web/src/styles/dashboard.css",
  "apps/web/src/features/module-cards/module-card-metrics.js",
  "apps/web/src/features/module-cards/module-card-view-model.js",
];
const source = files.map((file) => fs.readFileSync(path.join(root, file), "utf8")).join("\n");
const app = fs.readFileSync(path.join(root, "apps/web/src/App.jsx"), "utf8");
const failures = [];
if (/#[0-9a-f]{3,8}\b/i.test(source)) failures.push("new dashboard source contains hardcoded HEX");
if (/(?:background|color)\s*:\s*(?:white|#fff)|\b(Revenue|Pipeline Value|Sales Target|Forecasting)\b/i.test(source)) failures.push("light color or SalesOps term found");
if (/salesops-source-vault|from\s+["']next(?:\/|["'])/i.test(source)) failures.push("Source Vault or Next.js import found");
if (!/<ModuleCardDashboard\b/.test(app)) failures.push("role workspace still lacks dashboard conversion");
if (/ModulePreviewCard/.test(app)) failures.push("role root still imports the legacy ModulePreviewCard");
if (!/var\(--ordo-/.test(source)) failures.push("dashboard styles do not use ORDO tokens");
if (failures.length) throw new Error(`Legacy content validation failed:\n- ${failures.join("\n- ")}`);
console.log(`Legacy content validation passed: ${files.length} converted dashboard files.`);

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = path.join(root, "packages", "ui-catalog", "src");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "references", "salesops-source-vault", "source-manifest.json"), "utf8"));
const source = fs.readdirSync(catalog, { recursive: true, withFileTypes: true }).filter((item) => item.isFile() && /\.(ts|tsx|css)$/.test(item.name)).map((item) => fs.readFileSync(path.join(item.parentPath, item.name), "utf8")).join("\n");
const failures = [];
const required = manifest.components.filter((item) => ["A", "B"].includes(item.tier)).map((item) => item.name);
const patterns = ["MetricCard", "StatusBadge", "FilterTabs", "EmptyState", "InlineNotice", "PanelHeader", "DataTableShell", "ActionGroup"];
for (const name of [...required, ...patterns]) if (!new RegExp(`(?:function|const)\\s+${name}\\b`).test(source)) failures.push(`missing implementation: ${name}`);
if (/#[0-9a-f]{3,8}\b/i.test(source)) failures.push("hardcoded HEX color found");
if (/from\s+["']next(?:\/|["'])/.test(source)) failures.push("Next.js import found");
if (/\b(Revenue|Deal|Customer|Sales Target|Pipeline Value)\b/i.test(source)) failures.push("SalesOps business term found");
if (!/var\(--ordo-/.test(source)) failures.push("ORDO design tokens are not used");
if (/localStorage|useNavigate|createBrowserRouter|ModuleCardStore/.test(source)) failures.push("catalog contains application coupling");
if (failures.length) throw new Error(`UI Catalog validation failed:\n- ${failures.join("\n- ")}`);
console.log(`UI Catalog validation passed: ${required.length} primitives and ${patterns.length} patterns.`);

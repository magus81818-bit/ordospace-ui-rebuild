import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dashboard = fs.readFileSync(path.join(root, "apps/web/src/components/dashboard/ModuleCardDashboard.jsx"), "utf8");
const app = fs.readFileSync(path.join(root, "apps/web/src/App.jsx"), "utf8");
const required = ["MetricCard", "StatusBadge", "FilterTabs", "EmptyState", "PanelHeader", "DataTableShell", "InlineNotice", "ActionGroup", "Progress"];
const failures = required.filter((name) => !new RegExp(`<${name}\\b`).test(dashboard)).map((name) => `pattern is not rendered: ${name}`);
if (!/<ModuleCardDashboard\b/.test(app)) failures.push("dashboard is not rendered by the role workspace");
if (!/dashboard-mobile-list/.test(dashboard)) failures.push("mobile list pattern missing");
if (/useModuleCardStore|localStorage|createHashRouter/.test(dashboard)) failures.push("dashboard contains store, persistence, or router construction coupling");
if (failures.length) throw new Error(`Dashboard pattern validation failed:\n- ${failures.join("\n- ")}`);
console.log(`Dashboard pattern validation passed: ${required.length} live catalog patterns.`);


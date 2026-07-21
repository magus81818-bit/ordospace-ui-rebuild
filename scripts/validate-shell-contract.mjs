import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const shellFiles = [
  "apps/web/src/components/shell/AppShell.jsx",
  "apps/web/src/config/navigation.js",
  "apps/web/src/config/route-meta.js",
  "apps/web/src/styles/shell.css",
];
const source = shellFiles.map((file) => fs.readFileSync(path.join(root, file), "utf8")).join("\n");
const router = fs.readFileSync(path.join(root, "apps/web/src/router.jsx"), "utf8");
const failures = [];

if (!source.includes("@ordospace/ui-catalog")) failures.push("UI Catalog import missing");
if (/salesops-source-vault|from\s+["']next(?:\/|["'])/i.test(source)) failures.push("forbidden source or Next.js import");
if (/#[0-9a-f]{3,8}\b/i.test(source)) failures.push("hardcoded HEX color found");
if (/localStorage|ModuleCardStoreProvider|SessionProvider/.test(source)) failures.push("provider or persistence coupling found");
if (!router.includes("createHashRouter")) failures.push("Hash Router contract missing");
if ((router.match(/createHashRouter\s*\(\s*\[/g) ?? []).length !== 1) failures.push("Router was recreated");
for (const marker of ["DesktopSidebar", "CompactSidebarRail", "MobileNavigation", "PageHeading", "UserMenu", "skip-link", "aria-current"]) {
  if (!source.includes(marker)) failures.push(`shell marker missing: ${marker}`);
}
if (failures.length) throw new Error(`Shell contract validation failed:\n- ${failures.join("\n- ")}`);
console.log(`Shell contract validation passed: ${shellFiles.length} implementation files.`);

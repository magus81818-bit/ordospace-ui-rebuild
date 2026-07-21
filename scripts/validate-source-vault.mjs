import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vault = path.join(root, "references", "salesops-source-vault");
const manifest = JSON.parse(fs.readFileSync(path.join(vault, "source-manifest.json"), "utf8"));
const uiFiles = fs.readdirSync(path.join(vault, "components", "ui")).filter((file) => /\.(ts|tsx)$/.test(file));
const names = manifest.components.map((item) => item.name);
const failures = [];

if (uiFiles.length !== 57) failures.push(`expected 57 vault primitives, found ${uiFiles.length}`);
if (manifest.components.length !== 57) failures.push(`expected 57 manifest entries, found ${manifest.components.length}`);
if (new Set(names).size !== names.length) failures.push("duplicate component names in source manifest");
for (const item of manifest.components) {
  if (!item.tier || !["A", "B", "C", "D"].includes(item.tier)) failures.push(`${item.name}: invalid tier`);
  if (!item.sourcePath || !fs.existsSync(path.join(vault, item.sourcePath))) failures.push(`${item.name}: missing source path`);
  const shouldPort = ["A", "B"].includes(item.tier);
  if (shouldPort !== Boolean(item.productionPortPath)) failures.push(`${item.name}: inconsistent production port path`);
  if (shouldPort !== (item.productionStatus === "Ported")) failures.push(`${item.name}: inconsistent production status`);
}
const rootPackage = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
if (rootPackage.workspaces.some((item) => item.includes("references"))) failures.push("Source Vault must not be a workspace target");
if (failures.length) throw new Error(`Source Vault validation failed:\n- ${failures.join("\n- ")}`);
console.log(`Source Vault validation passed: ${uiFiles.length} files, ${manifest.components.length} unique manifest entries.`);

import fs from "node:fs";
import path from "node:path";
import { assert, pass, root } from "./quality-validation-utils.mjs";

const urlFile = path.join(root, "artifacts", "round10-preview-url.txt");
const metaFile = path.join(root, "artifacts", "round10-preview-metrics.json");
const screenshots = path.join(root, "artifacts", "ui-screenshots", "round10", "preview");
assert(fs.existsSync(urlFile) && /^https:\/\//.test(fs.readFileSync(urlFile, "utf8").trim()), "Preview URL record missing");
assert(fs.existsSync(metaFile), "Preview metrics record missing");
const metrics = JSON.parse(fs.readFileSync(metaFile, "utf8"));
assert(metrics.deploymentId && metrics.projectId && metrics.status === "READY", "Preview deployment metadata incomplete");
const pngs = fs.existsSync(screenshots) ? fs.readdirSync(screenshots).filter((name) => name.endsWith(".png")) : [];
assert(pngs.length >= 14, `Expected at least 14 preview screenshots, found ${pngs.length}`);
for (const png of pngs) assert(fs.statSync(path.join(screenshots, png)).size > 0, `Empty preview screenshot: ${png}`);
pass("preview-evidence", { screenshots: pngs.length, deploymentId: metrics.deploymentId });

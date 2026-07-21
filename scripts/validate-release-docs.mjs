import fs from "node:fs";
import path from "node:path";
import { assert, pass, read, root } from "./quality-validation-utils.mjs";

const names = ["60-pre-deployment-safety-audit", "61-release-artifact-inventory", "62-build-and-runtime-contract", "63-vercel-isolation-evidence", "64-preview-deployment-record", "65-bundle-splitting-decision", "66-release-operations-runbook", "67-preview-smoke-and-visual-qa", "68-git-branch-normalization", "69-final-release-readiness", "70-round-10-qa"];
for (const name of names) assert(fs.existsSync(path.join(root, "docs", "round10", `${name}.md`)), `Missing release doc: ${name}`);
const readme = read("README.md");
for (const phrase of ["ordospace-ui-rebuild", "localStorage", "Preview", "npm run check", "apps/web"]) assert(readme.includes(phrase), `README missing: ${phrase}`);
pass("release-docs", { documents: names.length, readme: true });

import { assert, pass, read } from "./quality-validation-utils.mjs";

const gitignore = read(".gitignore");
const config = read("vercel.json");
const packageJson = JSON.parse(read("package.json"));
assert(gitignore.split(/\r?\n/).includes(".vercel/"), ".vercel must stay ignored");
assert(packageJson.name === "ordospace-ui-rebuild", "Unexpected project identity");
assert(!/ordospace-rebuild|ordospace-sprint5|prj_KTxF8Qnv|prj_HydjRLP/i.test(config), "Existing ORDO project reference detected");
assert(!/domain|alias|orgId|projectId/i.test(config), "Vercel config must not contain identity/domain metadata");
pass("deployment-safety", { project: packageJson.name, vercelIgnored: true });

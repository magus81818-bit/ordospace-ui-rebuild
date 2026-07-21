import fs from "node:fs";
import path from "node:path";
import { assert, pass, root } from "./quality-validation-utils.mjs";

const dist = path.join(root, "apps", "web", "dist");
assert(fs.existsSync(path.join(dist, "index.html")), "Production index.html missing");
const files = fs.readdirSync(dist, { recursive: true }).map(String);
assert(files.some((file) => /assets[\\/].+\.js$/.test(file)), "Production JS asset missing");
assert(files.some((file) => /assets[\\/].+\.css$/.test(file)), "Production CSS asset missing");
assert(!files.some((file) => /(^|[\\/])(docs|artifacts|references|scripts|ui-lab)([\\/]|$)/i.test(file)), "QA/reference content leaked into production output");
pass("production-artifact", { files: files.length, output: "apps/web/dist" });

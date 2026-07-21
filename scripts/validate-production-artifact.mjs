import fs from "node:fs";
import path from "node:path";
import { assert, pass, root } from "./quality-validation-utils.mjs";

const dist = path.join(root, "dist", "product-static");
assert(fs.existsSync(path.join(dist, "index.html")), "Production index.html missing");
const files = fs.readdirSync(dist, { recursive: true }).map(String);
assert(files.includes(path.join("app", "main.js")), "Product JavaScript entry missing");
assert(files.includes(path.join("app", "styles", "full-surface-redesign.css")), "Full-surface redesign CSS missing");
assert(files.includes(path.join("app", "router", "hash-router.js")), "Product hash router missing");
assert(!files.some((file) => /(^|[\\/])(docs|artifacts|references|scripts|ui-lab)([\\/]|$)/i.test(file)), "QA/reference content leaked into production output");
assert(!files.some((file) => /react-mvp|assets[\\/].+\.(jsx|tsx)$/i.test(file)), "React MVP experiment leaked into public output");
pass("production-artifact", { files: files.length, output: "dist/product-static" });

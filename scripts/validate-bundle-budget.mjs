import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.join(root, "apps/web/dist/assets");
const baselineBytes = 504030;
const files = fs.readdirSync(assets).filter((file) => file.endsWith(".js"));
const mainBytes = Math.max(...files.map((file) => fs.statSync(path.join(assets, file)).size));
const delta = mainBytes - baselineBytes;
const percent = (delta / baselineBytes) * 100;
const result = { baselineBytes, mainBytes, deltaBytes: delta, increasePercent: Number(percent.toFixed(2)), warning: percent > 10 };
console.log(JSON.stringify(result, null, 2));
if (percent > 20) throw new Error(`Bundle budget exceeded: ${percent.toFixed(2)}% increase`);


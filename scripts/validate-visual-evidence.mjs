import fs from "node:fs";
import path from "node:path";
import { assert, pass, root } from "./quality-validation-utils.mjs";

const round09 = path.join(root, "artifacts", "ui-screenshots", "round09");
const historical = ["round-04", "round-05", "round-06", "round-07", "round-08"].map((name) => path.join(root, "docs", "ui-migration", "screenshots", name));
assert(fs.existsSync(round09), "Round 9 screenshot directory is missing");
const pngs = fs.readdirSync(round09, { recursive: true }).filter((name) => String(name).endsWith(".png"));
assert(pngs.length >= 30, `Expected at least 30 Round 9 screenshots, found ${pngs.length}`);
for (const relative of pngs) assert(fs.statSync(path.join(round09, relative)).size > 0, `Empty screenshot: ${relative}`);
historical.forEach((directory) => assert(fs.existsSync(directory) && fs.readdirSync(directory).some((name) => name.endsWith(".png")), `Historical evidence missing: ${directory}`));
pass("visual-evidence", { round09Screenshots: pngs.length, historicalRounds: historical.length });

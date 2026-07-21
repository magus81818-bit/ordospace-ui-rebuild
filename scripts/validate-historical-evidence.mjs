import fs from "node:fs";
import path from "node:path";
import { assert, pass, root } from "./quality-validation-utils.mjs";

const rounds = ["round-03", "round-04", "round-05", "round-06", "round-07", "round-08"];
for (const round of rounds) {
  const directory = path.join(root, "docs", "ui-migration", "screenshots", round);
  assert(fs.existsSync(directory) && fs.readdirSync(directory).some((name) => name.endsWith(".png")), `Historical screenshots missing: ${round}`);
}
assert(fs.existsSync(path.join(root, "artifacts", "ui-screenshots", "round09")), "Round 9 evidence missing");
pass("historical-evidence", { rounds: [...rounds, "round09"] });

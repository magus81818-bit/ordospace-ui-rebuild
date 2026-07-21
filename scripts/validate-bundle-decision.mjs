import { assert, pass, read } from "./quality-validation-utils.mjs";

const decision = read("docs/round10/65-bundle-splitting-decision.md");
assert(/Decision:\s+NOT APPLIED/.test(decision), "Bundle decision must be explicit");
assert(decision.includes("537,384"), "Round 9 bundle baseline missing");
assert(decision.includes("500kB"), "Vite warning disclosure missing");
pass("bundle-decision", { decision: "NOT APPLIED", baselineBytes: 537384 });

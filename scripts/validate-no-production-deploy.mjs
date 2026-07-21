import { assert, pass, read } from "./quality-validation-utils.mjs";

const packageJson = read("package.json");
const executableScripts = read("scripts/visual-qa-web-shell.mjs") + read("scripts/validate-vercel-config.mjs");
assert(!/vercel(?:\s+deploy)?\s+--prod|vercel\s+promote|production alias/i.test(packageJson + executableScripts), "Production deployment command found in executable configuration");
pass("no-production-deploy", { executableProductionCommands: 0 });

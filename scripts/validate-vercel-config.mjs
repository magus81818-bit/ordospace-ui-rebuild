import { assert, pass, read } from "./quality-validation-utils.mjs";

const config = JSON.parse(read("vercel.json"));
assert(config.framework === "vite", "Vercel framework must be vite");
assert(config.installCommand === "npm ci", "Vercel install command must be npm ci");
assert(config.buildCommand === "npm run build", "Vercel build command must use the root workspace build");
assert(config.outputDirectory === "apps/web/dist", "Only apps/web/dist may be deployed");
assert(!config.routes && !config.rewrites && !config.domains, "Unexpected routing/domain config");
pass("vercel-config", config);

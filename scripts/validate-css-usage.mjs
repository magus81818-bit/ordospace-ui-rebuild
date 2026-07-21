import path from "node:path";
import { assert, pass, read, walk } from "./quality-validation-utils.mjs";

const cssFiles = [...walk("apps/web/src/styles", /\.css$/), ...walk("packages/ui-catalog/src/styles", /\.css$/)];
const findings = cssFiles.map((file) => ({ file, source: read(file) }));
const hardcoded = findings.filter(({ file, source }) => file !== "apps/web/src/styles.css" && /#[0-9a-f]{3,8}\b/i.test(source));
const important = findings.flatMap(({ file, source }) => [...source.matchAll(/!important/g)].map(() => file));
const sourceVaultImports = findings.filter(({ source }) => /sales-ops|source-vault/i.test(source));
const nextClasses = findings.filter(({ source }) => /__next|next-font/i.test(source));
assert(hardcoded.length === 0, `Hardcoded colors outside documented legacy stylesheet: ${hardcoded.map((item) => item.file).join(", ")}`);
const importantAllowlist = new Set(["apps/web/src/styles/migration.css", "packages/ui-catalog/src/styles/catalog.css"]);
assert(important.every((file) => importantAllowlist.has(file)), `Unexpected !important: ${important.join(", ")}`);
assert(sourceVaultImports.length === 0, "Source vault CSS import detected");
assert(nextClasses.length === 0, "Next.js-only CSS detected");
pass("css-usage", { scanned: cssFiles.length, hardcodedOutsideLegacy: 0, importantAllowlist: [...new Set(important)], legacyHexAllowlist: [path.posix.join("apps/web/src", "styles.css")] });

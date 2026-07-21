import { getRouteMeta, notFoundRouteMeta, routeMetadata } from "../apps/web/src/config/route-meta.js";

const requiredPaths = [
  "/", "/auth", "/workspace", "/workspace/admin", "/workspace/admin/cards/demo",
  "/workspace/worker", "/workspace/worker/cards/demo", "/workspace/client", "/workspace/client/cards/demo",
];
const failures = [];
for (const path of requiredPaths) {
  const meta = getRouteMeta(path);
  if (!meta.title?.trim() || meta === notFoundRouteMeta) failures.push(`missing metadata: ${path}`);
}
if (routeMetadata.filter((item) => item.dynamic).length !== 3) failures.push("expected three dynamic route patterns");
const forbidden = /Revenue|Deal|Customer|Sales Target|Pipeline Value/i;
if (forbidden.test(JSON.stringify(routeMetadata))) failures.push("SalesOps business term found");
if (!notFoundRouteMeta.title) failures.push("missing not-found fallback");
if (failures.length) throw new Error(`Route metadata validation failed:\n- ${failures.join("\n- ")}`);
console.log(`Route metadata validation passed: ${routeMetadata.length} routes and fallback.`);


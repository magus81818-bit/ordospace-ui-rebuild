import { getNavigationForRole, isNavigationItemActive } from "../apps/web/src/config/navigation.js";
import { getRouteMeta, notFoundRouteMeta } from "../apps/web/src/config/route-meta.js";

const assertions = [];
function check(name, condition) {
  if (!condition) throw new Error(`Shell test failed: ${name}`);
  assertions.push(name);
}

for (const role of ["admin", "worker", "client"]) {
  const items = getNavigationForRole(role);
  check(`${role} only sees its menu`, items.length === 1 && items.every((item) => item.roles.includes(role)));
  check(`${role} workspace is active`, isNavigationItemActive(items[0], `/workspace/${role}`));
  check(`${role} detail keeps parent active`, isNavigationItemActive(items[0], `/workspace/${role}/cards/card-1`));
  check(`${role} does not activate another role`, !isNavigationItemActive(items[0], "/workspace/admin-other"));
  check(`${role} detail title exists`, getRouteMeta(`/workspace/${role}/cards/card-1`) !== notFoundRouteMeta);
}
check("unknown route uses fallback", getRouteMeta("/missing") === notFoundRouteMeta);
console.log(`Shell tests passed: ${assertions.length} assertions.`);

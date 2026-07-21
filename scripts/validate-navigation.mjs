import { APP_ROLES, getNavigationForRole, navigationItems } from "../apps/web/src/config/navigation.js";

const failures = [];
const ids = new Set();
const pathsByRole = new Set();

for (const item of navigationItems) {
  if (!item.id || ids.has(item.id)) failures.push(`invalid or duplicate id: ${item.id}`);
  ids.add(item.id);
  if (!item.label?.trim()) failures.push(`empty label: ${item.id}`);
  if (!item.path?.startsWith("/workspace/")) failures.push(`invalid path: ${item.path}`);
  if (typeof item.icon !== "function" && typeof item.icon !== "object") failures.push(`missing icon: ${item.id}`);
  if (!["exact", "prefix"].includes(item.match)) failures.push(`invalid match: ${item.id}`);
  for (const role of item.roles) {
    if (!APP_ROLES.includes(role)) failures.push(`invalid role ${role}: ${item.id}`);
    const key = `${role}:${item.path}`;
    if (pathsByRole.has(key)) failures.push(`duplicate role path: ${key}`);
    pathsByRole.add(key);
  }
}

for (const role of APP_ROLES) {
  if (getNavigationForRole(role).length < 1) failures.push(`role has no navigation: ${role}`);
}

if (failures.length) throw new Error(`Navigation validation failed:\n- ${failures.join("\n- ")}`);
console.log(`Navigation validation passed: ${navigationItems.length} items across ${APP_ROLES.length} roles.`);


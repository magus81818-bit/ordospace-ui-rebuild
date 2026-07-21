import { mvpSeed } from "../apps/web/src/data/mvp-seed.mjs";
import { MODULE_STATUS } from "../apps/web/src/domain/module-card.model.mjs";
import { createModuleCardViewModel } from "../apps/web/src/features/module-cards/module-card-view-model.js";

const source = mvpSeed.moduleCards[0];
const before = JSON.stringify(source);
const admin = createModuleCardViewModel(source, { role: "admin", users: mvpSeed.users });
const worker = createModuleCardViewModel(source, { role: "worker", users: mvpSeed.users });
const client = createModuleCardViewModel(source, { role: "client", users: mvpSeed.users });
const unknown = createModuleCardViewModel({ ...source, status: "unexpected", progress: 180 }, { role: "admin", users: mvpSeed.users });
const failures = [];
if (!admin.detailPath.startsWith("/workspace/admin/cards/")) failures.push("invalid admin detail path");
if (!worker.detailPath.startsWith("/workspace/worker/cards/")) failures.push("invalid worker detail path");
if (!client.detailPath.startsWith("/workspace/client/cards/")) failures.push("invalid client detail path");
if (client.assigneeLabel !== null) failures.push("client view exposes assignee field");
if (worker.clientLabel !== null) failures.push("worker view exposes client field");
if (unknown.progress !== 100 || unknown.statusView.label !== "Unknown status") failures.push("progress clamp or unknown fallback failed");
if (JSON.stringify(source) !== before) failures.push("source object was mutated");
for (const status of Object.values(MODULE_STATUS)) {
  const view = createModuleCardViewModel({ ...source, status }, { role: "admin", users: mvpSeed.users });
  if (view.statusView.label === "Unknown status") failures.push(`status is unmapped: ${status}`);
}
if (failures.length) throw new Error(`View model validation failed:\n- ${failures.join("\n- ")}`);
console.log(`ModuleCard view model validation passed: ${Object.values(MODULE_STATUS).length} statuses and role policies.`);


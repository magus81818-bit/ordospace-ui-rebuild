import { assert, pass, read } from "./quality-validation-utils.mjs";

const admin = read("apps/web/src/features/admin/admin-action-policy.js");
const client = read("apps/web/src/features/client/client-action-policy.js");
const worker = read("apps/web/src/features/worker/worker-action-policy.js");
const model = read("apps/web/src/domain/module-card.model.mjs");
const clientView = read("apps/web/src/features/client/client-approval-view.js");
const workerView = read("apps/web/src/features/worker/worker-work-view.js");
const checks = {
  adminPolicyIsolated: !admin.includes("canClient") && !admin.includes("canWorker"),
  clientPolicyUsesClientAction: client.includes("canClientDecideModuleCard") && !client.includes("canWorker"),
  workerPolicyUsesWorkerActions: worker.includes("canWorkerUpdateCard") && worker.includes("canWorkerSubmitForAdminReview") && !worker.includes("canClient"),
  workerOwnershipSelector: model.includes("card.assigneeId === userId"),
  clientScopeSelector: model.includes("card.clientId === userId"),
  clientViewNoAssignee: !clientView.includes("assigneeName") && !clientView.includes("assigneeEmail"),
  workerViewNoClient: !workerView.includes("clientName") && !workerView.includes("clientEmail"),
};
Object.entries(checks).forEach(([name, value]) => assert(value, `Role visibility contract failed: ${name}`));
pass("role-visibility", checks);

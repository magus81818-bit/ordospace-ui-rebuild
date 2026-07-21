import { assert, pass, read } from "./quality-validation-utils.mjs";

const app = read("apps/web/src/App.jsx");
const shell = read("apps/web/src/components/shell/AppShell.jsx");
const screens = ["AdminOperationsPage", "ClientApprovalPage", "WorkerWorkspacePage", "AdminCardReviewPage", "ClientApprovalDetailPage", "WorkerTaskDetailPage"]
  .map((name) => read(`apps/web/src/features/${name.startsWith("Admin") ? "admin" : name.startsWith("Client") ? "client" : "worker"}/${name}.jsx`));
const dashboard = read("apps/web/src/components/dashboard/ModuleCardDashboard.jsx");
const checks = {
  singleShellMain: (shell.match(/<main\b/g) ?? []).length === 1,
  labelledNavigation: shell.includes("<nav") && shell.includes("aria-label"),
  labelledAsides: screens.filter((source) => source.includes("<aside")).every((source) => source.includes("aria-label")),
  pageHeadings: screens.slice(0, 3).every((source) => source.includes("<ModuleCardDashboard")) && screens.slice(3).every((source) => source.includes("<h1")) && dashboard.includes("<h1"),
  publicHeadings: ["OverviewScreen", "AuthScreen", "NotFoundScreen"].every((name) => app.includes(`function ${name}`)) && (app.match(/<h1/g) ?? []).length >= 3,
  noEmptyHeading: ![app, ...screens].some((source) => /<h[1-6][^>]*>\s*<\/h[1-6]>/.test(source)),
};
Object.entries(checks).forEach(([name, value]) => assert(value, `Heading/landmark contract failed: ${name}`));
pass("heading-landmarks", checks);

import { assert, pass, read } from "./quality-validation-utils.mjs";

const shell = read("apps/web/src/styles/shell.css");
const roleCss = ["admin-operations", "client-approval", "worker-workspace"].map((name) => read(`apps/web/src/styles/${name}.css`)).join("\n");
const checks = {
  mobileBreakpoint: shell.includes("@media (max-width: 767px)"),
  tabletBreakpoint: shell.includes("@media (min-width: 768px) and (max-width: 1023px)"),
  sidebarToken: shell.includes("var(--ordo-sidebar-width)"),
  railToken: shell.includes("var(--ordo-sidebar-rail-width)"),
  mobileHeaderToken: shell.includes("var(--ordo-mobile-header-height)"),
  minWidthZero: shell.includes("min-width: 0"),
  stickyRelease: (roleCss.match(/@media \(max-width: 1279px\)/g) ?? []).length === 3 && (roleCss.match(/position: static/g) ?? []).length >= 3,
  noHardcodedSidebarWidth: !shell.includes("260px"),
};
Object.entries(checks).forEach(([name, value]) => assert(value, `Responsive contract failed: ${name}`));
pass("responsive-contract", checks);

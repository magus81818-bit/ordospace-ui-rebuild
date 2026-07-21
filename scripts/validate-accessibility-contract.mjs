import { assert, pass, read } from "./quality-validation-utils.mjs";

const shell = read("apps/web/src/components/shell/AppShell.jsx");
const catalogCore = read("packages/ui-catalog/src/primitives/core.tsx");
const overlays = read("packages/ui-catalog/src/primitives/overlays.tsx");
const clientForm = read("apps/web/src/cards/ClientDecisionModuleCardPanel.jsx");
const workerForm = read("apps/web/src/cards/WorkerUpdateModuleCardPanel.jsx");
const primitives = read("packages/design-tokens/src/primitives.css");
const lightness = (token) => Number(primitives.match(new RegExp(`--ordo-${token}: oklch\\((\\d+(?:\\.\\d+)?)`))?.[1]);
const neutralContrast = (foreground, background) => (Math.max(foreground ** 3, background ** 3) + 0.05) / (Math.min(foreground ** 3, background ** 3) + 0.05);
const canvasLightness = lightness("neutral-950");
const checks = {
  skipLink: shell.includes('href="#main-content"'),
  mainTarget: shell.includes('id="main-content"') && shell.includes('tabIndex="-1"'),
  navigationLabel: shell.includes("<nav") && shell.includes("ROLE_LABELS[role]") && shell.includes("aria-label"),
  currentPage: shell.includes('aria-current={active ? "page"'),
  sheetName: shell.includes("<SheetTitle") && shell.includes("<SheetDescription"),
  focusReturnPrimitive: overlays.includes("DialogPrimitive.Close"),
  tableName: catalogCore.includes('aria-label="가로로 스크롤 가능한 표"'),
  progressAria: catalogCore.includes("aria-valuemin") && catalogCore.includes("aria-valuenow"),
  formErrors: clientForm.includes("aria-invalid") && workerForm.includes("aria-describedby"),
  primaryContrast: neutralContrast(lightness("neutral-100"), canvasLightness) >= 4.5,
  secondaryContrast: neutralContrast(lightness("neutral-300"), canvasLightness) >= 4.5,
  tertiaryContrast: neutralContrast(lightness("neutral-500"), canvasLightness) >= 4.5,
};
Object.entries(checks).forEach(([name, value]) => assert(value, `Accessibility contract failed: ${name}`));
pass("accessibility-contract", checks);

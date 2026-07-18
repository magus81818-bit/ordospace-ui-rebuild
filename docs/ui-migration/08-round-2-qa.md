# Round 2 QA

## Scope guard

- Functional shell and role screens replaced: no
- Domain/store/router/API/backend changes: no
- Actual Recharts mounted: no
- shadcn/Radix migration: no
- Vercel configuration: no
- Remote font dependency: no

## Automated checks

Final verification results:

- install and audit: pass, 0 vulnerabilities
- web type check and UI Lab type check: pass
- 11 copied MVP validators: pass
- token contract validation: pass, 5 files / 125 declarations / 66 required roles / 5 status triplets / 12 chart roles
- status-map validation: pass, 8 domain states / 5 allowed tones / explicit fallback
- web production build: pass
- UI Lab production build: pass
- development-server browser smoke: pass, 15 lifecycle steps / 0 runtime exceptions / 0 console errors
- production-preview browser smoke: pass, 15 lifecycle steps / 0 runtime exceptions / 0 console errors

## Visual and accessibility checks

UI Lab is checked at 393×852, 768×1024, 1024×768, 1280×800, 1440×900, and 1920×1080. All six report the exact requested viewport, 12 foundation sections, and `document.scrollWidth === clientWidth`. No elements cross the viewport boundary except the mobile responsive table's intentionally scrollable inner table; its wrapper contains the overflow.

Generated evidence is stored in `docs/ui-migration/screenshots/round-02/`. The 393px capture shows a one-column catalog, wrapped bilingual copy, compact header metadata, two-column swatches, and no viewport clipping. Tablet and desktop captures preserve the intended higher-density grid.

Contrast is measured from computed browser colors using the WCAG relative-luminance formula. Target: 4.5:1 for normal text and 3:1 for large text or non-text UI boundaries.

Measured contrast ratios:

| Pair | Ratio |
| --- | ---: |
| primary text / canvas | 17.89:1 |
| secondary text / canvas | 11.85:1 |
| tertiary text / surface 1 | 6.28:1 |
| inverse text / green action | 8.29:1 |
| focus green / canvas | 8.29:1 |
| `ok` foreground / status background | 8.36:1 |
| `warn` foreground / status background | 8.64:1 |
| `crit` foreground / status background | 6.94:1 |
| `pend` foreground / status background | 8.53:1 |
| `rej` foreground / status background | 10.60:1 |

All measured normal-text pairs exceed 4.5:1. Status previews also include a label, Lucide icon, dot, border shape, and contextual message. Keyboard focus is a 2px primary-accent outline with a 3px offset. Reduced-motion rules are present in both applications.

Residual risk: local font availability varies by workstation, so screenshots can use the system fallback. This is intentional; it avoids the forbidden remote font dependency.

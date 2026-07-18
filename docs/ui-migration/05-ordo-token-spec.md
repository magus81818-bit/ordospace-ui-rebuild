# ORDO token specification

## Architecture

The token package uses a one-way dependency chain:

`primitive values → semantic roles → component contracts → applications`

The source lives only in `packages/design-tokens/src`. Both applications import the package; neither duplicates token declarations.

## Color foundation

Primitive colors preserve the verified SalesOps OKLCH values for neutral 950/900/850/800/700/500, green, amber, red, blue, and violet. ORDO adds only the minimum neutral-100 and teal roles needed for readable foregrounds and secondary identity.

Semantic groups:

- backgrounds: canvas, sidebar, header, three surfaces, elevated, hover, selected;
- borders: subtle, default, strong, focus;
- text: primary, secondary, tertiary, disabled, inverse;
- accents: primary green and secondary blue, each with muted states;
- statuses: `ok`, `warn`, `crit`, `pend`, `rej`, each with foreground/background/border;
- charts: primary, secondary, tertiary, positive, warning, critical, muted, grid, axis, and tooltip roles.

## Component contracts

| Token | Desktop value | Intent |
| --- | ---: | --- |
| `--ordo-sidebar-width` | 260px | expanded desktop navigation |
| `--ordo-sidebar-rail-width` | 72px | tablet/collapsed navigation |
| `--ordo-header-height` | 64px | desktop and tablet header |
| `--ordo-mobile-header-height` | 56px | compact mobile header |
| `--ordo-content-max-width` | 1600px | large-screen density guard |
| `--ordo-page-gutter` | 24px | desktop page inset |
| `--ordo-card-padding` | 20px | metric and panel interior |
| `--ordo-control-height-sm/md/lg` | 32/36/40px | compact controls |
| `--ordo-table-row-height` | 48px | scan-friendly table rhythm |
| `--ordo-focus-ring` | 2px green solid | visible keyboard focus |

Spacing runs from 4px to 48px. Radius runs from 6px to 12px, with pill reserved for chips. Shadows remain restrained because borders are the primary separation device.

## Typography and fonts

- English/numeric UI: DM Sans when locally available
- Korean UI: Pretendard when locally available
- Code/identifiers: JetBrains Mono when locally available
- Stable fallbacks: Inter, system UI, Segoe UI, SFMono, Consolas

No `next/font`, Google Fonts call, build-time request, or runtime remote font URL is present. The fallback stack is the deliberate Round 2 implementation.

## Tailwind CSS 4 bridge

Both Vite apps use the official Tailwind CSS 4.3.3 `@tailwindcss/vite` plugin, whose peer range includes Vite 8. UI Lab imports the full Tailwind entry. The functional web app imports only Tailwind theme and utilities—excluding Preflight—so the preserved MVP stylesheet is not reset or rewritten. The supplied SalesOps reference remains recorded at 4.1.9 in its manifest.

# SalesOps design audit

## Design Read

SalesOps is a border-led, nearly black operations console: fixed navigation, a thin sticky header, dense cards, restrained radius, white metrics, quiet gray supporting text, and green/cyan signals. ORDO should inherit that operational clarity without inheriting Sales-specific information architecture, Next.js coupling, or brittle responsive behavior.

Round settings: `DESIGN_VARIANCE=4`, `MOTION=3`, `VISUAL_DENSITY=8`.

## Sources inspected

- Supplied `sales-ops-dashboard.zip`, extracted to a temporary read-only inspection directory
- Live reference: `https://v0-sales-operations-dashboard.vercel.app/`
- Eight supplied 2552px-wide screenshots
- Primary files: `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `components/dashboard/sidebar.tsx`, `header.tsx`, dashboard cards, sections, and chart modules

## Source-to-token translation

| SalesOps source | Selector or usage | Original value | ORDO target |
| --- | --- | --- | --- |
| `app/globals.css` | `:root --background` | `oklch(0.09 0.005 260)` | `--ordo-bg-canvas` |
| `app/globals.css` | `:root --sidebar` | `oklch(0.11 0.005 260)` | `--ordo-bg-sidebar` |
| `app/globals.css` | `:root --card` | `oklch(0.12 0.005 260)` | `--ordo-bg-surface-1` |
| `app/globals.css` | `:root --secondary`, `--muted`, `--input` | `oklch(0.18 0.005 260)` | `--ordo-bg-surface-2` |
| `app/globals.css` | `:root --border` | `oklch(0.22 0.005 260)` | `--ordo-border-default` |
| `app/globals.css` | `:root --foreground` | `oklch(0.95 0 0)` | `--ordo-text-primary` |
| `app/globals.css` | `:root --muted-foreground` | `oklch(0.65 0 0)` | `--ordo-text-tertiary` |
| `app/globals.css` | `:root --accent`, `--success`, `--ring` | `oklch(0.7 0.18 145)` | primary accent, success, focus |
| `app/globals.css` | `:root --destructive` | `oklch(0.65 0.2 25)` | critical tone |
| `app/globals.css` | `:root --warning` | `oklch(0.75 0.18 55)` | warning tone |
| `app/globals.css` | `:root --chart-1..5` | blue, green, amber, red, violet OKLCH values | named ORDO chart roles |
| `app/globals.css` | `:root --radius` | `0.5rem` | 6–12px radius scale |
| `sidebar.tsx` | expanded / collapsed width | `260px` / `72px` | sidebar component tokens |
| `header.tsx` | root header | `h-16`, `px-6` | 64px header and 24px gutter |
| dashboard cards | repeated card classes | `rounded-xl p-5 border` | 12px panel radius, 20px card padding, 1px border |
| `app/page.tsx` | main content | `p-6` | 24px desktop page gutter |
| `app/page.tsx` | section entry | 500ms fade + 16px travel | reduced 280ms maximum motion |

## Hardcoded and structural findings

- `sidebar.tsx` and `app/page.tsx` repeat fixed `260px` and `72px` widths instead of a shared contract.
- Chart files repeat raw OKLCH values for grid, axes, series, tooltip surfaces, borders, and labels.
- Cards repeatedly use `rounded-xl p-5`; controls cluster around 32–40px heights.
- Shadows are largely absent; hierarchy is carried by thin neutral borders and surface steps.
- Motion commonly uses 200–700ms. ORDO caps common feedback at 120–280ms.
- `app/layout.tsx` uses `next/font/google`, which introduces Next.js and remote font build dependencies.

## Recorded reference defects, not repaired here

- `next.config.mjs` ignores TypeScript build errors.
- Header title mapping omits customers, forecasting, and settings.
- Recharts can receive negative sizes while containers settle.
- A fixed 260px sidebar compresses the 393px layout.
- 48 of 57 included shadcn primitives are unused or unconfirmed by dashboard imports.
- Next.js-only files and Google font loading are not portable to the Vite baseline.

Round 2 translates the visual foundation only. It does not copy the dashboard shell, Sales data, navigation, charts, or shadcn implementation.

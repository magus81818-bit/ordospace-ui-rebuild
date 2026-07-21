# SalesOps token specification

Authoritative declaration: `app/globals.css`. Values are dark in both `:root` and `.dark`; the source does not provide a distinct light palette. Live computed values and geometry are captured separately.

## Color (27)

| ID | Value | Source | Confidence |
|---|---|---|---|
| background | `oklch(0.09 0.005 260)` | `app/globals.css` | Declared |
| foreground | `oklch(0.95 0 0)` | `app/globals.css` | Declared |
| card | `oklch(0.12 0.005 260)` | `app/globals.css` | Declared |
| cardForeground | `oklch(0.95 0 0)` | `app/globals.css` | Declared |
| popover | `oklch(0.12 0.005 260)` | `app/globals.css` | Declared |
| popoverForeground | `oklch(0.95 0 0)` | `app/globals.css` | Declared |
| primary | `oklch(0.95 0 0)` | `app/globals.css` | Declared |
| primaryForeground | `oklch(0.09 0.005 260)` | `app/globals.css` | Declared |
| secondary | `oklch(0.18 0.005 260)` | `app/globals.css` | Declared |
| secondaryForeground | `oklch(0.95 0 0)` | `app/globals.css` | Declared |
| muted | `oklch(0.18 0.005 260)` | `app/globals.css` | Declared |
| mutedForeground | `oklch(0.65 0 0)` | `app/globals.css` | Declared |
| accent | `oklch(0.7 0.18 145)` | `app/globals.css` | Declared |
| accentForeground | `oklch(0.09 0.005 260)` | `app/globals.css` | Declared |
| destructive | `oklch(0.65 0.2 25)` | `app/globals.css` | Declared |
| destructiveForeground | `oklch(0.95 0 0)` | `app/globals.css` | Declared |
| border | `oklch(0.22 0.005 260)` | `app/globals.css` | Declared |
| input | `oklch(0.18 0.005 260)` | `app/globals.css` | Declared |
| ring | `oklch(0.7 0.18 145)` | `app/globals.css` | Declared |
| sidebar | `oklch(0.11 0.005 260)` | `app/globals.css` | Declared |
| sidebarForeground | `oklch(0.95 0 0)` | `app/globals.css` | Declared |
| sidebarAccent | `oklch(0.18 0.005 260)` | `app/globals.css` | Declared |
| sidebarBorder | `oklch(0.22 0.005 260)` | `app/globals.css` | Declared |
| success | `oklch(0.7 0.18 145)` | `app/globals.css` | Declared |
| warning | `oklch(0.75 0.18 55)` | `app/globals.css` | Declared |
| overlay | `rgba(0,0,0,0.8)` | `app/globals.css` | Declared |
| disabled | `opacity 0.5` | `app/globals.css` | Declared |

## Typography (12)

| ID | Value | Source | Confidence |
|---|---|---|---|
| fontSans | `'DM Sans', 'DM Sans Fallback', system-ui, sans-serif` | `app/globals.css + components/**/*.tsx` | Declared |
| fontMono | `'JetBrains Mono', 'JetBrains Mono Fallback', monospace` | `app/globals.css + components/**/*.tsx` | Declared |
| pageTitle | `1.25rem/1.75rem 600` | `app/globals.css + components/**/*.tsx` | Declared |
| sectionTitle | `1.25rem/1.75rem 600` | `app/globals.css + components/**/*.tsx` | Declared |
| metricValue | `1.5rem–1.875rem 700` | `app/globals.css + components/**/*.tsx` | Declared |
| body | `0.875rem/1.25rem 400` | `app/globals.css + components/**/*.tsx` | Declared |
| label | `0.875rem/1.25rem 500` | `app/globals.css + components/**/*.tsx` | Declared |
| caption | `0.75rem/1rem 400` | `app/globals.css + components/**/*.tsx` | Declared |
| tableHeader | `0.75rem uppercase 600 tracking-wider` | `app/globals.css + components/**/*.tsx` | Declared |
| tableText | `0.875rem/1.25rem` | `app/globals.css + components/**/*.tsx` | Declared |
| badge | `0.75rem 500` | `app/globals.css + components/**/*.tsx` | Declared |
| button | `0.875rem 500` | `app/globals.css + components/**/*.tsx` | Declared |

## Geometry (16)

| ID | Value | Source | Confidence |
|---|---|---|---|
| radiusBase | `0.5rem` | `components/**/*.tsx` | Declared or measured |
| radiusSm | `calc(base - 4px)` | `components/**/*.tsx` | Declared or measured |
| radiusMd | `calc(base - 2px)` | `components/**/*.tsx` | Declared or measured |
| radiusLg | `0.5rem` | `components/**/*.tsx` | Declared or measured |
| radiusXl | `0.75rem` | `components/**/*.tsx` | Declared or measured |
| border | `1px` | `components/**/*.tsx` | Declared or measured |
| sidebarExpanded | `260px` | `components/dashboard/sidebar.tsx` | Declared or measured |
| sidebarCollapsed | `72px` | `components/dashboard/sidebar.tsx` | Declared or measured |
| headerHeight | `64px` | `components/dashboard/header.tsx` | Declared or measured |
| contentPadding | `24px` | `components/**/*.tsx` | Declared or measured |
| gridGap | `24px primary / 16px compact` | `components/**/*.tsx` | Declared or measured |
| cardPadding | `20px metric / 24px general` | `components/**/*.tsx` | Declared or measured |
| controlHeight | `36px common` | `components/**/*.tsx` | Declared or measured |
| icon | `16–20px` | `components/**/*.tsx` | Declared or measured |
| avatar | `36px header / 80px settings` | `components/**/*.tsx` | Declared or measured |
| tableRow | `64px deals` | `components/**/*.tsx` | Declared or measured |

## Shadow (2)

| ID | Value | Source | Confidence |
|---|---|---|---|
| card | `none; border defines elevation` | `components/ui/card.tsx` | Declared |
| overlay | `Radix overlay + content elevation utilities` | `components/ui/dialog.tsx` | Code only |

## Interaction (10)

| ID | Value | Source | Confidence |
|---|---|---|---|
| hover | `accent/50 border or secondary surface` | `components/**/*.tsx` | Declared classes |
| focusVisible | `ring-2 ring-ring/20 + accent border` | `components/**/*.tsx` | Declared classes |
| active | `accent indicator/selected surface` | `components/**/*.tsx` | Declared classes |
| selected | `data-[state=active] card surface` | `components/**/*.tsx` | Declared classes |
| disabled | `pointer-events-none opacity-50` | `components/**/*.tsx` | Declared classes |
| loading | `spinner/animate-spin and disabled action` | `components/**/*.tsx` | Declared classes |
| transitionFast | `150–200ms` | `components/**/*.tsx` | Declared classes |
| transitionStandard | `300ms ease-out` | `components/**/*.tsx` | Declared classes |
| transitionEmphasis | `500ms fade/slide` | `components/**/*.tsx` | Declared classes |
| overlayOpacity | `black/80` | `components/**/*.tsx` | Declared |

## Responsive (8)

| ID | Value | Source | Confidence |
|---|---|---|---|
| sm | `640px` | `filter stacking` | Declared |
| md | `768px` | `header date/search and two-column settings` | Declared |
| lg | `1024px` | `metric type/grid expansion` | Declared |
| xl | `1280px` | `overview four-column metrics` | Declared |
| sidebar | `No mobile replacement; fixed 260/72 px at all widths` | `app/page.tsx` | Declared; responsive risk |
| header | `Search remains; date hidden below md` | `components/dashboard/header.tsx` | Declared |
| table | `overflow-x-auto` | `components/dashboard/sections/deals.tsx` | Declared |
| chart | `ResponsiveContainer width/height` | `components/dashboard/charts/*.tsx` | Declared |

## Chart (5)

| ID | Value | Source | Confidence |
|---|---|---|---|
| chart1 | `oklch(0.7 0.18 220)` | `app/globals.css` | Declared |
| chart2 | `oklch(0.7 0.18 145)` | `app/globals.css` | Declared |
| chart3 | `oklch(0.75 0.18 55)` | `app/globals.css` | Declared |
| chart4 | `oklch(0.65 0.2 25)` | `app/globals.css` | Declared |
| chart5 | `oklch(0.7 0.15 300)` | `app/globals.css` | Declared |

DM Sans and JetBrains Mono are declared as names only; no `next/font`, `@font-face`, or external stylesheet loads them. Later implementation must use approved local/system fallbacks and may not add a remote font dependency without a new decision. Inferred overlay/disabled values are identified as such; all other core colors are declared.

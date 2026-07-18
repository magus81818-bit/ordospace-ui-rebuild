# Status and chart policy

## Preserved ORDO tones

Color is never the only state signal. A tone must be paired with a visible label and at least one icon, dot, shape, or contextual message.

| Tone | Meaning | Current domain mapping |
| --- | --- | --- |
| `ok` | approved, complete, normal | `approved` |
| `warn` | deadline pressure, attention, verification | `qc_ready` |
| `crit` | blocked, failed, SLA risk | `revision_requested` |
| `pend` | active work, review, pending approval | `assigned`, `in_progress`, `admin_review`, `client_review` |
| `rej` | inactive, unassigned, closed, neutral | `draft`, unknown fallback |

`apps/web/src/design-system/status-map.ts` is visual metadata only. It does not alter `MODULE_STATUS`, transitions, store data, routes, or persistence. Unknown and empty values use the explicit `Unknown status / rej` fallback.

## Chart theme

`apps/web/src/design-system/chart-theme.ts` exposes:

- `chartPrimary`, `chartSecondary`, `chartTertiary`
- `chartPositive`, `chartWarning`, `chartCritical`, `chartMuted`
- `chartGrid`, `chartAxis`
- `chartTooltipBackground`, `chartTooltipBorder`, `chartTooltipText`

Every value is a CSS-variable reference. Recharts JSX must not contain raw HEX, RGB, OKLCH, fixed stroke, or fixed fill colors. Round 2 mounts no Recharts component; UI Lab shows only a CSS palette preview.

## Recharts size-warning prevention for Round 5

- Every chart container must have an explicit `min-height`.
- A `ResponsiveContainer` parent must have computable positive width and height.
- Charts inside hidden tabs recalculate after the tab becomes visible.
- A chart does not render while measured width or height is zero or negative.
- Do not suppress the warning; prevent the invalid layout state.

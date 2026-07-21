# Round 3 QA Record

## Scope

Round 3 adds an isolated Source Vault, an executable UI Catalog, six UI Lab views, validation scripts, and browser interaction tests. It does not replace the web App Shell, role routes, Dashboard cards, Store, persistence, or Domain behavior.

## Automated matrix

| Check | Result | Coverage |
| --- | --- | --- |
| `typecheck` | Pass | UI Catalog, web, and UI Lab TypeScript |
| `validate` | Pass, 11/11 | Existing 11 React MVP functional validations |
| `validate:tokens` | Pass | 125 declarations, 66 required tokens, five status triplets, 12 chart tokens |
| `validate:status-map` | Pass | Eight statuses and five ORDO status tones |
| `validate:source-vault` | Pass | 57 physical files, 57 unique entries, tier/path/status consistency, workspace exclusion |
| `validate:ui-catalog` | Pass | 18 Tier A/B primitives and eight Patterns, token use, prohibited imports/terms/coupling |
| `validate:ui-exports` | Pass | Three existing, unique public modules and no Vault export |
| `test` | Pass | Button, StatusBadge, Tabs, Select, Switch, Sheet, DropdownMenu, MetricCard, ActionGroup, Manifest |
| `build` | Pass | Existing web production build |
| `ui-lab:build` | Pass | UI Lab production build and JSON import |
| `smoke`, `smoke:preview` | Pass, 15 steps each | Admin, Worker, Client, persistence, refresh, logout |

## Visual matrix

Foundation, Primitives, Patterns, States, Responsive, and Source Inventory passed at 393×852, 768×1024, 1024×768, 1280×800, 1440×900, and 1920×1080. Every viewport reported equal document client and scroll widths. Intentional local overflow is limited to Table, Responsive Matrix, and navigation scrollers. Representative screenshots live under `docs/ui-migration/screenshots/round-03`.

## Manual checklist

- Long Korean labels wrap or truncate without covering actions.
- Button labels remain one line and preserve width during loading.
- ActionGroup exposes no more than three direct actions.
- Table preserves columns and communicates horizontal scroll.
- Focus is visible; form labels and invalid messages are perceivable.
- Sheet works on both sides and respects reduced motion.
- Source Inventory renders directly from `source-manifest.json`.
- No SalesOps sample dataset appears in the Production Catalog.

No blocking visual or accessibility regression remained after correcting the PanelHeader descendant selector that temporarily hid the primary action label.

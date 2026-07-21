# Reference access report

Checked on 2026-07-21 KST. Browser checks used the user's logged-in Chrome session; Git checks were read-only.

## Current ORDOSPACE

| Reference | Verified result |
|---|---|
| `https://ordospace-rebuild.vercel.app/` | reachable; title `ORDOSPACE — 멀티 역할 워크스페이스 (v3.0)`; 19 `.screen` sections; landing active; authenticated shell nodes present but hidden on public route |
| `https://github.com/magus81818-bit/ordospace-rebuild/` | reachable in browser; `git ls-remote --symref` reports default `main` and HEAD `ea1dc111440207608401c529b5bc27ebc5e61fd7` |
| protected local source | clean `main`, same HEAD and origin; used read-only |

## Sprint 5 comparison

| Reference | Verified result |
|---|---|
| `https://ordospace-sprint5.vercel.app/` | reachable; same product title and 19 screen-section names; comparison only |
| `https://github.com/magus81818-bit/ordospace-sprint5/` | reachable; default `main`, remote HEAD `114904332ca43a47e32f7e72296fb639f7893163` |

Sprint 5 was not used as the source baseline.

## SalesOps visual source

| Reference | Verified result |
|---|---|
| `https://v0-sales-operations-dashboard.vercel.app/` | reachable; title `SalesOps Dashboard`; navigation observed: Overview, Pipeline, Deals, Customers, Team, Forecasting, Reports, Settings, Collapse |
| `https://v0.app/templates/salesops-dashboard-9q2Mfgu6cDi` | reachable; title `SalesOps Dashboard - Dashboards Templates - v0 by Vercel` |
| supplied ZIP | present; 137,273 bytes; SHA-256 `460EAEBAE2E41C4FAA67C45391425C6047E44AAA07E8FBBD5FFB51238916D24C`; 96 archived files |
| supplied screenshot folder | present; 8 PNG files, all visually inspected; overview/pipeline/deals/customers/team/forecasting/reports/settings states represented |

ZIP inspection confirms a Next 16 component source with a dark operations-console token system, green accent, chart colors, dashboard sections, and reusable UI primitives. Round 1 did not treat it as executable product code and did not perform the component mapping reserved for Round 2. There is no verified public SalesOps GitHub, and none was invented or substituted.

## Writable result repository pre-state

Before Round 1 extraction it was clean on `fix/scope-correction-existing-site` at `4cee324…`, with origin `https://github.com/magus81818-bit/ordospace-ui-rebuild.git`. Local/remote `main` was not the remote default. Read-only remote inspection showed default HEAD `ui/r01-baseline` at `6abd68174e1d3007fd689fcc56d4ae5f963b66cf`. Existing `ui/r01-*`…`ui/r10-*` and the fix branch were treated only as rejected history.

## Planner channel

The single planner/review channel is `https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748`, browser title `ORDOSPACE SalesOps 이식`. Its completed `[ROUND 1 IMPLEMENTATION PROMPT]` was retrieved, validated, and preserved verbatim in `references/prompts/round-1.md` before implementation.

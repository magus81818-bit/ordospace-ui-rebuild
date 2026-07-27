# Inventory scope

Round 2 `artifacts/redo/r02/component-migration-matrix.json` is the sole mapping authority.

| ID | Worker surface | SalesOps mapping | Class | Implementation |
|---|---|---|---|---|
| UI-033 | Home KPI row | SO-CARD-002 Metric card | Adapted | existing metric factory plus Worker surface styling |
| UI-034 | Revision queue | SO-CARD-001 Card | Adapted | existing revision calculation and card link |
| UI-035 | In-progress section | SO-PROGRESS-001 Progress | Adapted | existing cards plus QC progress |
| UI-036 | Pending section | SO-CARD-001 Card | Adapted | existing order and deep link |
| UI-037 | Filter/count bar | SO-FILTER-001 Filter controls | Adapted | existing six filters and result count |
| UI-038 | Work-card list | SO-CARD-001 Card | Adapted | existing assigned-card order and selection |
| UI-039 | Work-card detail | SO-CARD-001 Card | Adapted | existing detail sections and actions |
| UI-040 | QC checklist | SO-INPUT-001 Input | Derived | Worker-specific accessible checklist from Input grammar |
| UI-041 | Work log controls | SO-INPUT-001 Input | Adapted | labelled MH/content form and existing lifecycle append |
| UI-042 | Submit-to-review | SO-SHELL-001 Dashboard Shell | Adapted | existing lifecycle transition in a Worker action surface |

All ten rows have Desktop, Tablet, Mobile, state, browser-assertion, ZIP, and live evidence in `inventory-scope.json` and `worker-state-coverage.json`. No later-round ID is marked complete.


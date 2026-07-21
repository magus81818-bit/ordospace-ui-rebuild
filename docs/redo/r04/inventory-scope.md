# Inventory scope

| ID | Existing component | SalesOps | Class | Source of truth | Result |
|---|---|---|---|---|---|
| UI-013 | ModuleCard factory | SO-SHELL-001 | Adapted | `module-card.ui.js` | Complete |
| UI-014 | Empty state | SO-STATE-005 | Exact/code-only | `metric.ui.js` | Complete |
| UI-015 | Toolbar/filter group | SO-FILTER-001 | Exact | existing data-filter events + primitive CSS | Complete |
| UI-016 | Tab group | SO-TAB-001 | Exact | existing tab events + primitive CSS | Complete |
| UI-017 | Dialog shell | SO-DIALOG-001 | Exact/code-only | `OverlayController` | Complete |
| UI-018 | Side/bottom sheet | SO-SHEET-001 | Exact/code-only | `OverlayController` + existing `SheetController` | Complete |
| UI-019 | Table shell | SO-TABLE-001 | Exact | `TableShell` + additive operating table classes | Complete |
| UI-020 | Form controls | SO-INPUT-001 | Exact | existing form factories + shared Button/FieldMessage | Complete |
| UI-064 | Notification/My tabs | SO-TAB-001 | Adapted | existing `data-prof-tab` behavior | Complete |
| UI-073 | Existing QA gallery | SO-CARD-001 | Derived | existing guarded gallery + separate UI Lab mount | Complete |

No other inventory item is marked complete. Full per-ID routes, states, evidence and follow-up fields are in `artifacts/redo/r04/inventory-scope.json`.

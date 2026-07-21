# Round 7 Inventory Scope

The sole mapping authority is `artifacts/redo/r02/component-migration-matrix.json`. The Round 7 browser audit copies the 12 `implementationRound === "Round 7"` rows into the inventory and component catalog; the validator independently compares every required field back to Round 2.

| ID | ORDOSPACE component | SalesOps ID | SalesOps component | Class |
|---|---|---|---|---|
| UI-021 | dashboard KPI row | SO-CARD-002 | Metric card | Adapted |
| UI-022 | project step progress | SO-PROGRESS-001 | Progress | Derived |
| UI-023 | chain progress group | SO-PROGRESS-001 | Progress | Adapted |
| UI-024 | approval-card grid | SO-CARD-001 | Card | Adapted |
| UI-025 | project progress header | SO-HEADER-001 | Header | Adapted |
| UI-026 | chain/status filters | SO-FILTER-001 | Filter controls | Adapted |
| UI-027 | step timeline and gate rows | SO-CHART-001 | Chart container | Derived |
| UI-028 | artifacts/assets panel | SO-CARD-001 | Card | Adapted |
| UI-029 | card detail modal | SO-DIALOG-001 | Modal/Dialog | Adapted, code-only evidence |
| UI-030 | approval queue list | SO-CARD-001 | Card | Adapted |
| UI-031 | approval detail | SO-CARD-001 | Card | Adapted |
| UI-032 | decision controls | SO-INPUT-001 | Input | Adapted |

The initial report incorrectly guessed six IDs. Those guesses were removed; the validator now rejects any mismatch in component, SalesOps ID/component, classification, uncertainty, ZIP evidence, function preservation, or accessibility requirements.

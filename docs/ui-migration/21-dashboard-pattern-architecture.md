# Dashboard pattern architecture

```text
RoleWorkspaceScreen
├─ existing role visibility selector
├─ ModuleCardDashboard
│  ├─ pure metric calculation → MetricCard grid
│  ├─ local filter state → FilterTabs
│  ├─ pure view models
│  │  ├─ desktop DataTableShell
│  │  └─ mobile Card list
│  ├─ StatusBadge / Progress
│  ├─ ActionGroup → existing detail route
│  └─ EmptyState / InlineNotice / PanelHeader
├─ existing ActivityReviewPanel
└─ existing AdminCreateModuleCardPanel when admin
```

The dashboard receives already-authorized cards and never reads the store. Desktop and mobile render the same view models, so layout changes do not duplicate domain interpretation. Filter state is local React state and does not change URLs, persistence, or source data.


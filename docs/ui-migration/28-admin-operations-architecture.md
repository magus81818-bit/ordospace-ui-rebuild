# Admin operations architecture

```text
AdminOperationsPage
├─ ModuleCardDashboard
│  ├─ Admin derived metrics
│  ├─ existing filters and full management table/mobile list
│  └─ AdminReviewQueue
├─ existing AdminCreateModuleCardPanel
└─ existing ActivityReviewPanel (screen composition)
```

`admin-operation-view.js` derives attention category, stable priority rank, reviewability, queue ordering, and metrics without mutating cards. The queue includes actual `admin_review`, `revision_requested`, and `qc_ready` attention states, ordered by Admin action priority and then stable ID. Search was omitted because the seven-card seed set and existing filters provide sufficient control without adding a new interaction contract.

# Admin current flow audit

- Routes: `/workspace/admin` and `/workspace/admin/cards/:cardId` only.
- Root: `RoleWorkspaceScreen` receives every visible card, creates assigned cards through `createAssignedModuleCard`, and displays role-scoped activity.
- Detail: `ModuleCardDetailScreen` reads the existing card and calls `sendAdminModuleCardToClientReview` only through `AdminReviewModuleCardPanel`.
- Send condition: the existing `canAdminSendToClientReview` policy allows client delivery only from `admin_review`.
- Actual fields: project, title, summary, status, priority, assignee, client, phase, due date, estimate/logged hours, progress, QC status, deliverables, comments, and activities.
- Excluded because absent: Projects, Team, Audit, Settings, attachments, QC checklist, SLA, budget, and new Admin edit/assignment routes.

Round 6 reorganizes the two real routes and composes the existing create/send handlers; it adds no route, transition, or stored field.

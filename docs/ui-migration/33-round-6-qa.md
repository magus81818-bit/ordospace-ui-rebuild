# Round 6 QA

- Admin operation, action-policy, and detail-contract validations cover actual composition, all eight statuses plus fallback, no mutation, no duplicated handler/store/persistence logic, and no forbidden imports or colors.
- Admin pure tests cover queue order, exclusions, metric counts, reviewability, approved read-only actions, and immutability.
- Actual Chrome QA covers Admin root, queue, create form, Admin-review detail, client-review, revision, approved, mobile, tablet, desktop, and wide layouts.
- Screenshots are stored in `docs/ui-migration/screenshots/round-06/`; every scenario reports `documentOverflow=false`.
- Existing lifecycle Smoke remains the authority for creation, client delivery, refresh persistence, and logout.
- Worker and Client dashboards retain the Round 5 common component path and receive no Round 6 feature changes.

Deferred: Projects/Team/Audit routes, attachments/evidence, full audit timeline, analytics/charts, Client-specific IA, Worker-specific IA, backend, code splitting, and Vercel.

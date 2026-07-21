# Round 8 QA

- Worker workspace, action-policy, and detail-contract validators cover actual composition, all statuses plus fallback, forbidden coupling, and handler reuse.
- Worker pure tests cover active/revision queues, scoped metrics, submit readiness, readonly states, view-model suppression, and source immutability.
- Chrome QA covers both Worker seed accounts, Root and queues, editable detail, no-change validation, submit-ready fixture, revision, Admin review, Client review, Approved, desktop, and mobile.
- Screenshots are stored in `docs/ui-migration/screenshots/round-08/`; all 12 scenarios report `documentOverflow=false`.
- The submit-ready visual fixture changes only temporary browser localStorage and is not added to production seed data.
- Existing lifecycle smoke remains the authority for save, submit, revision rework, refresh persistence, and logout.

Deferred: upload/evidence, versions, timer/time tracking, dependencies, backend, Worker analytics, code splitting, and Vercel.

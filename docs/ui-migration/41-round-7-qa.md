# Round 7 QA

- Client approval, action-policy, and detail-contract validators cover the actual composition, all eight statuses plus fallback, forbidden coupling, no hardcoded colors, and handler reuse.
- Client pure tests cover queue scope/order, metrics, action visibility, readonly states, fallback, assignee suppression, and source immutability.
- Chrome QA covers Client Root, Decision Queue, Client Review detail, Revision form, validation error, Approved, Revision Requested, mobile, tablet, desktop, and wide layouts.
- Screenshots are stored in `docs/ui-migration/screenshots/round-07/`; all 12 scenarios report `documentOverflow=false`.
- Existing lifecycle smoke remains the authority for approval, revision, persisted reason/status, refresh, and logout.
- Admin and Worker stay on their Round 6 and Round 5 component paths. Shell, Dashboard, and Admin visual suites remain regression gates.

Deferred: attachments/evidence, approval snapshots, version comparison, backend, Client analytics, Worker-specific IA, code splitting, and Vercel.

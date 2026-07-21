# Preview Smoke and Visual QA

Status: PARTIAL. The approved explicit retry produced a READY Preview, but automated remote QA is blocked by Vercel Authentication.

`smoke:deployment` was run against the compliant Preview. It stopped before the application flow because Vercel returned its authentication surface (`403`; a secondary `429` resource response was also logged). No bypass secret was created, read, printed, or stored.

A read-only check through the user's existing signed-in Chrome session reached the application successfully and verified:

- the public root renders with the expected title;
- the seed-account screen renders;
- the Admin seed login reaches `#/workspace/admin`;
- the Admin dashboard renders its KPI, priority queue and seven-card table;
- no browser console errors were observed during that representative flow.

The full 15-step automated lifecycle smoke and 15-scenario deployment visual suite remain incomplete. No Round 10 screenshots were created, and `validate:preview-evidence` must not be reported as passed. Completing automated evidence requires an explicitly approved Vercel automation-bypass configuration or an equivalent supported authenticated automation path.

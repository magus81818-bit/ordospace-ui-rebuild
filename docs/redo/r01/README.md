# Round 1 — source baseline and audit index

Round 1 freezes the current ORDOSPACE product before any SalesOps styling is introduced. The product baseline is the root commit `937d38b92d5b062f6110dba42bc4690c35f3ff15`, exported from protected source commit `ea1dc111440207608401c529b5bc27ebc5e61fd7`. The two commits contain the same 191 tracked entries and Git blob IDs.

No application source, public page, dashboard layout, route, text, data, session behavior, API behavior, deployment, alias, or protected repository was changed in this round. Everything after the root baseline commit is audit documentation, prompts, tests, and evidence.

## Round 1 documents

- [`route-screen-inventory.md`](route-screen-inventory.md) — official routes, aliases, ownership, guards, and browser evidence.
- [`layout-function-inventory.md`](layout-function-inventory.md) — shell, responsive rules, screen layouts, actions, storage, and API paths.
- [`component-state-inventory.md`](component-state-inventory.md) — migration ledger for reusable and one-off components and their states.
- [`frozen-public-baseline.md`](frozen-public-baseline.md) — frozen public surface contract and screenshot index.
- [`source-parity.md`](source-parity.md) — machine-verifiable source equality.
- [`reference-access-report.md`](reference-access-report.md) — live/GitHub/ZIP/screenshot access evidence.
- [`verification-results.md`](verification-results.md) — commands, outcomes, browser coverage, and honest exceptions.

## Evidence

- `artifacts/redo/r01/source-parity-report.json`
- `artifacts/redo/r01/source-file-hashes.json`
- `artifacts/redo/r01/browser-audit.json`
- `artifacts/redo/r01/playwright-report.json`
- `evidence/redo/r01/frozen-public/`
- `evidence/redo/r01/dashboard/{client,worker,admin,shared}/`
- `tests/redo/r01/`

## SalesOps migration status

All product components are `Pending` in the migration ledger. Round 1 only confirmed that the supplied SalesOps reference exists and is accessible. Exact/Adapted/Derived decisions start from the component-by-component audit in Round 2.

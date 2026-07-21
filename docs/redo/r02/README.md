# Round 2 — SalesOps evidence and migration map

Round 2 audits the supplied ZIP/live/v0/screenshots and maps all 73 Round 1 inventory IDs. It makes no ORDOSPACE product change.

## Run

1. `npm --prefix tests/redo/r02 ci`
2. `npm --prefix tests/redo/r02 run audit:salesops`
3. `npm --prefix tests/redo/r02 run audit:ordospace`
4. `npm --prefix tests/redo/r02 run generate`
5. `npm --prefix tests/redo/r02 run validate`

## Index

The required source/live/token/catalog/matrix/state/ADR/allocation/parity/verification documents are in this directory; ten machine-readable artifacts are in `artifacts/redo/r02/`; visual evidence is in `evidence/redo/r02/`.

Round 3 receives the complete token specification, evidence-gated component matrix, isolation ADRs and allocation plan. Public pages remain frozen.

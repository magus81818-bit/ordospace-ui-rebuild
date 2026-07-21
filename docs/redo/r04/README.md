# Round 4 — shared primitives and dev-only UI Lab

Round 4 implements exactly `UI-013`–`UI-020`, `UI-064` and `UI-073` from the approved migration matrix. Existing factories remain authoritative; additive classes, shared controllers and a scoped stylesheet consume Round 3 tokens. A separate interactive section inside the existing dev-only component gallery validates every target without adding an operating route or menu item.

Key evidence: [inventory](inventory-scope.md), [architecture](primitive-architecture.md), [catalog](primitive-catalog.md), [UI Lab](ui-lab.md), [verification](verification-results.md), and machine artifacts under `artifacts/redo/r04/`.

Reproduce with `npm --prefix tests/redo/r04 ci` then `npm --prefix tests/redo/r04 run validate`.

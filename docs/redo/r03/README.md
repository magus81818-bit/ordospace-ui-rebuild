# Round 3 — isolated dashboard token foundation

Round 3 establishes the SalesOps-derived visual token layer for authenticated ORDOSPACE surfaces only. It connects just the Round 3 primary inventory (`UI-010`, `UI-011`, `UI-012`) and deliberately leaves full primitive and component migration to later rounds.

## Product change

- `index.html` loads the new stylesheet after the legacy application stylesheet.
- `app/styles/dashboard-salesops.tokens.css` declares and consumes the scoped token system under `body.auth-on`.
- No routing, session, role, local-storage, API, content, data, or public-page implementation changed.

## Evidence index

- [Inventory and scope](inventory-scope.md)
- [Token implementation](token-implementation.md)
- [CSS isolation](css-isolation.md)
- [Visual token review](visual-token-review.md)
- [Public regression](public-regression.md)
- [Accessibility review](accessibility-review.md)
- [Verification results](verification-results.md)
- [Change manifest](change-manifest.md)

Machine-readable results are under `artifacts/redo/r03/`; 38 screenshots are under `evidence/redo/r03/`.

## Reproduce

1. `npm --prefix tests/redo/r03 ci`
2. `npm --prefix tests/redo/r03 run validate`

The validator checks the exact Round 2 merge-base, product-file boundary, token completeness, CSS isolation, frozen public pages, layout parity, browser behavior, responsive states, and accessibility evidence.

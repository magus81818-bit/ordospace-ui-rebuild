# Public and non-dashboard regression

The frozen set covers landing, auth, terms, privacy, support and workspace selection at 1440×1000, 1024×1366 and 390×844: 18 comparisons total.

## Result

- 18/18 controls passed.
- Public DOM order, computed styles and bounding boxes were identical with the Round 3 stylesheet enabled versus disabled.
- No public root resolved an `--ordo-so-*` token.
- Sixteen frozen screenshot comparisons were pixel-identical.
- Two landing comparisons contained only the existing autoplay demonstration difference. The largest separately reported frozen ratio was `0.001807871` on landing/tablet; token-disabled DOM/style/box parity still passed.

The animation difference is recorded rather than suppressed or misreported as a deterministic pixel match. It is unrelated to the token layer and does not change the frozen product implementation.

Evidence is in `evidence/redo/r03/frozen-public/`; detailed records are in `artifacts/redo/r03/frozen-public-regression.json`.

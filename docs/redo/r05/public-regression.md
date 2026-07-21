# Public regression

Round 5 freshly rendered `landing`, `auth`, `terms`, `privacy`, `support`, and `select-workspace` at 1440×1000, 1024×1366, and 390×844: exactly 18 cases.

- 15 static cases are byte-identical to the Round 1 frozen baseline.
- Landing tablet/mobile are byte-identical to Round 1. Landing desktop full-frame diff is `0.00010422998394663425` (about 0.0104%) inside the header/hero autoplay and subpixel-rasterization region; masked diff is 0.
- Every case passed DOM, computed-style, bounding-box, font, background, border, radius, focus, and overflow checks.
- `body.auth-on`, resolved `--ordo-so-*` tokens, applied Round 5 shell selectors, and visible Sidebar/Header/Drawer/Mobile Tabs are all zero on public routes.

Machine-readable per-case evidence is `artifacts/redo/r05/frozen-public-regression.json`; screenshots are in `evidence/redo/r05/frozen-public/`.

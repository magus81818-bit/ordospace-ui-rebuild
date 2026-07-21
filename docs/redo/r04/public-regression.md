# Frozen public regression

Landing, auth, terms, privacy, support and select-workspace were checked at desktop, tablet and mobile: 18/18 PASS.

DOM, computed style and bounding box parity with the dashboard styles disabled passed for every control and dashboard token leak was zero. Sixteen frozen pixels were identical; the two landing autoplay captures retain the known timing variation, with a maximum separately reported ratio of `0.001807871` at landing/tablet. This is not treated as deterministic equality or hidden.

Evidence: `evidence/redo/r04/frozen-public/` and `artifacts/redo/r04/frozen-public-regression.json`.

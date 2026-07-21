# Round 10 QA

Baseline: Round 9 `b2d27f95ab3450f9bb094bcb423522b4e5ae2657`; branch `ui/r10-release-preview`.

Pre-deployment results: `npm ci`, `npm run check`, `check:quality`, `validate:release`, dev smoke 15/15, local preview smoke 15/15 and local Round 9 visual suite passed. Web/UI Lab builds passed; bundle stayed 537,384 bytes and the 500kB warning remains visible.

Vercel identity: CLI 56.4.1, user `akiryu16180339-2308`, scope `akiryu16180339-2308s-projects`; new target name/ID were verified and differ from existing ORDO projects.

External result: the first no-flag command unexpectedly created a Production-target READY deployment. After explicit user approval, one `--target=preview` retry created READY Preview `dpl_4LfsBgnPPfc27e6vrsJ4uYpTNaHM` at `https://ordospace-ui-rebuild-6lvybmrig-akiryu16180339-2308s-projects.vercel.app`.

The automated deployment smoke reached Vercel Authentication rather than the app and stopped on 403. A signed-in Chrome check passed for public root, seed login, Admin workspace rendering and browser-console health. Full Preview smoke, screenshots, visual evidence validation, main fast-forward and GitHub default-branch change are NOT completed. Existing ORDO projects remain outside the target and unchanged.

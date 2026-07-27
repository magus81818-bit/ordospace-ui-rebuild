# Round 9 implementation report

Round 9 is verification-only. It starts from approved Round 8 HEAD `2911cc85922bf32f31d051216aca9f29ed906564` on `redo/r09-integration-verification`. The Planner correction was applied after submitted HEAD `5bc06a0844ddd8e188f1056566e21c110d429738`; the first measured-evidence correction commit is `533c6c1dabbd68020fd1d8e1a761ee2c9eedef7f`.

The corrected audit serves current, approved Round 1, and approved Round 8 sources on isolated local origins. It replaces path-only and top-level summary checks with item-level inventory/state evidence, real browser listeners and event/service spies, byte/hash parity, direct source markers, and an independent validator.

Results:

- Matrix: UI-065~071 frozen; UI-072 mapped; Matrix unchanged.
- Inventory: 73 total/unique; every internal item check passes; zero invalid paths, gaps, or duplicates.
- State: 73 source items merged; 549 implemented, 675 reasoned N/A; zero fabricated, invalid, missing, or unrelated duplicate evidence.
- Public: approved Round 1 baseline `f10779e...`; 18/18 DOM/text/style/box/form cases with zero differences; UI-065~071 interactions measured separately.
- UI-072: existing source/renderer/guard and one exact selector CTA; 4/4 single/multi-role, keyboard, focus, long-route, and D/T/M cases.
- Authenticated: 60/60 responsive and role-isolation cases.
- UI Lab: dev-only, no official menu, zero API calls, storage unchanged, specimens complete, keyboard/focus/reduced-motion and D/T/M pass.
- Browser health: zero console/page/HTTP/new-request/unhandled/observer/duplicate/overflow failures. One measured Orbitron external request failure is classified using the byte-identical Round 8 font contract.
- Parity/CSS/product: route, screen ID, Korean copy, guards, session, storage, API, lifecycle, service arguments and protected hashes match Round 8; no token leak, raw-color/important increase, product, dependency, font, or backend change.
- Regression: Round 1~8, root build/static/smoke/MVP, backend tests/type/build, and final Round 9 browser 5/5 plus independent validator pass.

No Product, Matrix, Admin, Client, Worker, Public, data/API/backend, font, dependency, main, Production, deployment, or Round 10 change was made. SUIT was not applied; the preserved dashboard policy is DM Sans → Pretendard Variable/Pretendard → Inter/system.

Remaining risks are the existing external Google Fonts dependency, existing dependency-audit findings recorded by the prior environment, and the intentionally skipped Production deployment before Round 10.

Decision: READY FOR ROUND 9 REVIEW.

# Round 5 correction report

## Resolved findings

1. Fresh public captures: 18/18 generated from the Round 5 branch.
2. Public comparisons: screenshot, DOM, computed style, bounding box, token/shell leak, and overflow passed in all 18 cases.
3. Notification empty: QA-only input, named status, open/close, outside click, Escape, focus return, desktop/mobile passed.
4. Notification long: QA-only Korean/no-space/multi-item fixture, wrap, mixed unread/read, internal scroll, containment, Escape, and focus passed.
5. Disabled: native disabled theme control on desktop and drawer control on mobile blocked click/keyboard activation and left tab order; named helper and visual state passed.

## Data and function preservation

`app/config/app.config.js`, operating `ORDO_NOTIFICATIONS`, routes, menu arrays, role/session/storage/API/backend behavior, and public CSS are unchanged. Fixtures exist only inside the Playwright page and disappear on reload.

## Evidence

- `artifacts/redo/r05/frozen-public-regression.json`
- `artifacts/redo/r05/shell-state-coverage.json`
- `artifacts/redo/r05/shell-interaction-audit.json`
- `artifacts/redo/r05/accessibility-audit.json`
- `evidence/redo/r05/frozen-public/`
- `evidence/redo/r05/shell-states/`

No unresolved correction item remains. Remaining risk is limited to browser/OS subpixel rasterization outside the verified Chrome environment; DOM, computed style, geometry, and masked diff provide the stable guard.

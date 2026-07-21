# Change Manifest

Product 추가:

- `app/styles/dashboard-salesops.admin.css` — Admin 전용 visual layer
- `app/ui/components/admin.ui.js` — Admin semantic/accessibility decorator

Product 수정:

- `index.html` — stylesheet/script 연결, additive Admin namespace/ARIA/form metadata
- `app/screens/admin-workspace.screen.js` — additive classes/states, tokenized heatmap/utilization, overlay validation/focus
- `app/styles/tailwind.build.css` — 새 정적 class 반영 build output

Product 삭제 없음. Audit-only 추가: `tests/redo/r06`, `artifacts/redo/r06`, `evidence/redo/r06`, `docs/redo/r06`, `references/prompts/round-6.md`.


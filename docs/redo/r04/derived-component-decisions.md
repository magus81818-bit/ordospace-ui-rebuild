# Derived and code-only decisions

SalesOps live pages do not expose every code component as a visible state. These are not claimed as live copies.

| ORDOSPACE | SalesOps ZIP evidence | Live evidence | Decision |
|---|---|---|---|
| UI-014 Empty | `components/ui/empty.tsx` | no isolated live state | derive DOM/status/action from token grammar and ORDOSPACE flow |
| UI-017 Dialog | `components/ui/dialog.tsx` | no isolated live state | native static dialog with modal name, focus/Escape/return |
| UI-018 Sheet | `components/ui/sheet.tsx` | no isolated live state | preserve existing side-sheet purpose; mobile bottom presentation |
| UI-073 QA | component/catalog evidence | not an operating SalesOps screen | preserve old gallery and add a clearly separate derived Lab |

All use `--ordo-so-*`, escaped/static content, Korean ORDOSPACE examples and no SalesOps data, routes or runtime. Uncertainty is represented by the code-only label and UI Lab evidence rather than hidden.

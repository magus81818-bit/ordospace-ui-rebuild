# Accessibility review

- Button: accessible icon-only name, disabled distinct from loading, visible focus.
- Form: native inputs retained; label, required, invalid and error association exercised.
- Tabs/filters: semantics follow actual behavior; selected state is explicit.
- Dialog/Sheet: accessible names, modal semantics, focus entry, Tab containment, Escape, close control and focus return.
- Contrast: primary 17.87:1, secondary 10.11:1, muted 6.41:1 — all pass.
- Icon controls: 21 visible, unnamed 0.
- Reduced motion: fast/standard/emphasis resolve to `0ms linear`.

The full audit is `artifacts/redo/r04/accessibility-audit.json`; interactive overlay behavior is in `ui-lab-browser-audit.json`.

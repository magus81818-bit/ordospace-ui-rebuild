# Accessibility review

Drawer and notification controls retain accessible names and expose controls/expanded/hidden state. Empty notification uses a named status; long items retain screen-reader text while wrapping visually. Escape closes each overlay and returns focus. Native disabled semantics remove the QA specimens from activation and tab order; cursor and opacity communicate state without relying only on color. Reduced motion and focus-visible rules remain active.

Desktop and mobile evidence is recorded in `artifacts/redo/r05/accessibility-audit.json` and `evidence/redo/r05/shell-states/`.

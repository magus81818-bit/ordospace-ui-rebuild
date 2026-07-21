# Interactive UI Lab

The Lab is a separate `#salesopsUiLab` section inside the existing `#components-gallery` screen. Access still requires an authenticated role plus `dev_mode=on`; it is absent from official menus and does not add a twentieth screen.

- 15 required top-level sections and 10 official inventory IDs.
- Six tested interactions: form invalid/valid, tab selection, feedback state, dialog focus/Escape/return, sheet open/close and long-content toggle.
- API calls: 0. Operating localStorage mutations: 0.
- D/T/M: seven states per viewport (full, form, cards/filters, dialog, sheet, long content, disabled/loading/error), 21 screenshots.
- Dialog and Sheet use real modal names, focus entry, Escape and focus return.

Evidence: `evidence/redo/r04/ui-lab/` and `artifacts/redo/r04/ui-lab-browser-audit.json`.

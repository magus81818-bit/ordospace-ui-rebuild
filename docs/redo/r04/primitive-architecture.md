# Primitive architecture

The architecture extends the existing static-DOM factory system instead of introducing React, Next, Radix, shadcn, CVA or a parallel component library.

- Existing authority: `base.ui.js`, `status.ui.js`, `metric.ui.js`, `module-card.ui.js`, `form.ui.js`, `sheet.ui.js`.
- Additive shared contracts: `primitives.ui.js` exports escaped Button, FieldMessage, TableShell and OverlayController.
- Visual contract: `.ordo-c-*` classes in `dashboard-salesops.primitives.css`, scoped under `body.auth-on` and consuming 64 Round 3 tokens.
- QA-only state: `app/qa/ui-lab.js`, isolated from operating state, storage and APIs.
- Compatibility: existing IDs, action selectors, form values, routes, events, lifecycle and Korean copy remain intact.

OverlayController provides focus entry, Tab containment, Escape close and focus return for its dialogs without copying a portal runtime.

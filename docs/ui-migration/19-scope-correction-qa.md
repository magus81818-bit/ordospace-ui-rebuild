# Scope Correction QA

- Corrected branch: `fix/scope-correction-existing-site`
- Integration commit: `dcb6403`
- Preview deployment: `dpl_B94aH8u6WeKBkztJMhuvreEogton`
- Preview: `https://ordospace-ui-rebuild-ea0flgfg5-akiryu16180339-2308s-projects.vercel.app`
- Vercel classification: `target: preview`, `status: READY`

## Verified

- Public `/` and `#landing` render the existing ORDOSPACE landing rather than the React MVP.
- The landing retains its existing copy, information architecture, inquiry entry and authentication entry.
- Remote `#auth` renders the existing login form.
- Remote `#inquiry` opens the existing inquiry dialog.
- No browser console error was observed in those remote checks.
- Local static smoke passed 12 routes and runtime QA 20/20.
- Desktop landing and 393x852 mobile landing were visually checked; mobile document overflow was zero.
- Product build, product contract validation and release validation passed.
- The React MVP/UI catalog aggregate `npm run check` remains affected by its pre-existing intermittent UI-catalog browser-test startup failure. A standalone `npm test` passed immediately before the aggregate rerun; this is not represented as a full aggregate pass.

## Safety

The protected source, existing ORDO Vercel projects, `main`, Production deployments and aliases were not changed. The earlier dashboard-only Preview remains a separately classified React MVP experiment.

# Design system bridge

This directory is the application-facing bridge to shared tokens, status semantics, and chart colors.

- `tokens.css` imports Tailwind CSS 4 theme/utilities and the single shared token package.
- `status-map.ts` maps every current ModuleCard domain state to one of five preserved ORDO tones.
- `chart-theme.ts` exposes chart roles as CSS-variable references; no chart color may be hardcoded in JSX.

Round 2 applies only the global canvas, typography, focus, and reduced-motion foundation to the functional app. Shell and role-screen component replacement remains out of scope.

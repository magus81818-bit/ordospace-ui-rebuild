# Round 9 Visual Regression Evidence

Screenshot root: `artifacts/ui-screenshots/round09/`

- `regression/`: 35 integrated shell/public/Admin/Client/Worker, viewport, zoom, reduced-motion and long-content scenarios.
- `accessibility/`: 7 focused scenarios: skip link, mobile Sheet, user menu, client error, Worker disabled reason, 200% zoom, reduced motion.
- `long-content/`: 8 browser-only fixtures: title, project, user name, email, Worker note, revision reason, activity and unknown status.
- Total: 50 non-empty PNG files.
- Every recorded scenario reported `documentOverflow=false`, one rendered `h1`, and one `main`.
- Historical Round 4–8 directories were checked, regenerated only for regression comparison, then restored from Git; their tracked files are unchanged.

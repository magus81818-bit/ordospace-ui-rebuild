# Round 9 QA

- Git baseline: Round 8 `2d961e86510a9bf693dcb793a6648160656c8b6f`; Round 9 branch `ui/r09-quality-hardening`.
- Automated: typecheck, 11 MVP validations, token/status/source/catalog/navigation/route/shell/dashboard/view-model, all role validations/tests, 6 quality contracts, 11 quality assertions, web build and UI Lab build passed.
- Browser: dev smoke 15/15 and preview smoke 15/15 passed with no runtime exceptions/log errors.
- Responsive: 320–1920 and 200% scale scenarios passed with document overflow false; sticky role panels stack below 1280.
- Accessibility: skip target, unique navigation names, Sheet focus return, menu Escape, form error association, disabled reason, reduced motion and one rendered h1/main passed.
- Role regression: Admin/Client/Worker selectors, actions and hidden information contracts passed.
- Visual: legacy Shell 9, Dashboard 11, Admin 12, Client 12 and Worker 12 scenarios passed; Round 9 produced 50 separate captures.
- Bundle: 537,384 B, +0.17% from Round 8; existing Vite 500kB warning retained.
- Original repository: verify again before commit; no command in this round wrote to it.
- Round 10 entry condition: met locally. Deployment, branch normalization, README/release documentation and bundle-splitting decision remain.

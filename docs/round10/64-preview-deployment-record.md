# Deployment Incident Record

Status: BLOCKED — no compliant Preview deployment was produced.

- Command executed: the approved non-Production form `vercel deploy --yes --scope akiryu16180339-2308s-projects` (no Production flag, promotion or alias option).
- Unexpected result: Vercel CLI 56.4.1 returned deployment `dpl_7qx63LED1u6ivJ4WvoTfjCVDXxzp` with `target: production` and automatically aliased the new project's default addresses.
- Deployment URL: `https://ordospace-ui-rebuild-qh63jadmm-akiryu16180339-2308s-projects.vercel.app`.
- Project: isolated new `ordospace-ui-rebuild`, ID `prj_V21zTBf2UElq03QIghf8NHNK5z9B`.
- Status: READY; build used `npm ci`, `npm run build`, `apps/web/dist`.
- Commit at deployment: Release preparation `af9d340242e2d1ede9cd758045994b9e7805c733` on `ui/r10-release-preview`.

Stop response: no further deploy, deletion, promotion, domain operation, remote smoke/visual QA, main fast-forward or default-branch change was performed. The URL is not recorded or represented as a compliant Preview.

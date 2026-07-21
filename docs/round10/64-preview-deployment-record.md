# Deployment Incident Record

Status: PREVIEW READY; automated remote QA remains blocked by Vercel Authentication.

- Command executed: the approved non-Production form `vercel deploy --yes --scope akiryu16180339-2308s-projects` (no Production flag, promotion or alias option).
- Unexpected result: Vercel CLI 56.4.1 returned deployment `dpl_7qx63LED1u6ivJ4WvoTfjCVDXxzp` with `target: production` and automatically aliased the new project's default addresses.
- Deployment URL: `https://ordospace-ui-rebuild-qh63jadmm-akiryu16180339-2308s-projects.vercel.app`.
- Project: isolated new `ordospace-ui-rebuild`, ID `prj_V21zTBf2UElq03QIghf8NHNK5z9B`.
- Status: READY; build used `npm ci`, `npm run build`, `apps/web/dist`.
- Commit at deployment: Release preparation `af9d340242e2d1ede9cd758045994b9e7805c733` on `ui/r10-release-preview`.

Stop response: no further deploy, deletion, promotion, domain operation, remote smoke/visual QA, main fast-forward or default-branch change was performed. The URL is not recorded or represented as a compliant Preview.

## Approved Preview retry

- User approved option B: one explicitly targeted Preview attempt.
- Verified target before deployment: `ordospace-ui-rebuild`, project ID `prj_V21zTBf2UElq03QIghf8NHNK5z9B`, scope `akiryu16180339-2308s-projects`.
- Command form: `vercel deploy --target=preview --yes --scope akiryu16180339-2308s-projects`.
- Result: deployment `dpl_4LfsBgnPPfc27e6vrsJ4uYpTNaHM`, `target: preview`, `status: READY`.
- Preview URL: `https://ordospace-ui-rebuild-6lvybmrig-akiryu16180339-2308s-projects.vercel.app`.
- The original accidental Production deployment was neither promoted nor deleted.
- Existing ORDO projects, `origin/main`, and the GitHub default branch were not changed.

# ORDOSPACE UI Rebuild

An isolated React UI rebuild of the ORDOSPACE ModuleCard MVP. This repository preserves the original role, lifecycle, validation and local persistence contracts while rebuilding the interface as a responsive dark operations console.

This is not the original `ordospace-rebuild` repository. Never connect this checkout to the original repository remote or its Vercel project/domain. The only permitted Vercel project for this repository is `ordospace-ui-rebuild`, and current deployments are Preview—not Production.

## Product and architecture

- Admin: create, assign, review and send ModuleCards to the client.
- Worker: see only `assigneeId === userId`, update progress/QC and submit eligible work.
- Client: see only `clientId === userId`, approve or request revision.
- Hash routes: `/`, `/auth`, and `/workspace/{admin|worker|client}` with role-filtered detail routes.
- State: demo seed data and browser `localStorage`; no real authentication, server persistence or multi-user sync.

## Monorepo

- `apps/web` — the only production/Preview deployable app.
- `apps/ui-lab` — local design-system catalog; never deployed by the web project.
- `packages/design-tokens` and `packages/ui-catalog` — shared workspace packages.
- `references/salesops-source-vault` — read-only design reference, excluded from builds.
- `scripts` — local validation, smoke and visual QA.
- `docs` and `artifacts` — audit and evidence, excluded from deployment output.

Requires Node `>=20.19.0` and npm. The verified Round 10 environment uses Node 24 and npm 11.

## Setup and development

```powershell
npm ci
npm run dev
npm run build
npm run preview
```

The web app uses Vite. Build output is `apps/web/dist`.

## Validation and QA

```powershell
npm run check
npm run check:quality
npm run validate:release
npm run smoke
npm run smoke:preview
npm run visual
npm run visual:ui-lab
npm run ui-lab:dev
npm run ui-lab:build
```

For a verified Preview URL:

```powershell
npm run smoke:deployment -- --url https://<preview-host>/
npm run visual:deployment -- --url https://<preview-host>/
npm run validate:preview-evidence
```

Each remote scenario resets its own browser profile/localStorage fixture. Do not use the Preview with real customer data.

## Isolated Vercel Preview

The repository-root `vercel.json` installs the workspace with `npm ci`, builds only `apps/web`, and publishes only `apps/web/dist`. UI Lab, docs, artifacts, scripts and the Source Vault are not in the output.

Safety rules:

1. Confirm the linked project name is exactly `ordospace-ui-rebuild`.
2. Confirm its project ID differs from every existing ORDO project.
3. Use Preview deploy only; Production deploy/promotion and custom domains require separate explicit approval.
4. Never copy environment variables, project metadata or domains from the original ORDO projects.

See [Round 10 operations](docs/round10/66-release-operations-runbook.md) for the verified flow and rollback stop conditions.

## Documentation index

- `docs/round01`–`docs/round09`: migration, design-system, role screen and quality evidence.
- `docs/round10/60-pre-deployment-safety-audit.md`: identity and isolation gate.
- `docs/round10/61-release-artifact-inventory.md`: deploy/include classification.
- `docs/round10/62-build-and-runtime-contract.md`: workspace build contract.
- `docs/round10/63-vercel-isolation-evidence.md`: before/after project evidence.
- `docs/round10/65-bundle-splitting-decision.md`: performance decision.
- `docs/round10/66-release-operations-runbook.md`: Preview operations and rollback.
- `docs/round10/69-final-release-readiness.md`: demo limitations and final gaps.

The Preview demonstrates UI behavior only. It is not a Production business system.

# Release Operations Runbook

## Local gate

1. Confirm repository, clean branch and original read-only repository state.
2. Run `npm ci`, `npm run check`, `npm run validate:release`, `npm run smoke`, `npm run smoke:preview`, `npm run visual`.
3. Inspect `apps/web/dist`; stop on any QA/reference output.

## Vercel Preview gate

1. Confirm `npx vercel whoami` and the exact verified personal scope.
2. List projects; target name must be exactly `ordospace-ui-rebuild` and IDs must differ from recorded ORDO IDs.
3. Link the repository root, inspect ignored `.vercel/project.json`, and inspect the target project.
4. Deploy without any Production flag. Inspect until READY, check HTTP/assets/logs, then run deployment smoke and visual QA.
5. Record URL/ID/metrics; keep all Preview evidence on the Round 10 branch.

## Rollback and stop conditions

A failed Preview does not affect Production. Record the failed deployment, fix the Round 10 branch and create a new Preview. Do not delete the project/deployment and never switch to an existing ORDO project. Stop immediately on ambiguous scope, wrong name/ID, environment provenance issues, build/runtime/asset errors, role regression or document overflow.

Production deployment requires explicit separate approval. Production promotion, aliasing and custom domains are outside this runbook.

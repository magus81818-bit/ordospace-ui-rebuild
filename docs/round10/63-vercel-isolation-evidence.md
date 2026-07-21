# Vercel Isolation Evidence

## Before target creation

| Project | ID | Root | Production URL at audit |
|---|---|---|---|
| `ordospace-rebuild` | `prj_KTxF8QnvEwCRc0gG4OKU26AAAFyV` | `.` | `ordospace-rebuild.vercel.app` |
| `ordospace-sprint5` | `prj_HydjRLPnp8Sz1n2nrhLmkRz4RHfM` | `.` | `ordospace-sprint5.vercel.app` |
| `salesops-dashboard` | `prj_FzBqGmHeojBYMF6ar4RRhnw17KeN` | `.` | none listed |

Target `ordospace-ui-rebuild` was absent. The authenticated scope was `akiryu16180339-2308s-projects`.

## Target / after audit

- New project: `ordospace-ui-rebuild`, ID `prj_V21zTBf2UElq03QIghf8NHNK5z9B`, Org ID `team_O2xSuBYK4SOjtmZndemvPw8u`.
- The target ID differs from every recorded existing project ID.
- Framework Vite, root `.`, install `npm ci`, build `npm run build`, output `apps/web/dist`.
- `.vercel/project.json` exactly names `ordospace-ui-rebuild`; it and generated `.env.local` remain ignored and uncommitted.
- Read-only post-incident inspection confirmed `ordospace-rebuild` and `ordospace-sprint5` retain the same IDs, roots and production URLs recorded before creation.
- No existing ORDO project command changed settings, environment, deployment or domain.

The new target itself received an unexpected Production-target deployment; see the deployment record. This violates the Preview-only gate but does not cross the isolation boundary.

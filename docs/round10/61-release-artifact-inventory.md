# Release Artifact Inventory

| Path | Class | Preview status |
|---|---|---|
| `apps/web` | Production | only deployed application |
| `packages/design-tokens` | Production build dependency | bundled through workspace |
| `packages/ui-catalog` | Production build dependency | bundled through workspace |
| `apps/ui-lab` | Development | not deployed |
| `references/salesops-source-vault` | Reference only | excluded |
| `scripts` | QA only | excluded |
| `docs` | Documentation | excluded |
| `artifacts` | QA evidence | excluded |

The only publish directory is `apps/web/dist`. Artifact validation rejects docs, screenshots, scripts, UI Lab and Source Vault paths in that directory.

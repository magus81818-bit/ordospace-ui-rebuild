# Round 9 Release Readiness Gaps

| Severity | Gap | User impact | Planned handling |
|---|---|---|---|
| Blocker | none found in local functional/quality baseline | none locally | Round 10 re-evaluate before deploy |
| High | no deployment/preview smoke yet | no shareable production-like URL | Round 10 new isolated Vercel preview |
| Medium | GitHub default branch remains `ui/r01-baseline`; `origin/main` is Round 2 | confusing repository entry point | Round 10 branch strategy |
| Medium | Vite main chunk exceeds 500kB | slower first load on weak networks | Round 10 splitting decision |
| Medium | app is localStorage/demo backend only | not production data/auth | product/backend phase, not hidden |
| Low | README/release operations need final consolidation | onboarding friction | Round 10 |
| Deferred | analytics, monitoring, custom domain, attachments/evidence | no operational telemetry or file workflow | later product rounds |

Round 10 entry is allowed: local validation, smoke, visual evidence and original-repository protection all pass.

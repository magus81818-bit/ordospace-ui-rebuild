# Preview Smoke and Visual QA

Status: BLOCKED. The first no-flag deployment was unexpectedly classified by Vercel as Production, so the Preview-only stop condition fired before remote browser QA.

Planned automated evidence remains available through `smoke:deployment` and `visual:deployment`, but neither was run against the non-compliant deployment. No Round 10 screenshots were created and `validate:preview-evidence` was intentionally not reported as passed.

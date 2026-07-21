# Git Branch Normalization

- Before Round 10: `origin/main` = `081f09840c02cf3b448c2dc220763f8d69d99660`; remote default may still be `ui/r01-baseline`.
- Round 10 branch: `ui/r10-release-preview`, based on Round 9 `b2d27f95ab3450f9bb094bcb423522b4e5ae2657`.
- Main update is permitted only after target Preview READY, smoke/visual/log QA and final branch push.
- The only allowed update is a non-force fast-forward `git push origin ui/r10-release-preview:main` after ancestor verification.
- No PR, merge commit, squash, rebase, force push or branch deletion.
- If GitHub CLI/admin permission is unavailable, leave the default branch unchanged and use the documented manual Settings → Branches → Default branch → `main` step.

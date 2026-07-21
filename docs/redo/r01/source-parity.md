# Source parity

## Result

`PASS` — the independent Round 1 product baseline exactly matches the protected ORDOSPACE source at the Git object level.

| Item | Value |
|---|---|
| Protected source | `C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ORDOSPACE_rebuild` |
| Protected source commit | `ea1dc111440207608401c529b5bc27ebc5e61fd7` |
| Source remote | `https://github.com/magus81818-bit/ordospace-rebuild.git` |
| Writable result | `C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ordospace-ui-rebuild` |
| Baseline branch | `redo/r01-baseline-audit` |
| Independent root baseline commit | `937d38b92d5b062f6110dba42bc4690c35f3ff15` |
| Result remote | `https://github.com/magus81818-bit/ordospace-ui-rebuild.git` |
| Source tracked entries | 191 |
| Result tracked entries | 191 |
| Differing paths/modes/types/blob IDs | 0 |

The comparison uses `git ls-tree -r -z` for both immutable commits and compares path, mode, object type, and blob ID. It therefore avoids false differences from Windows worktree line-ending conversion. Product parity is not inferred from a working-directory text hash.

Machine-readable evidence:

- `artifacts/redo/r01/source-parity-report.json`
- `artifacts/redo/r01/source-file-hashes.json`
- reproducible command: `node tests/redo/r01/source-parity.cjs <protected-source-path> ea1dc111440207608401c529b5bc27ebc5e61fd7`

The root build regenerated two committed artifacts with local line-ending/tool output differences. Those build outputs were restored to the exact baseline blobs after the build result was recorded; the final product tree remains unchanged. Generated Prisma client and TypeScript output are ignored build products.

## Repository isolation

The original repository remained on clean `main` at `ea1dc111...` with only its original remote. The result branch was created as an orphan branch, and the protected source was exported with `git archive`; no rejected `ui/r01-*`…`ui/r10-*` or `fix/scope-correction-existing-site` history was used as a baseline or cherry-picked. Existing untracked/ignored result-repository material was preserved outside the repository before extraction.

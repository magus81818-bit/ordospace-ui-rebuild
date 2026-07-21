# Worker action policy

| Domain status | Edit progress/QC/note | Submit | Primary intent | Readonly |
| --- | --- | --- | --- | --- |
| `assigned`, `in_progress` | Yes for assigned Worker | No | Continue work | No |
| `qc_ready` | Yes for assigned Worker | Only at 100% with QC `passed` | Submit when ready | No |
| `revision_requested` | Yes for assigned Worker | No until existing ready conditions are restored | Revision response | No |
| `admin_review`, `client_review`, `approved` | No | No | Open detail | Yes |
| Other and unknown | No | No | Open detail | Yes |

`worker-action-policy.js` calls `canWorkerUpdateCard` and `canWorkerSubmitForAdminReview`. It does not execute transitions or replace either handler.

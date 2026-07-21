# Admin action policy

| Domain status | Root action | Detail action | Guidance |
| --- | --- | --- | --- |
| draft / assigned / in_progress / qc_ready | open detail | read-only current state | work is still in delivery |
| admin_review | open review | existing send-to-client form | Admin review required |
| client_review | open detail | no repeated send | client review in progress |
| revision_requested | open detail | no invented Admin edit | inspect real comments/activity |
| approved | open detail | read-only | approved and complete |
| unknown | open detail | no send | verify status |

The view policy never executes transitions. `AdminReviewModuleCardPanel` remains the sole UI caller of the existing send handler and its existing condition function remains authoritative.

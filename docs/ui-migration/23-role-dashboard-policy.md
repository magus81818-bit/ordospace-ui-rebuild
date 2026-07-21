# Role dashboard policy

| Role | Metrics | Filters | Visible scope | Primary list context |
| --- | --- | --- | --- | --- |
| Admin | total, active, review, approved | all, active, review, approved, revision | all cards already supplied by the screen | assignee and operations status |
| Worker | assigned total, active, review, revision | all, active, review, revision | signed-in worker assignments only | assignee-safe work progress |
| Client | project total, client review, approved, revision | all, review, approved, revision | current client project scope only | project and decision status |

Metrics are calculated only from the already-visible collection. The common component does not widen permissions. Detail actions use existing routes and all create/update/submit/review/decision handlers remain in their original role panels.


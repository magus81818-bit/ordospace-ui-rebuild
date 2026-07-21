# Client action policy

| Domain status | Approve | Request revision | Primary action | Result | Readonly |
| --- | --- | --- | --- | --- | --- |
| `client_review` | Yes, when `canClientDecideModuleCard` passes | Yes, same condition | Approve | `approved` or `revision_requested` | No |
| `approved` | No | No | Open detail | No transition | Yes |
| `revision_requested` | No | No | Open detail | No transition | Yes |
| Other and unknown | No | No | Open detail | No transition | Yes |

`client-action-policy.js` organizes display state only. `ClientDecisionModuleCardPanel` remains the UI caller of the existing handler, validation, activity, comment, and persistence flow.

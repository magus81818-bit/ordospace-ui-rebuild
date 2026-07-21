# Legacy content audit

| Screen | Existing component/class | Preserved business behavior | Round 5 conversion | Deferred |
| --- | --- | --- | --- | --- |
| Role workspace roots | `RoleWorkspaceScreen`, `status-grid`, `ModulePreviewCard` | role-filtered cards, activity, admin create | shared metrics, notice, filters, desktop table, mobile cards | role-specific advanced IA |
| Admin create | `AdminCreateModuleCardPanel` | validation, assignment, create action | dark Card surface, catalog Button/Input/Textarea | form IA redesign |
| Worker detail actions | update and submit panels | progress, QC, submit transitions | dark surface and catalog controls | worker detail IA |
| Admin detail action | review panel | send to client | dark surface and catalog controls | admin review IA |
| Client detail action | decision panel | approve/revision | dark surface and catalog controls | client decision IA |
| ModuleCard detail | `ModuleDetailPanel` | visible fields, comments, activities | dark panels, central StatusBadge, catalog Progress | timeline and audit redesign |

Bright root cards and the duplicated role summary/list were removed from all three workspace roots. Legacy selectors remain for Overview/Auth and the intentionally preserved detail structure; no selector was deleted without a zero-reference check.


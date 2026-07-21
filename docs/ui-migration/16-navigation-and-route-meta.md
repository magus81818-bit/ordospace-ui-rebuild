# Navigation and route metadata

| Role | Real menu route | Label | Detail active behavior |
| --- | --- | --- | --- |
| admin | `/workspace/admin` | 운영 현황 | `/workspace/admin/cards/:cardId` keeps it active |
| worker | `/workspace/worker` | 작업 현황 | `/workspace/worker/cards/:cardId` keeps it active |
| client | `/workspace/client` | 프로젝트 현황 | `/workspace/client/cards/:cardId` keeps it active |

The match policy is prefix-based with a path-boundary check, preventing `/workspace/admin-other` from activating the admin item. Nine known routes have metadata, including three dynamic detail patterns; unknown paths use an explicit 404 fallback. Desktop headings show title and description, while mobile uses the short title.

Automated coverage: `validate:navigation`, `validate:route-meta`, and `test:shell` check IDs, roles, paths, labels, icons, dynamic metadata, cross-role filtering, detail activation, and fallback behavior.


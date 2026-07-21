# Admin Architecture

기존 Admin renderer와 factory가 유일한 source of truth입니다. 데이터 배열, 한국어 문구, route, lifecycle, session, localStorage, API를 복제하거나 교체하지 않았습니다.

- Renderer: `app/screens/admin-workspace.screen.js`
- Static composition: `index.html`
- Shared tokens: `dashboard-salesops.tokens.css`
- Shared primitives: `dashboard-salesops.primitives.css`, `primitives.ui.js`
- Round 6 visual layer: `dashboard-salesops.admin.css`
- Round 6 semantic decorator: `admin.ui.js`

`admin.ui.js`는 탭 상태, 표 header scope, 스크롤 영역 이름, overlay dialog semantics, project-row keyboard activation을 장식합니다. 렌더링이나 데이터를 소유하지 않습니다.


---
planner_url: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
planner_title: ORDOSPACE SalesOps 이식
received_at: 2026-07-21T20:25:00+09:00
round_marker: "[ROUND 5 IMPLEMENTATION PROMPT]"
---

[ROUND 4 ACCEPTED]

[ROUND 5 IMPLEMENTATION PROMPT]

당신은 ORDOSPACE 대시보드에 SalesOps 디자인 체계를 이식하는 프로젝트의 Round 5 구현 담당자입니다.

이번 라운드의 목표는 기존 ORDOSPACE의 정보 구조와 반응형 동작을 그대로 유지하면서 다음 공통 Dashboard Shell 영역의 외형과 상태를 SalesOps 디자인 문법으로 완성하는 것입니다.

Desktop Sidebar

Desktop Header

Mobile Header

Mobile Drawer

Mobile Bottom Tabs

Notification Panel

Theme Control

Breadcrumb와 Page Title

역할별 Primary CTA

Dashboard Shell의 공통 Surface 연결

이번 라운드에서는 Admin·Client·Worker 각 화면의 본문 컴포넌트를 완성하지 않습니다.

1. 시작 기준
저장소

로컬:

C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ordospace-ui-rebuild

GitHub:

https://github.com/magus81818-bit/ordospace-ui-rebuild

승인된 Round 4

브랜치:

redo/r04-primitives-ui-lab

승인 HEAD:

e063545f45caa4c0c9e01b65202cad38cb3ae5ee

새 브랜치

Round 4 승인 HEAD에서 다음 브랜치를 생성하십시오.

redo/r05-dashboard-shell

작업 시작 시 다음을 확인하고 artifact로 저장하십시오.

Bash
git status
git remote -v
git branch --show-current
git log --oneline --decorate -15
git merge-base redo/r04-primitives-ui-lab HEAD

artifact:

artifacts/redo/r05/git-prestate.json

금지

Round 4 승인 HEAD 이전에서 분기

기존 ui/r* 또는 fix/* 브랜치 사용

기존 잘못된 브랜치 Cherry-pick

main 변경

원본 ORDOSPACE 저장소 변경

Production 배포

Vercel alias 변경

force push

2. 반드시 읽을 기준 자료
Round 1

docs/redo/r01/route-screen-inventory.md

docs/redo/r01/layout-function-inventory.md

docs/redo/r01/component-state-inventory.md

docs/redo/r01/frozen-public-baseline.md

Round 2

docs/redo/r02/component-migration-matrix.md

artifacts/redo/r02/component-migration-matrix.json

docs/redo/r02/salesops-component-catalog.md

artifacts/redo/r02/salesops-component-catalog.json

docs/redo/r02/salesops-token-spec.md

docs/redo/r02/migration-architecture-decisions.md

docs/redo/r02/round-allocation-plan.md

docs/redo/r02/salesops-live-audit.md

Round 3

app/styles/dashboard-salesops.tokens.css

docs/redo/r03/css-isolation.md

artifacts/redo/r03/token-inventory.json

Round 4

app/styles/dashboard-salesops.primitives.css

app/ui/components/primitives.ui.js

docs/redo/r04/primitive-architecture.md

docs/redo/r04/primitive-catalog.md

docs/redo/r04/accessibility-review.md

artifacts/redo/r04/primitive-catalog.json

artifacts/redo/r04/accessibility-audit.json

artifacts/redo/r04/important-usage-audit.json

SalesOps 근거는 다음을 우선하십시오.

components/dashboard/sidebar.tsx

components/dashboard/header.tsx

components/ui/tabs.tsx

components/ui/popover.tsx

components/ui/switch.tsx

components/ui/sheet.tsx

실제 SalesOps Desktop Sidebar expanded/collapsed

실제 Header, Search, icon button, active navigation 상태

Round 2 screenshot 및 computed-style evidence

SalesOps의 레이아웃·메뉴·모바일 결함은 복사하지 마십시오.

3. Round 5 공식 Inventory 범위

이번 라운드의 공식 대상은 정확히 다음 9개입니다.

ID	ORDOSPACE 컴포넌트	Round 2 분류
UI-001	Sidebar #sidebar	Adapted
UI-002	Topbar #topbar	Adapted
UI-003	Mobile Header #mheader	Adapted
UI-004	Drawer #drawerOverlay/#drawerMenu	Derived
UI-005	Mobile Tabs #mtab	Adapted
UI-006	Notification Panel	Adapted, SalesOps 대응 code-only
UI-007	Theme Control	Adapted
UI-008	Breadcrumb / Page Title	Adapted
UI-009	Primary Role CTA	Adapted

문서:

docs/redo/r05/inventory-scope.md

각 ID에 대해 다음을 기록하십시오.

기존 역할과 라우트

현재 DOM ID와 selector

현재 기능

현재 상태

SalesOps 대응 ID

Exact/Adapted/Derived

구현 파일

실제 변경 내용

보존한 레이아웃

보존한 데이터·문구

접근성 계약

D/T/M 검증

evidence

완료 상태

공식 범위 밖 Inventory를 완료 처리하지 마십시오.

4. 절대 보존 대상

다음은 Round 5 전후에 동일해야 합니다.

Information Architecture

역할별 Sidebar 메뉴 항목

메뉴 순서

메뉴 라벨

메뉴 icon 의미

badge 숫자와 의미

역할 프로필 데이터

Header의 정보 순서

Breadcrumb 데이터

Page title 데이터

역할별 CTA label과 목적지

notification 데이터

Theme 선택 옵션

Mobile tabs의 항목과 순서

“더보기” 동작

Profile tab 전환 동작

기능

hash route

role guard

session

localStorage

theme 저장

notification open/close

unread 의미

drawer open/close

Escape

backdrop close

Sidebar navigation

mobile navigation

CTA deep link

logout

role change

profile navigation

API

lifecycle

구조

공식 19개 screen ID

#sidebar

#topbar

#mheader

#drawerOverlay

#drawerMenu

#mtab

기능 코드가 사용하는 기존 ID와 class

main content origin

기존 Section 순서

현재 Desktop·Tablet·Mobile breakpoint 정책

5. SalesOps에서 이식할 것

다음 외형과 상태 문법을 이식하십시오.

Near-black Dashboard Shell

Sidebar Surface

Header Surface

Subtle border 중심 구분

Active navigation의 accent

Navigation item hover

Icon 크기와 정렬

Typography hierarchy

Profile block surface

Notification badge

Icon button

Popover surface

Switch 외형

Breadcrumb와 Page Title hierarchy

CTA 외형

Drawer와 backdrop

Mobile tabs의 compact state

Focus-visible

Disabled

Selected

Open/closed

Overlay shadow와 border

Reduced motion

다음을 복사하지 마십시오.

SalesOps 메뉴

SalesOps 메뉴 순서

영업 용어

영업 데이터

CRM 사용자 정보

SalesOps 260px Sidebar 치수의 무조건 적용

72px collapsed Sidebar 동작의 무조건 적용

SalesOps 모바일 fixed Sidebar

SalesOps 모바일 horizontal overflow

Header title 누락 결함

ignoreBuildErrors

React·Next·Radix runtime

외부 font

6. Dashboard Shell 아키텍처

기존 Shell 코드를 먼저 조사하십시오.

최소 확인:

app/layout/app-shell.js

app/config/app.config.js

app/router/hash-router.js

index.html

기존 Shell CSS

Theme 관련 코드

Notification 관련 코드

Drawer 관련 코드

Mobile tab 관련 코드

필요하면 다음 파일을 추가할 수 있습니다.

app/styles/dashboard-salesops.shell.css
app/ui/components/shell.ui.js

원칙:

기존 Shell 렌더러가 source of truth

새 두 번째 Shell 구현 금지

기존 DOM 재활용

additive class 또는 data-* 사용

Round 3 token 사용

Round 4 primitive 사용

역할별 중복 Shell 금지

공통 Shell 스타일을 Admin·Client·Worker 파일에 각각 복사 금지

7. UI-001 Sidebar
보존

Desktop Sidebar 위치

역할별 메뉴

메뉴 순서

메뉴 label

menu destination

badge

role profile

현재 width 정책

현재 Tablet 처리

현재 Mobile 숨김 처리

이식

Sidebar background

right border

logo/brand hierarchy

nav item height와 density

icon container

hover

active

focus-visible

badge

section spacing

profile block

logout/theme control과의 시각적 연결

상태

default

hover

active

focus-visible

badge

long Korean label

profile long name

role별 메뉴 수 차이

Desktop

Tablet

Mobile hidden

금지

메뉴 순서 변경

메뉴 추가·삭제

SalesOps 메뉴 복사

Sidebar 전체 width를 260px로 강제

Mobile에서 Sidebar를 화면에 고정

Sidebar collapse 기능 신규 도입

content origin 변경

로고·프로필 데이터를 가짜 SalesOps 정보로 변경

Sidebar width 변화는 원칙적으로 금지합니다. Border·padding 변화 때문에 불가피한 1~2px 차이가 발생하면 근거를 제시하고 main content origin은 유지하십시오.

8. UI-002 Topbar
보존

Breadcrumb

역할별 CTA

notification trigger

avatar

기존 action order

Header height

content alignment

dropdown 위치와 기능

이식

Header background와 translucency

bottom border

Page context typography

CTA primitive

icon button

avatar presentation

notification badge

popover trigger state

focus-visible

compact density

금지

Search bar 신규 추가

Header 정보 순서 변경

SalesOps 영어 title 사용

Header height를 64px로 강제하여 기존 layout 이동

기존 CTA 제거

역할별 Header를 별도 구조로 분기

9. UI-003 Mobile Header
보존

Mobile에서만 표시되는 정책

현재 title

drawer trigger

avatar 또는 현재 사용자 정보

height

main content offset

메뉴 열기 기능

이식

compact Surface

border

icon button

title typography

avatar

pressed/open state

focus-visible

검증

390×844

360px 폭 추가 권장

긴 한글 title

drawer open

notification 또는 avatar interaction

horizontal overflow 없음

10. UI-004 Mobile Drawer

Round 2에서 Derived이며 SalesOps Sheet 코드만 근거로 사용합니다.

보존

#drawerOverlay

#drawerMenu

현재 열림 방향

역할별 메뉴

현재 닫기 동작

Escape

backdrop

메뉴 클릭 후 닫힘

scroll 처리

모바일 전용 정책

이식

backdrop token

Drawer surface

border

shadow

menu item state

active state

profile/theme/footer 영역

close button

focus-visible

open/close animation

접근성

accessible name

close control

focus entry

focus containment

focus return

Escape

background interaction 차단

scroll lock

reduced motion

Round 4 OverlayController를 재사용할 수 있으면 재사용하되, 기존 Drawer 기능과 충돌하지 않도록 하십시오.

기존 Drawer가 자체 controller를 가지고 있다면 두 controller를 중복 binding하지 마십시오.

11. UI-005 Mobile Bottom Tabs
보존

#mtab

역할별 항목

메뉴 순서

profile tab 분기

badge

active route

mobile-only policy

기존 bottom safe-area 처리

content bottom spacing

이식

bottom Surface

top border

active indicator

icon

label

badge

focus-visible

selected state

compact density

safe-area visual treatment

금지

항목 삭제

순서 변경

SalesOps Desktop Tab 구조 그대로 복사

5개 항목을 임의로 4개로 축소

label 숨김

route 의미 변경

12. UI-006 Notification Panel

SalesOps 대응 Popover는 ZIP code-only이므로 라이브 동일 구현이라고 주장하지 마십시오.

보존

역할별 notification 데이터

unread/read 의미

기존 trigger

open/close

항목 클릭 기능

empty state

기존 위치

notification category

한국어 문구

이식

Popover surface

border

radius

overlay shadow

header

unread dot 또는 indicator

item hover

item focus

category tone

empty state

scroll area

Desktop positioning

Mobile positioning

상태

closed

open

unread

read

mixed

empty

long title

long subtitle

overflow/scroll

focus-visible

접근성

trigger expanded state

panel accessible name

keyboard 진입

Escape

focus return

outside click

notification item name

icon decorative 여부

Notification data를 읽음 처리하거나 저장하는 새로운 로직을 임의로 추가하지 마십시오.

13. UI-007 Theme Control

현재 light/dark/system 저장 기능을 그대로 유지하십시오.

이식

Switch 또는 segmented control의 SalesOps 문법

selected state

hover

focus-visible

disabled가 존재하면 disabled

icon

label

compact Desktop Sidebar 상태

Drawer 상태

보존

옵션 수

옵션 값

localStorage key

초기 hydration

system preference

선택 변경 동작

기존 공개 화면 theme 정책

중요:

Dashboard 스타일 이식 때문에 전체 공개 사이트에 Dark Theme를 강제하지 마십시오.

Theme control이 공개 화면의 기존 theme에도 영향을 주는 제품 기능이라면 기능은 유지하되, Round 5의 새 외형은 Dashboard scope에서만 적용하십시오.

14. UI-008 Breadcrumb / Page Title
보존

TITLES

CRUMBS

ROUTE_BREADCRUMBS

한국어 title

breadcrumb 순서

현재 위치

역할별 route context

mobile title 규칙

이식

Page Title hierarchy

breadcrumb muted text

separator

spacing

long title handling

truncation 또는 wrapping 정책

Desktop·Tablet·Mobile typography

Header와 main title의 관계

금지

Header title key를 SalesOps처럼 일부 누락

영어 section title

title 위치 이동

title 중복 신규 생성

기존 breadcrumb 제거

15. UI-009 Primary Role CTA

현재 역할별 CTA는 다음 의미를 유지해야 합니다.

Admin: Module 관리

Client: 승인 검토

Worker: 내 작업

실제 ROLE_CTA 값을 코드에서 다시 확인하십시오.

보존

label

icon

href

aria-label

역할별 목적지

click 기능

Header 내 위치

모바일 표시 정책

이식

primary button Surface

accent

icon size

hover

active

focus-visible

disabled가 존재하면 disabled

compact label

loading이 기존 기능에 존재할 때만 loading

CTA를 SalesOps “Add Deal” 등의 영업 액션으로 바꾸면 안 됩니다.

16. Responsive 정책

ORDOSPACE의 현재 반응형 구조가 권위 기준입니다.

Desktop

현재 Sidebar 유지

Topbar 유지

Mobile Header 숨김

Mobile Tabs 숨김

Drawer 닫힘·비활성

main content origin 동일

Tablet

Round 1에서 확인한 현재 Tablet Shell 정책을 그대로 유지하십시오.

SalesOps breakpoint를 그대로 적용해 Sidebar가 갑자기 collapse되거나 사라지게 하지 마십시오.

Mobile

Desktop Sidebar 숨김

Desktop Topbar의 현재 모바일 정책 유지

Mobile Header 표시

Bottom Tabs 표시

Drawer trigger 작동

260px 고정 Sidebar 없음

horizontal overflow 없음

safe-area 처리

overlay가 viewport를 넘지 않음

검증 뷰포트:

1440×1000

1280×900

1024×1366

768×1024

390×844

360×800

17. Shell 상태 검증용 UI Lab

Round 4 UI Lab을 확장하여 Shell 상태 specimen을 추가할 수 있습니다.

단, UI-001~UI-009를 Round 4 Inventory 완료 항목으로 변경하지 마십시오.

권장 specimen:

Sidebar item default/hover/active

notification popover

Theme control

Page title long content

CTA variants

Mobile tab states

Drawer open

icon buttons

badge overflow

UI Lab은 계속:

dev-only

공식 메뉴 미노출

API 0

운영 localStorage mutation 0

19개 screen ID 유지

18. CSS 구조

권장:

app/styles/dashboard-salesops.shell.css

규칙:

body.auth-on 범위

--ordo-so-* token 사용

Round 4 .ordo-c-* primitive 재사용

Shell class는 명시적 namespace 사용

기존 ID selector는 additive bridge에만 사용

raw color 최소화

역할별 중복 selector 금지

page-specific selector 금지

공개 selector 금지

generic nav, header, aside 전역 override 금지

SalesOps fixed width를 raw hardcode로 복사 금지

Round 3의 16개 !important를 다시 감사하십시오.

목표:

증가 금지

Shell 신규 !important 0

가능하면 기존 16개 감소

유지 시 selector별 근거

19. JavaScript 변경 원칙

허용:

기존 Shell 렌더러에 additive class/data-state

ARIA 상태 보강

focus entry/return 보강

기존 Drawer·Popover controller 보강

기존 theme control 접근성 보강

기존 notification open state 표시

UI Lab specimen

금지:

두 번째 Sidebar renderer

두 번째 Header renderer

별도 역할별 Shell

route 변경

notification 데이터 변경

localStorage key 변경

session 구조 변경

API 호출 추가

React state 도입

운영 global state 오염

기존 event listener가 있는 요소에 중복 listener를 추가하지 마십시오.

20. 레이아웃 보존 검증

Round 4 승인 HEAD와 Round 5 결과를 비교하십시오.

필수 element:

Sidebar bounding box

Topbar bounding box

Mobile Header bounding box

Mobile Tabs bounding box

main content bounding box

각 역할 home의 첫 Section 위치

Header CTA 위치

notification trigger 위치

Drawer viewport bounds

artifact:

artifacts/redo/r05/layout-preservation.json

각 항목:

baseline

result

delta

허용치

판정

사유

기준:

main content origin delta: 0px 목표

Header height delta: 0px 목표

Sidebar width delta: 0px 목표

Section 순서: 완전 동일

Mobile content top/bottom offset: 기존과 동일

불가피한 border 렌더링 차이는 최대 1px로 문서화

21. 공개 화면 동결 검증

다음 6개 화면을 D/T/M에서 검증하십시오.

landing

auth

terms

privacy

support

select-workspace

총 18개.

검사:

screenshot

DOM

computed style

bounding box

font

background

border

radius

focus

Dashboard token leak

Shell CSS leak

horizontal overflow

evidence:

evidence/redo/r05/frozen-public/

artifact:

artifacts/redo/r05/frozen-public-regression.json

Round 1~4 baseline 이미지를 덮어쓰지 마십시오.

22. 전체 역할·라우트 검증
Admin Desktop

#admin-home

#admin-projects

#admin-cards

#admin-team

#admin-audit

Client Desktop

#dashboard

#project

#approvals

#profile

Worker Desktop

#worker-home

#worker-cards

#profile

Role home responsive

각 역할 home:

1440×1000

1024×1366

390×844

360×800 권장

상태 캡처

최소:

Admin Sidebar active

Client Sidebar active

Worker Sidebar active

notification open

notification empty 또는 역할별 최소 항목

Theme control selected

Drawer open

Mobile tab active

long Page Title

CTA focus

icon button focus

mobile safe-area

evidence:

evidence/redo/r05/dashboard/admin/
evidence/redo/r05/dashboard/client/
evidence/redo/r05/dashboard/worker/
evidence/redo/r05/dashboard/shared/
evidence/redo/r05/shell-states/
23. 접근성 검증
Sidebar

nav 의미

menu link accessible name

active state

visible focus

badge 의미

keyboard navigation

Header

landmark

icon-only button names

CTA name

breadcrumb semantics

notification expanded state

Drawer

accessible name

focus entry

containment

focus return

Escape

backdrop

background scroll

close button

Notification

trigger name

expanded state

panel name

item focus

Escape

return focus

long content

Theme Control

label

current value

keyboard

selected state

localStorage behavior

Mobile Tabs

navigation semantics

active state

badge

visible focus

touch target

Contrast

대표 조합:

Sidebar text

inactive nav

active nav

muted breadcrumb

Header icons

CTA

notification unread/read

mobile tabs

focus ring

theme selected state

artifact:

artifacts/redo/r05/accessibility-audit.json

24. 자동 검증

경로:

tests/redo/r05/

최소 검사:

Git

branch

Round 4 merge-base

금지 branch commit 미포함

Inventory

정확히 UI-001~UI-009

누락 0

중복 0

추가 완료 ID 0

각 ID evidence 존재

각 ID D/T/M 또는 적용 가능한 viewport 검사

IA 보존

역할별 MENU deep equality

MTAB_MENU deep equality

ROLE_CTA deep equality

TITLES deep equality

CRUMBS deep equality

ROUTE_BREADCRUMBS deep equality

ROLE_PROFILE deep equality

ORDOSPACE notification fixtures deep equality

DOM

기존 Shell ID 존재

child order 유지

공식 19 screen 유지

menu link count 유지

badge count와 text 유지

Header action order 유지

기능

로그인

로그아웃

역할 전환

Sidebar navigation

mobile tab navigation

profile tab navigation

Drawer open/close

Escape

backdrop

notification open/close

Theme light/dark/system

localStorage persistence

CTA route

403 guard

CSS

body.auth-on scope

public leak 0

raw color 검사

unresolved token 0

remote font 0

generic global selector 0

SalesOps fixed mobile Sidebar pattern 0

Shell 신규 !important 0

전체 !important 증가 없음

Responsive

1440

1024

768

390

360

horizontal overflow 0

fixed 260px mobile Sidebar 0

bottom tab safe-area

Drawer viewport containment

브라우저

console error 0

pageerror 0

failed request 신규 0

HTTP 4xx/5xx 신규 0

회귀

Round 1 audit

Round 2 validate

Round 3 validate

Round 4 validate

Round 5 validate

25. 기계 판독 artifact

최소 다음을 생성하십시오.

artifacts/redo/r05/git-prestate.json
artifacts/redo/r05/inventory-scope.json
artifacts/redo/r05/shell-component-catalog.json
artifacts/redo/r05/shell-state-coverage.json
artifacts/redo/r05/ia-parity.json
artifacts/redo/r05/dom-structure-parity.json
artifacts/redo/r05/token-usage.json
artifacts/redo/r05/css-scope-audit.json
artifacts/redo/r05/important-usage-audit.json
artifacts/redo/r05/dashboard-browser-audit.json
artifacts/redo/r05/shell-interaction-audit.json
artifacts/redo/r05/layout-preservation.json
artifacts/redo/r05/frozen-public-regression.json
artifacts/redo/r05/accessibility-audit.json
artifacts/redo/r05/test-results.json
artifacts/redo/r05/verification-summary.json
shell-state-coverage.json

각 UI-001~009에 대해:

default

hover

focus-visible

active

selected

disabled

open

closed

unread

read

empty

long content

Desktop

Tablet

Mobile

reduced motion

값:

implemented

not applicable

deferred with reason

Round 5 공식 상태에 근거 없는 deferred는 허용하지 않습니다.

26. 문서

최소:

docs/redo/r05/README.md
docs/redo/r05/inventory-scope.md
docs/redo/r05/shell-architecture.md
docs/redo/r05/sidebar-implementation.md
docs/redo/r05/header-implementation.md
docs/redo/r05/mobile-shell-implementation.md
docs/redo/r05/notification-theme-implementation.md
docs/redo/r05/derived-drawer-decision.md
docs/redo/r05/css-isolation.md
docs/redo/r05/important-usage-review.md
docs/redo/r05/layout-review.md
docs/redo/r05/public-regression.md
docs/redo/r05/accessibility-review.md
docs/redo/r05/verification-results.md
docs/redo/r05/change-manifest.md
docs/redo/r05/implementation-report.md
27. 기존 검증 재실행

최소:

Bash
npm ci
npm run build
npm run check:js
npm run static:validate-components
npm run static:validate-lifecycle
npm run smoke

npm --prefix tests/redo/r01 run audit
npm --prefix tests/redo/r02 run validate
npm --prefix tests/redo/r03 run validate
npm --prefix tests/redo/r04 run validate
npm --prefix tests/redo/r05 run validate

가능하면:

Bash
npm --prefix backend test -- --runInBand
npm --prefix backend run type
npm --prefix backend run build

Production DB나 Production API를 변경하는 테스트는 실행하지 마십시오.

28. 코드 품질

기존 Shell renderer 우선

단일 source of truth

Round 3 token 사용

Round 4 primitive 사용

additive selector

semantic HTML

ARIA

기존 event 유지

raw color 최소화

역할별 중복 Shell 금지

page-specific override 금지

공개 CSS 금지

remote font 금지

CDN 금지

React/Next/Radix/shadcn 복사 금지

route 변경 금지

데이터 변경 금지

신규 런타임 warning 숨김 금지

ignoreBuildErrors 금지

Shell 신규 !important 금지

29. 완료 조건

다음을 모두 만족해야 합니다.

 redo/r05-dashboard-shell이 Round 4 승인 HEAD에서 분기

 UI-001~UI-009 정확히 구현

 다른 ID 완료 처리 없음

 Sidebar 메뉴와 순서 완전 보존

 Mobile tab 메뉴와 순서 완전 보존

 Header 정보 구조 완전 보존

 Breadcrumb와 title 완전 보존

 Role CTA 완전 보존

 Notification 데이터 완전 보존

 Theme 저장 기능 완전 보존

 Desktop Sidebar 이식 완료

 Desktop Header 이식 완료

 Mobile Header 이식 완료

 Mobile Drawer 이식 완료

 Mobile Tabs 이식 완료

 Notification Panel 이식 완료

 Theme Control 이식 완료

 Breadcrumb/Page Title 이식 완료

 Role CTA 이식 완료

 Drawer focus entry/containment/return/Escape 통과

 Notification keyboard/open/close 통과

 Theme light/dark/system persistence 통과

 19개 screen ID 유지

 route·문구·데이터·기능 유지

 Sidebar width 및 main origin 유지

 Header height 유지

 Section 순서 유지

 Desktop·Tablet·Mobile 통과

 360px에서도 overflow 없음

 Mobile fixed 260px Sidebar 없음

 공개 화면 18개 회귀 통과

 console error 0

 pageerror 0

 신규 failed request 0

 Shell 신규 !important 0

 전체 !important 증가 없음

 Round 1~4 검증 통과

 Round 5 검증 통과

 Production 배포 없음

 branch push 완료

 모든 증거가 GitHub 또는 대화 첨부로 검수 가능

하나라도 충족하지 못하면 완료로 보고하지 마십시오.

30. Git 규칙

허용:

redo/r05-dashboard-shell에만 commit

branch push

Draft PR 생성

금지:

main 변경

Round 4 브랜치 수정

기존 브랜치 수정

원본 저장소 변경

force push

Production 배포

Vercel alias 변경

비밀정보 commit

권장 커밋:

feat(redo-r05): migrate shared dashboard shell

feat(redo-r05): style mobile navigation and overlays

test(redo-r05): verify shell interactions and IA parity

docs(redo-r05): publish shell migration evidence

31. 제출 형식

완료 후 반드시 다음 Marker로 시작하십시오.

[ROUND 5 IMPLEMENTATION REPORT]

보고 순서:

A. 작업 식별

저장소

브랜치

시작 HEAD

종료 HEAD

Round 4 merge-base

Branch 또는 Draft PR URL

B. Inventory 결과

UI-001~UI-009 각각:

컴포넌트

분류

구현 파일

상태

D/T/M

evidence

완료 여부

C. Shell 아키텍처

source files

render source of truth

CSS namespace

token과 primitive 의존성

기존 Shell과의 관계

중복 구현 여부

D. Sidebar

역할별 메뉴

item 수

순서 parity

active/hover/focus

badge

profile

width parity

evidence

E. Header

정보 순서

breadcrumb

title

CTA

notification

avatar

height parity

evidence

F. Mobile Shell

Mobile Header

Drawer

Bottom Tabs

390px

360px

safe-area

overflow

focus

evidence

G. Notification과 Theme

notification states

empty/long content

keyboard

Theme options

localStorage persistence

public theme 영향

evidence

H. IA·데이터 보존

MENU

MTAB_MENU

ROLE_CTA

TITLES

CRUMBS

ROUTE_BREADCRUMBS

ROLE_PROFILE

notification fixtures

각 항목 PASS/FAIL.

I. 상태 커버리지

default

hover

focus

active

selected

disabled

open/closed

unread/read

empty

long content

D/T/M

missing/deferred

J. 접근성

Sidebar

Header

Drawer

Notification

Theme

Mobile Tabs

focus-visible

contrast

keyboard

reduced motion

K. CSS 격리

scope

public leak

raw color

unresolved var

Shell 신규 !important

전체 이전/현재 !important

유지 근거

L. 레이아웃 보존

Sidebar width

Header height

main origin

first Section

Mobile offsets

max delta

evidence

M. 공개 화면 회귀

6개 화면 D/T/M:

screenshot

DOM

computed style

bounding box

Shell/token leak

PASS/FAIL

N. 브라우저 QA

console error

pageerror

failed request

HTTP 4xx/5xx

horizontal overflow

responsive issue

신규 회귀

O. 테스트 결과

각 명령:

command

exit code

PASS/FAIL/SKIPPED

이유

artifact

P. 변경 파일

product 추가

product 수정

product 삭제

audit-only

각 변경 이유

Q. 범위 준수

Yes/No:

Sidebar 메뉴 변경

Header 정보 구조 변경

Mobile tab 순서 변경

Dashboard 본문 페이지 완성 이식

Admin 페이지 완성 이식

Client 페이지 완성 이식

Worker 페이지 완성 이식

route 변경

문구 변경

데이터 변경

기능 변경

권한 변경

localStorage key 변경

API 변경

backend 변경

공개 화면 변경

원본 저장소 변경

main 변경

Production 배포

원격 font 추가

React/Next/Radix/shadcn 복사

SalesOps mobile fixed Sidebar 복사

기존 잘못된 브랜치 Cherry-pick

정상 답변은 모두 No입니다.

R. 미해결 위험

legacy cascade

overlay stacking

theme/public interaction

notification long content

mobile safe-area

Round 6 Admin 적용 위험

재현하지 못한 상태

S. Round 5 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 5 REVIEW

NOT READY — ROUND 5 INCOMPLETE

로컬 경로만 제출한 증거는 인정되지 않습니다. 핵심 문서·artifact·스크린샷은 GitHub 링크 또는 이 대화 첨부로 제출하십시오.


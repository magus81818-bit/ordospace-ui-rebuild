# Round 6 Planner Prompt

- Planner URL: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
- Planner title: ORDOSPACE SalesOps 이식
- Received at: 2026-07-21T13:40:00+09:00
- Markers: [ROUND 5 ACCEPTED], [ROUND 6 IMPLEMENTATION PROMPT]

---

[ROUND 5 ACCEPTED]

[ROUND 6 IMPLEMENTATION PROMPT]

당신은 ORDOSPACE 대시보드에 SalesOps 디자인 체계를 이식하는 프로젝트의 Round 6 구현 담당자입니다.

이번 라운드의 목표는 승인된 공통 토큰·Primitive·Dashboard Shell을 기반으로 Admin 역할의 5개 본문 화면을 SalesOps 시각 문법으로 완성하는 것입니다.

대상 화면:

#admin-home

#admin-projects

#admin-cards

#admin-team

#admin-audit

이번 라운드에서는 Client·Worker 화면, 공개 화면, 공통 Shell 구조를 완성하거나 변경하지 마십시오.

1. 시작 기준
저장소

로컬:

C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ordospace-ui-rebuild

GitHub:

https://github.com/magus81818-bit/ordospace-ui-rebuild

승인된 Round 5

브랜치:

redo/r05-dashboard-shell

승인 HEAD:

65465846487065b861756a8c7353c8df8c63ccc5

새 브랜치

승인 HEAD에서 다음 브랜치를 생성하십시오.

redo/r06-admin-dashboard

시작 상태를 확인하십시오.

Bash
git status
git remote -v
git branch --show-current
git log --oneline --decorate -15
git merge-base redo/r05-dashboard-shell HEAD

artifact:

artifacts/redo/r06/git-prestate.json

금지

Round 5 승인 HEAD 이전에서 분기

기존 ui/r*, fix/* 브랜치 사용

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

docs/redo/r02/state-coverage-matrix.md

artifacts/redo/r02/state-coverage-matrix.json

docs/redo/r02/salesops-component-catalog.md

artifacts/redo/r02/salesops-component-catalog.json

docs/redo/r02/migration-architecture-decisions.md

docs/redo/r02/round-allocation-plan.md

Round 3

app/styles/dashboard-salesops.tokens.css

artifacts/redo/r03/token-inventory.json

artifacts/redo/r03/token-usage.json

Round 4

app/styles/dashboard-salesops.primitives.css

app/ui/components/primitives.ui.js

docs/redo/r04/primitive-architecture.md

artifacts/redo/r04/primitive-catalog.json

artifacts/redo/r04/primitive-state-coverage.json

Round 5

app/styles/dashboard-salesops.shell.css

app/layout/app-shell.js

docs/redo/r05/shell-architecture.md

artifacts/redo/r05/ia-parity.json

artifacts/redo/r05/layout-preservation.json

artifacts/redo/r05/shell-state-coverage.json

artifacts/redo/r05/frozen-public-regression.json

Round 6 구현은 Round 3 토큰, Round 4 Primitive, Round 5 Shell을 소비해야 합니다. 동일한 디자인 값을 Admin 전용 파일에 raw color 또는 임시 CSS로 중복 선언하지 마십시오.

3. Round 6 공식 Inventory 범위

이번 라운드의 공식 대상은 정확히 다음 21개입니다.

UI-043
UI-044
UI-045
UI-046
UI-047
UI-048
UI-049
UI-050
UI-051
UI-052
UI-053
UI-054
UI-055
UI-056
UI-057
UI-058
UI-059
UI-060
UI-061
UI-062
UI-063

Round 2 migration matrix를 기준으로 각 ID의 실제 컴포넌트명, 기능, 상태, SalesOps 대응, 분류를 추출하십시오.

추측으로 이름이나 기능을 지정하지 마십시오.

문서:

docs/redo/r06/inventory-scope.md

각 ID에 다음을 기록하십시오.

Inventory ID

Admin 화면

기존 컴포넌트

기존 기능

현재 상태

SalesOps 대응 ID

Exact / Adapted / Derived

ZIP 및 Live 근거

구현 파일

소비하는 Primitive

소비하는 token

변경한 시각 요소

보존한 데이터·기능

Desktop·Tablet·Mobile 결과

evidence

완료 상태

정확히 21개만 Round 6 완료 대상으로 처리하십시오.

4. 절대 보존 대상
Admin 정보 구조

Admin 메뉴

메뉴 순서

5개 Admin 화면의 Section 순서

카드·표·필터·통계의 의미

프로젝트 데이터

사용자·팀 데이터

감사 로그 데이터

상태 label

한국어 문구

count와 metric 의미

CTA 목적지

modal·sheet의 목적

empty/error/loading의 의미

기능

hash route

role guard

Admin 권한

session

localStorage

API

backend

lifecycle

필터

검색

정렬

pagination이 있다면 pagination

tab

modal

sheet

form

프로젝트 선택

사용자 관리 action

감사 로그 interaction

CTA와 deep link

구조

기존 screen ID

기존 DOM ID

기능 코드가 사용하는 class

data-*

form name/value

button type

Section 순서

Grid column 정책

Sidebar width

Header height

main origin

Mobile Header

Drawer

Bottom Tabs

5. Admin 공통 시각 목표

Admin 본문은 다음 SalesOps 시각 문법을 사용해야 합니다.

Near-black Dashboard background

계층화된 dark Surface

Subtle border 중심의 카드 구분

12px 중심의 card radius

절제된 shadow

명확한 title·metric·label 계층

compact하지만 읽기 쉬운 density

green accent

informational·warning·critical·success 상태

SalesOps형 Metric Card 문법

toolbar·filter·table의 통일된 control grammar

chart와 progress의 일관된 palette

empty/loading/error/success 상태

visible focus

long Korean content 대응

다음은 복사하지 마십시오.

SalesOps 영업 용어

SalesOps 메뉴

SalesOps 고객·거래 데이터

SalesOps 화면 순서

SalesOps 카드 개수

SalesOps chart data

SalesOps 모바일 Sidebar 결함

React·Next·Radix·Recharts 구조

외부 font

ignoreBuildErrors

6. 구현 아키텍처

기존 Admin 렌더러와 factory를 먼저 조사하십시오.

최소 확인:

Admin screen renderer

Admin section factory

metric factory

ModuleCard factory

status factory

form factory

table renderer

dialog/sheet renderer

filter와 tab 로직

chart 또는 SVG/DOM 기반 시각화

empty state

audit log renderer

필요한 경우 다음 파일을 추가할 수 있습니다.

app/styles/dashboard-salesops.admin.css
app/ui/components/admin.ui.js

원칙:

기존 renderer가 source of truth

두 번째 Admin 앱 구현 금지

기존 데이터를 새 mock 데이터로 치환 금지

additive class 사용

Round 3 token 사용

Round 4 Primitive 사용

Round 5 Shell 변경 금지

화면별 raw CSS 복사 금지

Admin 5개 화면에서 공통 패턴 재사용

Client·Worker selector 금지

7. Admin Home — #admin-home

Round 2 matrix에서 UI-043~UI-046의 실제 대응을 확인하여 구현하십시오.

최소 검증 범주:

Page introduction 또는 overview section

Metric/KPI cards

주요 project 또는 lifecycle summary

상태·진행률 시각화

Admin primary actions

최근 활동 또는 주요 알림 영역

보존:

Metric 수치

Metric label

상태 계산

링크

Section 순서

카드 개수

데이터 source

클릭 기능

이식:

Metric hierarchy

Surface

Border

Radius

status tone

progress

hover/focus

compact metadata

long label

responsive stacking

금지:

SalesOps Overview 데이터 복사

Metric 값 변경

새 chart 추가

기존 Section 삭제

Admin Home을 SalesOps Overview 구조로 재배치

8. Admin Projects — #admin-projects

Round 2 matrix에서 UI-047~UI-050의 실제 컴포넌트를 확인하십시오.

최소 검증 범주:

Project list 또는 table

Project summary/card

상태 filter

검색·정렬

프로젝트 상세 action

empty/no-result

long project name

long client/team metadata

보존:

프로젝트 수

프로젝트 상태

프로젝트 이름

고객·담당자 정보

route

filter value

action

table column

row click

modal/sheet 목적

이식:

toolbar

filter selected state

table header

row hover/focus

status chip

compact metadata

empty state

pagination이 있다면 pagination

mobile table handling

금지:

column 삭제

데이터 순서 임의 변경

영업 Deal Table로 치환

모바일에서 중요한 데이터를 숨김

native table 기능 파괴

9. Admin Cards — #admin-cards

Round 2 matrix에서 UI-051~UI-055의 실제 컴포넌트를 확인하십시오.

최소 검증 범주:

ModuleCard 또는 card inventory

lifecycle 상태

filter·tab

card detail modal

approval/revision 관련 상태

empty/loading/error

long content

progress

보존:

카드 데이터

상태 전이

담당자

기한

MH/QC 등 기존 정보

기존 action

detail modal

comment·approval 기능

card selection

이식:

ModuleCard Primitive

status

progress

card interaction

selected

locked/disabled

filter

detail overlay

destructive 또는 approval action distinction

UI-055는 code-only 대응 위험이 있으므로 Round 2 uncertainty를 확인하고 UI Lab·운영 화면 양쪽에서 증거를 남기십시오.

10. Admin Team — #admin-team

Round 2 matrix에서 UI-056~UI-060의 실제 컴포넌트를 확인하십시오.

최소 검증 범주:

Team/member table 또는 cards

role/status

invitation 또는 member action

profile information

filter/search

modal/dialog/sheet

empty state

long Korean name/email/role

보존:

사용자 identity

역할

상태

이메일

초대 상태

권한 의미

action

form

validation

local/session/API 동작

이식:

member surface

avatar

role/status

toolbar

table

form

dialog/sheet

destructive action

disabled

validation

UI-059·UI-060의 SalesOps 대응이 code-only라면 직접 라이브 복제라고 주장하지 말고 Derived/Adapted 근거를 문서화하십시오.

11. Admin Audit — #admin-audit

Round 2 matrix에서 UI-061~UI-063의 실제 컴포넌트를 확인하십시오.

최소 검증 범주:

Audit log list/table

actor

event

target

timestamp

severity/category

filter

long payload

empty/no-result

overflow

보존:

로그 순서

timestamp

actor

action

target

category

filter 의미

데이터

pagination 또는 scroll

detail 기능

이식:

dense table/list

hierarchy

timestamp typography

status tone

row hover/focus

long content wrap

expandable detail이 있다면 기존 기능 유지

mobile overflow strategy

금지:

로그 내용을 줄이거나 삭제

민감정보 마스킹 정책 변경

timestamp format 변경

audit 데이터를 SalesOps activity로 대체

12. 상태 커버리지

각 UI-043~063에서 적용 가능한 상태를 모두 구현하십시오.

공통 상태:

default

hover

focus-visible

active

selected

disabled

loading

empty

no-result

error

success

validation error

long content

overflow

Desktop

Tablet

Mobile

reduced motion

각 상태는 다음 중 하나여야 합니다.

implemented

not applicable + 구체적 근거

근거 없는 deferred는 허용하지 않습니다.

artifact:

artifacts/redo/r06/admin-state-coverage.json

13. 반응형 정책

ORDOSPACE 기존 breakpoint와 Shell이 권위 기준입니다.

검증 뷰포트:

1440 × 1000

1280 × 900

1024 × 1366

768 × 1024

390 × 844

360 × 800

Desktop

Sidebar와 Header 유지

Admin 본문 Grid 유지

표·카드·차트 가독성

기존 Section 위치 유지

Tablet

기존 Grid 전환 정책 유지

Sidebar 정책 유지

toolbar wrap

table overflow

chart containment

Mobile

Mobile Header와 Bottom Tabs 유지

Desktop Sidebar 숨김

Drawer 유지

카드 stacking

table horizontal 처리 또는 기존 mobile representation 유지

filter wrap

modal/sheet viewport containment

horizontal page overflow 0

bottom safe-area 유지

SalesOps의 fixed 260px Sidebar를 복사하지 마십시오.

14. 레이아웃 보존

Round 5 승인 HEAD와 Round 6 결과를 비교하십시오.

필수 비교:

Sidebar bounding box

Header bounding box

main origin

Admin page title

각 화면 첫 Section

Section 순서

주요 Grid

toolbar

table

card positions

modal/sheet bounds

Mobile top/bottom offsets

artifact:

artifacts/redo/r06/layout-preservation.json

각 element:

baseline box

result box

delta

허용치

판정

변화 이유

기준:

Shell geometry delta 0px

Section 순서 완전 동일

main origin 0px

본문 내부 padding·gap 변화는 의도와 근거가 있어야 함

본문 구성 재배치는 금지

15. 데이터·기능 parity

기계 판독 artifact:

artifacts/redo/r06/admin-data-function-parity.json

최소 검사:

Admin route 5개 유지

Admin 메뉴 유지

주요 text 유지

Metric value 유지

Project fixture deep equality

Card fixture deep equality

Team fixture deep equality

Audit fixture deep equality

status mapping 유지

filter options 유지

table columns 유지

CTA href 유지

form field name/value 유지

modal/sheet purpose 유지

localStorage key 유지

API endpoint 유지

role guard 유지

lifecycle 유지

제품 데이터 변경은 즉시 실패입니다.

16. UI Lab 확장

Round 4 UI Lab에 Admin-specific specimen을 추가할 수 있습니다.

허용 specimen:

Admin KPI card

Project row

Card lifecycle states

Team member row

Audit row

Admin empty/no-result

Admin long content

Admin validation

destructive action

loading/disabled

규칙:

dev-only

운영 메뉴 노출 없음

API 0

운영 localStorage mutation 0

기존 19개 screen ID 유지

UI-043~063을 Round 4 완료 항목으로 변경하지 않음

실제 운영 컴포넌트와 같은 factory 사용

17. CSS 규칙

권장 파일:

app/styles/dashboard-salesops.admin.css

필수:

body.auth-on

Admin screen 또는 Admin component namespace

Round 3 token 사용

Round 4 Primitive 재사용

Round 5 Shell selector 수정 금지

raw color 0 목표

unresolved var 0

원격 font 0

신규 !important 0

page-wide generic override 금지

Client·Worker selector 금지

public selector 금지

금지 예:

CSS
.card { ... }
table { ... }
button { ... }
#sidebar { ... }
#topbar { ... }

허용 예:

CSS
body.auth-on .ordo-admin-project-table { ... }
body.auth-on #admin-projects .ordo-c-filter-group { ... }

단, 기존 구조를 유지하고 page-specific patch가 아닌 재사용 가능한 Admin component 계층으로 작성하십시오.

18. JavaScript 변경 원칙

허용:

기존 Admin renderer에 additive class

ARIA 보강

Primitive factory 사용

상태를 표현하는 data-state

UI Lab fixture

escape 보강

기존 overlay 접근성 보강

금지:

데이터 배열 수정

새로운 mock data

route 변경

API 호출 추가

localStorage key 변경

role guard 변경

lifecycle 변경

두 번째 Admin renderer

inline handler 남발

React 도입

Client·Worker 선행 구현

19. 접근성
Cards

클릭 가능한 카드 semantic

keyboard activation

visible focus

내부 버튼 충돌 방지

disabled/locked 의미

Tables

header scope

accessible name

row action name

keyboard focus

overflow container

모바일 읽기 순서

Filters/Tabs

실제 동작에 맞는 role

selected state

focus

keyboard

no-result 연결

Forms

label

required

invalid

error association

disabled

submit state

Dialog/Sheet

accessible name

focus entry

containment

return

Escape

scroll lock

mobile containment

Contrast

대표 조합:

page title

section title

metric

body

muted metadata

table text

active filter

disabled

status tones

error

focus ring

artifact:

artifacts/redo/r06/accessibility-audit.json

20. 공개·다른 역할 회귀
공개 화면

다음 6개를 D/T/M에서 검증하십시오.

landing

auth

terms

privacy

support

select-workspace

총 18개.

artifact:

artifacts/redo/r06/frozen-public-regression.json

evidence:

evidence/redo/r06/frozen-public/

Client·Worker

Round 6 Admin CSS와 renderer 변경이 Client·Worker 화면에 침범하지 않는지 검증하십시오.

최소:

Client #dashboard, #project, #approvals, #profile

Worker #worker-home, #worker-cards, #profile

Desktop 대표

각 역할 Home Tablet/Mobile

검사:

신규 Admin class 적용 0

구조 변화 0

기능 변화 0

unexpected visual change 0

console error 0

overflow 0

artifact:

artifacts/redo/r06/non-admin-regression.json

21. 브라우저 evidence
Admin 5개 화면

각 화면 Desktop:

default

주요 interaction

empty/no-result가 적용 가능하면 해당 상태

long content

modal/sheet가 있다면 open

각 Admin 화면 Tablet/Mobile 기본 상태도 필요합니다.

최소 evidence 경로:

evidence/redo/r06/admin/home/
evidence/redo/r06/admin/projects/
evidence/redo/r06/admin/cards/
evidence/redo/r06/admin/team/
evidence/redo/r06/admin/audit/
evidence/redo/r06/admin/states/
evidence/redo/r06/non-admin/
evidence/redo/r06/frozen-public/

각 screenshot 파일명에 화면·상태·viewport를 포함하십시오.

22. 자동 검증

경로:

tests/redo/r06/

최소 검사:

Git

branch

Round 5 승인 HEAD merge-base

금지 branch commit 미포함

Inventory

UI-043~063 정확히 21개

누락 0

중복 0

추가 완료 ID 0

각 ID 구현 파일 존재

각 ID evidence 존재

Scope

Admin selector만 사용

public leak 0

Client/Worker leak 0

Shell selector 수정 0

신규 !important 0

raw color 0

unresolved token 0

remote font 0

Data·Function parity

routes

menu

fixture

text

metric

status

filter

table columns

form contract

CTA

localStorage

API

role guard

lifecycle

DOM

screen IDs

Section order

major child order

form controls

modal/sheet IDs

table headers

existing functional selector

State

loading

empty

no-result

error

success

disabled

long

overflow

D/T/M

deferred 0

missing 0

Browser

console error 0

pageerror 0

failed request 0

HTTP 4xx/5xx 신규 0

page horizontal overflow 0

회귀

Round 1 audit

Round 2 validate

Round 3 validate

Round 4 validate

Round 5 validate

Round 6 validate

기존 validator expectation을 약화시키지 마십시오.

23. 기계 판독 artifact

최소:

artifacts/redo/r06/git-prestate.json
artifacts/redo/r06/inventory-scope.json
artifacts/redo/r06/admin-component-catalog.json
artifacts/redo/r06/admin-state-coverage.json
artifacts/redo/r06/admin-data-function-parity.json
artifacts/redo/r06/dom-structure-parity.json
artifacts/redo/r06/token-usage.json
artifacts/redo/r06/css-scope-audit.json
artifacts/redo/r06/important-usage-audit.json
artifacts/redo/r06/admin-browser-audit.json
artifacts/redo/r06/non-admin-regression.json
artifacts/redo/r06/layout-preservation.json
artifacts/redo/r06/frozen-public-regression.json
artifacts/redo/r06/accessibility-audit.json
artifacts/redo/r06/test-results.json
artifacts/redo/r06/verification-summary.json
admin-component-catalog.json

각 컴포넌트:

Inventory ID

Admin 화면

이름

source file

renderer/factory

CSS class

SalesOps ID

분류

token

Primitive

variant

state

data source

function contract

accessibility

responsive

evidence

24. 문서

최소:

docs/redo/r06/README.md
docs/redo/r06/inventory-scope.md
docs/redo/r06/admin-architecture.md
docs/redo/r06/admin-home-implementation.md
docs/redo/r06/admin-projects-implementation.md
docs/redo/r06/admin-cards-implementation.md
docs/redo/r06/admin-team-implementation.md
docs/redo/r06/admin-audit-implementation.md
docs/redo/r06/derived-component-decisions.md
docs/redo/r06/css-isolation.md
docs/redo/r06/layout-review.md
docs/redo/r06/non-admin-regression.md
docs/redo/r06/public-regression.md
docs/redo/r06/accessibility-review.md
docs/redo/r06/verification-results.md
docs/redo/r06/change-manifest.md
docs/redo/r06/implementation-report.md
25. 테스트 실행

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
npm --prefix tests/redo/r06 run validate

가능하면:

Bash
npm --prefix backend test -- --runInBand
npm --prefix backend run type
npm --prefix backend run build

Production DB 또는 Production API를 변경하는 테스트는 실행하지 마십시오.

26. 완료 조건

다음을 전부 만족해야 합니다.

 redo/r06-admin-dashboard가 Round 5 승인 HEAD에서 분기

 UI-043~UI-063 정확히 21개 구현

 다른 Inventory 완료 처리 없음

 Admin Home 완료

 Admin Projects 완료

 Admin Cards 완료

 Admin Team 완료

 Admin Audit 완료

 Round 3 token 사용

 Round 4 Primitive 사용

 Round 5 Shell 변경 없음

 Admin 데이터 변경 없음

 한국어 문구 변경 없음

 route 변경 없음

 기능 변경 없음

 권한 변경 없음

 API·backend 변경 없음

 Section 순서 유지

 Shell geometry 유지

 loading/empty/no-result/error/success 구현

 long content 구현

 disabled 구현 또는 근거 있는 N/A

 table·filter·form·overlay 접근성 통과

 Desktop·Tablet·Mobile 통과

 360px horizontal overflow 0

 Client·Worker 회귀 0

 공개 화면 18개 회귀 통과

 console error 0

 pageerror 0

 신규 failed request 0

 신규 !important 0

 raw color 0

 unresolved token 0

 Round 1~5 검증 통과

 Round 6 검증 통과

 Production 배포 없음

 branch push 완료

 모든 evidence가 GitHub 또는 대화 첨부로 검수 가능

하나라도 충족하지 못하면 완료로 보고하지 마십시오.

27. Git 규칙

허용:

redo/r06-admin-dashboard에만 commit

branch push

Draft PR 생성

금지:

main 변경

Round 5 브랜치 수정

기존 브랜치 수정

원본 저장소 변경

force push

Production 배포

Vercel alias 변경

비밀정보 commit

권장 커밋:

feat(redo-r06): migrate admin dashboard surfaces

feat(redo-r06): complete admin states and overlays

test(redo-r06): verify admin parity and regressions

docs(redo-r06): publish admin migration evidence

28. 제출 형식

완료 후 반드시 다음 Marker로 시작하십시오.

[ROUND 6 IMPLEMENTATION REPORT]

보고 순서:

A. 작업 식별

저장소

브랜치

시작 HEAD

종료 HEAD

Round 5 merge-base

Branch 또는 Draft PR URL

B. Inventory 결과

UI-043~063 각각:

화면

컴포넌트

분류

구현 파일

상태

D/T/M

evidence

완료 여부

C. Admin 아키텍처

기존 renderer

source of truth

CSS namespace

token

Primitive

중복 구현 여부

D. Admin Home

구현 컴포넌트

상태

데이터 parity

layout

evidence

E. Admin Projects

동일 형식.

F. Admin Cards

동일 형식.

G. Admin Team

동일 형식.

H. Admin Audit

동일 형식.

I. 데이터·기능 parity

route

menu

text

metric

fixture

status

filter

table

form

CTA

localStorage

API

guard

lifecycle

각 항목 PASS/FAIL.

J. 상태 커버리지

default

hover

focus

selected

disabled

loading

empty

no-result

error

success

invalid

long

overflow

D/T/M

deferred

missing

K. 접근성

cards

tables

filters/tabs

forms

dialog/sheet

keyboard

focus

contrast

reduced motion

L. CSS 격리

Admin scope

public leak

Client leak

Worker leak

Shell selector 변경

raw color

unresolved var

신규 !important

M. 레이아웃 보존

Sidebar

Header

main origin

Section order

Grid

mobile offsets

max delta

evidence

N. 다른 역할·공개 화면 회귀

Client

Worker

공개 6개 D/T/M

token/CSS leak

DOM/style/box

PASS/FAIL

O. 브라우저 QA

console

pageerror

failed request

HTTP 4xx/5xx

overflow

responsive

신규 회귀

P. 테스트 결과

각 명령:

command

exit code

PASS/FAIL/SKIPPED

이유

artifact

Q. 변경 파일

Product 추가

Product 수정

Product 삭제

Audit-only

변경 이유

R. 범위 준수

Yes/No:

Admin 데이터 변경

Admin 문구 변경

Section 순서 변경

Shell 변경

Sidebar 변경

Header 변경

Client 선행 구현

Worker 선행 구현

공개 화면 변경

route 변경

기능 변경

권한 변경

localStorage key 변경

API 변경

backend 변경

원본 저장소 변경

main 변경

Production 배포

원격 font 추가

React/Next/Radix/Recharts 복사

기존 잘못된 브랜치 Cherry-pick

정상 답변은 모두 No입니다.

S. 미해결 위험

실제 남은 위험만 기록하십시오.

T. Round 6 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 6 REVIEW

NOT READY — ROUND 6 INCOMPLETE

로컬 경로만 제출한 증거는 인정되지 않습니다. 핵심 문서·artifact·스크린샷은 GitHub 링크 또는 이 대화 첨부로 제출하십시오.


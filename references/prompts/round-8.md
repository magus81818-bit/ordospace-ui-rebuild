# Round 8 Implementation Prompt

- ChatGPT conversation URL: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
- Received at: 2026-07-21T15:22:28.968Z
- Round Marker: [ROUND 8 IMPLEMENTATION PROMPT]

## Complete response

[ROUND 7 ACCEPTED]

[ROUND 8 IMPLEMENTATION PROMPT]

당신은 ORDOSPACE 대시보드에 SalesOps 디자인 체계를 이식하는 프로젝트의 Round 8 구현 담당자입니다.

이번 라운드의 목표는 승인된 토큰·Primitive·Dashboard Shell과 Round 6~7 역할별 구현 기반 위에서 Worker 역할의 핵심 본문 화면 2개를 SalesOps 시각 문법으로 완성하는 것입니다.

대상 화면:

#worker-home

#worker-cards

이번 라운드에서는 다음을 수행하지 마십시오.

Client 화면 추가 수정

Admin 화면 추가 수정

Profile 화면 전체 이식

공개 화면 변경

공통 Shell 구조 변경

Round 9 통합 검증 선행

Round 10 배포·승인 작업 선행

1. 시작 기준
저장소

로컬:

C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ordospace-ui-rebuild

GitHub:

https://github.com/magus81818-bit/ordospace-ui-rebuild

승인된 Round 7

브랜치:

redo/r07-client-dashboard

승인 HEAD:

cd70a536a34e5bb23f1ebfd5a6df512893a0b9a6

새 브랜치

Round 7 승인 HEAD에서 다음 브랜치를 생성하십시오.

redo/r08-worker-dashboard

작업 시작 시 확인:

Bash
git status
git remote -v
git branch --show-current
git log --oneline --decorate -15
git merge-base redo/r07-client-dashboard HEAD

artifact:

artifacts/redo/r08/git-prestate.json

금지

Round 7 승인 HEAD 이전에서 분기

기존 ui/r*, fix/* 브랜치 사용

잘못된 과거 브랜치 Cherry-pick

main 변경

원본 ORDOSPACE 저장소 변경

force push

Production 배포

Vercel alias 변경

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

기존 MetricCard·ModuleCard·Filter·Progress·Input·ActionToolbar·Dialog factory

docs/redo/r04/primitive-architecture.md

artifacts/redo/r04/primitive-catalog.json

Round 5

app/styles/dashboard-salesops.shell.css

app/layout/app-shell.js

artifacts/redo/r05/ia-parity.json

artifacts/redo/r05/layout-preservation.json

Round 6

app/styles/dashboard-salesops.admin.css

app/ui/components/admin.ui.js

artifacts/redo/r06/admin-data-function-parity.json

artifacts/redo/r06/non-admin-regression.json

Round 7

app/styles/dashboard-salesops.client.css

app/ui/components/client.ui.js

artifacts/redo/r07/client-data-function-parity.json

artifacts/redo/r07/client-state-coverage.json

artifacts/redo/r07/qa-fixture-isolation.json

artifacts/redo/r07/non-client-regression.json

artifacts/redo/r07/verification-summary.json

Round 8은 Round 3~5의 공통 기반을 소비해야 합니다.

Admin·Client class나 semantic decorator를 Worker에 복사하지 마십시오.

3. Round 8 공식 Inventory

이번 라운드의 공식 대상은 정확히 다음 10개입니다.

ID	화면	실제 컴포넌트	SalesOps 대응	분류
UI-033	worker/home	worker KPI row	SO-CARD-002 Metric card	Adapted
UI-034	worker/home	revision queue	SO-CARD-001 Card	Adapted
UI-035	worker/home	in-progress section	SO-PROGRESS-001 Progress	Adapted
UI-036	worker/home	pending section	SO-CARD-001 Card	Adapted
UI-037	worker/cards	work filter/count bar	SO-FILTER-001 Filter controls	Adapted
UI-038	worker/cards	work-card list	SO-CARD-001 Card	Adapted
UI-039	worker/cards	work-card detail	SO-CARD-001 Card	Adapted
UI-040	worker/cards	QC checklist	SO-INPUT-001 Input	Derived
UI-041	worker/cards	work log controls	SO-INPUT-001 Input	Adapted
UI-042	worker/cards	submit-to-review action	SO-SHELL-001 Dashboard Shell	Adapted

Round 2 matrix를 유일한 권위로 사용하십시오.

문서:

docs/redo/r08/inventory-scope.md

각 ID에 다음을 기록하십시오.

Inventory ID

Worker 화면

기존 컴포넌트

기존 기능

기존 상태

데이터 source

SalesOps ID

SalesOps component

ZIP evidence

Live evidence

Exact / Adapted / Derived

uncertainty

구현 파일

CSS class

token

Primitive

접근성 계약

Desktop·Tablet·Mobile 결과

상태 evidence

완료 여부

정확히 10개만 Round 8 완료 처리하십시오.

다른 Inventory를 완료 처리하면 실패입니다.

4. 절대 보존 대상
Worker 정보 구조

Worker 메뉴와 순서

#worker-home, #worker-cards의 Section 순서

한국어 제목·설명

KPI label·값

배정 카드 데이터

수정 요청 queue

진행 중·대기 작업 구분

카드 상태

담당 프로젝트

기한

MH 또는 작업량

QC 항목

작업 로그

검토 요청 의미

상태 label

CTA label과 순서

기능

hash route

Worker role guard

session

localStorage

API

backend

ModuleCard lifecycle

필터

카드 선택

상세 렌더

QC 체크

QC 차단 조건

작업 시간·로그 입력

validation

작업 로그 append

검토 요청

submitting

error

revision 상태

overdue 상태

empty/no-result

notification deep link

profile 연결

구조

기존 screen ID

기존 DOM ID

기능 코드가 사용하는 class

기존 data-*

form name, value

checkbox·input identity

button type

Section 순서

list/detail child order

Shell geometry

Mobile Header

Drawer

Bottom Tabs

Sidebar와 Header

5. Worker 공통 시각 목표

다음 SalesOps 시각 문법을 Worker 업무 흐름에 맞게 번역하십시오.

Near-black dashboard background

계층화된 dark surface

얇은 border

12px 중심 radius

절제된 shadow

compact control density

명확한 업무 우선순위

green accent

revision·overdue·blocked·pending·success tone

Metric Card grammar

selectable work-card grammar

상세 패널 hierarchy

QC 상태의 명확한 구분

작업 로그 form consistency

검토 요청 action emphasis

empty/loading/error/success

long Korean content

visible focus

reduced motion

금지:

SalesOps Deal·Pipeline 데이터 복사

영업 용어 사용

SalesOps IA 복사

Worker fixture를 CRM mock으로 교체

React·Next·Radix 도입

외부 font 추가

Recharts 도입

ignoreBuildErrors

6. 구현 아키텍처

기존 Worker renderer를 먼저 조사하십시오.

최소 확인:

Worker Home renderer

Worker Cards renderer

Worker card list renderer

selected card detail renderer

ModuleCard renderer

lifecycle service

revision queue 계산

in-progress/pending 계산

filter state

QC data와 blocker 계산

work log append

submit-to-review 조건

validation

error 처리

storage/API 연계

mobile list/detail 정책

필요한 경우 추가 가능:

app/styles/dashboard-salesops.worker.css
app/ui/components/worker.ui.js

원칙:

기존 Worker renderer가 source of truth

두 번째 Worker 앱 금지

운영 fixture 변경 금지

additive class·ARIA 사용

Round 3 token 사용

Round 4 Primitive 사용

Round 5 Shell 유지

Admin·Client class 재사용 금지

public selector 금지

Profile 전체 이식 금지

화면별 임시 patch보다 Worker 공통 component 계층 우선

7. Worker Home — #worker-home

대상 Inventory:

UI-033

UI-034

UI-035

UI-036

UI-033 Worker KPI Row

기존 기능:

assigned-card summary

상태별 작업 수

zero/warn 상태

기존 deep link

보존:

KPI 수

순서

label

값

계산 방식

링크

Worker 범위

이식:

Metric Card

compact metadata

zero/warn tone

responsive stacking

visible focus

long label 대응

UI-034 Revision Queue

보존:

revision 대상 카드

queue 순서

제목

프로젝트

revision reason

기한

클릭 동작

empty 상태

이식:

revision 강조

selectable card

critical/warning tone

metadata

hover/focus

empty state

long revision reason

mobile stacking

UI-035 In-progress Section

보존:

active assigned cards

진행률

현재 상태

기한

카드 선택

populated/empty

이식:

Progress grammar

active accent

deadline metadata

progress name/value

empty state

overdue와 정상 상태 구분

UI-036 Pending Section

보존:

queued assigned cards

순서

상태

시작 조건

기한

empty

클릭 기능

이식:

pending surface

compact metadata

disabled/locked 의미가 존재하면 표현

hover/focus

mobile layout

8. Worker Cards — #worker-cards

대상 Inventory:

UI-037

UI-038

UI-039

UI-040

UI-041

UI-042

UI-037 Work Filter/Count Bar

보존:

filter 값

filter 순서

count

selected 상태

결과 filtering

no-result

현재 state source

이식:

Filter Primitive

default

hover

focus-visible

selected

disabled가 존재하면 disabled

count badge

mobile wrap

no-result 연결

단순 filter button group에 임의의 tab semantics를 부여하지 마십시오.

UI-038 Work-card List

보존:

assigned cards

selected card

revision

overdue

status

project

deadline

MH

card ordering

click/keyboard 동작

이식:

selectable card/list

selected accent

revision/overdue tone

compact metadata

status

hover/focus

no-result

long title

mobile list/detail 정책 유지

UI-039 Work-card Detail

보존:

selected card

no-selection

설명

요구사항

산출물

상태

deadline

담당 프로젝트

history/log

long content

기존 action 영역

이식:

detail surface

title hierarchy

metadata grid

long content wrap

no-selection empty

internal sections

focus order

mobile containment

UI-040 QC Checklist

분류:

Derived

SalesOps Input의 control grammar만 사용하고 기존 QC 구조를 유지하십시오.

보존:

QC 항목 수

항목 label

기존 checked 값

blocked 조건

필수 여부

검토 요청 가능 조건

저장·lifecycle 의미

이식:

checkbox/control surface

unchecked

checked

blocked

required

disabled

focus-visible

helper/error

keyboard

group accessible name

금지:

QC 항목 추가·삭제

체크 값을 자동으로 true 처리

검토 요청 blocker 우회

새로운 저장 방식 추가

UI-041 Work Log Controls

보존:

작업 시간 입력

작업 내용 입력

append 동작

validation

success/error

log 순서

existing storage/service

form field name/value

button order

이식:

Input Primitive

label

required

number constraints

textarea

helper

invalid/error

submitting이 존재하면 submitting

success feedback

disabled

mobile form layout

금지:

실제 로그 없이 성공 처리

운영 localStorage 직접 우회

API endpoint 변경

validation 제거

입력 단위를 변경

UI-042 Submit-to-review Action

보존:

QC 완료 조건

enabled/disabled

lifecycle transition

submitting

error

CTA label

action order

중복 실행 방지

이식:

primary Worker action

disabled reason

loading/submitting

success/error feedback

focus-visible

mobile sticky 또는 기존 위치 유지

금지:

card.status = ... 직접 대입

QC 조건 우회

lifecycle service 교체

중복 호출

가짜 성공

새 confirm workflow 추가

9. 상태 커버리지

각 UI-033~042에서 적용 가능한 상태를 검증하십시오.

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

zero

warning

revision

overdue

pending

in-progress

unchecked

checked

blocked

submitting

no-selection

long content

overflow

Desktop

Tablet

Mobile

reduced motion

허용 상태 값:

implemented

not_applicable

not_applicable에는 구체적 운영 기능 근거가 필요합니다.

artifact:

artifacts/redo/r08/worker-state-coverage.json

필수:

deferred 0

missing 0

invalid status 0

implemented evidence 누락 0

디렉터리 evidence 0

각 implemented 상태에 browser assertion

D/T/M 근거

10. 데이터·기능 Parity

artifact:

artifacts/redo/r08/worker-data-function-parity.json

최소 검사:

Worker route 2개 유지

Worker 메뉴 유지

한국어 문구 유지

KPI values 유지

assigned-card fixture deep equality

revision queue deep equality

in-progress/pending 계산 유지

filter options 유지

filter results 유지

selected card 유지

QC values 유지

QC blocker 유지

work log contract 유지

form field name/value 유지

validation 유지

submit-to-review transition 유지

lifecycle service 유지

localStorage key 유지

API endpoint 유지

role guard 유지

session 유지

제품 데이터나 lifecycle 의미 변경은 즉시 실패입니다.

11. DOM 구조 보존

artifact:

artifacts/redo/r08/dom-structure-parity.json

검사:

screen-worker-home

screen-worker-cards

주요 기존 DOM ID

Section 순서

major child order

KPI count

revision item count

in-progress/pending item count

filter count

card list count

detail section order

QC item count

checkbox name/value

work log field name/value

submit button identity

기존 data-*

button type

기능 selector

접근성 보강용 additive role·ARIA·class는 허용됩니다.

12. UI-040 QC 검증

운영 fixture를 변경하지 않는 isolated QA fixture로 최소 다음을 검증하십시오.

unchecked

checked

blocked

disabled

required

keyboard Space

label click

group accessible name

submit blocker 반영

checked count

QC 값 restore

필수 evidence:

evidence/redo/r08/worker/states/worker-qc-unchecked-checked-desktop-1440x1000.png
evidence/redo/r08/worker/states/worker-qc-blocked-disabled-desktop-1440x1000.png
evidence/redo/r08/worker/states/worker-qc-mobile-390x844.png

QC fixture는 테스트 종료 후 복원되어야 합니다.

13. UI-041 Work Log 검증

최소:

valid hours/text append

empty hours

invalid hours

empty text

error association

focus invalid control

append 정확히 1회

duplicate submit 차단

success feedback

error feedback이 실제 계약에 존재하면 검증

localStorage/API 변화 여부

필수 evidence:

evidence/redo/r08/worker/states/worker-log-validation-desktop-1440x1000.png
evidence/redo/r08/worker/states/worker-log-success-desktop-1440x1000.png
evidence/redo/r08/worker/states/worker-log-long-mobile-390x844.png

운영 로그를 실제 영구 저장하지 않는 spy 또는 isolated fixture를 사용하십시오.

14. UI-042 Submit-to-review 검증
Disabled

QC 미완료

실제 disabled 또는 정확한 aria-disabled

click 차단

Enter/Space 차단

lifecycle 호출 0회

disabled reason 존재

Enabled

QC 완료

enabled

accessible name

click 가능

keyboard 가능

Submitting

중복 click 차단

disabled during submit

loading indicator

accessible busy state

Lifecycle parity

안전한 spy로 검증:

기존 transition service 호출

정확한 card ID

정확한 target transition

호출 1회

직접 status 대입 없음

API endpoint 변경 없음

운영 localStorage mutation 없음

Error

실제 error 계약이 존재하면:

error feedback

retry 가능 여부

상태 rollback

focus

존재하지 않으면 not_applicable로 명시하십시오.

필수 evidence:

evidence/redo/r08/worker/states/worker-submit-disabled-desktop-1440x1000.png
evidence/redo/r08/worker/states/worker-submit-enabled-desktop-1440x1000.png
evidence/redo/r08/worker/states/worker-submit-submitting-mobile-390x844.png
15. QA Fixture 격리

artifact:

artifacts/redo/r08/qa-fixture-isolation.json

각 fixture:

name

source

operating fixture mutation

localStorage mutation

API calls

lifecycle spy

restore

evidence

PASS/FAIL

최종 조건:

operating fixture mutation false

localStorage mutation false

API calls 0

restore true

모든 fixture PASS

16. 반응형 정책

검증 뷰포트:

1440 × 1000

1280 × 900

1024 × 1366

768 × 1024

390 × 844

360 × 800

Desktop

Sidebar·Topbar 유지

Home Section 순서 유지

Cards master-detail 유지

QC·log·CTA 가독성

Tablet

기존 Grid 전환

filter wrap

list/detail containment

QC form layout

action containment

Mobile

Mobile Header·Bottom Tabs 유지

Desktop Sidebar 숨김

Drawer 유지

KPI stacking

revision/in-progress/pending stacking

work-card list/detail 기존 모바일 정책

QC controls 44px target

form input containment

CTA 접근 가능

bottom safe-area 유지

page horizontal overflow 0

SalesOps breakpoint나 fixed Sidebar를 복사하지 마십시오.

17. 레이아웃 보존

Round 7 승인 HEAD와 Round 8 결과를 비교하십시오.

필수:

Sidebar box

Header box

main origin

Worker page title

첫 Section

Section 순서

KPI grid

revision queue

in-progress/pending sections

filter bar

card list

detail pane

QC block

work log form

submit CTA

mobile offsets

artifact:

artifacts/redo/r08/layout-preservation.json

기준:

Shell geometry delta 0px

main origin delta 0px

Section 순서 동일

360px overflow 0

본문 내부 padding·gap 변화만 근거와 함께 허용

18. 접근성
KPI/Progress

label/value

progress name/value

warning/zero의 텍스트 정보

current state

Work Cards

keyboard activation

selected state

revision/overdue 텍스트

visible focus

내부 action 충돌 방지

Filters

정확한 pressed/selected semantics

keyboard

no-result 연결

focus

Detail

heading hierarchy

no-selection

long content

reading order

QC

fieldset/group name

checkbox label

required

checked

disabled

blocked reason

keyboard

focus

Work Log

label

required

numeric constraints

invalid

error association

focus invalid field

submitting

success/error announcement

Submit Action

disabled reason

busy state

duplicate action prevention

keyboard

focus

success/error feedback

Contrast

최소:

page title

metric

metadata

selected card

revision

overdue

pending

QC checked/blocked

disabled

validation error

focus ring

artifact:

artifacts/redo/r08/accessibility-audit.json

모든 값은 실제 DOM assertion에서 생성하십시오.

하드코딩된 true 요약은 허용하지 않습니다.

19. CSS 규칙

권장:

app/styles/dashboard-salesops.worker.css

필수:

body.auth-on

Worker screen 또는 Worker namespace

Round 3 token 사용

Round 4 Primitive 재사용

Shell selector 수정 0

Admin selector 수정 0

Client selector 수정 0

public selector 0

Profile 전체 selector 0

raw color 0

unresolved token 0

신규 !important 0

remote font 0

generic global selector 0

허용 예:

CSS
body.auth-on #screen-worker-home .ordo-worker-kpi-grid { ... }
body.auth-on .ordo-worker-card-row { ... }

금지 예:

CSS
.card { ... }
button { ... }
input { ... }
#sidebar { ... }
#topbar { ... }
20. JavaScript 변경 원칙

허용:

기존 Worker renderer에 additive class

ARIA 보강

keyboard activation

Primitive 사용

data-state

isolated QA fixture

lifecycle spy

form semantic 보강

금지:

fixture 변경

새로운 운영 mock data

lifecycle 직접 변경

API 추가

localStorage key 변경

role guard 변경

route 변경

두 번째 Worker renderer

Admin·Client renderer 재사용

Profile 전체 이식

React 도입

중복 event listener

MutationObserver를 사용하는 경우:

Worker screen으로 제한

무한 loop 금지

중복 listener 금지

global state 오염 금지

21. Admin·Client·Profile·공개 회귀
Admin

#admin-home

#admin-projects

#admin-cards

#admin-team

#admin-audit

Desktop 5개

Admin Home Tablet/Mobile

Client

#dashboard

#project

#approvals

Desktop 3개

Client Dashboard Tablet/Mobile

Profile

Client profile Desktop

Worker profile Desktop

Worker profile Tablet/Mobile

검사:

Worker class leak 0

Worker token leak 0

structure change 0

function change 0

overflow 0

Public

다음 6개 × D/T/M = 18개:

landing

auth

terms

privacy

support

select-workspace

검사:

screenshot

DOM

computed style

bounding box

body.auth-on false

Worker CSS leak 0

overflow 0

artifact:

artifacts/redo/r08/non-worker-regression.json

artifacts/redo/r08/frozen-public-regression.json

evidence:

evidence/redo/r08/non-worker/
evidence/redo/r08/frozen-public/
22. 브라우저 Evidence
Worker Home

최소:

default D/T/M

KPI zero/warning

revision populated

revision empty

in-progress populated/empty

pending populated/empty

overdue

long content

Worker Cards

최소:

default D/T/M

filter selected

no-result

work-card selected

revision

overdue

no selection

long detail

QC unchecked/checked

QC blocked/disabled

work log validation

work log success

submit disabled

submit enabled

submit submitting

mobile controls

경로:

evidence/redo/r08/worker/home/
evidence/redo/r08/worker/cards/
evidence/redo/r08/worker/states/
evidence/redo/r08/non-worker/
evidence/redo/r08/frozen-public/

파일명에 screen·state·viewport·해상도를 포함하십시오.

23. 자동 검증

경로:

tests/redo/r08/

Git

branch

Round 7 승인 HEAD merge-base

금지 branch commit 미포함

Matrix

Round 2 matrix에서 implementationRound === "Round 8"인 행을 직접 읽으십시오.

검사:

정확히 10개

UI-033~042

SalesOps ID

component

classification

uncertainty

ZIP evidence

preserveFunction

accessibilityRequirements

하드코딩된 추측 매핑을 권위로 사용하지 마십시오.

Scope

Worker selector만 사용

Admin leak 0

Client leak 0

public leak 0

Shell selector 변경 0

Profile 전체 변경 0

신규 !important 0

raw color 0

unresolved token 0

remote font 0

Data/Function

routes

menu

fixtures

KPI

filters

cards

QC

work log

submit transition

lifecycle

form

localStorage

API

guard

session

DOM

screen IDs

Section order

item count

filter count

list/detail

QC count

field names

button type

data selectors

State

revision

overdue

zero/warning

empty

no-result

selected

no-selection

unchecked

checked

blocked

disabled

validation

success

submitting

long

overflow

D/T/M

deferred 0

missing 0

Accessibility

progress

card keyboard

filter semantics

QC group/label

validation association

submit busy/disabled

lifecycle duplicate prevention

reduced motion

Browser

console error 0

pageerror 0

request failure 0

신규 HTTP 4xx/5xx 0

horizontal overflow 0

회귀

Round 1 audit

Round 2 validate

Round 3 validate

Round 4 validate

Round 5 validate

Round 6 validate

Round 7 validate

Round 8 validate

기존 validator expectation을 삭제하거나 완화하지 마십시오.

후속 stylesheet로 인해 이전 Round browser test를 격리해야 한다면 승인 계약을 그대로 측정하도록 후속 stylesheet만 비활성화하십시오.

24. Validator 독립성

권장 구조:

Browser test가 state·interaction·accessibility artifact 생성

Static validator가 해당 artifact를 읽음

schema·값·evidence·matrix·parity를 독립 검증

불일치 시 exit 1

금지:

Validator가 검증 대상 artifact를 무조건 PASS 값으로 생성

implemented or N/A

evidence 디렉터리만 기록

assertion 없이 pass: true

count() >= 0

실제 DOM 측정 없는 접근성 결과

25. 기계 판독 Artifact

최소:

artifacts/redo/r08/git-prestate.json
artifacts/redo/r08/inventory-scope.json
artifacts/redo/r08/worker-component-catalog.json
artifacts/redo/r08/worker-state-coverage.json
artifacts/redo/r08/worker-data-function-parity.json
artifacts/redo/r08/dom-structure-parity.json
artifacts/redo/r08/token-usage.json
artifacts/redo/r08/css-scope-audit.json
artifacts/redo/r08/important-usage-audit.json
artifacts/redo/r08/worker-browser-audit.json
artifacts/redo/r08/worker-interaction-audit.json
artifacts/redo/r08/qa-fixture-isolation.json
artifacts/redo/r08/non-worker-regression.json
artifacts/redo/r08/layout-preservation.json
artifacts/redo/r08/frozen-public-regression.json
artifacts/redo/r08/accessibility-audit.json
artifacts/redo/r08/test-results.json
artifacts/redo/r08/verification-summary.json
worker-state-coverage.json

최상위:

JSON
{
  "implementedCount": 0,
  "notApplicableCount": 0,
  "deferred": 0,
  "missing": 0,
  "invalidStatusCount": 0,
  "missingEvidenceCount": 0,
  "directoryEvidenceCount": 0,
  "pass": true
}
26. 문서

최소:

docs/redo/r08/README.md
docs/redo/r08/inventory-scope.md
docs/redo/r08/worker-architecture.md
docs/redo/r08/worker-home-implementation.md
docs/redo/r08/worker-cards-implementation.md
docs/redo/r08/derived-component-decisions.md
docs/redo/r08/qc-lifecycle-contract.md
docs/redo/r08/work-log-contract.md
docs/redo/r08/css-isolation.md
docs/redo/r08/layout-review.md
docs/redo/r08/non-worker-regression.md
docs/redo/r08/public-regression.md
docs/redo/r08/accessibility-review.md
docs/redo/r08/verification-results.md
docs/redo/r08/change-manifest.md
docs/redo/r08/implementation-report.md

UI-040 Derived 결정은 별도 근거를 상세히 기록하십시오.

27. 테스트 실행

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
npm --prefix tests/redo/r07 run validate
npm --prefix tests/redo/r08 run validate

가능하면:

Bash
npm --prefix backend test -- --runInBand
npm --prefix backend run type
npm --prefix backend run build

Prisma generate가 clean install 이후 prerequisite라면 정확히 기록하고 실행하십시오.

Production DB·Production API를 변경하는 테스트는 실행하지 마십시오.

28. 완료 조건

다음을 전부 만족해야 합니다.

 redo/r08-worker-dashboard가 Round 7 승인 HEAD에서 분기

 UI-033~042 정확히 10개 구현

 Round 2 matrix 매핑 완전 일치

 다른 Inventory 완료 처리 없음

 Worker Home 완료

 Worker Cards 완료

 Round 3 token 사용

 Round 4 Primitive 사용

 Round 5 Shell 변경 없음

 Admin 변경 없음

 Client 변경 없음

 Profile 전체 이식 없음

 Worker 데이터 변경 없음

 한국어 문구 변경 없음

 Section 순서 변경 없음

 route 변경 없음

 권한 변경 없음

 lifecycle 의미 변경 없음

 API·backend 변경 없음

 KPI 계산 유지

 revision/in-progress/pending 계산 유지

 filter 동작 유지

 card list/detail 유지

 QC 값과 blocker 유지

 work log append 계약 유지

 submit-to-review transition 유지

 UI-040 Derived 근거 문서화

 zero/warning 검증

 revision/overdue 검증

 empty/no-result 검증

 no-selection/long 검증

 QC unchecked/checked/blocked 검증

 QC keyboard 검증

 work log validation 검증

 work log append spy 1회 검증

 submit disabled click/keyboard 차단

 submit lifecycle 호출 1회

 submitting 중복 차단

 QA fixture 운영 데이터 비변경

 API call 0

 운영 localStorage mutation 0

 Desktop·Tablet·Mobile 통과

 360px overflow 0

 Admin·Client·Profile 회귀 0

 공개 화면 18개 회귀 통과

 console error 0

 pageerror 0

 failed request 0

 신규 !important 0

 raw color 0

 unresolved token 0

 deferred 0

 missing 0

 invalid status 0

 missing evidence 0

 Round 1~7 검증 통과

 Round 8 검증 통과

 Round 9 선행 구현 없음

 main 변경 없음

 Production 배포 없음

 branch push 완료

 모든 핵심 evidence가 GitHub에서 검수 가능

하나라도 충족하지 못하면 완료로 보고하지 마십시오.

29. Git 규칙

허용:

redo/r08-worker-dashboard commit

branch push

Draft PR 생성

금지:

main 변경

Round 7 브랜치 수정

이전 승인 브랜치 수정

원본 저장소 변경

force push

Production 배포

Vercel alias 변경

비밀정보 commit

권장 커밋:

feat(redo-r08): migrate worker dashboard surfaces

feat(redo-r08): complete worker qc and work-log states

test(redo-r08): verify worker lifecycle and regressions

docs(redo-r08): publish worker migration evidence

30. 제출 형식

완료 후 반드시 다음 Marker로 시작하십시오.

[ROUND 8 IMPLEMENTATION REPORT]

보고 순서:

A. 작업 식별

저장소

브랜치

시작 HEAD

종료 HEAD

Round 7 merge-base

Branch 또는 Draft PR URL

작업트리 상태

B. Inventory 결과

UI-033~042 각각:

화면

컴포넌트

SalesOps ID

분류

구현 파일

상태

D/T/M

evidence

완료 여부

C. Worker 아키텍처

기존 renderer

source of truth

CSS namespace

token

Primitive

semantic decorator

중복 구현 여부

D. Worker Home

UI-033~036

구현

상태

데이터 parity

layout

evidence

E. Worker Cards

UI-037~042

filter

list

detail

QC

log

submit

evidence

F. Matrix·데이터·기능 Parity

각 항목 PASS/FAIL:

matrix

route

menu

text

KPI

assigned cards

revision

progress

filters

selected card

QC

work log

submit transition

lifecycle

form

localStorage

API

guard

session

G. 상태 커버리지

implemented count

N/A count

invalid status

missing evidence

directory evidence

deferred

missing

D/T/M

H. UI-040 QC

unchecked

checked

blocked

disabled

keyboard

label

blocker

restore

evidence

I. UI-041 Work Log

valid

invalid

error association

focus

append 1회

duplicate 차단

success/error

evidence

J. UI-042 Submit-to-review

disabled

keyboard 차단

enabled

submitting

중복 차단

lifecycle call

card ID

transition

localStorage/API

evidence

K. QA Fixture 격리

운영 fixture mutation

localStorage mutation

API calls

restore

lifecycle spy

PASS/FAIL

L. 접근성

KPI/progress

cards

filters

detail

QC

work log

submit action

keyboard

focus

contrast

reduced motion

M. CSS 격리

Worker scope

public leak

Admin leak

Client leak

Profile leak

Shell selector 변경

raw color

unresolved var

신규 !important

N. 레이아웃 보존

Sidebar

Header

main origin

Section order

Home layout

Cards layout

QC/log/action

mobile offsets

max delta

O. 다른 역할·공개 회귀

Admin

Client

Profile

공개 18개

DOM/style/box

CSS/token leak

PASS/FAIL

P. 브라우저 QA

console

pageerror

failed request

HTTP 4xx/5xx

overflow

responsive

신규 회귀

Q. 테스트 결과

각 명령:

command

exit code

PASS/FAIL/SKIPPED

이유

artifact

R. 변경 파일

Product 추가

Product 수정

Product 삭제

Test

Artifact

Evidence

Docs

기존 validator 변경과 이유

S. 범위 준수

Yes/No:

Worker 운영 데이터 변경

Worker 문구 변경

Section 순서 변경

lifecycle 의미 변경

API 변경

backend 변경

Shell 변경

Sidebar 변경

Header 변경

Admin 변경

Client 변경

Profile 전체 이식

공개 화면 변경

route 변경

권한 변경

localStorage key 변경

Round 9 선행 구현

원본 저장소 변경

main 변경

Production 배포

원격 font 추가

React/Next/Radix/Recharts 복사

잘못된 브랜치 Cherry-pick

정상 답변은 모두 No입니다.

T. 미해결 위험

실제 남은 위험만 기록하십시오.

U. Round 8 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 8 REVIEW

NOT READY — ROUND 8 INCOMPLETE

로컬 경로만 제출한 증거는 인정되지 않습니다. 핵심 문서·artifact·스크린샷은 GitHub 링크 또는 이 대화 첨부로 제출하십시오.

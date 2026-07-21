# Round 7 Planner Response

- ChatGPT conversation URL: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
- Received at: 2026-07-21T14:26:05.260Z
- Round Marker: [ROUND 7 IMPLEMENTATION PROMPT]
- Approval Marker: [ROUND 6 ACCEPTED]

## Complete response

[ROUND 6 ACCEPTED]

[ROUND 7 IMPLEMENTATION PROMPT]

당신은 ORDOSPACE 대시보드에 SalesOps 디자인 체계를 이식하는 프로젝트의 Round 7 구현 담당자입니다.

이번 라운드의 목표는 승인된 토큰·Primitive·Dashboard Shell을 기반으로 Client 역할의 핵심 본문 화면 3개를 SalesOps 시각 문법으로 완성하는 것입니다.

대상 화면:

#dashboard

#project

#approvals

이번 라운드에서는 다음을 수행하지 마십시오.

Worker 화면 이식

Admin 화면 추가 수정

Profile 화면 전체 이식

공개 화면 변경

공통 Shell 구조 변경

Round 8 이후 범위 선행 구현

1. 시작 기준
저장소

로컬:

C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ordospace-ui-rebuild

GitHub:

https://github.com/magus81818-bit/ordospace-ui-rebuild

승인된 Round 6

브랜치:

redo/r06-admin-dashboard

승인 HEAD:

6c4413e68c5239672bc01a1fe18dd926f663506b

새 브랜치

Round 6 승인 HEAD에서 다음 브랜치를 생성하십시오.

redo/r07-client-dashboard

작업 시작 시 다음을 확인하십시오.

Bash
git status
git remote -v
git branch --show-current
git log --oneline --decorate -15
git merge-base redo/r06-admin-dashboard HEAD

기계 판독 artifact:

artifacts/redo/r07/git-prestate.json

Git 금지사항

Round 6 승인 HEAD 이전에서 분기

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

docs/redo/r02/salesops-token-spec.md

docs/redo/r02/migration-architecture-decisions.md

docs/redo/r02/round-allocation-plan.md

Round 3

app/styles/dashboard-salesops.tokens.css

artifacts/redo/r03/token-inventory.json

artifacts/redo/r03/token-usage.json

Round 4

app/styles/dashboard-salesops.primitives.css

app/ui/components/primitives.ui.js

기존 ModuleCard·form·status·metric·sheet factory

docs/redo/r04/primitive-architecture.md

artifacts/redo/r04/primitive-catalog.json

artifacts/redo/r04/primitive-state-coverage.json

Round 5

app/styles/dashboard-salesops.shell.css

app/layout/app-shell.js

artifacts/redo/r05/ia-parity.json

artifacts/redo/r05/layout-preservation.json

artifacts/redo/r05/frozen-public-regression.json

Round 6

app/styles/dashboard-salesops.admin.css

app/ui/components/admin.ui.js

docs/redo/r06/admin-architecture.md

artifacts/redo/r06/admin-data-function-parity.json

artifacts/redo/r06/non-admin-regression.json

artifacts/redo/r06/layout-preservation.json

artifacts/redo/r06/verification-summary.json

Round 7은 Round 3~5의 공통 기반을 소비해야 합니다.

Round 6 Admin 전용 구현 방식은 구조적 참고만 허용되며, Client 화면에 Admin class·renderer·상태를 복사하지 마십시오.

3. Round 7 공식 Inventory

이번 라운드의 공식 대상은 정확히 다음 12개입니다.

ID	역할/화면	실제 컴포넌트	분류
UI-021	client/dashboard	dashboard KPI row	Adapted
UI-022	client/dashboard	project step progress	Derived
UI-023	client/dashboard	chain progress group	Adapted
UI-024	client/dashboard	approval-card grid	Adapted
UI-025	client/project	project progress header	Adapted
UI-026	client/project	chain/status filters	Adapted
UI-027	client/project	step timeline and gate rows	Derived
UI-028	client/project	artifacts/assets panel	Adapted
UI-029	client/project	card detail modal	Adapted, SalesOps 대응 code-only
UI-030	client/approvals	approval queue list	Adapted
UI-031	client/approvals	approval detail	Adapted
UI-032	client/approvals	decision controls	Adapted

문서:

docs/redo/r07/inventory-scope.md

각 ID에 대해 다음을 기록하십시오.

Inventory ID

Client 화면

기존 컴포넌트

기존 데이터 source

기존 기능

기존 상태

SalesOps 대응 ID

SalesOps ZIP 근거

Live evidence

Exact / Adapted / Derived

구현 파일

CSS class

소비하는 token

소비하는 Primitive

접근성 계약

Desktop·Tablet·Mobile 결과

상태 evidence

완료 여부

정확히 12개만 Round 7 완료 처리하십시오.

다른 Inventory를 완료 처리하면 실패입니다.

4. 절대 보존 대상
Client 정보 구조

Client 메뉴와 순서

#dashboard, #project, #approvals 화면의 Section 순서

한국어 제목과 설명

KPI label·값

프로젝트 진행률

단계·체인 분류

승인 대상 데이터

승인·수정 요청 의미

산출물·첨부파일 데이터

ModuleCard 정보

상태 label

담당자·기한·진척도

프로젝트 metadata

CTA label과 목적지

기능

hash route

Client role guard

session

localStorage

API

backend

lifecycle

프로젝트 선택

chain/status filter

카드 선택

상세 modal

comment

승인

수정 요청

validation

approval transition

empty/no-result

profile tab과의 기존 연결

notification deep link

file/deliverable interaction

구조

기존 screen ID

기존 DOM ID

기능 코드가 사용하는 class

data-*

form name, value

button type

table/list child order

Section 순서

Shell geometry

Mobile Header

Drawer

Bottom Tabs

Sidebar와 Header

5. Client 공통 시각 목표

다음 SalesOps 시각 문법을 ORDOSPACE Client 데이터와 기능에 맞게 번역하십시오.

Near-black dashboard background

계층화된 dark surface

얇고 절제된 border

12px 중심 card radius

낮은 강도의 shadow

compact control density

명확한 title·metric·metadata hierarchy

green accent

informational·pending·warning·critical·success tone

Metric Card grammar

진행률과 timeline의 일관된 상태 표현

선택 가능한 카드의 hover·focus·selected

filter selected state

산출물 목록의 dense surface

승인 queue와 detail의 명확한 master-detail hierarchy

승인·수정 요청 action의 시각적 구분

empty/loading/error/success

long Korean content

visible focus

reduced motion

금지:

SalesOps 영업 데이터 복사

SalesOps Deal·Pipeline 용어 사용

SalesOps 정보 구조 복사

기존 Client 데이터를 mock CRM 데이터로 변경

SalesOps 카드 개수에 맞춰 기존 카드 추가·삭제

Recharts 도입

React·Next·Radix 코드 복사

외부 font 추가

ignoreBuildErrors

6. 구현 아키텍처

기존 Client renderer를 먼저 조사하십시오.

최소 확인:

Client dashboard renderer

Client project renderer

approvals renderer

ModuleCard renderer

metric/status/progress factory

project data source

approval data source

lifecycle service

modal·sheet controller

comment·approval action

filter state

empty/no-result rendering

asset/deliverable renderer

profile 연결부

필요한 경우 다음 파일을 추가할 수 있습니다.

app/styles/dashboard-salesops.client.css
app/ui/components/client.ui.js

원칙:

기존 Client renderer가 source of truth

두 번째 Client 앱 구현 금지

기존 데이터를 새 mock으로 치환 금지

additive class·ARIA 사용

Round 3 token 사용

Round 4 Primitive 사용

Round 5 Shell 유지

Admin class 재사용 금지

Worker selector 금지

공개 selector 금지

화면별 임시 patch보다 Client 공통 component 계층 우선

7. Client Dashboard — #dashboard

대상 Inventory:

UI-021

UI-022

UI-023

UI-024

UI-021 Dashboard KPI Row

기존 기능:

ModuleCard count 요약

현재 프로젝트 상태 요약

zero/warn 상태

deep link가 존재하면 해당 이동

보존:

KPI 수

KPI label

KPI 값

계산 방식

순서

링크

role 데이터

이식:

Round 3 Metric Card foundation

metric typography

compact metadata

status tone

card surface·border·radius

zero/warning 표현

responsive stacking

UI-022 Project Step Progress

분류:

Derived

SalesOps Progress의 시각 문법만 사용하고 ORDOSPACE 프로젝트 단계 구조를 유지하십시오.

보존:

단계 개수

단계 순서

completed/current/pending 의미

현재 단계 계산

label

progress value

이식:

completed/current/pending 구분

연결선

progress surface

현재 단계 accent

모바일 wrapping 또는 기존 scroll 정책

accessible current step

금지:

단순한 단일 progress bar로 축소

단계 이름 변경

SalesOps pipeline stage 사용

UI-023 Chain Progress Group

보존:

design/dev/ops 구분

approved/total 계산

zero/partial/complete

label

순서

이식:

chain별 compact progress row

status tone

approved/total typography

progress track

complete state

long label 대응

UI-024 Approval-card Grid

보존:

latest done cards

승인 대상

카드 수

제목

상태

project/module 관계

클릭 목적지

empty 상태

이식:

Card Primitive

hover/focus

selected 또는 actionable state

status badge

metadata

empty state

mobile stacking

8. Client Project — #project

대상 Inventory:

UI-025

UI-026

UI-027

UI-028

UI-029

UI-025 Project Progress Header

보존:

project title

project metadata

진행률

기간

담당자

현재 상태

CTA와 action

long metadata

기존 header 위치

이식:

Client 본문용 progress header

title hierarchy

metadata

progress

status

long title·long metadata

responsive wrapping

Round 5 Topbar 또는 Page Title을 중복 생성하지 마십시오.

UI-026 Chain/Status Filters

보존:

filter 값

선택 상태

결과 filtering

no-result

filter 순서

URL·local state 연계가 있다면 유지

이식:

Round 4 filter Primitive

default

hover

focus-visible

selected

disabled가 존재하면 disabled

count가 존재하면 count

mobile wrapping

no-result 연결

필터 동작이 단순 button group이면 임의로 role=tab을 부여하지 마십시오.

UI-027 Step Timeline and Gate Rows

분류:

Derived

보존:

grouped ModuleCard

step 순서

gate pass/fail 의미

empty state

승인 상태

lifecycle

카드 클릭

이식:

Chart container의 surface 문법

timeline connector

step heading

gate row

pass/fail tone

grouped cards

focus

long content

모바일 선형 배치

금지:

실제 chart library 도입

timeline 데이터를 차트 숫자로 변환

ModuleCard 순서 변경

UI-028 Artifacts/Assets Panel

보존:

deliverable list

파일명

유형

상태

링크·다운로드

empty

long filename

기존 action

이식:

dense asset row

file icon

metadata

hover/focus

long filename wrap 또는 안전한 truncation

empty state

mobile containment

파일 기능을 가짜 다운로드나 새 API로 교체하지 마십시오.

UI-029 Card Detail Modal

SalesOps Dialog 대응은 code-only입니다.

라이브 SalesOps와 동일한 modal이라고 주장하지 마십시오.

보존:

selected ModuleCard

상세 데이터

comment

approval error

open/closed

close

기존 승인·수정 요청 연결

기존 action order

검증:

accessible name

aria-modal

focus entry

focus containment

focus return

Escape

backdrop

background scroll

mobile containment

long content

validation/approval error

Round 4 overlay contract를 재사용하되 기존 controller와 중복 binding하지 마십시오.

9. Client Approvals — #approvals

대상 Inventory:

UI-030

UI-031

UI-032

UI-030 Approval Queue List

보존:

done cards

queue 순서

selected/unselected

empty

title

project

담당자·날짜·상태

선택 동작

이식:

selectable card/list row

selected accent

hover

focus-visible

unread 또는 pending 의미가 있다면 기존 상태만 표현

compact metadata

long title

mobile master-detail 정책 유지

UI-031 Approval Detail

보존:

selected deliverable

no selection

long content

attachments

comments

history

metadata

action area

기존 data source

이식:

detail surface

header hierarchy

metadata grid

deliverable body

asset rows

history/timeline

no-selection empty state

long content

responsive containment

UI-032 Decision Controls

보존:

approve transition

revision transition

comment/reason

enabled

disabled

confirm

error

validation

button order

lifecycle service 호출

중복 실행 방지

이식:

primary approve action

revision/destructive distinction

form controls

helper/error text

disabled

submitting/loading이 실제 존재하면 loading

success/error feedback

confirmation UI가 존재하면 기존 의미 유지

금지:

lifecycle 상태 직접 대입

승인 조건 우회

validation 제거

버튼 순서 변경

action 이름 변경

새 API 추가

10. 상태 커버리지

각 UI-021~032에서 적용 가능한 상태를 검증하십시오.

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

open

closed

confirm

zero

partial

complete

current

pending

long content

overflow

Desktop

Tablet

Mobile

reduced motion

각 상태는 다음 중 하나여야 합니다.

implemented

not applicable + 구체적 기능 근거

근거 없는 deferred는 허용하지 않습니다.

artifact:

artifacts/redo/r07/client-state-coverage.json

필수:

deferred 0

missing 0

각 implemented 상태에 evidence path

각 N/A에 기능상 근거

11. 데이터·기능 parity

기계 판독 artifact:

artifacts/redo/r07/client-data-function-parity.json

최소 검사:

Client route 3개 유지

Client 메뉴 유지

화면 제목 유지

한국어 문구 유지

KPI values 유지

project fixture deep equality

ModuleCard fixture deep equality

approval fixture deep equality

asset/deliverable fixture deep equality

status mapping 유지

lifecycle transition 유지

filter options 유지

filter result 유지

selected card 유지

comment contract 유지

form field name/value 유지

CTA href 유지

modal purpose 유지

localStorage key 유지

API endpoint 유지

role guard 유지

session 유지

데이터·상태 전이·권한 의미 변경은 즉시 실패입니다.

12. DOM 구조 보존

artifact:

artifacts/redo/r07/dom-structure-parity.json

검사:

공식 screen ID 유지

Client 주요 DOM ID 유지

Section 순서 유지

major child order 유지

filter control 수 유지

KPI card 수 유지

progress step 수 유지

chain 수 유지

approval queue item 수 유지

table/list header 유지

modal/sheet ID 유지

form field name 유지

기능 selector 유지

button type 유지

기존 data-* 의미 유지

접근성 보강을 위한 additive role·ARIA·class는 허용됩니다.

13. 반응형 정책

기존 ORDOSPACE breakpoint와 Round 5 Shell이 권위 기준입니다.

검증 뷰포트:

1440 × 1000

1280 × 900

1024 × 1366

768 × 1024

390 × 844

360 × 800

Desktop

Sidebar·Topbar 유지

현재 master-detail layout 유지

카드·timeline·asset·approval detail 가독성

Section 순서 유지

Tablet

기존 grid 전환 유지

filter wrap

timeline containment

asset list containment

modal bounds

approval master-detail 정책 유지

Mobile

Mobile Header·Bottom Tabs 유지

Desktop Sidebar 숨김

Drawer 유지

KPI stacking

단계·timeline 가독성

filter wrapping

asset long filename 대응

approval queue/detail 기존 모바일 정책 유지

modal viewport containment

bottom safe-area 유지

page horizontal overflow 0

SalesOps fixed Sidebar나 breakpoint를 복사하지 마십시오.

14. 레이아웃 보존

Round 6 승인 HEAD와 Round 7 결과를 비교하십시오.

필수:

Sidebar box

Header box

main origin

Client page title

각 화면 첫 Section

Section 순서

KPI grid

progress header

filters

timeline

asset panel

approval queue

approval detail

modal bounds

mobile offsets

artifact:

artifacts/redo/r07/layout-preservation.json

각 항목:

baseline box

result box

delta

허용치

판정

변화 이유

기준:

Shell geometry delta 0px

main origin delta 0px

Section 순서 동일

본문 구성 재배치 금지

시각 이식에 필요한 내부 padding·gap 변화만 근거와 함께 허용

360px page horizontal overflow 0

15. 접근성
KPI와 Progress

metric의 label/value 관계

색상 외 상태 정보

progress accessible name/value

current step 의미

zero/complete 상태

Cards와 Queue

클릭 가능한 카드 semantic

keyboard activation

focus-visible

selected state

내부 action 충돌 방지

empty state

Filters

실제 동작에 맞는 role

selected state

keyboard

no-result 연결

focus-visible

Timeline과 Gate

읽기 순서

단계 heading

pass/fail 텍스트

카드 keyboard

long content

Asset Panel

파일 action accessible name

long filename

icon decorative 처리

overflow container

Dialog

accessible name

focus entry

containment

focus return

Escape

backdrop

scroll lock

error announcement

Decision Controls

label

required

invalid

error association

disabled

loading/submitting

approve/revision 구분

중복 action 차단

Contrast

최소:

page title

metric

secondary metadata

muted text

selected filter

progress

status tones

asset row

approval selected state

disabled

validation error

focus ring

artifact:

artifacts/redo/r07/accessibility-audit.json

16. Derived·Code-only 결정 문서

대상:

UI-022

UI-027

UI-029

그 외 Round 2 matrix가 불확실성을 표시한 항목

문서:

docs/redo/r07/derived-component-decisions.md

각 항목:

Inventory ID

SalesOps ID

ZIP 근거

Live 상태 존재 여부

ORDOSPACE 기존 구조

파생한 시각 문법

사용 token

사용 Primitive

직접 복사하지 않은 부분

기능 보존 방식

접근성 결정

UI Lab evidence

운영 화면 evidence

불확실성

17. UI Lab 확장

Round 4 UI Lab에 Client specimen을 추가할 수 있습니다.

권장:

Client KPI zero/warn

step progress completed/current/pending

chain zero/partial/complete

approval card empty/populated

long project metadata

filter no-result

gate pass/fail

long asset filename

detail modal error

approval queue selected/unselected

no-selection detail

disabled decision controls

validation error

confirm/success/error

규칙:

dev-only

공식 메뉴 미노출

API 호출 0

운영 localStorage mutation 0

운영 fixture 변경 0

공식 19개 screen ID 유지

실제 운영 factory 사용

UI-021~032를 Round 4 완료 항목으로 바꾸지 않음

18. CSS 규칙

권장:

app/styles/dashboard-salesops.client.css

필수:

body.auth-on

Client 화면 또는 Client component namespace

Round 3 token 사용

Round 4 Primitive 재사용

Round 5 Shell selector 수정 0

Round 6 Admin selector 수정 0

Worker selector 0

public selector 0

raw color 0 목표

unresolved token 0

신규 !important 0

remote font 0

generic global selector 0

금지 예:

CSS
.card { ... }
button { ... }
table { ... }
#sidebar { ... }
#topbar { ... }

허용 예:

CSS
body.auth-on #dashboard .ordo-client-kpi-grid { ... }
body.auth-on .ordo-client-approval-item { ... }

페이지별 임시 patch가 아니라 Client 내 재사용 가능한 component 계층으로 작성하십시오.

19. JavaScript 변경 원칙

허용:

기존 Client renderer에 additive class

ARIA 보강

keyboard activation 보강

Primitive factory 사용

data-state 추가

escape 보강

overlay 접근성 보강

UI Lab fixture

금지:

Client fixture 변경

새 mock 운영 데이터

lifecycle 직접 변경

API 추가

localStorage key 변경

role guard 변경

route 변경

두 번째 Client renderer

Admin renderer 재사용

Worker 선행 구현

React 도입

기존 event listener와 중복 binding

MutationObserver나 semantic decorator를 사용하는 경우:

대상은 Client screen으로 제한

무한 observation loop 금지

운영 global state 오염 금지

화면이 destroy/re-render되어도 중복 listener 금지

20. Admin·Worker·공개 화면 회귀
Admin

최소:

#admin-home

#admin-projects

#admin-cards

#admin-team

#admin-audit

Desktop 대표 5개와 Admin Home Tablet/Mobile.

검사:

Client class 적용 0

visual change 0

DOM change 0

기능 변화 0

console error 0

overflow 0

Worker

최소:

#worker-home

#worker-cards

#profile

Desktop 대표와 Worker Home Tablet/Mobile.

검사:

Client class 적용 0

visual change 0

구조·기능 변화 0

공개 화면

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

token leak

Client CSS leak

body.auth-on false

overflow 0

artifact:

artifacts/redo/r07/non-client-regression.json

artifacts/redo/r07/frozen-public-regression.json

evidence:

evidence/redo/r07/non-client/
evidence/redo/r07/frozen-public/

Round 6 baseline 이미지를 덮어쓰지 마십시오.

21. 브라우저 Evidence
Client Dashboard

최소:

default D/T/M

KPI zero/warn

project step states

chain zero/partial/complete

approval grid populated

approval grid empty

long content

Client Project

최소:

default D/T/M

selected filter

no-result

gate pass/fail

timeline long content

asset populated

asset empty

long filename

detail modal open

modal error

modal mobile

Client Approvals

최소:

default D/T/M

queue selected/unselected

queue empty

detail selected

no selection

long detail

decision disabled

validation error

confirm

success/error가 실제 계약에 존재하면 해당 상태

경로:

evidence/redo/r07/client/dashboard/
evidence/redo/r07/client/project/
evidence/redo/r07/client/approvals/
evidence/redo/r07/client/states/
evidence/redo/r07/non-client/
evidence/redo/r07/frozen-public/

파일명에 반드시 포함:

screen

state

viewport

실제 해상도

22. 자동 검증

경로:

tests/redo/r07/

최소 검사:

Git

branch

Round 6 승인 HEAD merge-base

금지 branch commit 미포함

Inventory

UI-021~032 정확히 12개

누락 0

중복 0

추가 완료 ID 0

각 ID 구현 파일 존재

각 ID evidence 존재

Scope

Client selector만 사용

public leak 0

Admin leak 0

Worker leak 0

Shell selector 변경 0

Admin product file 변경 0 또는 불가피한 경우 명시적 실패

신규 !important 0

raw color 0

unresolved token 0

remote font 0

Data·Function

route

menu

fixture

text

KPI

progress

filter

ModuleCard

assets

approval queue

approval detail

decision controls

lifecycle

form

localStorage

API

guard

session

DOM

screen ID

Section order

major child order

item count

progress step count

chain count

filter count

modal ID

form fields

button type

기능 selector

State

zero

partial

complete

current

pending

empty

no-result

selected

disabled

validation error

modal open/closed

long

overflow

D/T/M

deferred 0

missing 0

Accessibility

card keyboard

progress name/value

filter semantics

asset action name

dialog focus/Escape/return

decision validation

contrast

reduced motion

Browser

console error 0

pageerror 0

failed request 0

신규 HTTP 4xx/5xx 0

page horizontal overflow 0

회귀

Round 1 audit

Round 2 validate

Round 3 validate

Round 4 validate

Round 5 validate

Round 6 validate

Round 7 validate

기존 validator expectation을 약화시키지 마십시오.

후속 layer 때문에 이전 Round browser test를 격리해야 한다면 이전 Round의 승인 계약을 그대로 측정하도록 stylesheet만 명시적으로 비활성화하십시오. 기대값 완화나 검사 삭제는 금지합니다.

23. 기계 판독 Artifact

최소:

artifacts/redo/r07/git-prestate.json
artifacts/redo/r07/inventory-scope.json
artifacts/redo/r07/client-component-catalog.json
artifacts/redo/r07/client-state-coverage.json
artifacts/redo/r07/client-data-function-parity.json
artifacts/redo/r07/dom-structure-parity.json
artifacts/redo/r07/token-usage.json
artifacts/redo/r07/css-scope-audit.json
artifacts/redo/r07/important-usage-audit.json
artifacts/redo/r07/client-browser-audit.json
artifacts/redo/r07/client-interaction-audit.json
artifacts/redo/r07/non-client-regression.json
artifacts/redo/r07/layout-preservation.json
artifacts/redo/r07/frozen-public-regression.json
artifacts/redo/r07/accessibility-audit.json
artifacts/redo/r07/test-results.json
artifacts/redo/r07/verification-summary.json
client-component-catalog.json

각 컴포넌트:

Inventory ID

Client 화면

name

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

client-state-coverage.json

각 ID별:

상태

implemented/N/A

근거

Desktop evidence

Tablet evidence

Mobile evidence

interaction evidence

24. 문서

최소:

docs/redo/r07/README.md
docs/redo/r07/inventory-scope.md
docs/redo/r07/client-architecture.md
docs/redo/r07/client-dashboard-implementation.md
docs/redo/r07/client-project-implementation.md
docs/redo/r07/client-approvals-implementation.md
docs/redo/r07/derived-component-decisions.md
docs/redo/r07/css-isolation.md
docs/redo/r07/layout-review.md
docs/redo/r07/non-client-regression.md
docs/redo/r07/public-regression.md
docs/redo/r07/accessibility-review.md
docs/redo/r07/verification-results.md
docs/redo/r07/change-manifest.md
docs/redo/r07/implementation-report.md
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
npm --prefix tests/redo/r07 run validate

가능하면:

Bash
npm --prefix backend test -- --runInBand
npm --prefix backend run type
npm --prefix backend run build

Production DB·Production API를 변경하는 테스트는 실행하지 마십시오.

26. 완료 조건

다음을 전부 만족해야 합니다.

 redo/r07-client-dashboard가 Round 6 승인 HEAD에서 분기

 UI-021~032 정확히 12개 구현

 다른 Inventory 완료 처리 없음

 Client Dashboard 완료

 Client Project 완료

 Client Approvals 완료

 Round 3 token 사용

 Round 4 Primitive 사용

 Round 5 Shell 변경 없음

 Round 6 Admin 변경 없음

 Client 데이터 변경 없음

 한국어 문구 변경 없음

 Section 순서 변경 없음

 route 변경 없음

 기능 변경 없음

 권한 변경 없음

 lifecycle 의미 변경 없음

 API·backend 변경 없음

 KPI와 progress 값 유지

 filter 동작 유지

 ModuleCard 기능 유지

 assets 기능 유지

 approval queue/detail 유지

 approve/revision transition 유지

 UI-022 Derived 근거 문서화

 UI-027 Derived 근거 문서화

 UI-029 code-only 근거 문서화

 zero/partial/complete 상태 검증

 empty/no-result 검증

 selected/disabled 검증

 validation/confirm/error 검증

 modal focus/Escape/return 통과

 Desktop·Tablet·Mobile 통과

 360px page horizontal overflow 0

 Admin 회귀 0

 Worker 회귀 0

 공개 화면 18개 회귀 통과

 console error 0

 pageerror 0

 신규 failed request 0

 신규 !important 0

 raw color 0

 unresolved token 0

 deferred 0

 missing 0

 Round 1~6 검증 통과

 Round 7 검증 통과

 Production 배포 없음

 main 변경 없음

 branch push 완료

 핵심 evidence가 GitHub에서 검수 가능

하나라도 충족하지 못하면 완료로 보고하지 마십시오.

27. Git 규칙

허용:

redo/r07-client-dashboard에만 commit

branch push

Draft PR 생성

금지:

main 변경

Round 6 브랜치 수정

이전 승인 브랜치 수정

원본 저장소 변경

force push

Production 배포

Vercel alias 변경

비밀정보 commit

권장 커밋:

feat(redo-r07): migrate client dashboard surfaces

feat(redo-r07): complete project and approval states

test(redo-r07): verify client parity and regressions

docs(redo-r07): publish client migration evidence

28. 제출 형식

완료 후 반드시 다음 Marker로 시작하십시오.

[ROUND 7 IMPLEMENTATION REPORT]

보고 순서:

A. 작업 식별

저장소

브랜치

시작 HEAD

종료 HEAD

Round 6 merge-base

Branch 또는 Draft PR URL

작업트리 상태

B. Inventory 결과

UI-021~032 각각:

화면

컴포넌트

분류

구현 파일

상태

D/T/M

evidence

완료 여부

C. Client 아키텍처

기존 renderer

source of truth

CSS namespace

token

Primitive

semantic decorator

중복 구현 여부

D. Client Dashboard

UI-021~024

구현 컴포넌트

상태

데이터 parity

layout

evidence

E. Client Project

UI-025~029

동일 형식

Derived/code-only 결정 포함

F. Client Approvals

UI-030~032

queue

detail

decision controls

lifecycle parity

evidence

G. 데이터·기능 parity

각 항목 PASS/FAIL:

route

menu

text

KPI

progress

project fixture

ModuleCard fixture

asset fixture

approval fixture

status

filter

modal

comment

approve/revision

form

localStorage

API

guard

session

lifecycle

H. 상태 커버리지

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

zero

partial

complete

current

pending

open/closed

confirm

long

overflow

D/T/M

deferred

missing

I. 접근성

KPI/progress

cards/queue

filters

timeline/gates

assets

dialog

decision controls

keyboard

focus

contrast

reduced motion

J. CSS 격리

Client scope

public leak

Admin leak

Worker leak

Shell selector 변경

raw color

unresolved var

신규 !important

K. 레이아웃 보존

Sidebar

Header

main origin

Section order

KPI grid

project timeline

approval layout

mobile offsets

max delta

evidence

L. 다른 역할·공개 화면 회귀

Admin

Worker

공개 6개 D/T/M

token/CSS leak

DOM/style/box

PASS/FAIL

M. 브라우저 QA

console

pageerror

failed request

HTTP 4xx/5xx

horizontal overflow

responsive

신규 회귀

N. 테스트 결과

각 명령:

command

exit code

PASS/FAIL/SKIPPED

이유

artifact

O. 변경 파일

Product 추가

Product 수정

Product 삭제

Test

Artifact

Evidence

Docs

기존 validator 변경과 이유

P. 범위 준수

Yes/No:

Client 데이터 변경

Client 문구 변경

Section 순서 변경

Shell 변경

Sidebar 변경

Header 변경

Admin 변경

Worker 선행 구현

Profile 전체 이식

공개 화면 변경

route 변경

기능 변경

권한 변경

lifecycle 직접 변경

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

Q. 미해결 위험

실제로 남은 위험만 기록하십시오.

R. Round 7 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 7 REVIEW

NOT READY — ROUND 7 INCOMPLETE

로컬 경로만 제출한 증거는 인정되지 않습니다. 핵심 문서·artifact·스크린샷은 GitHub 링크 또는 이 대화 첨부로 제출하십시오.

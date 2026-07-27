# Round 9 implementation prompt

- ChatGPT conversation URL: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
- Received at: 2026-07-27T14:40:01.8232891+09:00
- Round marker: [ROUND 9 IMPLEMENTATION PROMPT]
- Acceptance marker: [ROUND 8 ACCEPTED]

## Original response

[ROUND 8 ACCEPTED]

[ROUND 9 IMPLEMENTATION PROMPT]

당신은 ORDOSPACE SalesOps 디자인 이식 프로젝트의 Round 9 통합 검증·회귀 감사 담당자입니다.

Round 9의 목적은 새로운 시각 기능을 추가하는 것이 아닙니다.

이번 라운드에서는 Round 3~8에서 구현된 전체 인증 대시보드 체계와 Round 1에서 동결된 공개 화면을 하나의 통합 기준으로 검증하여 다음을 증명해야 합니다.

73개 Inventory가 승인된 Round 배정과 일치

Admin·Client·Worker·Shared UI가 역할별로 격리

공통 Token·Primitive·Shell이 일관되게 사용

데이터·라우트·권한·API·lifecycle 계약이 보존

공개 화면이 Round 1 기준과 동일

접근성·반응형·상태·오버레이·폼·업무 전이가 실제 브라우저에서 정상

Round 10 최종 배포 검증을 진행할 수 있는 상태

1. 시작 기준

저장소:

https://github.com/magus81818-bit/ordospace-ui-rebuild

승인된 Round 8 브랜치:

redo/r08-worker-dashboard

승인 HEAD:

2911cc85922bf32f31d051216aca9f29ed906564

새 브랜치:

redo/r09-integration-verification

Round 8 승인 HEAD에서 정확히 분기하십시오.

시작 확인:

Bash
git status
git remote -v
git branch --show-current
git log --oneline --decorate -20
git merge-base redo/r08-worker-dashboard HEAD

필수 artifact:

artifacts/redo/r09/git-prestate.json

금지:

Round 8 승인 HEAD 이전 분기

과거 잘못된 브랜치 Cherry-pick

main 변경

원본 저장소 변경

Production 배포

Vercel alias 변경

force push

Round 10 선행 작업

2. Round 9 핵심 원칙

Round 9은 기본적으로 검증 전용 라운드입니다.

제품 파일 수정은 다음 경우만 허용됩니다.

통합 검증에서 재현된 명백한 회귀

접근성 계약 위반

역할 간 CSS·DOM 침투

데이터·기능 parity 위반

반응형 overflow

기존 validator가 발견한 실제 결함

허용되지 않는 변경:

새로운 디자인 이식

공개 화면 재디자인

Dashboard IA 변경

문구 변경

데이터 변경

lifecycle 정책 변경

API 변경

backend 변경

font 변경

SUIT 추가

신규 외부 dependency 추가

새로운 workflow 추가

결함 수정이 필요하면 최소 수정 후 원인을 문서화하십시오.

3. Round 9 공식 Inventory

Round 9의 직접 대상은 UI-065~UI-072 총 8개입니다.

다만 이들은 모두 Frozen regression only이며 제품 시각 변경 대상이 아닙니다.

ID	영역	컴포넌트	분류	처리
UI-065	public/landing	landing header/navigation	Derived 또는 Matrix 기준	Frozen regression only
UI-066	public/landing	hero and narrative sections	Derived	Frozen regression only
UI-067	public/landing	FAQ accordion	Derived	Frozen regression only
UI-068	public	inquiry modal/form	Derived, code-only uncertainty	Frozen regression only
UI-069	public/auth	authentication composition	Derived	Frozen regression only
UI-070	public/policies	terms/privacy/support content	Derived	Frozen regression only
UI-071	shared	workspace selector	Derived	Frozen regression only
UI-072	shared	403 screen	Matrix 기준	Frozen regression only

Round 2 matrix를 직접 읽어 정확한 값을 사용하십시오.

JavaScript
row.implementationRound === "Round 9"

필수 확인:

정확히 8개

Inventory ID

route/role

component

SalesOps ID

SalesOps component

classification

uncertainty

implementationTarget === false

completionStatus === "Frozen regression only"

verificationMethod

preserveLayout

preserveData

preserveFunction

문서:

docs/redo/r09/inventory-scope.md

UI-065~072를 “구현 완료”로 표현하지 말고 “동결 회귀 검증 완료”로 표현하십시오.

4. 전체 73개 Inventory 통합 감사

Round 9은 UI-001~UI-073 전체를 검증해야 합니다.

필수 artifact:

artifacts/redo/r09/full-inventory-audit.json

각 Inventory:

ID

Primary Round

Verification Round

역할/화면

component

classification

implementationTarget

완료 artifact

product file

state coverage artifact

browser evidence

accessibility evidence

regression status

최종 판정

필수 조건:

총 73개

unique 73개

누락 0

중복 0

Primary Round 배정 오류 0

Verification Round 오류 0

evidence 누락 0

unresolved 0

Round별 기대 수:

Round 3: 3

Round 4: 10

Round 5: 9

Round 6: 21

Round 7: 12

Round 8: 10

Round 9: 8

5. 공개 화면 완전 동결 검증

공개 화면은 Round 1 baseline과 직접 비교하십시오.

대상:

#landing

#auth

#terms

#privacy

#support

#select-workspace

뷰포트:

1440×1000

1024×1366

390×844

총 18개 기본 case.

추가 상태:

Landing

header/navigation

hero

narrative sections

FAQ collapsed

FAQ expanded

focus-visible

reduced motion

long content containment

Inquiry Modal

closed

open

accessible name

focus entry

focus containment

Escape

backdrop

focus return

validation error

success가 기존 계약에 있으면 success

Mobile containment

Auth

login

forgot password

reset

validation error

loading

role/session behavior

backend/mock selection 의미

Policies/Support

long terms

long privacy

support form

links

validation

mobile overflow

Workspace Selector

single role

multi role

hover

focus

keyboard

선택 후 session·route

403

attempted route 표시

current role 표시

multi-role hint

workspace selector 이동

role guard 유지

비교 항목:

DOM tree

ID

stable class

child count

text content

href

form fields

button type

computed color

background

border

radius

typography

bounding box

scroll dimensions

overflow

animation/reduced motion

interaction 결과

필수 artifact:

artifacts/redo/r09/frozen-public-regression.json

artifacts/redo/r09/public-state-audit.json

artifacts/redo/r09/public-interaction-audit.json

evidence:

evidence/redo/r09/frozen-public/
evidence/redo/r09/public-states/

Round 1 evidence를 덮어쓰지 마십시오.

6. 역할별 통합 회귀
Admin

#admin-home

#admin-projects

#admin-cards

#admin-team

#admin-audit

Client

#dashboard

#project

#approvals

Worker

#worker-home

#worker-cards

Shared

#profile

workspace selector

403

notifications

drawer

mobile tabs

dialogs/sheets

UI Lab

각 역할에서 검증:

올바른 메뉴만 표시

role guard

hash route

direct navigation

attempted forbidden route

403

role switching

session

notification deep link

logout

profile

mobile navigation

역할 침투 검사:

Admin class가 Client·Worker에 0

Client class가 Admin·Worker에 0

Worker class가 Admin·Client에 0

Dashboard token이 public에 0

public style이 authenticated 화면에 의도치 않게 적용되지 않음

Shell selector 충돌 0

artifact:

artifacts/redo/r09/role-isolation-audit.json

7. 전체 기능 계약 검증

필수 artifact:

artifacts/redo/r09/data-function-parity.json

검사 대상:

공통

route list

screen IDs

menu

Korean copy

role guards

session

localStorage keys

API paths

backend files

notification links

logout

profile

Admin

project data

card data

team data

audit data

filters

selection

assignment

lifecycle controls

Client

KPI

project progress

chain progress

filters

timeline

assets

card modal

comments

approval queue

approve/revision

Worker

KPI

revision queue

in-progress/pending

filters

list/detail

QC

work log

submit review

Public

landing actions

inquiry form

auth state

policy links

support form

workspace selection

403 routing

Round 8 승인 HEAD와 비교:

data file hash

service file hash

API file hash

backend file hash

route configuration

localStorage constants

lifecycle transition names

service call arguments

제품 의미 변경 0이어야 합니다.

8. 전체 상태 Coverage 통합

Round 3~8의 state artifact를 통합하십시오.

필수 artifact:

artifacts/redo/r09/full-state-coverage.json

상태 예:

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

validation

open

closed

confirm

zero

partial

complete

current

pending

warning

revision

overdue

blocked

submitting

long content

overflow

reduced motion

Desktop

Tablet

Mobile

허용 상태 값:

implemented

not_applicable

필수:

invalid status 0

missing evidence 0

directory evidence 0

generic browser assertion 0

deferred 0

missing 0

실제 파일 evidence

실제 test title 연결

Round 9 public states도 포함하십시오.

9. 전체 접근성 감사

artifact:

artifacts/redo/r09/accessibility-audit.json

독립 시나리오로 검사:

Navigation/Shell

skip/navigation semantics가 기존에 존재하면 유지

sidebar

mobile drawer

bottom tabs

notification panel

role selector

403

Cards/Lists

keyboard activation

selected state

focus-visible

nested actions

Forms

label

required

invalid

describedby

error alert

focus invalid control

disabled

submitting

success/error announcement

Progress/Status

name

min/max/now

current step

색상 외 상태 정보

Modal/Sheet

accessible name

aria-modal

focus entry

containment

Escape

backdrop

focus return

scroll lock

Tables

header

row/column relation

horizontal scroll access

keyboard

Mobile

44px interactive target가 기존 정책에 적용되는 항목

viewport containment

safe area

focus visibility

no horizontal page overflow

Reduced Motion

prefers-reduced-motion: reduce

불필요한 transition·animation 억제

기능 손실 없음

각 check:

JSON
{
  "scenario": "",
  "measurement": "",
  "expected": "",
  "actual": "",
  "measured": true,
  "pass": true
}

하드코딩된 pass:true 금지.

10. 반응형 통합 감사

뷰포트:

1440×1000

1280×900

1024×1366

768×1024

390×844

360×800

인증 화면 10개:

Admin 5

Client 3

Worker 2

총 60개 기본 case.

검사:

Shell geometry

sidebar

topbar

main origin

mobile header

bottom tabs

drawer

section order

grid collapse

list/detail

modal

form

table

overflow

fixed/sticky collision

safe-area

long Korean content

artifact:

artifacts/redo/r09/responsive-layout-audit.json

필수:

60/60

shell delta 0

main origin delta 0

page overflow 0

Section 순서 변경 0

11. CSS·Token 통합 감사

검사 파일:

dashboard-salesops.tokens.css

dashboard-salesops.primitives.css

dashboard-salesops.shell.css

dashboard-salesops.admin.css

dashboard-salesops.client.css

dashboard-salesops.worker.css

artifact:

artifacts/redo/r09/css-token-audit.json

검사:

token definitions

token references

unresolved token

duplicate conflicting token

raw color

remote font

!important

generic global selector

public selector

role selector leakage

Shell selector override

specificity escalation

dead selector

missing stylesheet link

stylesheet order

기준:

unresolved token 0

신규 raw color 0

신규 !important 0

remote font 0

role leakage 0

public leakage 0

stylesheet order 정확

font 정책은 현재 승인 상태를 유지하십시오.

변경 금지:

SUIT 추가

Pretendard 제거

DM Sans 순서 변경

외부 font import

12. 제품 Diff 통합 감사

Round 1 product baseline 및 각 승인 HEAD를 기준으로 다음을 생성하십시오.

artifacts/redo/r09/product-diff-audit.json

분류:

Token

Primitive

Shell

Admin

Client

Worker

Test-only

Artifact

Evidence

Docs

검사:

각 제품 변경이 승인된 Round에 속하는지

범위 밖 제품 파일 변경 여부

public 제품 파일 변경 여부

API/backend 변경 여부

데이터 변경 여부

직접 lifecycle status 대입 여부

duplicated renderer 여부

mock application 생성 여부

React/Next/Radix/Recharts 도입 여부

remote font 여부

production config 변경 여부

결과:

approved product files

unexpected product files

forbidden files

unexplained changes

pass

13. Validator 신뢰성 감사

Round 1~8 validator를 점검하십시오.

artifact:

artifacts/redo/r09/validator-integrity-audit.json

검사:

기존 assertion 삭제 여부

기대값 완화 여부

branch descendant 허용의 정당성

후속 stylesheet 격리 방식

artifact를 validator가 자기 자신에게 유리하게 생성하는지

hardcoded pass:true

count() >= 0

필수 key 누락

evidence directory

generic browserAssertion

N/A reason

실제 브라우저 결과와 validator 결과 일치

Round 3·4·6의 후속 계층 격리 변경을 별도 검토하십시오.

허용 조건:

승인 당시 계약을 그대로 재현하기 위해 후속 stylesheet만 비활성화

assertion 수·기대값 유지

product parity 유지

새로운 범위만 descendant로 허용

API/backend/Shell 금지 유지

기대값 완화가 발견되면 Round 9 실패입니다.

14. 브라우저 오류 감사

전체 테스트에서 수집:

console error

pageerror

requestfailed

HTTP 4xx/5xx

unhandled rejection

dialog leak

MutationObserver loop

duplicate listener

inaccessible focus

page horizontal overflow

artifact:

artifacts/redo/r09/browser-health-audit.json

필수:

console error 0

pageerror 0

request failure 0

신규 HTTP 4xx/5xx 0

unhandled rejection 0

observer loop 0

duplicate action 0

overflow 0

QA에서 의도적으로 차단한 API는 별도 isolated case로 기록하고 운영 browser health 통계에 섞지 마십시오.

15. UI Lab 통합 검증

UI Lab은 dev-only 상태를 유지해야 합니다.

검사:

공식 메뉴 미노출

공식 19개 screen ID 불변

API 호출 0

운영 localStorage mutation 0

Token specimens

Primitive specimens

Shell states

Admin states

Client states

Worker states

Derived/code-only states

keyboard

focus

responsive

reduced motion

artifact:

artifacts/redo/r09/ui-lab-audit.json

UI Lab을 운영 화면으로 승격하거나 새 route로 노출하지 마십시오.

16. Round 9 제품 변경 제한

원칙적으로 추가 제품 stylesheet나 renderer를 만들지 마십시오.

금지 예:

app/styles/dashboard-salesops.public.css
app/ui/components/public.ui.js

UI-065~072는 공개 동결 항목이므로 시각 이식 파일을 추가하면 실패입니다.

제품 수정이 발생한 경우 반드시:

재현된 결함

영향 Inventory

최소 수정

기능·문구·데이터 비변경

baseline diff

회귀 결과

수정 필요성

을 기록하십시오.

17. 자동 검증

경로:

tests/redo/r09/

권장 구조:

integration-audit.spec.cjs

public-regression.spec.cjs

role-isolation.spec.cjs

validator-integrity.spec.cjs

validate.cjs

playwright.config.cjs

static-server.cjs

package.json

validator는 browser artifact를 읽고 독립 검증해야 합니다.

validator가 검증 대상 artifact를 무조건 PASS로 생성하면 안 됩니다.

18. 필수 Artifact
artifacts/redo/r09/git-prestate.json
artifacts/redo/r09/inventory-scope.json
artifacts/redo/r09/full-inventory-audit.json
artifacts/redo/r09/full-state-coverage.json
artifacts/redo/r09/frozen-public-regression.json
artifacts/redo/r09/public-state-audit.json
artifacts/redo/r09/public-interaction-audit.json
artifacts/redo/r09/role-isolation-audit.json
artifacts/redo/r09/data-function-parity.json
artifacts/redo/r09/accessibility-audit.json
artifacts/redo/r09/responsive-layout-audit.json
artifacts/redo/r09/css-token-audit.json
artifacts/redo/r09/product-diff-audit.json
artifacts/redo/r09/validator-integrity-audit.json
artifacts/redo/r09/browser-health-audit.json
artifacts/redo/r09/ui-lab-audit.json
artifacts/redo/r09/test-results.json
artifacts/redo/r09/verification-summary.json

verification-summary.json 필수 필드:

JSON
{
  "inventory73Pass": true,
  "round9FrozenInventoryPass": true,
  "publicFrozenPass": true,
  "publicInteractionPass": true,
  "roleIsolationPass": true,
  "dataFunctionParityPass": true,
  "stateCoveragePass": true,
  "accessibilityPass": true,
  "responsivePass": true,
  "cssTokenPass": true,
  "productDiffPass": true,
  "validatorIntegrityPass": true,
  "browserHealthPass": true,
  "uiLabPass": true,
  "failures": [],
  "pass": true
}
19. 필수 문서
docs/redo/r09/README.md
docs/redo/r09/inventory-scope.md
docs/redo/r09/full-inventory-review.md
docs/redo/r09/public-freeze-review.md
docs/redo/r09/role-isolation-review.md
docs/redo/r09/data-function-parity.md
docs/redo/r09/state-coverage-review.md
docs/redo/r09/accessibility-review.md
docs/redo/r09/responsive-review.md
docs/redo/r09/css-token-review.md
docs/redo/r09/product-diff-review.md
docs/redo/r09/validator-integrity-review.md
docs/redo/r09/browser-health-review.md
docs/redo/r09/ui-lab-review.md
docs/redo/r09/verification-results.md
docs/redo/r09/change-manifest.md
docs/redo/r09/implementation-report.md
20. Evidence 구조
evidence/redo/r09/frozen-public/
evidence/redo/r09/public-states/
evidence/redo/r09/admin/
evidence/redo/r09/client/
evidence/redo/r09/worker/
evidence/redo/r09/shared/
evidence/redo/r09/ui-lab/

파일명:

role

screen

state

viewport

resolution

을 포함하십시오.

스크린샷만으로 PASS 처리하지 말고 DOM assertion과 연결하십시오.

21. 테스트 실행

최소:

Bash
npm ci
npm run build
npm run check:js
npm run static:validate-components
npm run static:validate-lifecycle
npm run smoke
npm run mvp:check

npm --prefix tests/redo/r01 run audit
npm --prefix tests/redo/r02 run validate
npm --prefix tests/redo/r03 run validate
npm --prefix tests/redo/r04 run validate
npm --prefix tests/redo/r05 run validate
npm --prefix tests/redo/r06 run validate
npm --prefix tests/redo/r07 run validate
npm --prefix tests/redo/r08 run validate
npm --prefix tests/redo/r09 run validate

가능하면:

Bash
npm --prefix backend ci
npm --prefix backend exec prisma generate
npm --prefix backend test -- --runInBand
npm --prefix backend run type
npm --prefix backend run build

Production DB·Production API mutation test는 실행하지 마십시오.

audit finding은 숨기지 말고 기록하되 강제 fix는 하지 마십시오.

22. 완료 조건

 redo/r09-integration-verification가 Round 8 승인 HEAD에서 분기

 UI-065~072 정확히 8개 확인

 8개 모두 implementationTarget false

 공개 제품 변경 0

 전체 Inventory 73/73

 중복 0

 누락 0

 Round 배정 오류 0

 전체 evidence 연결

 Public 18개 기본 회귀 통과

 Public 상호작용 상태 통과

 Inquiry modal 접근성 통과

 Auth 상태 통과

 Workspace selector 통과

 403 통과

 Admin 역할 회귀 통과

 Client 역할 회귀 통과

 Worker 역할 회귀 통과

 Shared/Profile 회귀 통과

 역할 CSS 침투 0

 데이터 변경 0

 문구 변경 0

 route 변경 0

 role guard 변경 0

 localStorage key 변경 0

 API 변경 0

 backend 변경 0

 lifecycle 의미 변경 0

 state invalid 0

 state missing evidence 0

 generic assertion 0

 deferred 0

 missing 0

 접근성 전체 통과

 인증 화면 60개 responsive case 통과

 360px overflow 0

 unresolved token 0

 신규 raw color 0

 신규 !important 0

 remote font 0

 public stylesheet 추가 0

 duplicated renderer 0

 React/Next/Radix/Recharts 도입 0

 validator 기대값 완화 0

 console error 0

 pageerror 0

 request failure 0

 HTTP failure 0

 Round 1~8 통과

 Round 9 통과

 main 변경 없음

 Production 배포 없음

 Round 10 선행 구현 없음

 branch push 완료

 핵심 증거 GitHub 검수 가능

하나라도 충족하지 못하면 완료로 보고하지 마십시오.

23. Git 규칙

허용:

redo/r09-integration-verification commit

branch push

Draft PR

금지:

main 변경

승인된 과거 브랜치 수정

원본 저장소 변경

force push

Production 배포

Vercel alias 변경

권장 커밋:

test(redo-r09): audit full inventory and role isolation

test(redo-r09): verify frozen public and accessibility

test(redo-r09): validate responsive and contract parity

docs(redo-r09): publish integration verification evidence

제품 수정이 없다면 feat 커밋을 만들지 마십시오.

24. 제출 형식

완료 후 반드시 다음 Marker로 시작하십시오.

[ROUND 9 IMPLEMENTATION REPORT]

A. 작업 식별

저장소

브랜치

시작 HEAD

종료 HEAD

Round 8 merge-base

Branch/PR URL

작업트리

B. Round 9 Inventory

UI-065~072 각각:

route

component

classification

implementationTarget

frozen status

D/T/M

interaction states

evidence

판정

C. 전체 Inventory

총수

unique

Round별 수

누락

중복

evidence 누락

PASS/FAIL

D. 공개 동결

Landing

FAQ

Inquiry modal

Auth

Terms

Privacy

Support

Workspace selector

403

D/T/M

DOM/style/box

PASS/FAIL

E. 역할 격리

Admin

Client

Worker

Shared

CSS class leak

token leak

route guard

session

PASS/FAIL

F. 데이터·기능 Parity

공통

Admin

Client

Worker

Public

API

backend

lifecycle

storage

PASS/FAIL

G. 상태 Coverage

implemented

N/A

invalid

deferred

missing

missing evidence

generic assertion

PASS/FAIL

H. 접근성

Shell

navigation

cards

forms

progress

modal

table

mobile

reduced motion

PASS/FAIL

I. 반응형

60개 인증 case

18개 public case

Shell delta

overflow

long content

PASS/FAIL

J. CSS·Token

unresolved

raw color

!important

remote font

role leak

public leak

stylesheet order

PASS/FAIL

K. 제품 Diff

승인 제품 파일

예상 밖 제품 파일

public 변경

data/API/backend 변경

직접 lifecycle 대입

dependency 추가

PASS/FAIL

L. Validator 무결성

기대값 완화

후속 stylesheet 격리

hardcoded pass

invalid assertion

evidence 검증

PASS/FAIL

M. Browser Health

console

pageerror

request failure

HTTP

unhandled rejection

observer loop

duplicate action

overflow

PASS/FAIL

N. UI Lab

dev-only

공식 메뉴

API

storage

specimens

keyboard

responsive

PASS/FAIL

O. 테스트 결과

각 command:

exit code

PASS/FAIL/SKIPPED

warning

artifact

P. 변경 파일

Product

Test

Artifact

Evidence

Docs

기존 validator 변경과 이유

Q. 범위 준수

Yes/No:

공개 제품 변경

Admin 제품 변경

Client 제품 변경

Worker 제품 변경

데이터 변경

문구 변경

route 변경

lifecycle 변경

API 변경

backend 변경

font 변경

dependency 추가

Shell 변경

main 변경

Production 배포

Round 10 선행 작업

정상 답변은 모두 No입니다. 실제 결함 수정이 있었다면 해당 항목은 Yes로 표시하고 상세 근거를 작성하십시오.

R. 미해결 위험

실제로 남은 위험만 기록하십시오.

S. Round 9 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 9 REVIEW

NOT READY — ROUND 9 INCOMPLETE


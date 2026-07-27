# Round 9 corrected implementation prompt

- ChatGPT conversation URL: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
- Received at: 2026-07-27T14:45:00+09:00
- Round marker: [ROUND 9 IMPLEMENTATION PROMPT]
- Correction decision: C

## Original response

[ROUND 9 IMPLEMENTATION PROMPT]

당신은 ORDOSPACE SalesOps 디자인 이식 프로젝트의 Round 9 통합 검증·회귀 감사 담당자입니다.

이번 프롬프트는 Round 2 공식 Matrix와 충돌하지 않도록 정정되었습니다.

확정된 기획 결정: C안

UI-072는 Round 2 Matrix의 실제 값을 그대로 유지합니다.

implementationTarget: true

completionStatus: "Mapped for implementation"

preserveLayout: "Current ORDOSPACE placement..."

다만 현재 코드에 403 화면이 이미 존재하므로, Round 9에서 새로운 403 화면이나 별도 renderer를 만들지 않습니다.

Round 9의 UI-072 처리는 다음과 같습니다.

Matrix를 수정하지 않습니다.

UI-072를 implementationTarget: true로 정확히 기록합니다.

기존 403 화면이 UI-072의 요구사항을 이미 충족하는지 검증합니다.

충족한다면 기존 구현을 공식 구현으로 등록하고 통합 회귀를 수행합니다.

명백한 누락이 있을 때만 기존 403 화면에 최소한의 additive class·ARIA·상태 표현을 보완합니다.

새로운 화면, 새로운 route, 새로운 workflow, 새로운 public stylesheet는 만들지 않습니다.

따라서 Round 9 Inventory는 다음처럼 처리합니다.

UI-065~UI-071: 검증 전용 Frozen regression

UI-072: 기존 403 구현의 공식 매핑·검증 대상

1. 시작 기준

저장소:

https://github.com/magus81818-bit/ordospace-ui-rebuild

승인된 Round 8 브랜치:

redo/r08-worker-dashboard

승인 HEAD:

2911cc85922bf32f31d051216aca9f29ed906564

작업 브랜치:

redo/r09-integration-verification

이미 위 승인 HEAD에서 브랜치를 생성하고 prompt·git-prestate만 커밋했다면 해당 브랜치를 그대로 사용하십시오.

기존 prompt 보존 커밋을 되돌리거나 새 브랜치를 만들 필요는 없습니다.

시작 시 확인:

Bash
git status
git remote -v
git branch --show-current
git log --oneline --decorate -20
git merge-base redo/r08-worker-dashboard HEAD
git diff --name-status 2911cc85922bf32f31d051216aca9f29ed906564..HEAD

필수 artifact:

artifacts/redo/r09/git-prestate.json

확인 항목:

Branch가 redo/r09-integration-verification

merge-base가 2911cc85922bf32f31d051216aca9f29ed906564

현재까지 제품 파일 변경 없음

prompt·git-prestate 외 선행 구현 없음

작업트리 clean 여부

local/remote HEAD

금지:

Round 8 승인 HEAD 이전 분기

기존 잘못된 브랜치 Cherry-pick

main 변경

원본 저장소 변경

Production 배포

Vercel alias 변경

force push

Round 10 선행 작업

2. Round 9의 목적

Round 9은 다음 두 작업을 수행합니다.

A. 전체 통합 검증

Round 3~8에서 이식한 다음 영역을 통합 검증합니다.

Token

Primitive

Dashboard Shell

Admin

Client

Worker

Shared Profile

UI Lab

데이터·라우트·권한·API·lifecycle

반응형

접근성

역할 격리

validator 무결성

B. Round 9 공식 Inventory 처리

UI-065~UI-071은 Round 1 공개 baseline을 기준으로 동결 회귀만 수행

UI-072는 현재 존재하는 403 화면을 공식 구현 대상으로 매핑하고 검증

Round 9은 공개 화면을 SalesOps 디자인으로 재이식하는 라운드가 아닙니다.

3. Round 2 Matrix가 유일한 Source of Truth

다음 파일을 직접 읽으십시오.

artifacts/redo/r02/component-migration-matrix.json

Round 9 대상:

JavaScript
row.implementationRound === "Round 9"

정확히 UI-065~UI-072 총 8개여야 합니다.

각 행에서 다음 필드를 그대로 사용하십시오.

ordospaceInventoryId

ordospaceRoleRoutes

ordospaceComponent

existingLocationFunction

currentStates

salesopsId

salesopsComponent

salesopsZipEvidence

classification

classificationReason

derivedBasis

preserveLayout

preserveData

preserveFunction

visualToMigrate

responsiveStrategy

accessibilityRequirements

implementationRound

verificationRound

verificationMethod

uncertainty

completionStatus

implementationTarget

Matrix를 이번 라운드의 요구에 맞추어 수정하지 마십시오.

4. Round 9 공식 Inventory 처리 기준
UI-065~UI-071

Matrix 실제 값에 따라 처리하십시오.

공통 원칙:

implementationTarget === false

completionStatus === "Frozen regression only"

제품 변경 없음

Round 1 baseline과 회귀 비교

기존 기능·문구·레이아웃·상태 검증

대상:

UI-065: landing header/navigation

UI-066: hero and narrative sections

UI-067: FAQ accordion

UI-068: inquiry modal/form

UI-069: authentication composition

UI-070: terms/privacy/support content

UI-071: workspace selector

UI-072

Matrix 실제 값을 유지합니다.

implementationTarget === true

completionStatus === "Mapped for implementation"

기존 403 화면을 구현 후보로 사용

제품 구현 충족 여부를 먼저 감사

새 403 화면 생성 금지

새 route 생성 금지

새 public stylesheet 생성 금지

UI-072 완료 판정은 다음 두 단계로 수행하십시오.

1단계: Existing Implementation Audit

기존 403 화면에서 다음을 확인하십시오.

실제 screen ID

기존 route guard와 연결

attempted route 표시

current role 표시

multi-role hint

workspace selector 이동

한국어 문구

기존 layout 위치

Desktop·Tablet·Mobile

default 상태

multi-role 상태

focus-visible

keyboard

role/session 연동

overflow

접근성 이름과 heading

2단계: 판정

다음 중 하나로 기록하십시오.

existing_implementation_verified

기존 화면이 Matrix 요구를 충족하여 제품 수정 없이 UI-072를 공식 구현 완료로 등록한 경우.

minimal_correction_applied

기존 화면에 명백한 누락이 있어 최소한의 additive 수정만 수행한 경우.

허용되는 수정:

additive class

additive ARIA

focus-visible

missing state attribute

long-content containment

mobile overflow correction

기존 버튼의 semantic 보강

금지되는 수정:

새로운 403 renderer

새로운 route

새로운 데이터

문구 재작성

역할 정책 변경

session 정책 변경

workspace selector workflow 변경

전역 public 디자인 변경

새 public stylesheet

Matrix 변경

5. Round 9 Inventory Artifact

필수:

artifacts/redo/r09/inventory-scope.json

UI-065~072 각각 기록:

Inventory ID

Matrix 원본 필드

implementationTarget

completionStatus

처리 유형

제품 파일

테스트 파일

evidence

D/T/M

interaction states

접근성

판정

처리 유형:

UI-065~071: frozen_regression_verified

UI-072: existing_implementation_verified 또는 minimal_correction_applied

문서:

docs/redo/r09/inventory-scope.md

잘못된 표현:

8개 모두 implementationTarget false

8개 모두 Frozen regression only

UI-072 Matrix 값을 false로 정정

UI-072를 검증 대상에서 제외

6. 전체 73개 Inventory 통합 감사

필수 artifact:

artifacts/redo/r09/full-inventory-audit.json

UI-001~UI-073 전체를 포함하십시오.

각 항목:

ID

Primary Round

Verification Round

역할·route

component

classification

implementationTarget

completionStatus

구현 또는 검증 유형

완료 artifact

제품 파일

state artifact

browser evidence

accessibility evidence

regression status

최종 판정

필수 조건:

총 73개

unique 73개

누락 0

중복 0

Primary Round 오류 0

Verification Round 오류 0

Matrix field 불일치 0

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

Round 9 내부 구분:

Frozen regression: 7

Implementation target: 1

UI-072 existing implementation 검증 또는 최소 보정: 1

7. 공개 화면 동결 검증

Round 1 baseline과 직접 비교하십시오.

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

비교 항목:

DOM tree

ID

stable class

child count

text

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

horizontal overflow

interaction 결과

reduced motion

필수 artifact:

artifacts/redo/r09/frozen-public-regression.json

artifacts/redo/r09/public-state-audit.json

artifacts/redo/r09/public-interaction-audit.json

evidence:

evidence/redo/r09/frozen-public/
evidence/redo/r09/public-states/

Round 1 evidence를 덮어쓰지 마십시오.

8. UI-065 Landing Header·Navigation

검증:

DOM·문구·링크 동결

Desktop navigation

Mobile navigation

hover

focus-visible

keyboard

long label containment

reduced motion

Round 1 bounding-box parity

authenticated Dashboard stylesheet 침투 0

제품 수정 금지.

9. UI-066 Hero·Narrative Sections

검증:

hero copy

CTA

narrative section 순서

card count

media/illustration 위치

long content

reduced motion

Desktop·Tablet·Mobile

Round 1 style·box parity

horizontal overflow 0

제품 수정 금지.

10. UI-067 FAQ Accordion

검증:

collapsed

expanded

keyboard Enter/Space

aria-expanded

aria-controls

focus-visible

multiple-item 정책

reading order

long answer

Mobile containment

Round 1 스타일 동결

제품 수정 금지.

11. UI-068 Inquiry Modal/Form

Matrix상 Frozen regression only입니다.

기존 Inquiry modal/form을 검증하십시오.

상태:

closed

open

accessible name

aria-modal

focus entry

focus containment

Escape

backdrop

focus return

body scroll lock

validation error

success가 기존 계약에 존재하면 success

Mobile containment

제품 시각 수정 금지.

실제 접근성 결함이 발견되더라도 UI-072와 무관한 제품 수정은 Round 9 correction 대상으로 명시하고 최소 수정만 허용됩니다.

12. UI-069 Authentication Composition

검증:

login

forgot password

reset

validation error

loading

backend/mock selection 의미

role/session

form name/type

button type

focus invalid control

error association

Mobile overflow

Round 1 동결

제품 재디자인 금지.

13. UI-070 Terms·Privacy·Support

검증:

terms long content

privacy long content

support form

links

validation

keyboard

focus

mobile overflow

Round 1 DOM/style/box parity

제품 변경 금지.

14. UI-071 Workspace Selector

검증:

single-role 상태

multi-role 상태

실제 표시되는 역할

hover

focus-visible

keyboard

선택 후 session

선택 후 route

잘못된 역할 선택 차단

auth-on 전환

Round 1 동결

제품 변경 금지.

15. UI-072 Existing 403 Implementation 검증

UI-072는 Round 9의 유일한 implementationTarget: true 항목입니다.

기존 구현 탐색

다음을 조사하십시오.

403 screen ID

renderer 위치

route guard 위치

attempted route 전달 방식

current role 전달 방식

multi-role hint 조건

workspace selector 이동 동작

메뉴·Shell 관계

public/authenticated 여부

Desktop·Tablet·Mobile 구성

필수 상태

default

attempted route

current role

multi-role hint

single-role 상태

workspace selector CTA

keyboard activation

focus-visible

long attempted route

Desktop

Tablet

Mobile

reduced motion

overflow

데이터·기능 보존

route guard 변경 없음

role permission 변경 없음

session 변경 없음

attempted route 값 변경 없음

CTA destination 변경 없음

Korean copy 변경 없음

localStorage key 변경 없음

접근성

page heading

오류 상태 텍스트

attempted route가 색상 외 텍스트로 표현

current role 텍스트

CTA accessible name

keyboard

focus-visible

reading order

Mobile containment

Evidence
evidence/redo/r09/shared/403-default-desktop-1440x1000.png
evidence/redo/r09/shared/403-multi-role-tablet-1024x1366.png
evidence/redo/r09/shared/403-long-route-mobile-390x844.png
evidence/redo/r09/shared/403-focus-mobile-390x844.png
Artifact

artifacts/redo/r09/ui-072-implementation-audit.json

필수 필드:

JSON
{
  "inventoryId": "UI-072",
  "matrixImplementationTarget": true,
  "matrixCompletionStatus": "Mapped for implementation",
  "existingScreenFound": true,
  "existingRendererFound": true,
  "routeGuardConnected": true,
  "attemptedRoutePreserved": true,
  "currentRolePreserved": true,
  "multiRoleHintPreserved": true,
  "workspaceSelectorActionPreserved": true,
  "productCorrectionRequired": false,
  "handling": "existing_implementation_verified",
  "pass": true
}

최소 수정이 있었다면:

productCorrectionRequired: true

handling: "minimal_correction_applied"

변경 파일

결함

최소 수정

기능·문구·데이터 parity

회귀 결과

를 기록하십시오.

16. 역할별 통합 회귀
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

검증:

올바른 메뉴

role guard

hash route

direct navigation

forbidden route

403

role switching

session

notification deep link

logout

profile

mobile navigation

역할 침투:

Admin class → Client·Worker 0

Client class → Admin·Worker 0

Worker class → Admin·Client 0

Dashboard token → public 0

public style → authenticated 의도치 않은 적용 0

Shell selector 충돌 0

artifact:

artifacts/redo/r09/role-isolation-audit.json

17. 데이터·기능 Parity

필수 artifact:

artifacts/redo/r09/data-function-parity.json

Round 8 승인 HEAD와 비교하십시오.

검사:

공통

routes

screen IDs

menu

Korean copy

role guards

session

localStorage keys

API paths

backend files

notifications

logout

profile

403

Admin

projects

cards

team

audit

filters

selection

assignment

lifecycle

Client

KPI

project progress

chain progress

filters

timeline

assets

modal

comments

approve/revision

Worker

KPI

revision

in-progress/pending

filters

list/detail

QC

work log

review submission

Public

landing actions

inquiry

auth

policies

support

workspace selection

403 routing

해시 비교:

data files

services

API

backend

route config

storage constants

lifecycle transition names

service call arguments

UI-072 최소 correction이 없으면 제품 의미 변경은 0이어야 합니다.

18. 전체 상태 Coverage

Round 3~8 artifact와 Round 9 public·403 상태를 통합하십시오.

필수:

artifacts/redo/r09/full-state-coverage.json

허용 상태:

implemented

not_applicable

필수 조건:

invalid status 0

missing evidence 0

directory evidence 0

generic browser assertion 0

deferred 0

missing 0

실제 파일 evidence

실제 test title 연결

UI-072 구현 상태 포함

19. 전체 접근성 감사

artifact:

artifacts/redo/r09/accessibility-audit.json

독립 시나리오:

Shell/navigation

sidebar

drawer

bottom tabs

notifications

workspace selector

403

cards/lists

forms

progress/status

modal/sheet

tables

mobile

reduced motion

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

하드코딩된 결과 금지.

20. 반응형 통합 감사

뷰포트:

1440×1000

1280×900

1024×1366

768×1024

390×844

360×800

인증 화면:

Admin 5

Client 3

Worker 2

총 60개 기본 case.

추가:

Public 18개

UI-072 403 D/T/M 최소 3개

검사:

Shell geometry

sidebar

topbar

main origin

mobile header

bottom tabs

drawer

Section 순서

grid collapse

list/detail

modal

form

table

safe area

long Korean text

horizontal overflow

artifact:

artifacts/redo/r09/responsive-layout-audit.json

필수:

Authenticated 60/60

Public 18/18

UI-072 D/T/M 3/3

shell delta 0

main origin delta 0

page overflow 0

Section 순서 변경 0

21. CSS·Token 통합 감사

대상:

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

conflicting token

raw color

remote font

!important

generic selector

public selector

role leakage

Shell override

specificity escalation

dead selector

stylesheet link

stylesheet order

기준:

unresolved 0

신규 raw color 0

신규 !important 0

remote font 0

role leakage 0

public leakage 0

font 변경 금지:

SUIT 추가 금지

Pretendard 제거 금지

DM Sans 순서 변경 금지

외부 font import 금지

22. 제품 Diff 통합 감사

필수:

artifacts/redo/r09/product-diff-audit.json

분류:

Token

Primitive

Shell

Admin

Client

Worker

Shared/UI-072

Test-only

Artifact

Evidence

Docs

검사:

승인된 Round에 속하는 변경인지

범위 밖 제품 파일

UI-065~071 public 변경

UI-072 최소 correction 외 shared/public 변경

API/backend 변경

데이터 변경

직접 lifecycle status 대입

duplicate renderer

mock application

React/Next/Radix/Recharts

remote font

production config

dependency 변경

결과:

approved product files

unexpected product files

forbidden files

unexplained changes

pass

23. Validator 무결성 감사

필수:

artifacts/redo/r09/validator-integrity-audit.json

Round 1~8 validator 검사:

assertion 삭제

기대값 완화

descendant 허용 정당성

후속 stylesheet 격리

self-generated PASS artifact

hardcoded pass:true

count() >= 0

필수 key 누락

evidence directory

generic browserAssertion

N/A reason

browser 결과와 validator 결과 일치

Round 3·4·6 후속 계층 격리는 다음 조건에서만 허용합니다.

승인 당시 계약을 그대로 재현

후속 stylesheet만 비활성화

assertion 수 유지

기대값 유지

product parity 유지

API/backend/Shell 금지 유지

24. Browser Health

필수:

artifacts/redo/r09/browser-health-audit.json

수집:

console error

pageerror

requestfailed

HTTP 4xx/5xx

unhandled rejection

dialog leak

MutationObserver loop

duplicate listener

inaccessible focus

horizontal overflow

필수:

console error 0

pageerror 0

request failure 0

신규 HTTP failure 0

unhandled rejection 0

observer loop 0

duplicate action 0

overflow 0

QA용 차단 API는 별도 isolated case로 구분하십시오.

25. UI Lab 통합 검증

필수:

artifacts/redo/r09/ui-lab-audit.json

검사:

dev-only

공식 메뉴 미노출

공식 screen ID 불변

API 0

운영 localStorage mutation 0

Token specimens

Primitive specimens

Shell states

Admin states

Client states

Worker states

Derived/code-only states

UI-072 403 specimen이 기존에 없다면 운영 route를 새로 만들지 말고 실제 403 화면 evidence를 사용

keyboard

focus

responsive

reduced motion

26. Round 9 제품 변경 제한

기본적으로 제품 변경은 없어야 합니다.

특히 다음 파일을 추가하지 마십시오.

app/styles/dashboard-salesops.public.css
app/ui/components/public.ui.js

UI-065~071 제품 변경은 금지입니다.

UI-072는 기존 403 화면의 명백한 결함이 확인된 경우에만 최소 수정할 수 있습니다.

제품 수정 시 문서화:

재현된 결함

영향 Inventory

기존 Matrix 요구

최소 수정

문구·데이터·route·guard 비변경

Round 8 baseline diff

회귀 결과

27. 자동 검증

경로:

tests/redo/r09/

권장:

integration-audit.spec.cjs

public-regression.spec.cjs

role-isolation.spec.cjs

ui-072-403.spec.cjs

validator-integrity.spec.cjs

validate.cjs

playwright.config.cjs

static-server.cjs

package.json

구조:

Browser test가 artifact 생성

Static validator가 artifact를 읽음

schema·Matrix·evidence·parity를 독립 검증

불일치 시 exit 1

금지:

validator가 무조건 PASS artifact 생성

Matrix 하드코딩 왜곡

UI-072를 false로 기록

assertion 없이 PASS

screenshot만으로 PASS

evidence directory

generic assertion

28. 필수 Artifact
artifacts/redo/r09/git-prestate.json
artifacts/redo/r09/inventory-scope.json
artifacts/redo/r09/full-inventory-audit.json
artifacts/redo/r09/ui-072-implementation-audit.json
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

verification-summary.json 필수:

JSON
{
  "inventory73Pass": true,
  "round9InventoryCount": 8,
  "round9FrozenInventoryCount": 7,
  "round9ImplementationTargetCount": 1,
  "ui072MatrixValuePreserved": true,
  "ui072ExistingImplementationPass": true,
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
29. 필수 문서
docs/redo/r09/README.md
docs/redo/r09/inventory-scope.md
docs/redo/r09/full-inventory-review.md
docs/redo/r09/ui-072-implementation-review.md
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
30. Evidence 구조
evidence/redo/r09/frozen-public/
evidence/redo/r09/public-states/
evidence/redo/r09/admin/
evidence/redo/r09/client/
evidence/redo/r09/worker/
evidence/redo/r09/shared/
evidence/redo/r09/ui-lab/

파일명에 다음을 포함하십시오.

role

screen

state

viewport

resolution

31. 테스트 실행

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

Production DB·API mutation test는 실행하지 마십시오.

audit finding은 숨기지 말되 강제 fix하지 마십시오.

32. 완료 조건

 Round 8 승인 HEAD에서 분기

 UI-065~072 정확히 8개

 UI-065~071 implementationTarget false

 UI-065~071 Frozen regression only

 UI-072 implementationTarget true

 UI-072 Mapped for implementation

 UI-072 Matrix preserveLayout 원문 유지

 Matrix 변경 0

 UI-072 기존 403 screen 확인

 UI-072 기존 renderer 확인

 route guard 연결 확인

 attempted route 유지

 current role 유지

 multi-role hint 유지

 workspace selector 이동 유지

 UI-072 D/T/M 검증

 UI-072 접근성 검증

 UI-072 제품 수정이 없다면 existing implementation verified

 제품 수정이 있다면 최소 correction만 수행

 UI-065~071 제품 변경 0

 public stylesheet 추가 0

 전체 Inventory 73/73

 중복 0

 누락 0

 Round 배정 오류 0

 Public 18개 회귀 통과

 Public 상태·상호작용 통과

 Admin 회귀 통과

 Client 회귀 통과

 Worker 회귀 통과

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

 missing evidence 0

 generic assertion 0

 deferred 0

 missing 0

 접근성 통과

 인증 화면 60 case 통과

 Public 18 case 통과

 UI-072 3 viewport 통과

 360px overflow 0

 unresolved token 0

 신규 raw color 0

 신규 !important 0

 remote font 0

 duplicate renderer 0

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

 Round 10 선행 작업 없음

 branch push 완료

 핵심 증거 GitHub 검수 가능

하나라도 충족하지 못하면 완료로 보고하지 마십시오.

33. Git 규칙

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

test(redo-r09): verify frozen public and existing 403 implementation

test(redo-r09): validate responsive and contract parity

docs(redo-r09): publish integration verification evidence

UI-072 제품 수정이 없다면 feat 커밋을 만들지 마십시오.

34. 제출 형식

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

B. Matrix 충돌 정정 준수

UI-065~071 implementationTarget

UI-072 implementationTarget

UI-072 completionStatus

UI-072 preserveLayout

Matrix 변경 여부

PASS/FAIL

C. Round 9 Inventory

UI-065~072 각각:

route

component

classification

implementationTarget

completionStatus

처리 유형

D/T/M

interaction

evidence

판정

D. UI-072 기존 구현 감사

screen

renderer

route guard

attempted route

current role

multi-role hint

selector CTA

keyboard

focus

D/T/M

제품 correction 여부

evidence

PASS/FAIL

E. 전체 Inventory

총수

unique

Round별 수

Frozen 7

implementation target 1

누락

중복

evidence 누락

PASS/FAIL

F. 공개 동결

Landing

FAQ

Inquiry

Auth

Terms

Privacy

Support

Workspace selector

D/T/M

DOM/style/box

PASS/FAIL

G. 역할 격리

Admin

Client

Worker

Shared

403

CSS class leak

token leak

route guard

session

PASS/FAIL

H. 데이터·기능 Parity

공통

Admin

Client

Worker

Public

UI-072

API

backend

lifecycle

storage

PASS/FAIL

I. 상태 Coverage

implemented

N/A

invalid

deferred

missing

missing evidence

generic assertion

PASS/FAIL

J. 접근성

Shell

navigation

cards

forms

progress

modal

table

workspace selector

403

mobile

reduced motion

PASS/FAIL

K. 반응형

인증 60개

Public 18개

UI-072 3개

Shell delta

overflow

long content

PASS/FAIL

L. CSS·Token

unresolved

raw color

!important

remote font

role leak

public leak

stylesheet order

PASS/FAIL

M. 제품 Diff

승인 제품 파일

UI-072 correction 파일

예상 밖 제품 파일

UI-065~071 public 변경

data/API/backend

direct status assignment

dependency

PASS/FAIL

N. Validator 무결성

기대값 완화

stylesheet 격리

hardcoded pass

invalid assertion

evidence 검증

PASS/FAIL

O. Browser Health

console

pageerror

request failure

HTTP

unhandled rejection

observer loop

duplicate action

overflow

PASS/FAIL

P. UI Lab

dev-only

공식 메뉴

API

storage

specimens

keyboard

responsive

PASS/FAIL

Q. 테스트 결과

각 command:

exit code

PASS/FAIL/SKIPPED

warning

artifact

R. 변경 파일

Product

Test

Artifact

Evidence

Docs

기존 validator 변경과 이유

S. 범위 준수

Yes/No:

Matrix 변경

UI-065~071 제품 변경

UI-072 제품 변경

Admin 제품 변경

Client 제품 변경

Worker 제품 변경

데이터 변경

문구 변경

route 변경

role guard 변경

lifecycle 변경

API 변경

backend 변경

font 변경

dependency 추가

Shell 변경

main 변경

Production 배포

Round 10 선행 작업

정상적으로 기존 403 구현만 검증했다면 모두 No입니다.

UI-072 최소 correction이 있었다면 UI-072 제품 변경만 Yes로 표시하고 상세 근거를 작성하십시오.

T. 미해결 위험

실제 남은 위험만 기록하십시오.

U. Round 9 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 9 REVIEW

NOT READY — ROUND 9 INCOMPLETE


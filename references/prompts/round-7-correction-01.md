# Round 7 Correction Prompt 01

- ChatGPT conversation URL: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
- Received at: 2026-07-21T14:58:11.107Z
- Round Marker: [ROUND 7 CORRECTION PROMPT]

## Complete response

[ROUND 7 CORRECTION PROMPT]

Round 7은 현재 미완료입니다.

원격 GitHub의 실제 코드·validator·artifact를 대조한 결과, 제품의 기본 시각 이식은 존재하지만 Inventory 매핑 정확성, 상태 증거의 기계 판독성, UI-029 Dialog 접근성, UI-032 의사결정 제어 검증이 승인 기준을 충족하지 못했습니다.

현재 브랜치에서 아래 항목만 보완하십시오.

1. 작업 기준

저장소:

https://github.com/magus81818-bit/ordospace-ui-rebuild

브랜치:

redo/r07-client-dashboard

현재 제출 HEAD:

8835c0fa1cce01ffb80627b7f45ebfe9d99156d7

보완 작업은 위 HEAD 이후의 추가 커밋으로 진행하십시오.

새 브랜치를 만들지 마십시오.

금지

Round 8 선행 구현

Worker 화면 이식

Admin 화면 수정

Shell 재설계

Client 데이터·문구·라우트 변경

lifecycle 전이 변경

API·backend 변경

기존 검증 삭제 또는 기대값 완화

main 변경

Production 배포

force push

2. Round 2 Inventory 매핑 오류 수정

현재 tests/redo/r07/validate.cjs의 하드코딩된 SalesOps ID 중 일부가 승인된 Round 2 migration matrix와 일치하지 않습니다.

최소 다음을 수정하십시오.

Inventory	현재 잘못 기록된 값	Round 2 승인 값
UI-022	SO-CHART-001	SO-PROGRESS-001
UI-025	SO-CARD-002	SO-HEADER-001
UI-028	SO-TABLE-001	SO-CARD-001
UI-030	SO-LIST-001	SO-CARD-001
UI-031	SO-DETAIL-001	SO-CARD-001
UI-032	SO-ACTION-001	SO-INPUT-001

UI-021~UI-032 전체를 다음 파일에서 다시 읽어 자동 대조하십시오.

artifacts/redo/r02/component-migration-matrix.json

금지:

Round 7 validator에 별도의 추측 기반 매핑 유지

존재하지 않거나 Round 2에서 승인되지 않은 SalesOps ID 사용

현재 보고서의 이름을 근거로 matrix를 역수정

수정 대상

tests/redo/r07/validate.cjs

artifacts/redo/r07/inventory-scope.json

artifacts/redo/r07/client-component-catalog.json

docs/redo/r07/inventory-scope.md

docs/redo/r07/derived-component-decisions.md

docs/redo/r07/implementation-report.md

validator 필수 동작

Round 7 Inventory는 하드코딩한 SalesOps ID를 신뢰하지 말고 Round 2 matrix에서 다음을 직접 검증하십시오.

Inventory ID

implementationRound === "Round 7"

ORDOSPACE component

SalesOps ID

SalesOps component

classification

uncertainty

ZIP evidence

preserveFunction

accessibilityRequirements

기대값과 matrix가 다르면 validator가 실패해야 합니다.

3. client-state-coverage.json 전면 수정

현재 artifact는 모든 상태에 다음과 같은 모호한 값을 반복합니다.

implemented or N/A with existing-function rationale

이는 허용된 상태 값이 아닙니다.

또한 evidence가 실제 파일이 아니라 다음 디렉터리 문자열로 반복 기록되어 있습니다.

evidence/redo/r07/client/

현재 artifact는 어떤 상태가 실제 구현되었고 어떤 상태가 N/A인지 판별할 수 없습니다.

허용 상태 값

각 Inventory·상태는 정확히 다음 중 하나만 사용하십시오.

implemented

not_applicable

not_applicable 필수 필드
JSON
{
  "status": "not_applicable",
  "reason": "해당 컴포넌트의 운영 기능에는 이 상태가 존재하지 않음"
}

다음은 허용하지 않습니다.

implemented or N/A

preserved

covered

pass

근거 없는 N/A

디렉터리만 가리키는 evidence

implemented 필수 필드
JSON
{
  "status": "implemented",
  "evidence": [
    "evidence/redo/r07/client/states/실제파일.png"
  ],
  "browserAssertion": "tests/redo/r07/client-audit.spec.cjs::<검사명>"
}

각 evidence 경로는 실제 존재하는 파일이어야 합니다.

필수 요약

artifact 최상위에 다음을 포함하십시오.

JSON
{
  "implementedCount": 0,
  "notApplicableCount": 0,
  "deferred": 0,
  "missing": 0,
  "invalidStatusCount": 0,
  "missingEvidenceCount": 0,
  "pass": true
}

완료 조건:

deferred === 0

missing === 0

invalidStatusCount === 0

missingEvidenceCount === 0

4. 현재 누락된 상태 Evidence 보강

현재 원격 diff에서 확인되는 Client state screenshot은 실질적으로 다음 4개뿐입니다.

Dashboard progress states

Project filter no-result

Project modal open

Approvals selected controls

Round 7 prompt에서 요구한 상태를 충족하기에 부족합니다.

운영 fixture를 변경하지 않는 QA-only 또는 page-local fixture를 사용하여 아래 상태를 추가 검증하십시오.

Client Dashboard

최소:

KPI zero 또는 warning

Approval-card grid empty

Long content

Mobile state

필수 evidence 예:

evidence/redo/r07/client/states/client-dashboard-kpi-zero-warning-desktop-1440x1000.png
evidence/redo/r07/client/states/client-dashboard-approval-empty-desktop-1440x1000.png
evidence/redo/r07/client/states/client-dashboard-long-mobile-390x844.png
Client Project

최소:

Asset populated

Asset empty

Long filename

Timeline/gate long content

Gate pass/fail

Modal open Mobile

Modal validation 또는 approval error

Modal closed 후 focus return

필수 evidence 예:

evidence/redo/r07/client/states/client-project-assets-empty-desktop-1440x1000.png
evidence/redo/r07/client/states/client-project-assets-long-filename-mobile-390x844.png
evidence/redo/r07/client/states/client-project-gate-pass-fail-desktop-1440x1000.png
evidence/redo/r07/client/states/client-project-timeline-long-mobile-390x844.png
evidence/redo/r07/client/states/client-project-modal-open-mobile-390x844.png
evidence/redo/r07/client/states/client-project-modal-error-desktop-1440x1000.png
evidence/redo/r07/client/states/client-project-modal-focus-return-desktop-1440x1000.png
Client Approvals

최소:

Queue empty

No selection

Long detail

Decision disabled

Validation error

Confirm 상태

Error 상태

Mobile 상태

필수 evidence 예:

evidence/redo/r07/client/states/client-approvals-queue-empty-desktop-1440x1000.png
evidence/redo/r07/client/states/client-approvals-no-selection-desktop-1440x1000.png
evidence/redo/r07/client/states/client-approvals-long-detail-mobile-390x844.png
evidence/redo/r07/client/states/client-approvals-decision-disabled-desktop-1440x1000.png
evidence/redo/r07/client/states/client-approvals-validation-error-desktop-1440x1000.png
evidence/redo/r07/client/states/client-approvals-confirm-desktop-1440x1000.png

실제 제품 계약에 success/error/confirm UI가 존재하지 않으면 not_applicable로 기록하되, 왜 존재하지 않는지 lifecycle·현재 renderer 근거를 명시하십시오.

5. UI-029 Dialog 실제 접근성 검증

현재 Playwright는 modal open과 최초 focus만 확인합니다.

Escape 입력 후 다음을 확인하지 않습니다.

modal이 실제 닫혔는지

aria-hidden이 true로 돌아왔는지

focus가 trigger로 복귀했는지

body scroll이 복구됐는지

background focus가 차단됐는지

focus containment가 작동하는지

또한 accessibility artifact는 실측 결과가 아니라 true 값을 직접 기록합니다.

필수 브라우저 assertions
Open

Trigger focus

Trigger click

#cardDetailModal visible

aria-hidden="false"

dialog role="dialog"

aria-modal="true"

accessible name 존재

첫 유효 control 또는 dialog container focus

background scroll lock

Focus containment

modal 내부 첫 focusable

Shift+Tab 시 마지막 focusable

마지막 focusable에서 Tab 시 첫 focusable

focus가 modal 외부로 탈출하지 않음

Escape

Escape 입력 후 반드시 assertion:

modal hidden

aria-hidden="true"

dialog 비노출

trigger가 focused

scroll lock 제거

Backdrop와 Close button

각각 별도로:

modal 닫힘

trigger focus return

중복 listener로 두 번 닫히지 않음

Mobile

390×844에서:

modal bounds가 viewport 내부

page horizontal overflow 0

내부 vertical scroll

close control 접근 가능

focus containment

Escape

focus return

구현 주의

현재 기존 modal controller가 Escape·close를 담당한다면 새 controller를 중복 binding하지 마십시오.

client.ui.js는 semantic/focus 보강만 수행하고 기존 lifecycle·action listener를 대체하지 마십시오.

6. 잘못된 Playwright assertion 수정

현재 다음 검사는 항상 통과합니다.

JavaScript
await page.locator('[role="progressbar"]').count() >= 0

count는 음수가 될 수 없으므로 progressbar가 0개여도 PASS입니다.

다음처럼 실제 조건을 검사하십시오.

progressbar count가 기대 개수 이상

각 progressbar accessible name 존재

aria-valuemin

aria-valuemax

aria-valuenow

값 범위 유효

시각적 width와 의미 값 일치

현재 다음 결과들도 실제 검증 없이 직접 true로 artifact에 기록됩니다.

tabs: true

filters: true

dialogFocus: true

escape: true

returnFocus: true

queueKeyboard: true

selectionState: true

detailLive: true

모두 실제 DOM·keyboard assertion 결과에서 계산하십시오.

금지:

assertion 없이 pass: true

테스트가 도달했다는 이유로 기능 PASS

screenshot 생성만으로 keyboard/accessibility PASS

count() >= 0

존재 여부만 확인하고 상태 전이를 확인하지 않음

7. UI-032 Decision Controls 검증 보강

현재 Approvals 검증은 selected item에서 Enter를 누르고 screenshot을 찍는 수준입니다.

다음 실제 계약을 검증하십시오.

Disabled

필요한 comment/reason이 없을 때 실제 disabled 조건

disabled 또는 정확한 aria-disabled

Tab order 정책

click 차단

Enter/Space 차단

lifecycle 호출 0회

Validation error

빈 값 또는 잘못된 값 제출

aria-invalid

error message 연결

aria-describedby

focus가 invalid control로 이동

lifecycle 호출 0회

Confirm

기존 confirm 단계가 존재하면:

action 클릭

confirm UI 표시

취소 시 상태 변화 없음

확인 시 기존 service가 정확히 1회 호출

중복 클릭 차단

기존 confirm UI가 없으면 새 제품 기능을 만들지 말고 not_applicable로 기록하십시오.

Approve / Revision parity

실제 상태 전이를 수행하지 않는 안전한 spy 또는 isolated fixture를 사용하여 다음을 검증하십시오.

approve가 기존 lifecycle service를 호출

revision이 기존 lifecycle service를 호출

올바른 card ID

올바른 transition

호출 횟수 1회

직접 card.status = ... 사용 없음

API endpoint 변경 없음

운영 localStorage mutation 없음

8. Client 상태 fixture의 비파괴성

QA state는 운영 fixture를 직접 수정하지 마십시오.

허용:

page-local 복제 배열

test-only dependency injection

순수 renderer input

UI Lab fixture

테스트 종료 후 복원되는 in-memory override

금지:

workspace.data.js fixture 수정

운영 localStorage 수정

상태 transition을 실제 저장

API 요청

backend 변경

default 화면을 empty/error로 변경

artifact:

artifacts/redo/r07/qa-fixture-isolation.json

필수:

fixture별 source

operating fixture mutation 여부

localStorage mutation 여부

API call 여부

restore 수행 여부

PASS/FAIL

9. Artifact 보강

다음을 실제 브라우저 결과로 갱신하십시오.

client-interaction-audit.json

각 검사에 최소:

JSON
{
  "inventoryId": "UI-029",
  "state": "dialog-escape-focus-return",
  "viewport": "1440x1000",
  "assertions": {
    "opened": true,
    "ariaHiddenFalse": true,
    "focusEntered": true,
    "focusContained": true,
    "escapeClosed": true,
    "ariaHiddenTrue": true,
    "focusReturned": true,
    "scrollRestored": true
  },
  "evidence": ["..."],
  "pass": true
}
accessibility-audit.json

하드코딩된 요약이 아니라 검사별 실측 값을 기록하십시오.

최소:

progress name/value

current step

filter pressed

tab selected/controls

queue keyboard

selected state

dialog accessible name

focus entry

focus containment

Escape

focus return

decision disabled

validation association

reduced motion

verification-summary.json

추가:

matrixMappingPass

stateStatusesValid

stateEvidenceComplete

modalContractPass

decisionControlsPass

qaFixtureIsolationPass

invalidAssertionsFound

hardcodedAccessibilityPassCount

pass

정상 완료 시:

invalidAssertionsFound: 0

hardcodedAccessibilityPassCount: 0

10. Validator 보강

tests/redo/r07/validate.cjs는 현재 상태 artifact를 스스로 생성하면서 모든 상태를 모호한 문자열로 PASS 처리합니다.

이를 수정하십시오.

필수 검증

상태 값이 implemented 또는 not_applicable인지

N/A reason 존재

implemented evidence가 실제 파일인지

evidence가 디렉터리가 아닌 파일인지

browser assertion 이름 존재

12개 Inventory 각각 D/T/M 근거

deferred 0

missing 0

invalid status 0

missing evidence 0

Round 2 matrix와 SalesOps ID 일치

state screenshot 최소 요구 집합 존재

UI-029 Desktop/Mobile modal evidence 존재

UI-032 disabled/validation evidence 존재

accessibility artifact가 실측 assertion을 포함

count >= 0 패턴 없음

accessibility 결과 직접 true 삽입 패턴 없음

Validator 독립성

validator가 검증 대상 artifact를 무조건 새로 만들어 PASS시키는 구조를 제거하십시오.

권장:

Browser 테스트가 artifact 생성

Validator가 artifact를 읽음

Validator가 schema·값·evidence를 독립 검증

불일치 시 exit 1

11. 문서 보강

현재 다수 Round 7 문서가 3줄 수준으로 생성되어 있어 요구된 의사결정과 검증 내용을 담지 못합니다.

최소 다음 문서를 실질적으로 갱신하십시오.

docs/redo/r07/inventory-scope.md

docs/redo/r07/client-architecture.md

docs/redo/r07/client-dashboard-implementation.md

docs/redo/r07/client-project-implementation.md

docs/redo/r07/client-approvals-implementation.md

docs/redo/r07/derived-component-decisions.md

docs/redo/r07/accessibility-review.md

docs/redo/r07/verification-results.md

docs/redo/r07/change-manifest.md

docs/redo/r07/implementation-report.md

추가:

docs/redo/r07/correction-report.md

내용:

발견된 matrix 오류

수정된 12개 mapping

모호한 상태 artifact 제거

추가한 state fixture

UI-029 Dialog 실제 assertion

UI-032 실제 assertion

invalid Playwright assertion 수정

QA fixture 비파괴 증명

재실행 결과

남은 위험

12. 공개·비Client 회귀 유지

보완 후에도 다음 검증을 재실행하십시오.

Admin

5개 Desktop

Admin Home Tablet/Mobile

Worker

#worker-home

#worker-cards

#profile

Worker Home Tablet/Mobile

Public

6개 × D/T/M = 18개:

landing

auth

terms

privacy

support

select-workspace

검사:

Client class leak 0

Client token leak 0

DOM parity

computed-style parity

bounding-box parity

body.auth-on false

overflow 0

console error 0

pageerror 0

기존 evidence를 단순 재인용하지 말고 보정 HEAD에서 다시 실행하십시오.

13. 테스트 재실행

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

모든 명령 결과를 다음에 기록하십시오.

artifacts/redo/r07/test-results.json

artifacts/redo/r07/verification-summary.json

docs/redo/r07/verification-results.md

14. 제품 변경 제한

가급적 테스트·artifact·evidence·문서 보강으로 해결하십시오.

제품 파일 변경은 다음 경우만 허용합니다.

UI-029 접근성 계약의 실제 결함 수정

UI-032 disabled/validation semantic의 실제 결함 수정

long content/overflow의 실제 결함 수정

additive ARIA·class 보강

제품 파일 변경 시 반드시 기록:

기존 기능

결함

최소 변경

데이터 비변경

lifecycle 비변경

API 비변경

회귀 결과

15. 완료 조건

다음을 전부 충족해야 합니다.

 Round 2 matrix와 UI-021~032 SalesOps ID 완전 일치

 잘못된 6개 SalesOps ID 수정

 상태 값이 implemented/not_applicable만 사용

 모든 N/A에 구체적 reason 존재

 모든 implemented 상태에 실제 evidence 파일 존재

 evidence 디렉터리 문자열 사용 0

 deferred 0

 missing 0

 invalid status 0

 missing evidence 0

 Dashboard zero/warn·empty·long 상태 검증

 Project asset empty·long filename 검증

 Project gate pass/fail·long 검증

 UI-029 Desktop modal open/close 검증

 UI-029 Mobile modal 검증

 UI-029 focus containment 검증

 UI-029 Escape 후 실제 닫힘 assertion

 UI-029 focus return assertion

 UI-029 backdrop close assertion

 UI-032 disabled click/keyboard 차단

 UI-032 validation error association

 UI-032 lifecycle 호출 parity

 count() >= 0 assertion 제거

 accessibility hardcoded true 결과 제거

 QA fixture 운영 데이터 비변경

 API call 0

 운영 localStorage mutation 0

 Client 데이터·문구·기능 유지

 Admin·Worker 회귀 0

 공개 18개 회귀 통과

 console error 0

 pageerror 0

 failed request 0

 360px overflow 0

 Round 1~6 검증 통과

 수정된 Round 7 검증 통과

 Round 8 선행 구현 없음

 main 변경 없음

 Production 배포 없음

 branch push 완료

 모든 evidence가 GitHub에서 검수 가능

하나라도 충족하지 못하면 READY FOR ROUND 7 REVIEW로 보고하지 마십시오.

16. 제출 형식

완료 후 반드시 다음 Marker로 시작하십시오.

[ROUND 7 CORRECTION REPORT]

보고 순서:

A. 작업 식별

Branch

이전 HEAD

수정 HEAD

추가 commit

merge-base

작업트리 상태

B. Matrix 매핑 수정

UI-021~032 각각:

Inventory

Round 2 SalesOps ID

이전 값

수정 값

classification

PASS/FAIL

C. 상태 Artifact 수정

허용 status schema

implemented 수

N/A 수

invalid status

missing evidence

디렉터리 evidence 수

deferred

missing

D. 추가 상태 Evidence

Dashboard

Project

Approvals

각 상태:

재현 방식

Desktop/Mobile

browser assertion

screenshot

PASS/FAIL

E. UI-029 Dialog

open

accessible name

focus entry

containment

Escape

closed

focus return

backdrop

scroll lock

Mobile

evidence

F. UI-032 Decision Controls

disabled

click 차단

keyboard 차단

validation

error association

confirm

approve/revision service 호출

중복 호출 차단

evidence

G. 잘못된 테스트 수정

count >= 0

hardcoded true

assertion 없는 PASS

수정 전/후

신규 실패 방지 방식

H. QA Fixture 격리

fixture source

운영 data mutation

localStorage mutation

API call

restore

PASS/FAIL

I. 데이터·기능 parity

route

menu

text

KPI

progress

project

ModuleCard

assets

approvals

lifecycle

localStorage

API

guard

session

J. 회귀

Admin

Worker

Public 18

console

pageerror

failed request

overflow

K. 테스트 결과

각 명령:

command

exit code

PASS/FAIL

artifact

L. 변경 파일

Product

Test

Artifact

Evidence

Docs

변경 이유

M. 범위 준수

Yes/No:

Client 운영 데이터 변경

Client 문구 변경

lifecycle 의미 변경

API 변경

backend 변경

Admin 변경

Worker 선행 구현

Round 8 선행 구현

Shell 변경

공개 화면 변경

main 변경

Production 배포

정상 답변은 모두 No입니다.

N. 남은 위험

실제 남은 위험만 기록하십시오.

O. 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 7 REVIEW

NOT READY — ROUND 7 INCOMPLETE

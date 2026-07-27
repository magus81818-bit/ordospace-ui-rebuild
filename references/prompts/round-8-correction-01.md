# Round 8 correction prompt 01

- ChatGPT conversation: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
- Received at: 2026-07-27T13:49:13.1179202+09:00
- Round marker: `[ROUND 8 CORRECTION PROMPT]`

## Verbatim prompt

[ROUND 8 CORRECTION PROMPT]

Round 8은 현재 미완료입니다.

원격 HEAD 1848b86c98522b48832a6c7fcdbd4a1279931352의 제품 코드, Playwright 검사, validator 및 artifact를 대조한 결과, 기본 Worker 시각 이식과 증거 파일은 존재하지만 UI-040·041·042의 핵심 계약 상당수가 실제 assertion 없이 true로 기록되어 있습니다.

특히 다음 문제가 확인되었습니다.

UI-040:

labelAssociation, groupAccessibleName, submitBlocker, restoredByNavigation을 실제 검증하지 않고 true로 기록

label click 동작 미검증

submit blocker와 QC 상태의 연동 미검증

실제 QC 복원 여부 미검증

UI-041:

invalidHours, emptyText, errorAssociated, duplicateBlocked 일부를 실제 분리 시나리오로 검증하지 않고 true로 기록

현재 테스트는 빈 hours 상태만 실질적으로 검사

invalid hours와 empty text를 독립적으로 재현하지 않음

UI-042:

disabled 상태에서 lifecycle 호출 0회를 측정하지 않고 clickBlocked, enterBlocked, spaceBlocked를 true로 기록

enabled 상태의 accessible name을 실측하지 않음

submitting 중 실제 disabled 여부와 loading indicator를 확인하지 않음

service spy가 실제 제품 handler와 동일한 호출 경로를 통과하는지 증명이 부족

Validator:

allTrue()가 문자열과 숫자를 제외하고 boolean만 검사하므로, 계약 필드 누락이나 문자열 대체를 놓칠 수 있음

필요한 assertion key의 정확한 schema를 강제하지 않음

QA 격리:

각 fixture의 restore:true가 실제 복원 검사 결과가 아니라 선언값

상태 artifact:

browserAssertion이 구체적인 검사명이 아니라 파일 경로만 가리킴

회귀:

제품 파일 worker-workspace.screen.js에 98줄 규모 변경이 있으므로 기능 변경이 additive class·ARIA 수준인지 더 엄격한 diff/parity 검사가 필요함

현재 브랜치에서 아래 항목만 보완하십시오.

1. 작업 기준

저장소:

https://github.com/magus81818-bit/ordospace-ui-rebuild

브랜치:

redo/r08-worker-dashboard

현재 제출 HEAD:

1848b86c98522b48832a6c7fcdbd4a1279931352

위 HEAD 이후 추가 커밋으로 수정하십시오.

새 브랜치를 만들지 마십시오.

금지

Round 9 선행 구현

Admin·Client 추가 구현

Profile 전체 이식

Shell 변경

Worker 운영 데이터 변경

lifecycle 의미 변경

API·backend 변경

검증 expectation 완화

assertion 없는 pass:true

main 변경

Production 배포

force push

2. UI-040 QC Checklist 실제 계약 검증

현재 다음 값은 실제 assertion 없이 결과에 기록됩니다.

labelAssociation

groupAccessibleName

submitBlocker

restoredByNavigation

모두 실제 브라우저 측정으로 교체하십시오.

2.1 초기 상태

검증:

QC item 정확히 3개

각 item의 기존 label 유지

각 checkbox의 name, value, index 유지

초기 값 [true, false, false]

group accessible name 존재

helper/blocked reason과 group 연결

review button disabled

lifecycle 호출 0회

2.2 Keyboard Space

실제 순서:

두 번째 unchecked checkbox focus

Space 입력

checkbox checked

updateQc 정확히 1회

card ID mc-005

index 정확성

passed === true

2.3 Label click

별도의 초기 상태에서:

세 번째 checkbox와 연결된 label 확인

label 클릭

checkbox 상태 변경

updateQc 정확히 1회

올바른 index와 값

다른 checkbox 상태 불변

Keyboard 검사와 label click 검사를 같은 누적 spy에서 섞지 마십시오.

2.4 Blocked·Disabled

검증:

실제 disabled checkbox는 Tab order에서 제외

click으로 변경 불가

Space로 변경 불가

lifecycle 호출 0회

blocked reason 표시

색상 외 텍스트 상태 존재

2.5 Submit blocker 연동

초기·부분 완료·전체 완료를 각각 검사하십시오.

초기 [true,false,false] → review disabled

부분 완료 → review disabled

전체 완료 → review enabled

다시 한 항목 해제 → review disabled

disabled reason 문구가 상태에 맞게 변경

직접 status 변경 없음

API call 0

localStorage mutation 0

2.6 실제 복원

QA override 전후를 비교하십시오.

최소 snapshot:

QC values

checkbox disabled

button disabled

reason text

selected card

localStorage

다음 중 하나로 복원하십시오.

새 navigation 후 원본 renderer 재실행

명시적 restore function

복원 후 원본 snapshot과 deep equality를 assertion하십시오.

restore:true를 직접 기록하지 말고 측정 결과를 기록하십시오.

3. UI-041 Work Log Controls 실제 계약 검증

각 validation을 독립적인 초기 상태에서 검증하십시오.

3.1 Empty hours

hours 비어 있음

text 유효

submit

hours aria-invalid=true

hours와 error message 연결

focus가 hours로 이동

addWorkLog 호출 0회

3.2 Invalid hours

최소 다음 중 제품 constraint에 맞는 값을 사용하십시오.

음수

0

max 초과

step 불일치

숫자가 아닌 값

검증:

browser validity 또는 제품 validator 실패

hours aria-invalid=true

정확한 오류 문구

focus hours

호출 0회

3.3 Empty text

hours 유효

text 비어 있음

submit

text aria-invalid=true

error association

focus text

호출 0회

3.4 Valid append

hours 유효

text 유효

submit

addWorkLog 정확히 1회

card ID 정확

worker ID 정확

text 또는 payload 정확

success feedback 표시

invalid 상태 제거

3.5 Duplicate submit

비동기 pending spy를 사용하십시오.

첫 submit

promise 미해결 상태

button disabled 또는 aria-disabled=true

aria-busy=true

loading indicator 또는 submitting text

click 재시도

Enter 재시도

Space 재시도

호출 수 1회 유지

resolve 후 busy 해제

현재처럼 동기 함수가 즉시 반환되는 상태에서 button.click() 두 번 호출하고 중복 차단이라고 판정하지 마십시오.

3.6 Error 계약

기존 제품에 error branch가 실제 존재하는지 source를 확인하십시오.

존재한다면:

service reject/throw

error feedback

busy 해제

retry 가능

log 추가 없음

focus 정책

존재하지 않는다면:

JSON
{
  "status": "not_applicable",
  "reason": "현재 운영 addWorkLog handler에는 비동기 실패 UI 계약이 존재하지 않음"
}

문자열을 assertions 객체 안에 넣지 마십시오.

4. UI-042 Submit-to-review 실제 계약 검증
4.1 Disabled 상태

spy를 설치한 뒤 disabled 상태를 검사하십시오.

검증:

button disabled === true

정확한 disabled reason

click

Enter

Space

submitWorkerReview 호출 0회

API call 0

localStorage mutation 0

card status 불변

현재처럼 호출 수를 측정하지 않고 차단되었다고 기록하지 마십시오.

4.2 Enabled 상태

기존 QC 완료 조건을 통해 enabled 상태를 만드십시오.

가능하면 단순히 다음처럼 강제하지 마십시오.

JavaScript
button.disabled = false

대신 기존 renderer·decorator·상태 계산을 통과하십시오.

부득이한 isolated fixture라면 실제 제품의 enable 계산 함수를 호출하고 근거를 기록하십시오.

검증:

enabled

accessible name

disabled reason 제거 또는 완료 문구

keyboard activation 가능

올바른 card ID

4.3 Submitting 상태

pending Promise spy 사용:

첫 호출 정확히 1회

disabled=true

aria-busy=true

loading indicator 또는 submitting text 존재

click/Enter/Space 재시도 시 호출 수 1회

card ID 정확

worker ID 정확

target transition 정확

resolve 후 busy 해제

완료 후 기존 handler의 정상 UI 결과 확인

4.4 Reject/Error

운영 submit handler에 실패 UI 계약이 존재하면:

Promise reject

error feedback

busy 해제

재시도 가능

상태 전이 없음

localStorage 불변

존재하지 않는다면 assertion 객체 밖에서 not_applicable로 기록하십시오.

4.5 직접 status 대입 방지

제품 diff와 source 전체에서 다음 패턴을 검사하십시오.

card.status =

.status = 'review'

직접 fixture mutation

허용된 lifecycle service 외 직접 상태 변경 0이어야 합니다.

5. Interaction artifact schema 강화

artifacts/redo/r08/worker-interaction-audit.json을 다음 구조로 갱신하십시오.

UI-040 예
JSON
{
  "inventoryId": "UI-040",
  "assertions": {
    "itemCount": 3,
    "initialValuesMatch": true,
    "groupAccessibleName": true,
    "keyboardSpaceChanged": true,
    "keyboardLifecycleCalls": 1,
    "labelClickChanged": true,
    "labelLifecycleCalls": 1,
    "blockedClickPrevented": true,
    "blockedKeyboardPrevented": true,
    "blockedLifecycleCalls": 0,
    "submitDisabledInitially": true,
    "submitDisabledPartially": true,
    "submitEnabledComplete": true,
    "submitDisabledAfterUncheck": true,
    "restored": true
  },
  "pass": true
}
UI-041 예
JSON
{
  "inventoryId": "UI-041",
  "assertions": {
    "emptyHoursRejected": true,
    "emptyHoursCalls": 0,
    "invalidHoursRejected": true,
    "invalidHoursCalls": 0,
    "emptyTextRejected": true,
    "emptyTextCalls": 0,
    "validAppendCalls": 1,
    "correctCardId": true,
    "correctWorkerId": true,
    "busyDuringPending": true,
    "duplicateClickBlocked": true,
    "duplicateKeyboardBlocked": true,
    "successFeedback": true,
    "restored": true
  },
  "notApplicable": [],
  "pass": true
}
UI-042 예
JSON
{
  "inventoryId": "UI-042",
  "assertions": {
    "disabledNative": true,
    "disabledClickCalls": 0,
    "disabledEnterCalls": 0,
    "disabledSpaceCalls": 0,
    "enabledByQcContract": true,
    "accessibleName": true,
    "lifecycleCalls": 1,
    "correctCardId": true,
    "correctWorkerId": true,
    "correctTransition": true,
    "busyDuringPending": true,
    "duplicateClickBlocked": true,
    "duplicateEnterBlocked": true,
    "duplicateSpaceBlocked": true,
    "busyCleared": true,
    "apiCalls": 0,
    "localStorageUnchanged": true,
    "restored": true
  },
  "notApplicable": [],
  "pass": true
}

규칙:

boolean assertion을 문자열로 대체 금지

호출 수는 boolean이 아니라 숫자로 저장

N/A는 별도 배열에 {state, reason} 형태로 저장

모든 필드는 실제 측정값으로 생성

6. Validator의 schema 검증 강화

현재 validator의 allTrue()는 boolean 필드만 골라 검사하므로 필수 key 누락을 잡지 못합니다.

이를 제거하거나 보조 검사로만 사용하십시오.

UI-040 필수 key

itemCount

initialValuesMatch

groupAccessibleName

keyboardSpaceChanged

keyboardLifecycleCalls

labelClickChanged

labelLifecycleCalls

blockedClickPrevented

blockedKeyboardPrevented

blockedLifecycleCalls

submitDisabledInitially

submitDisabledPartially

submitEnabledComplete

submitDisabledAfterUncheck

restored

UI-041 필수 key

emptyHoursRejected

emptyHoursCalls

invalidHoursRejected

invalidHoursCalls

emptyTextRejected

emptyTextCalls

validAppendCalls

correctCardId

correctWorkerId

busyDuringPending

duplicateClickBlocked

duplicateKeyboardBlocked

successFeedback

restored

UI-042 필수 key

disabledNative

disabledClickCalls

disabledEnterCalls

disabledSpaceCalls

enabledByQcContract

accessibleName

lifecycleCalls

correctCardId

correctWorkerId

correctTransition

busyDuringPending

duplicateClickBlocked

duplicateEnterBlocked

duplicateSpaceBlocked

busyCleared

apiCalls

localStorageUnchanged

restored

Validator는 다음 정확한 값도 강제하십시오.

QC keyboard lifecycle calls = 1

QC label lifecycle calls = 1

QC blocked lifecycle calls = 0

Work Log invalid calls = 0

Work Log valid calls = 1

Submit disabled calls = 0

Submit lifecycle calls = 1

API calls = 0

모든 restore = true

필수 key 누락 시 exit 1이어야 합니다.

7. QA Fixture 격리 실측 강화

현재 fixture 항목의 restore:true는 테스트 코드에서 직접 입력됩니다.

다음 구조로 변경하십시오.

JSON
{
  "name": "QC states",
  "beforeSnapshot": {
    "qcValues": [],
    "reviewDisabled": true,
    "selectedCard": "",
    "localStorage": ""
  },
  "afterRestoreSnapshot": {
    "qcValues": [],
    "reviewDisabled": true,
    "selectedCard": "",
    "localStorage": ""
  },
  "operatingFixtureMutation": false,
  "localStorageMutation": false,
  "apiCalls": 0,
  "restore": true,
  "pass": true
}

restore는 before/after deep equality 결과로 계산하십시오.

최소 대상:

Worker Home fixture

QC fixture

Work Log fixture

Submit fixture

검증 후 override한 service method와 window.fetch도 원래 참조로 복원되었는지 확인하십시오.

8. 제품 변경의 additive 범위 증명

app/screens/worker-workspace.screen.js는 Round 7 기준 대비 98줄 변경되었습니다.

다음을 생성하십시오.

artifacts/redo/r08/worker-product-diff-audit.json

검사:

데이터 배열 변경 없음

한국어 제품 문구 변경 없음

route 변경 없음

lifecycle service 이름 변경 없음

service 호출 argument 변경 없음

localStorage key 변경 없음

API path 변경 없음

filter 값 변경 없음

QC 항목 수·label 변경 없음

work log field name·type 변경 없음

submit CTA label 변경 없음

직접 status 대입 없음

추가된 class 수

추가된 ARIA 수

추가된 semantic attributes

제품 동작 변경 여부

제품 로직 변경이 있다면 각 변경의 필요성과 기존 계약 보존을 문서화하십시오.

9. 상태 Coverage의 assertion 이름 구체화

현재 모든 implemented 상태의 browserAssertion이 단순히 다음 파일만 가리킵니다.

tests/redo/r08/worker-audit.spec.cjs

각 상태를 실제 검사명과 연결하십시오.

예:

JSON
{
  "status": "implemented",
  "evidence": [
    "evidence/redo/r08/worker/states/worker-qc-blocked-disabled-desktop-1440x1000.png"
  ],
  "browserAssertion": "tests/redo/r08/worker-audit.spec.cjs::UI-040 blocked checkbox rejects click and Space"
}

Validator는:

:: 뒤 검사명이 존재하는지

빈 문자열이 아닌지

같은 generic assertion을 모든 상태에 반복하지 않는지

검사하십시오.

10. Accessibility artifact 실측 강화

현재 접근성 측정은 마지막 Submit pending 상태와 혼합된 DOM에서 한 번에 수집됩니다.

다음을 각각 독립 초기 상태에서 측정하십시오.

Worker Home KPI/progress

Worker Cards filter

Work-card selected

QC group/labels

QC blocked/disabled

Work Log invalid

Work Log success

Submit disabled

Submit submitting

reduced motion

390px mobile control containment

focus-visible

각 check:

scenario

measurement

expected

actual

measured: true

pass

pass:true만 기록하지 마십시오.

11. Public·Non-Worker 회귀 재실행

보완 HEAD에서 다시 실행하십시오.

Admin

5개 Desktop

Admin Home Tablet/Mobile

Client

3개 Desktop

Client Dashboard Tablet/Mobile

Profile

Client profile Desktop

Worker profile D/T/M

Public

6개 × D/T/M = 18개:

landing

auth

terms

privacy

support

select-workspace

검사:

Worker class leak 0

Worker token leak 0

DOM parity

computed style parity

bounding box parity

auth-off

overflow 0

console error 0

pageerror 0

request failure 0

기존 screenshot을 단순 재인용하지 말고 수정 HEAD에서 재생성하십시오.

12. Artifact 추가·갱신

추가:

artifacts/redo/r08/worker-product-diff-audit.json

갱신:

worker-interaction-audit.json

worker-state-coverage.json

qa-fixture-isolation.json

accessibility-audit.json

worker-data-function-parity.json

dom-structure-parity.json

worker-browser-audit.json

non-worker-regression.json

frozen-public-regression.json

test-results.json

verification-summary.json

verification-summary.json에 추가:

JSON
{
  "qcAssertionsComplete": true,
  "workLogAssertionsComplete": true,
  "submitAssertionsComplete": true,
  "requiredInteractionKeysMissing": 0,
  "hardcodedInteractionPassCount": 0,
  "fixtureRestoreMeasured": true,
  "workerProductDiffAdditive": true,
  "pass": true
}
13. 문서 갱신

최소:

docs/redo/r08/qc-lifecycle-contract.md

docs/redo/r08/work-log-contract.md

docs/redo/r08/worker-cards-implementation.md

docs/redo/r08/accessibility-review.md

docs/redo/r08/verification-results.md

docs/redo/r08/change-manifest.md

docs/redo/r08/implementation-report.md

추가:

docs/redo/r08/correction-report.md

내용:

기존 hardcoded assertion 문제

UI-040 실제 검증

UI-041 실제 검증

UI-042 실제 검증

fixture 복원 실측

제품 diff additive 증명

회귀 재실행

테스트 결과

남은 위험

14. 테스트 재실행

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

가능하면:

Bash
npm --prefix backend ci
npm --prefix backend exec prisma generate
npm --prefix backend test -- --runInBand
npm --prefix backend run type
npm --prefix backend run build

의존성 audit finding은 숨기지 말되 --force 수정은 하지 마십시오.

15. 완료 조건

다음을 전부 만족해야 합니다.

 UI-040 label click 실제 검증

 UI-040 keyboard Space 실제 검증

 UI-040 blocked click·keyboard 차단

 UI-040 blocker와 submit enabled 상태 연동 검증

 UI-040 초기·부분·완료·해제 상태 검증

 UI-040 QC restore deep equality

 UI-041 empty hours 독립 검증

 UI-041 invalid hours 독립 검증

 UI-041 empty text 독립 검증

 UI-041 각 invalid lifecycle call 0

 UI-041 valid append call 1

 UI-041 pending 중 click·keyboard 중복 차단

 UI-041 busy 상태 실제 검증

 UI-041 restore deep equality

 UI-042 disabled 상태 lifecycle call 0

 UI-042 click·Enter·Space 차단

 UI-042 QC 계약으로 enabled

 UI-042 accessible name 실측

 UI-042 lifecycle call 1

 UI-042 올바른 card·worker·transition

 UI-042 pending 중 click·Enter·Space 중복 차단

 UI-042 busy 시작·종료 검증

 UI-042 API 0

 UI-042 localStorage 불변

 UI-042 restore deep equality

 interaction 필수 key 누락 0

 boolean 대신 문자열 assertion 0

 hardcoded interaction pass 0

 fixture restore 선언값 0

 Worker 제품 diff additive 증명

 직접 status 대입 0

 상태별 구체 browser assertion name

 접근성 독립 시나리오 측정

 Admin·Client·Profile 회귀 0

 Public 18개 회귀 통과

 console error 0

 pageerror 0

 request failure 0

 360px overflow 0

 Round 1~7 검증 통과

 수정된 Round 8 validator 통과

 Round 9 선행 구현 없음

 main 변경 없음

 Production 배포 없음

 branch push 완료

하나라도 충족하지 못하면 READY FOR ROUND 8 REVIEW로 보고하지 마십시오.

16. 제출 형식

완료 후 반드시 다음 Marker로 시작하십시오.

[ROUND 8 CORRECTION REPORT]

보고 순서:

A. 작업 식별

Branch

이전 HEAD

수정 HEAD

추가 commit

merge-base

작업트리 상태

B. 기존 검증 결함 수정

hardcoded assertion

필수 key schema

validator 변경

수정 결과

C. UI-040 QC

initial values

keyboard

label click

blocked click

blocked keyboard

lifecycle calls

submit blocker

complete/uncheck

restore

evidence

D. UI-041 Work Log

empty hours

invalid hours

empty text

valid append

duplicate click

duplicate keyboard

busy

success/error

restore

evidence

E. UI-042 Submit

disabled

click/Enter/Space calls

enabled by QC

accessible name

lifecycle call

card/worker/transition

submitting

duplicate blocking

busy clear

API/localStorage

restore

evidence

F. QA Fixture 격리

before snapshot

after snapshot

service restore

fetch restore

deep equality

PASS/FAIL

G. Worker 제품 Diff

데이터

문구

route

lifecycle

API

storage

filter

QC

log

submit

additive class/ARIA

PASS/FAIL

H. 상태·접근성

implemented

N/A

invalid

missing evidence

assertion mapping

독립 접근성 scenario

I. 회귀

Admin

Client

Profile

Public 18

console

pageerror

failed request

overflow

J. 테스트 결과

각 command:

exit code

PASS/FAIL

artifact

K. 변경 파일

Product

Test

Artifact

Evidence

Docs

이유

L. 범위 준수

Yes/No:

Worker 운영 데이터 변경

Worker 제품 문구 변경

lifecycle 의미 변경

API 변경

backend 변경

Admin 변경

Client 변경

Profile 이식

Shell 변경

Public 변경

Round 9 선행 구현

main 변경

Production 배포

정상 답변은 모두 No입니다.

M. 남은 위험

실제 위험만 기록하십시오.

N. 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 8 REVIEW

NOT READY — ROUND 8 INCOMPLETE

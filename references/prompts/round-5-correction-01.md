# Round 5 Correction Prompt 01

- Planner URL: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
- Received: 2026-07-21T20:25:00+09:00
- Marker: `[ROUND 5 CORRECTION PROMPT]`

[ROUND 5 CORRECTION PROMPT]

Round 5는 현재 미완료입니다.

제출 보고서에서 다음 필수 조건이 충족되지 않았음을 직접 명시했습니다.

공개 화면 6개 × Desktop/Tablet/Mobile = 18개 신규 회귀 캡처 미수행

공개 화면의 Round 5 기준 screenshot·DOM·computed style·bounding box 비교 미수행

Notification Panel의 empty 상태 별도 재현·검증 미수행

Notification Panel의 long-content 상태 별도 재현·검증 미수행

Round 5 상태 계약에 포함된 disabled 상태의 별도 fixture·증거 미수행

이는 Round 5 구현 프롬프트의 완료 조건과 직접 충돌합니다. 기존 Round 4 결과의 재사용이나 CSS 정적 감사만으로 Round 5 공개 화면 회귀 검증을 대체할 수 없습니다.

현재 브랜치 redo/r05-dashboard-shell에서 아래 보완 작업만 수행하십시오. 새 브랜치를 만들거나 Round 6 작업을 시작하지 마십시오.

1. 작업 기준

저장소:

https://github.com/magus81818-bit/ordospace-ui-rebuild

브랜치:

redo/r05-dashboard-shell

현재 제출 HEAD:

00f86bf39f5e20c052d37b8c2a63af8c0aa4e021

보완 작업은 위 HEAD 이후에 추가 커밋으로 진행하십시오.

금지:

Round 6 작업

Sidebar·Header·본문의 추가 디자인 변경

기능·데이터·문구·라우트 변경

기존 통과 테스트 약화

Round 4 baseline 이미지 덮어쓰기

main 변경

Production 배포

force push

2. 공개 화면 18개 신규 회귀 검증

다음 6개 화면을 Round 5 현재 HEAD에서 새로 렌더링하십시오.

#landing

#auth

#terms

#privacy

#support

#select-workspace

각 화면을 다음 뷰포트에서 캡처하십시오.

Desktop: 1440 × 1000

Tablet: 1024 × 1366

Mobile: 390 × 844

총 18개 신규 캡처가 필요합니다.

저장 경로:

evidence/redo/r05/frozen-public/landing-desktop-1440x1000.png
evidence/redo/r05/frozen-public/landing-tablet-1024x1366.png
evidence/redo/r05/frozen-public/landing-mobile-390x844.png

evidence/redo/r05/frozen-public/auth-desktop-1440x1000.png
evidence/redo/r05/frozen-public/auth-tablet-1024x1366.png
evidence/redo/r05/frozen-public/auth-mobile-390x844.png

evidence/redo/r05/frozen-public/terms-desktop-1440x1000.png
evidence/redo/r05/frozen-public/terms-tablet-1024x1366.png
evidence/redo/r05/frozen-public/terms-mobile-390x844.png

evidence/redo/r05/frozen-public/privacy-desktop-1440x1000.png
evidence/redo/r05/frozen-public/privacy-tablet-1024x1366.png
evidence/redo/r05/frozen-public/privacy-mobile-390x844.png

evidence/redo/r05/frozen-public/support-desktop-1440x1000.png
evidence/redo/r05/frozen-public/support-tablet-1024x1366.png
evidence/redo/r05/frozen-public/support-mobile-390x844.png

evidence/redo/r05/frozen-public/select-workspace-desktop-1440x1000.png
evidence/redo/r05/frozen-public/select-workspace-tablet-1024x1366.png
evidence/redo/r05/frozen-public/select-workspace-mobile-390x844.png

각 화면에서 반드시 검사하십시오.

Screenshot diff

DOM 구조

주요 element 수

주요 text

주요 computed style

Font family

Background

Text color

Border

Radius

Shadow

Focus style

주요 bounding box

Horizontal overflow

--ordo-so-* token resolution

Round 5 Shell CSS selector 적용 여부

body.auth-on 존재 여부

Sidebar·Header·Drawer·Mobile Tabs DOM의 비활성·비노출 상태

비교 기준:

Round 1 frozen baseline

Round 4 승인 결과

Round 5 현재 결과

Round 4 결과만 재인용하지 말고 Round 5 브랜치에서 실제 브라우저 실행을 수행하십시오.

3. 동적 Landing 처리

Landing 화면의 autoplay·animation 때문에 pixel 차이가 발생하면 다음을 모두 기록하십시오.

불안정 element selector

animation 또는 autoplay 종류

baseline frame

Round 5 frame

전체 diff ratio

불안정 영역 제외 diff ratio

DOM parity

computed-style parity

bounding-box parity

단순히 “animation 차이”라고 적고 PASS 처리하지 마십시오.

동적 영역 이외에 차이가 없어야 합니다.

4. Notification empty 상태

현재 운영 notification fixture를 변경하지 않고 empty 상태를 검증하십시오.

허용 방법:

UI Lab 전용 fixture

테스트 harness에서 DOM-only fixture 주입

renderer에 순수 empty-input을 전달하는 비파괴 테스트

운영 데이터와 분리된 QA state

금지:

운영 notification fixture 삭제

production localStorage 수정

API 호출

사용자 notification 데이터를 읽음 처리

제품 기본 상태를 empty로 변경

검증 항목:

Panel open

Header

Empty icon

Empty title

Empty description

Optional action 유무

Panel accessible name

Trigger aria-expanded

Focus entry

Escape

Focus return

Outside click

Desktop

Mobile

Horizontal overflow 0

Contrast

증거:

evidence/redo/r05/shell-states/notification-empty-desktop-1440x1000.png
evidence/redo/r05/shell-states/notification-empty-mobile-390x844.png
5. Notification long-content 상태

운영 notification fixture를 변경하지 않고 별도 QA fixture로 다음을 재현하십시오.

긴 한글 제목

긴 설명

긴 category 또는 metadata

다수 notification으로 panel scroll 발생

unread/read 혼합

긴 문자열 중 공백 없는 값

모바일 폭

검증 항목:

제목 줄바꿈

description 줄바꿈

metadata overflow

item height

panel max-height

internal scroll

viewport containment

trigger와 panel 위치

focus 이동

Escape

focus return

screen reader name

horizontal overflow 0

증거:

evidence/redo/r05/shell-states/notification-long-desktop-1440x1000.png
evidence/redo/r05/shell-states/notification-long-mobile-390x844.png
6. Disabled 상태

Round 5 공식 Inventory에서 disabled가 적용 가능한 컴포넌트를 명확히 분류하십시오.

최소 검토:

Sidebar item

Header icon button

Primary Role CTA

Theme Control

Mobile Tab

Notification item 또는 action

Drawer control

각 항목에 대해 다음 중 하나로 판정하십시오.

실제 운영 disabled 상태 존재

UI Lab에서 상태 계약만 존재

기능상 Not applicable

“Not applicable”은 근거가 있어야 합니다.

최소 하나 이상의 실제 interactive Shell primitive disabled 상태를 UI Lab 또는 QA fixture로 재현하십시오.

검증:

disabled 또는 aria-disabled

Tab order

Click 차단

Cursor

Opacity

Contrast

Accessible name

Disabled 이유가 필요한 경우 helper text

focus 처리

증거:

evidence/redo/r05/shell-states/shell-disabled-desktop-1440x1000.png
evidence/redo/r05/shell-states/shell-disabled-mobile-390x844.png
7. Artifact 갱신

다음 파일을 실제 재실행 결과로 갱신하십시오.

artifacts/redo/r05/frozen-public-regression.json

각 18개 case에 다음 필드가 있어야 합니다.

JSON
{
  "screen": "landing",
  "viewport": "desktop-1440x1000",
  "baselineScreenshot": "...",
  "round5Screenshot": "...",
  "pixelDiffRatio": 0,
  "dynamicRegionDiffRatio": 0,
  "domParity": true,
  "computedStyleParity": true,
  "boundingBoxParity": true,
  "fontParity": true,
  "backgroundParity": true,
  "borderParity": true,
  "radiusParity": true,
  "focusParity": true,
  "tokenLeakCount": 0,
  "shellSelectorLeakCount": 0,
  "horizontalOverflow": false,
  "result": "PASS"
}

총 case 수는 정확히 18이어야 합니다.

artifacts/redo/r05/shell-state-coverage.json

다음을 명시적으로 갱신하십시오.

Notification empty: implemented

Notification long content: implemented

Disabled state: implemented 또는 근거 있는 not applicable

각 상태 evidence path

Desktop/Mobile 결과

deferred 0

missing 0

artifacts/redo/r05/shell-interaction-audit.json

추가:

notification empty open/close

notification long content

internal scroll

disabled click blocking

disabled keyboard behavior

focus return

Escape

outside click

mobile panel containment

artifacts/redo/r05/accessibility-audit.json

추가:

Empty state accessible name

Long notification item names

Disabled semantics

Disabled contrast

Disabled tab order

Notification scroll/focus behavior

artifacts/redo/r05/dashboard-browser-audit.json

추가:

신규 Shell state captures

각 public route browser result

console

pageerror

request failures

HTTP 4xx/5xx

overflow

artifacts/redo/r05/verification-summary.json

기존 미완료 항목이 모두 해결되었음을 기계 판독 가능한 형태로 기록하십시오.

8. 테스트 보강

tests/redo/r05/에 다음 검사를 추가하십시오.

공개 화면

정확히 18개 Round 5 screenshot 존재

각 screenshot이 Round 5 실행에서 생성됨

6개 screen × 3 viewport 조합 완전성

token leak 0

Shell selector leak 0

body.auth-on 없음

DOM parity

computed-style parity

bounding-box parity

horizontal overflow 0

Notification

Empty fixture 렌더

Long fixture 렌더

Empty accessible name

Long-content wrap

Internal scroll

unread/read 구분

Escape

focus return

outside click

Desktop/Mobile containment

Disabled

적어도 하나의 Shell disabled specimen 존재

disabled click 차단

disabled keyboard activation 차단

올바른 semantic

focus 정책

contrast 기준

Artifact consistency

보고된 screenshot 수와 실제 파일 수 일치

shell-state-coverage.json의 deferred 0

missing 0

공개 case 정확히 18

evidence path 전부 존재

기존 validator expectation을 완화하지 마십시오.

9. 재실행 명령

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

모든 결과를 다음에 갱신하십시오.

docs/redo/r05/verification-results.md

artifacts/redo/r05/test-results.json

artifacts/redo/r05/verification-summary.json

10. 문서 갱신

다음을 갱신하십시오.

docs/redo/r05/public-regression.md

docs/redo/r05/notification-theme-implementation.md

docs/redo/r05/accessibility-review.md

docs/redo/r05/verification-results.md

docs/redo/r05/change-manifest.md

docs/redo/r05/implementation-report.md

추가 문서:

docs/redo/r05/correction-report.md

내용:

지적된 5개 미완료 항목

각각의 보완 방식

변경 파일

재실행 결과

신규 evidence

기능·데이터 비변경 증명

공개 화면 18개 결과

Notification empty 결과

Notification long-content 결과

Disabled 결과

남은 위험

11. 제품 변경 제한

가급적 테스트·UI Lab·artifact·evidence 보강만으로 해결하십시오.

제품 파일 변경이 필요한 경우 다음만 허용됩니다.

UI Lab 전용 fixture

Notification renderer가 이미 지원해야 하는 empty·long-content 상태의 안전한 class 또는 ARIA 보강

disabled semantic의 additive 보강

접근성 결함 수정

금지:

운영 notification 데이터 변경

Sidebar·Header 추가 재설계

메뉴 변경

Header 순서 변경

Shell 치수 변경

route 변경

public CSS 변경

localStorage key 변경

API 변경

backend 변경

Round 6 선행 작업

제품 파일 변경이 발생하면 change-manifest.md에 정확히 기록하십시오.

12. 완료 조건

다음을 전부 충족해야 합니다.

 공개 화면 18개를 Round 5 HEAD에서 새로 캡처

 18개 모두 screenshot comparison 수행

 18개 모두 DOM 비교

 18개 모두 computed-style 비교

 18개 모두 bounding-box 비교

 공개 token leak 0

 공개 Shell CSS leak 0

 공개 horizontal overflow 0

 Landing 동적 영역을 별도로 정량 분석

 Notification empty Desktop/Mobile 검증

 Notification long-content Desktop/Mobile 검증

 Notification scroll 검증

 Notification Escape/focus-return 검증

 Disabled 상태 fixture 검증

 Disabled click·keyboard 차단 검증

 shell-state-coverage.json deferred 0

 shell-state-coverage.json missing 0

 console error 0

 pageerror 0

 신규 failed request 0

 HTTP 4xx/5xx 신규 0

 기존 IA·기능·레이아웃 유지

 Round 1~4 검증 통과

 보강된 Round 5 검증 통과

 Production 배포 없음

 main 변경 없음

 branch push 완료

 모든 evidence가 GitHub에서 검수 가능

하나라도 충족하지 못하면 READY FOR ROUND 5 REVIEW라고 보고하지 마십시오.

13. 제출 형식

완료 후 반드시 다음 Marker로 시작하십시오.

[ROUND 5 CORRECTION REPORT]

보고 순서:

A. 작업 식별

Branch

이전 HEAD

수정 HEAD

추가 commit

작업트리 상태

B. 지적사항 해결표
지적사항	기존 상태	수정 내용	결과	Evidence
공개 18개 신규 캡처	미수행		PASS/FAIL	
공개 DOM/style/box 비교	미수행		PASS/FAIL	
Notification empty	미수행		PASS/FAIL	
Notification long	미수행		PASS/FAIL	
Disabled fixture	미수행		PASS/FAIL	
C. 공개 화면 회귀

6개 화면 × D/T/M 18개 각각:

screenshot

pixel diff

DOM

computed style

bounding box

token leak

Shell leak

overflow

판정

D. Landing 동적 영역

unstable selector

전체 diff

제외 diff

DOM/style/box 결과

판정

E. Notification empty

재현 방식

데이터 비변경

Desktop

Mobile

keyboard

Escape

focus return

accessibility

evidence

F. Notification long-content

fixture

wrap

scroll

Desktop

Mobile

keyboard

accessibility

evidence

G. Disabled 상태

대상 컴포넌트

semantic

click 차단

keyboard 차단

focus

contrast

evidence

H. 테스트 결과

각 명령:

command

exit code

PASS/FAIL

artifact

I. 변경 파일

Product

Test

Artifact

Evidence

Docs

J. 범위 준수

Yes/No:

운영 notification 데이터 변경

Sidebar 재설계

Header 재설계

Shell 치수 변경

메뉴 변경

route 변경

public CSS 변경

기능 변경

localStorage key 변경

API 변경

backend 변경

Round 6 선행 구현

main 변경

Production 배포

정상 답변은 모두 No입니다.

K. 남은 위험

실제 남은 위험만 기록하십시오.

L. 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 5 REVIEW

NOT READY — ROUND 5 INCOMPLETE


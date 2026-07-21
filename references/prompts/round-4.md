---
planner_url: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
planner_title: ORDOSPACE SalesOps 이식
received_at: 2026-07-21T19:45:00+09:00
round_marker: "[ROUND 4 IMPLEMENTATION PROMPT]"
---

[ROUND 3 ACCEPTED]

[ROUND 4 IMPLEMENTATION PROMPT]

당신은 ORDOSPACE 대시보드에 SalesOps 디자인 체계를 이식하는 프로젝트의 Round 4 구현 담당자입니다.

이번 라운드의 목표는 Round 3에서 구축한 Dashboard 전용 토큰을 바탕으로 다음을 완성하는 것입니다.

ORDOSPACE 전체 대시보드에서 재사용할 공통 UI Primitive

Primitive의 실제 상태를 독립적으로 검증할 수 있는 실행 가능한 UI Lab

SalesOps 대응이 code-only이거나 Derived인 컴포넌트의 시각·상태 계약

Round 5~9에서 역할별 화면을 일관되게 이식하기 위한 공통 기반

이번 라운드에서는 Sidebar·Header·Dashboard Shell 전체 이식이나 Admin·Client·Worker 화면별 완성 작업을 수행하지 마십시오.

1. 시작 기준
저장소

로컬:

C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ordospace-ui-rebuild

GitHub:

https://github.com/magus81818-bit/ordospace-ui-rebuild

승인된 Round 3

브랜치:

redo/r03-dashboard-tokens

승인 HEAD:

9c559913d43efea9d4b7d5a5831b8cf14e636763

새 브랜치

Round 3 승인 HEAD에서 다음 브랜치를 생성하십시오.

redo/r04-primitives-ui-lab

작업 시작 시 다음을 확인하십시오.

Bash
git status
git remote -v
git branch --show-current
git log --oneline --decorate -15
git merge-base redo/r03-dashboard-tokens HEAD

기계 판독 artifact:

artifacts/redo/r04/git-prestate.json

금지

Round 3 승인 HEAD 이전에서 분기

기존 ui/r* 또는 fix/* 사용

기존 잘못된 브랜치 Cherry-pick

main 변경

원본 ORDOSPACE 저장소 변경

Production 배포

Vercel alias 변경

force push

2. 반드시 읽을 기준 자료

구현 전 다음 자료를 모두 읽으십시오.

Round 1

docs/redo/r01/component-state-inventory.md

docs/redo/r01/layout-function-inventory.md

docs/redo/r01/route-screen-inventory.md

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

docs/redo/r03/token-implementation.md

docs/redo/r03/css-isolation.md

docs/redo/r03/inventory-scope.md

artifacts/redo/r03/token-inventory.json

artifacts/redo/r03/token-usage.json

artifacts/redo/r03/css-scope-audit.json

artifacts/redo/r03/layout-preservation.json

Round 4는 Round 3 토큰을 소비해야 합니다. 동일한 색상·radius·shadow 값을 Primitive 파일에 raw value로 반복 선언하지 마십시오.

3. Round 4 공식 Inventory 범위

이번 라운드의 공식 대상은 정확히 다음 10개입니다.

UI-013

UI-014

UI-015

UI-016

UI-017

UI-018

UI-019

UI-020

UI-064

UI-073

Round 2 migration matrix에서 각 ID의 다음 항목을 그대로 가져와 작업 기준으로 사용하십시오.

ORDOSPACE 컴포넌트명

역할과 라우트

기존 위치와 기능

현재 상태

SalesOps 대응 ID

Exact / Adapted / Derived 분류

ZIP 근거

보존할 레이아웃·데이터·기능

접근성 요구

불확실성

검증 방법

문서:

docs/redo/r04/inventory-scope.md

각 ID별로 다음을 기록하십시오.

필드	내용
Inventory ID	UI-013 등
기존 컴포넌트	Round 1 기준
SalesOps 대응	Round 2 ID
분류	Exact/Adapted/Derived
구현 파일	실제 경로
구현 상태	완료/부분/제외
지원 상태	default 등
UI Lab specimen	식별자
운영 화면 영향	영향 라우트
검증 근거	screenshot/test
후속 라운드	필요한 경우

공식 범위 밖 컴포넌트의 완성 스타일을 선행 구현하지 마십시오.

4. Round 4 핵심 원칙
4.1 기존 기능이 권위 기준

다음은 변경하지 않습니다.

기존 DOM ID

기능 코드가 참조하는 class

event listener 대상

data-* 속성의 기능 의미

form name/value

button type

submit 동작

route hash

세션

역할 권한

localStorage

API

lifecycle

한국어 문구

실제 데이터 의미

스타일링 때문에 selector를 변경해야 한다면 기존 selector를 삭제하지 말고 additive class를 추가하십시오.

4.2 정적 앱용 재구현

SalesOps의 React·Next·Radix·shadcn 구조를 복사하지 마십시오.

금지:

React component 도입

Next.js 코드

Radix dependency

shadcn 전체 컴포넌트

CVA dependency

Recharts 도입

Sonner·Vaul 도입

Portal runtime 복사

SalesOps 영업 데이터

SalesOps 영어 문구

허용:

기존 ORDOSPACE 팩토리와 정적 DOM 구조 개선

기존 JavaScript에 최소한의 상태·접근성 보강

CSS custom property와 additive class

현재 Lucide asset 사용

기존 UI factory 재사용

4.3 Dashboard 격리

운영 Primitive 스타일은 반드시 다음 범위 안에 있어야 합니다.

CSS
body.auth-on

또는 그보다 좁은 Dashboard scope.

UI Lab도 공개 화면에서 임의로 노출되지 않아야 합니다.

공개 화면 전역 selector를 변경하지 마십시오.

5. 공통 Primitive 아키텍처

현재 구조를 조사한 후 공통 Primitive의 source of truth를 명확히 하십시오.

후보 파일:

app/ui/components/base.ui.js

app/ui/components/status.ui.js

app/ui/components/metric.ui.js

app/ui/components/module-card.ui.js

app/ui/components/detail.ui.js

app/ui/components/form.ui.js

app/ui/components/sheet.ui.js

기존 관련 CSS

Round 3 token CSS

필요한 경우 다음과 같은 전용 파일을 추가할 수 있습니다.

app/styles/dashboard-salesops.primitives.css
app/ui/components/primitives.ui.js
app/ui/components/feedback.ui.js
app/ui/components/overlay.ui.js

단, 기존 파일과 중복되는 두 번째 컴포넌트 체계를 만들지 마십시오.

각 Primitive는 다음을 만족해야 합니다.

하나의 명확한 source of truth

semantic variant

state contract

접근성 계약

escape 처리

기존 기능 selector 보존

Round 3 token 사용

역할별 화면에서 재사용 가능

UI Lab에서 독립 렌더 가능

6. 필수 Primitive 범주

Round 4 공식 Inventory 10개를 구현하면서, 해당 Inventory가 의존하는 공통 Primitive를 완성하십시오.

최소 다음 범주를 다루십시오.

6.1 Module Card

UI-013

보존:

ModuleCard 데이터

lifecycle 상태

카드 클릭 동작

역할별 액션

제목·설명·담당자·기한·진척도

기존 카드 위치

기존 카드 개수

기존 상태 전이

이식:

Surface

Border

Radius

Header hierarchy

Metadata typography

Status 위치의 시각 문법

Hover

Focus-visible

Selected 또는 active

Disabled/locked

Long title

Long metadata

Compact 모바일 상태

금지:

SalesOps Metric Card와 동일한 구조로 단순 치환

카드 내부 정보 순서 변경

영업 파이프라인 문구 복사

카드 전체를 링크로 만들면서 기존 버튼 이벤트 충돌

lifecycle action 숨김

6.2 Empty State

UI-014

상태:

일반 empty

필터 결과 없음

권한상 표시 항목 없음

액션 있음

액션 없음

긴 설명

포함 요소:

icon

title

body

optional action

접근성:

문서 흐름 내 의미 유지

decorative icon 처리

actionable empty state의 button name 유지

6.3 Toolbar / Filter Group

UI-015

상태:

default

hover

focus-visible

selected

disabled

loading

overflow

mobile wrap 또는 horizontal handling

기능 보존:

기존 filter value

검색·정렬과 결합된 경우 기존 상태

기존 이벤트

기존 no-result 처리

6.4 Tabs

UI-016

상태:

default

hover

focus-visible

selected

disabled

overflow

긴 한글 label

mobile

접근성:

기존 semantic이 tab pattern이면 role=tablist, role=tab, aria-selected, aria-controls

기존 구현이 단순 filter button이면 의미를 임의로 tab으로 바꾸지 않음

키보드 동작을 기존보다 악화시키지 않음

Arrow key 지원을 추가한다면 완전하게 구현

6.5 Modal / Dialog

UI-017

상태:

closed

open

destructive confirmation

validation error

submitting

success

long content

mobile

반드시 검증:

accessible name

aria-modal

focus entry

focus return

Escape

backdrop click의 기존 계약

배경 scroll

stacking

action order

destructive action 구분

Radix 코드를 복사하지 말고 기존 ORDOSPACE dialog 로직을 보존·보강하십시오.

6.6 Side / Bottom Sheet

UI-018

상태:

closed

open

validation

submitting

long content

Desktop side sheet

Mobile bottom 또는 기존 모바일 방식

보존:

기존 열림 방향

기존 content purpose

기존 form/detail 기능

기존 close 동작

기존 모바일 구조

SalesOps의 260px 고정 Sidebar 결함과 혼동하지 마십시오.

6.7 UI-019와 UI-020

Round 2 matrix에서 실제 컴포넌트명과 상태를 확인하여 구현하십시오.

두 ID를 일반적인 Button/Input으로 추측하지 마십시오.

각 ID에 대해 반드시:

실제 기존 렌더러 확인

모든 사용 라우트 확인

SalesOps 대응 코드 확인

상태별 specimen 생성

운영 기능 회귀 검사

접근성 검사

6.8 Shared Profile Primitive

UI-064

Admin·Client·Worker가 공유하는 profile/notification 관련 Primitive의 정확한 범위를 Round 2 matrix에서 확인하십시오.

보존:

역할별 사용자 정보

notification 데이터

tab 상태

unread 의미

기존 action

Round 7·8 또는 Round 5 범위에 속하는 전체 Profile 페이지 레이아웃을 선행 완성하지 말고, 지정된 공통 Primitive만 구현하십시오.

6.9 Existing QA Gallery Baseline

UI-073

기존 components-gallery의 역할과 접근 조건을 보존하십시오.

중요:

UI-073 자체를 새 UI Lab과 동일시하지 마십시오.

기존 QA gallery를 삭제하거나 통째로 대체하지 마십시오.

기존 dev-only access contract 유지

기존 gallery 테스트 유지

새 UI Lab은 별도 section 또는 명확히 분리된 mode로 구현

7. Button·Icon Button 기반

공식 Inventory와 연결된 버튼이 존재하므로 공통 button grammar를 마련하십시오.

최소 variant:

primary

secondary

outline

ghost

destructive

success 또는 lifecycle action

icon-only

최소 size:

small

medium

large

icon

상태:

default

hover

focus-visible

active

disabled

loading

규칙:

기존 button label 유지

icon-only에는 accessible name 필수

loading 중 기존 action 중복 실행 차단

disabled와 loading의 의미 구분

destructive action은 색상만으로 구분하지 않음

레이아웃 폭을 일괄 변경하지 않음

Round 5 Header CTA 스타일을 완성하지 마십시오.

8. Form Primitive 기반

공식 Inventory가 의존하는 기존 form 요소를 공통화하십시오.

최소:

input

textarea

select

checkbox

radio

switch가 실제 존재하면 switch

field label

helper text

validation message

field group

상태:

default

hover

focus-visible

filled

placeholder

disabled

readonly

required

invalid

valid

loading 또는 submitting

long content

보존:

name

value

checked

selected

form submission

validation

event

autocomplete

label association

금지:

native select를 불완전한 custom select로 교체

checkbox/radio의 실제 input 제거

placeholder를 label 대용으로 사용

모든 form을 이번 라운드에 재배치

운영 폼의 데이터 계약 변경

9. Badge·Status·Progress 연계

Round 3에서 구현한 다음을 Round 4 Primitive와 연결하십시오.

UI-010 Status Badge

UI-011 Metric Card foundation

UI-012 Progress Track

이번 라운드에서 허용:

Primitive 체계와 variant 명칭 정리

UI Lab specimen 추가

상태별 접근성 및 contrast 검증

필요한 최소 selector 정리

금지:

Round 3 토큰 값을 임의 변경

status 의미 변경

모든 Metric Card 페이지별 완성

chart 데이터 변경

Round 3의 16개 !important를 그대로 방치하지 말고 감사하십시오.

각 사용 건을 다음으로 분류하십시오.

현재 legacy cascade상 반드시 필요

selector 조정으로 제거 가능

Round 5~9까지 임시 필요

불필요

가능한 항목은 안전하게 제거하십시오.

목표:

!important 증가 금지

가능하면 16개 미만으로 감소

유지 시 각 selector별 근거 문서화

전역 또는 공개 화면 !important 금지

10. 실행 가능한 UI Lab
10.1 목적

UI Lab은 스크린샷용 정적 목록이 아니라 다음을 실제로 검증할 수 있어야 합니다.

Primitive variants

모든 상태

keyboard focus

overlay open/close

validation

loading

empty

long content

responsive

reduced motion

contrast

Korean content

lifecycle tone

10.2 접근 방식

새로운 공개 운영 라우트를 추가하지 마십시오.

허용되는 방식:

기존 dev-only components-gallery 내부에 명확히 분리된 SalesOps UI Lab section 추가

기존 dev_mode 권한 계약 안에서만 노출되는 별도 hash state

테스트 harness가 기존 QA route에서 mode를 설정

어떤 방식을 사용하든 다음을 만족해야 합니다.

Production 일반 사용자에게 메뉴 노출 없음

공개 화면 아님

기존 19개 공식 screen ID 변경 없음

공식 운영 메뉴 변경 없음

인증·dev_mode 계약 유지

직접 URL 접근 시 기존 guard 유지

QA route가 운영 route로 오인되지 않음

10.3 UI Lab 필수 Section

최소:

Foundations

Typography

Color and status

Buttons

Form controls

Badges and progress

Cards

Filters and tabs

Empty/loading/error/success

Dialog

Sheet

Long content

Responsive specimens

Accessibility states

각 specimen에 표시:

Primitive name

variant

state

관련 ORDOSPACE Inventory ID

관련 SalesOps ID

Exact/Adapted/Derived

token 사용

interactive control

10.4 상태 조작

UI Lab에서 실제로 조작 가능해야 합니다.

예:

Dialog 열기/닫기

Sheet 열기/닫기

Tab 선택

Filter 선택

Checkbox/Radio/Switch 변경

Input validation error 유발

Loading toggle

Empty/Success/Error toggle

Disabled 비교

Long content toggle

조작은 QA route 내부 상태에만 영향을 줘야 하며 운영 데이터·localStorage·API를 변경하면 안 됩니다.

11. Derived 컴포넌트 검증

Round 2에서 code-only 또는 Derived 근거를 가진 다음 범주는 라이브 SalesOps 화면 복제라고 주장하면 안 됩니다.

Empty

Dialog

Sheet

기타 Round 4 대상 code-only component

각 Derived/code-only 컴포넌트에 대해 문서화하십시오.

문서:

docs/redo/r04/derived-component-decisions.md

필수 항목:

ORDOSPACE Inventory ID

SalesOps ID

ZIP 코드 근거

라이브 근거 존재 여부

사용 token

DOM 구조 결정

상태 결정

접근성 결정

SalesOps에서 직접 복사하지 않은 부분

ORDOSPACE 기능 보존 방식

UI Lab evidence

불확실성

12. CSS 구조

권장 파일:

app/styles/dashboard-salesops.primitives.css

원칙:

body.auth-on 범위

--ordo-so-* 토큰 사용

component class는 명시적 ordo-c-* 또는 기존 합의 namespace 사용

generic .card, .button, .input 전역 override 금지

Tailwind utility를 무차별 덮어쓰기 금지

역할별 페이지 selector 금지

공개 화면 selector 금지

raw color 반복 최소화

layout 재설계 금지

Sidebar·Header selector 금지

상태 표현 권장:

CSS
[data-state='open']
[data-state='selected']
[aria-selected='true']
[aria-invalid='true']
:disabled
:focus-visible

기존 상태 구조가 다른 경우 기능을 깨지 않는 additive mapping을 사용하십시오.

13. JavaScript 구조

기존 factory를 우선 사용하십시오.

공통 HTML 생성 함수는 반드시:

사용자 입력 escape

optional field 처리

고유 ID 충돌 방지

ARIA relation 유지

기능 selector 유지

semantic element 사용

inline handler 지양

기존 event binding과 호환

새 UI Lab 전용 상태 코드는 운영 로직과 분리하십시오.

권장:

app/qa/ui-lab.js

또는 기존 QA 구조 안의 명확한 별도 module.

금지:

운영 global state 오염

실제 API 호출

실제 localStorage 데이터 수정

role/session 변경

production menu 추가

테스트 전용 코드를 운영 컴포넌트 로직에 혼합

14. Desktop·Tablet·Mobile 검증
뷰포트

Desktop: 1440 × 1000

Tablet: 1024 × 1366

Mobile: 390 × 844

UI Lab

각 뷰포트에서 최소:

full-page 기본 상태

form states

cards and filters

Dialog open

Sheet open

long content

disabled/loading/error

증거 경로:

evidence/redo/r04/ui-lab/desktop/
evidence/redo/r04/ui-lab/tablet/
evidence/redo/r04/ui-lab/mobile/
evidence/redo/r04/ui-lab/states/
운영 화면

공통 Primitive가 실제 사용되는 모든 관련 라우트를 캡처하십시오.

최소 대표:

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

#profile

Worker

#worker-home

#worker-cards

#profile

각 역할 홈은 D/T/M 캡처가 필요합니다.

15. 레이아웃 보존

Primitive 적용 전후 다음을 비교하십시오.

Sidebar width

Header height

main content origin

Section 순서

Grid column

Card position

Table position

toolbar 위치

form 위치

modal/sheet purpose

모바일 navigation

horizontal overflow

Round 4에서 허용되는 변화:

Primitive 내부 padding

border

radius

typography

icon size

state appearance

단, 기존 화면 구성과 영역 배치가 달라질 정도의 크기 변화는 허용되지 않습니다.

기계 판독 artifact:

artifacts/redo/r04/layout-preservation.json

각 주요 element에 대해:

baseline bounding box

Round 4 bounding box

delta

허용치

판정

변화 이유

16. 공개 화면 동결 검증

다음 6개 공개 화면을 D/T/M에서 다시 검증하십시오.

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

overflow

Dashboard token resolution

증거:

evidence/redo/r04/frozen-public/

artifact:

artifacts/redo/r04/frozen-public-regression.json

Round 3 baseline 이미지를 덮어쓰지 마십시오.

17. 접근성 검증
Buttons

accessible name

focus-visible

disabled

loading announcement

destructive distinction

Forms

label association

required

invalid

error association

keyboard

native semantics

Tabs/Filters

correct role according to actual behavior

selected state

keyboard

visible focus

Dialog

name

modal semantics

focus entry

focus trap 또는 기존 계약

focus return

Escape

background interaction

Sheet

name

close control

focus

Escape

mobile behavior

Contrast

대표 조합 모두 검사:

primary text/surface

secondary text/surface

muted text/surface

accent

status tones

disabled

validation error

destructive

focus ring

artifact:

artifacts/redo/r04/accessibility-audit.json

18. 자동 검증

다음 경로를 추가하십시오.

tests/redo/r04/

최소 검사:

18.1 Git

현재 브랜치

Round 3 merge-base

금지 브랜치 commit 미포함

18.2 Inventory

Round 4 공식 10 ID 정확히 존재

누락 0

중복 0

다른 ID를 완료 처리하지 않음

각 ID에 UI Lab specimen 존재

각 ID에 evidence 존재

18.3 Token 사용

Primitive가 Round 3 token 사용

불필요한 raw color 검사

새로운 비격리 token 없음

--ordo-so-* 외 SalesOps token 없음

원격 font 없음

unresolved var 없음

orphan critical token 없음

18.4 CSS scope

Public leak 0

generic 전역 selector 없음

Sidebar/Header 완성 selector 없음

역할별 page completion selector 없음

!important 건수 검사

Round 3보다 증가하지 않음

유지 항목 근거 존재

18.5 UI Lab

dev-only 접근

일반 공개 접근 차단

공식 메뉴 미노출

19개 screen ID 유지

모든 필수 section 존재

모든 필수 state 조작 가능

API call 0

production localStorage mutation 0

console error 0

pageerror 0

18.6 Primitive state

buttons

forms

badge

card

empty

filters

tabs

dialog

sheet

loading

error

success

disabled

long content

18.7 기능 회귀

로그인

로그아웃

역할 전환

route guard

sidebar navigation

mobile navigation

tab

filter

form

dialog

sheet

lifecycle smoke

18.8 구조 회귀

메뉴 순서

DOM ID

Section 순서

route hashes

shell structure

layout bounding box

public frozen comparison

19. 기계 판독 artifact

최소:

artifacts/redo/r04/git-prestate.json
artifacts/redo/r04/inventory-scope.json
artifacts/redo/r04/primitive-catalog.json
artifacts/redo/r04/primitive-state-coverage.json
artifacts/redo/r04/ui-lab-inventory.json
artifacts/redo/r04/token-usage.json
artifacts/redo/r04/css-scope-audit.json
artifacts/redo/r04/important-usage-audit.json
artifacts/redo/r04/dashboard-browser-audit.json
artifacts/redo/r04/ui-lab-browser-audit.json
artifacts/redo/r04/layout-preservation.json
artifacts/redo/r04/frozen-public-regression.json
artifacts/redo/r04/accessibility-audit.json
artifacts/redo/r04/verification-summary.json
artifacts/redo/r04/test-results.json
primitive-catalog.json

각 Primitive:

ID

name

source file

factory/export

CSS class

token dependencies

variant

state

Inventory IDs

routes

accessibility contract

responsive behavior

UI Lab specimen

evidence

primitive-state-coverage.json

상태:

default

hover

focus-visible

active

selected

disabled

loading

empty

error

success

invalid

long content

overflow

Desktop

Tablet

Mobile

값:

implemented

not applicable

deferred with reason

공식 Round 4 범위에서 근거 없는 deferred는 허용하지 않습니다.

20. 문서

최소:

docs/redo/r04/README.md
docs/redo/r04/inventory-scope.md
docs/redo/r04/primitive-architecture.md
docs/redo/r04/primitive-catalog.md
docs/redo/r04/ui-lab.md
docs/redo/r04/derived-component-decisions.md
docs/redo/r04/css-isolation.md
docs/redo/r04/important-usage-review.md
docs/redo/r04/layout-review.md
docs/redo/r04/public-regression.md
docs/redo/r04/accessibility-review.md
docs/redo/r04/verification-results.md
docs/redo/r04/change-manifest.md
docs/redo/r04/implementation-report.md
21. 기존 검증 재실행

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

가능하면:

Bash
npm --prefix backend test -- --runInBand
npm --prefix backend run type
npm --prefix backend run build

Production DB 또는 Production API를 변경하는 테스트는 실행하지 마십시오.

실패를 숨기거나 expectation을 약화시키지 마십시오.

22. 코드 품질

기존 component factory 우선

중복 component 체계 금지

escaped output

semantic HTML

ARIA 보존

Dashboard scope

Round 3 token 사용

raw color 최소화

inline style 최소화

!important 증가 금지

원격 font 금지

CDN 추가 금지

React/Next/Radix/shadcn 복사 금지

기능 selector 삭제 금지

공개 CSS 변경 금지

페이지별 임시 patch 금지

역할별 중복 primitive 금지

console warning 숨김 금지

runtime error suppression 금지

23. 완료 조건

다음을 모두 만족해야 합니다.

 redo/r04-primitives-ui-lab가 Round 3 승인 HEAD에서 분기

 공식 Inventory 10개 전부 구현

 다른 Inventory를 완료 처리하지 않음

 공통 Primitive source of truth 확립

 Round 3 token 사용

 UI Lab 실행 가능

 UI Lab이 dev-only

 운영 메뉴에 UI Lab 노출 없음

 19개 공식 screen ID 유지

 Button 상태 완전

 Form 상태 완전

 ModuleCard 상태 완전

 Empty 상태 완전

 Filter 상태 완전

 Tab 상태 완전

 Dialog 상태 완전

 Sheet 상태 완전

 UI-019·020 실제 matrix 기준 구현

 UI-064 실제 matrix 기준 구현

 UI-073 기존 QA 계약 유지

 모든 Round 4 specimen에 Inventory ID와 SalesOps 근거 존재

 키보드 접근 가능

 focus-visible 유지

 Dialog focus entry/return/Escape 통과

 Form label/validation 통과

 대표 contrast 통과

 !important 증가 없음

 Sidebar·Header 완성 이식 안 함

 Admin·Client·Worker 페이지별 완성 이식 안 함

 레이아웃·Section 순서 유지

 라우트·문구·데이터·기능 유지

 공개 화면 18개 회귀 통과

 Desktop·Tablet·Mobile 통과

 horizontal overflow 신규 발생 없음

 console error 0

 pageerror 0

 신규 실패 request 없음

 Round 1~3 검증 통과

 Round 4 검증 통과

 Production 배포 없음

 branch push 완료

 모든 증거가 GitHub 또는 대화 첨부로 검수 가능

하나라도 충족하지 못하면 완료로 보고하지 마십시오.

24. Git 규칙

허용:

redo/r04-primitives-ui-lab에만 commit

branch push

Draft PR 생성

금지:

main 변경

Round 3 브랜치 수정

기존 브랜치 수정

원본 저장소 변경

force push

Production 배포

Vercel alias 변경

비밀정보 commit

권장 커밋:

feat(redo-r04): establish shared dashboard primitives

feat(redo-r04): add dev-only interactive UI Lab

test(redo-r04): cover primitive states and regressions

docs(redo-r04): publish primitive evidence

25. 제출 형식

작업 완료 후 반드시 다음 Marker로 시작하십시오.

[ROUND 4 IMPLEMENTATION REPORT]

보고 순서:

A. 작업 식별

저장소

브랜치

시작 HEAD

종료 HEAD

Round 3 merge-base

Branch 또는 Draft PR URL

B. Inventory 결과

10개 ID 각각:

컴포넌트

분류

구현 파일

상태

UI Lab specimen

운영 화면

evidence

완료 여부

C. Primitive 아키텍처

source files

factory/export

CSS namespace

token 의존성

기존 component와의 관계

중복 제거

D. Primitive 카탈로그

범주별 개수:

Card

Button

Form

Badge

Progress

Filter

Tab

Empty/Feedback

Dialog

Sheet

기타

각 범주의 variant·state 수를 보고하십시오.

E. UI Lab

접근 URL 또는 재현 방식

guard

일반 메뉴 노출 여부

section 수

specimen 수

interaction 수

API 호출 여부

localStorage mutation 여부

D/T/M evidence

F. Derived/code-only 결정

대상 ID

ZIP 근거

라이브 근거

파생 방식

token

접근성

evidence

G. 운영 화면 결과

Admin

Client

Worker

Desktop

Tablet

Mobile

적용된 Primitive

레이아웃 보존

H. 상태 커버리지

각 상태:

구현 수

N/A 수

deferred 수

누락 수

I. 접근성

Button

Form

Tab/Filter

Dialog

Sheet

focus-visible

contrast

keyboard

reduced motion

J. CSS 격리

scope

public leak

raw color

unresolved var

!important 이전 수

!important 현재 수

유지 근거

K. 구조·기능 보존

route

menu

DOM ID

Section order

session

role guard

localStorage

API

lifecycle

mobile navigation

L. 공개 화면 회귀

6개 화면 D/T/M:

screenshot

DOM

style

bounding box

token leak

PASS/FAIL

M. 브라우저 QA

console error

pageerror

failed request

HTTP 4xx/5xx

overflow

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

product 추가

product 수정

product 삭제

audit-only

각 변경 이유

P. 범위 준수

Yes/No:

Sidebar 완성 이식

Header 완성 이식

Dashboard Shell 재설계

Admin 페이지 완성 이식

Client 페이지 완성 이식

Worker 페이지 완성 이식

route 변경

문구 변경

데이터 변경

기능 변경

권한 변경

API 변경

backend 변경

공개 화면 변경

원본 저장소 변경

main 변경

Production 배포

원격 font 추가

React/Next/Radix/shadcn 복사

기존 잘못된 브랜치 Cherry-pick

정상 답변은 모두 No입니다.

Q. 미해결 위험

legacy cascade

!important

Derived 컴포넌트

overlay

mobile

focus

long content

Round 5 Shell 적용 위험

R. Round 4 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 4 REVIEW

NOT READY — ROUND 4 INCOMPLETE

로컬 경로만 제출한 증거는 인정되지 않습니다. 핵심 문서·artifact·스크린샷은 GitHub 링크 또는 이 대화 첨부로 제출하십시오.


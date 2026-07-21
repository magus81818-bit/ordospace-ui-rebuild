# Round 2 planner prompt evidence

- Conversation title: `ORDOSPACE SalesOps 이식`
- Conversation URL: `https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748`
- Retrieved at: `2026-07-21T09:20:09.563Z`
- Acceptance marker: `[ROUND 1 ACCEPTED]`
- Round marker: `[ROUND 2 IMPLEMENTATION PROMPT]`
- Validation: accepted; starts from approved Round 1 HEAD, creates a new `redo/r02-*` branch, limits Round 2 to reference audit/mapping/evidence, preserves all ORDOSPACE product files, forbids main/original/Production/alias/deletion/auth-bypass/secret operations, and contains no conflicting early implementation request.

## Verbatim completed response

[ROUND 1 ACCEPTED]

Round 1은 통과합니다. 제출 보고서와 원격 증거에서 기준 커밋 확인, 독립 orphan 계열 기준선, 제품 파일 191/191 parity, 19개 화면·73개 컴포넌트 인벤토리, 42개 시각 증거, 브라우저·정적·백엔드 검증 결과가 확인되었습니다. Production 및 제품 코드 변경도 보고되지 않았습니다. 

붙여넣은 마크다운(1)

[ROUND 2 IMPLEMENTATION PROMPT]

당신은 ORDOSPACE 대시보드에 SalesOps 디자인 체계를 이식하는 프로젝트의 Round 2 구현 담당자입니다.

이번 라운드의 목적은 다음 두 가지입니다.

제공된 SalesOps ZIP, 실제 배포, 공식 v0 원형, 로컬 스크린샷을 전부 감사하여 SalesOps 디자인 시스템의 구성요소·상태·토큰·반응형 규칙을 근거 기반으로 추출

Round 1에서 확정한 ORDOSPACE 73개 컴포넌트 각각을 SalesOps 근거에 연결한 완전한 컴포넌트 이식 대조표 작성

이번 라운드에서는 ORDOSPACE 운영 화면의 스타일·레이아웃·기능을 변경하면 안 됩니다.

1. 시작 기준
결과 저장소

로컬:

C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ordospace-ui-rebuild

GitHub:

https://github.com/magus81818-bit/ordospace-ui-rebuild

Round 1 승인 브랜치:

redo/r01-baseline-audit

승인 HEAD:

f10779ef7dcb0e419c85497eebf45888303b557a

제품 기준선 커밋:

937d38b92d5b062f6110dba42bc4690c35f3ff15

원본 ORDOSPACE 기준 커밋:

ea1dc111440207608401c529b5bc27ebc5e61fd7

새 브랜치

Round 1 승인 HEAD에서 다음 브랜치를 생성하십시오.

redo/r02-salesops-audit

다음을 금지합니다.

ui/r01-*부터 ui/r10-* 사용

fix/scope-correction-existing-site 사용

기존 잘못된 브랜치 Cherry-pick

main 변경

Round 1 기준선보다 이전 커밋에서 분기

원본 저장소 변경

Production 배포

Vercel alias 변경

작업 시작 후 다음을 보고용 artifact로 저장하십시오.

Bash
git status
git remote -v
git branch --show-current
git log --oneline --decorate -12
git merge-base redo/r01-baseline-audit HEAD
2. 기준 자료
2.1 SalesOps 실제 배포

https://v0-sales-operations-dashboard.vercel.app/

2.2 공식 v0 원형

https://v0.app/templates/salesops-dashboard-9q2Mfgu6cDi

2.3 SalesOps 코드 ZIP — 코드 기준

C:\Users\Admin\OneDrive\Desktop\모든 자료 날짜별 아카이브\260718\sales-ops-dashboard.zip

2.4 SalesOps 스크린샷

C:\Users\Admin\OneDrive\Desktop\모든 자료 날짜별 아카이브\260718\v0 스크린샷

2.5 ORDOSPACE Round 1 기준 자료

반드시 다음 문서를 읽고 좌측 이식 대상의 기준으로 사용하십시오.

docs/redo/r01/route-screen-inventory.md

docs/redo/r01/layout-function-inventory.md

docs/redo/r01/component-state-inventory.md

docs/redo/r01/frozen-public-baseline.md

docs/redo/r01/source-parity.md

artifacts/redo/r01/browser-audit.json

evidence/redo/r01/

Round 1의 UI-001부터 UI-073까지 모든 Inventory ID를 보존하십시오. ID를 재번호화하거나 일부 행을 생략하면 안 됩니다.

3. 자료 우선순위

SalesOps 근거가 충돌할 경우 다음 우선순위를 적용하십시오.

제공된 SalesOps ZIP의 실제 코드

SalesOps 실제 Vercel 배포의 렌더링 결과

공식 v0 원형 페이지

제공된 로컬 스크린샷

단, 전체 시각적 완성도와 렌더링 결과는 실제 배포와 공식 v0 화면을 반드시 함께 대조하십시오.

ZIP 코드가 라이브 화면과 다른 경우 임의로 하나를 선택하지 말고 다음을 기록하십시오.

차이가 발생한 컴포넌트

ZIP 코드 근거

라이브 화면 근거

공식 v0 근거

가능한 원인

이후 이식에서 채택할 기준

채택 이유

불확실성

검증된 SalesOps 공개 GitHub 저장소는 없습니다.

다음을 금지합니다.

임의의 GitHub 저장소를 SalesOps 원본으로 사용

유사한 Sales Dashboard 프로젝트를 근거로 사용

검색 결과의 다른 템플릿을 섞어 사용

SalesOps에 없는 스타일을 관행만으로 있다고 단정

ZIP을 보지 않고 라이브 화면만으로 코드 구조 추정

4. Round 2 변경 허용 범위

허용:

Round 2 감사 문서

기계 판독 가능한 JSON/CSV

SalesOps 분석용 로컬 스크립트

Playwright 기반 캡처·상태 감사 스크립트

SalesOps 참조 스크린샷

ZIP 파일 목록과 해시 artifact

대조표 검증 스크립트

Round 1 제품 parity 재검증 자료

금지:

ORDOSPACE 운영 화면 CSS 변경

ORDOSPACE HTML 구조 변경

ORDOSPACE UI 컴포넌트 변경

ORDOSPACE 데이터 변경

ORDOSPACE 기능 변경

Sidebar 또는 Header 변경

토큰을 운영 앱에 실제 적용

UI Lab 구현

새로운 운영 라우트 추가

공개 화면 변경

SalesOps 코드의 제품 코드 복사

shadcn 전체 복사

Next.js 전용 코드를 ORDOSPACE에 추가

패키지 구조의 대규모 변경

Round 2 종료 시 제품 코드 parity는 Round 1 제품 기준선과 동일해야 합니다.

5. ZIP 무결성 및 구조 감사

다음 문서를 작성하십시오.

docs/redo/r02/salesops-source-audit.md

5.1 ZIP 기본 정보

기록할 항목:

절대 경로

파일 존재 여부

파일 크기

SHA-256 전체값

압축 파일 개수

최상위 디렉터리 구조

추출 위치

추출 성공 여부

손상 파일 여부

중복 파일 여부

숨김 파일 및 생성물 여부

ZIP 자체는 저장소에 복사하지 마십시오. 저작권·용량·중복 문제를 피하고, 파일 목록과 해시만 artifact로 저장하십시오.

기계 판독 artifact:

artifacts/redo/r02/salesops-zip-manifest.json

artifacts/redo/r02/salesops-file-hashes.json

5.2 기술 구조

다음을 확인하십시오.

프레임워크

라우팅 방식

스타일링 방식

Tailwind 여부와 버전

CSS 변수

디자인 토큰

컴포넌트 라이브러리

shadcn 사용 범위

Radix 사용 범위

아이콘 라이브러리

차트 라이브러리

폰트 설정

외부 폰트 의존성

이미지 및 asset

상태 관리

mock 데이터

반응형 breakpoint

애니메이션

테마 처리

dark/light 처리

build 전용 코드

Next.js 전용 코드

ORDOSPACE 정적 앱에 직접 사용할 수 없는 코드

각 결론에 반드시 ZIP 내부 파일 경로와 코드 근거를 붙이십시오.

5.3 파일 분류

ZIP 파일을 다음으로 분류하십시오.

Design token source

Global style source

Layout source

Primitive source

Composite component source

Page-only source

Chart source

State/interaction source

Asset

Mock data

Framework/build-only

Duplicate/generated

Irrelevant to migration

기계 판독 artifact:

artifacts/redo/r02/salesops-file-classification.json

6. 라이브 화면 전체 감사

Playwright를 우선 사용하여 SalesOps 실제 배포를 감사하십시오.

뷰포트

Desktop: 1440 × 1000

Tablet: 1024 × 1366

Mobile: 390 × 844

모든 탐색 가능 화면

SalesOps Sidebar와 화면 내부 링크를 통해 도달 가능한 모든 페이지·뷰를 조사하십시오.

Round 1 보고에서 발견된 “8개 메뉴”를 정답으로 고정하지 마십시오. 실제 화면과 코드에서 다음을 모두 확인하십시오.

메뉴 항목

메뉴 순서

기본 화면

Sidebar collapse

Header

Breadcrumb 또는 상단 정보

검색

필터

날짜 선택

Dropdown

Tab

Table

Pagination

Chart

Metric

Activity/List

Modal/Dialog

Drawer/Sheet

Tooltip

Hover

Focus

Active

Selected

Disabled

Loading

Skeleton

Empty

Error

Success

반응형 상태

화면별로 다음을 캡처하십시오.

기본 상태

주요 인터랙션 상태

Desktop

Tablet

Mobile

긴 콘텐츠 또는 overflow 상태

Sidebar expanded/collapsed

Dropdown/Dialog 등 overlay 상태

증거 경로:

evidence/redo/r02/salesops-live/desktop/

evidence/redo/r02/salesops-live/tablet/

evidence/redo/r02/salesops-live/mobile/

evidence/redo/r02/salesops-live/states/

라이브 화면 감사 문서:

docs/redo/r02/salesops-live-audit.md

각 화면에 다음을 기록하십시오.

필드	내용
화면 이름	실제 표시 이름
URL	정확한 URL
메뉴 위치	진입 방법
레이아웃	Shell과 Section 구조
컴포넌트	발견된 요소
상태	재현한 상태
Desktop	레이아웃 특징
Tablet	레이아웃 특징
Mobile	레이아웃 특징
ZIP 근거	파일 경로
화면 근거	스크린샷
차이	ZIP/라이브/v0 차이
7. SalesOps 디자인 토큰 추출

다음 문서를 작성하십시오.

docs/redo/r02/salesops-token-spec.md

기계 판독 artifact:

artifacts/redo/r02/salesops-tokens.json

필수 토큰 범주
Color

Dashboard background

Sidebar background

Header background

Surface

Elevated surface

Muted surface

Border

Divider

Primary text

Secondary text

Muted text

Accent

Accent hover

Accent active

Success

Warning

Error/Critical

Informational

Chart palette

Overlay

Focus ring

Disabled

각 색상은 가능한 경우 다음을 모두 기록하십시오.

원본 변수명

CSS 값

RGB 또는 HSL

적용 컴포넌트

light/dark 여부

ZIP 근거

라이브 화면 확인

공식 v0 확인

추출 신뢰도

Typography

Font family

fallback stack

font size

line-height

font weight

letter-spacing

title hierarchy

body hierarchy

label

caption

table text

metric value

badge text

button text

원격 폰트가 사용된다면 다음을 분리하십시오.

실제 라이브 의존성

ZIP 선언

ORDOSPACE 이식 시 허용 여부

로컬 또는 system fallback 전략

Round 2에서는 실제 대체 폰트를 적용하지 않습니다.

Geometry

Border width

Radius scale

Shadow scale

Component height

Icon size

Avatar size

Sidebar width

Collapsed Sidebar width

Header height

Container width

Grid gap

Section gap

Card padding

Table row height

Control spacing

Interaction

Hover

Focus-visible

Active/pressed

Selected

Disabled

Loading

Transition duration

Easing

Overlay opacity

Dropdown/Modal elevation

Responsive

Breakpoints

Sidebar collapse 규칙

모바일 Sidebar 처리

Header 축약

Grid column 변화

Table overflow

Chart resize

control stacking

숨김 요소

모바일 navigation 존재 여부

값을 눈대중으로만 작성하지 마십시오.

값의 출처를 다음 중 하나로 표시하십시오.

Declared

Computed

Measured

Inferred

Inferred에는 반드시 근거와 불확실성을 적으십시오.

8. SalesOps 컴포넌트 카탈로그

다음 문서를 작성하십시오.

docs/redo/r02/salesops-component-catalog.md

기계 판독 artifact:

artifacts/redo/r02/salesops-component-catalog.json

각 SalesOps 컴포넌트에 고유 ID를 부여하십시오.

예:

SO-SHELL-001

SO-NAV-001

SO-CARD-001

SO-TABLE-001

SO-STATE-001

필수 필드
필드	내용
SalesOps ID	고유 ID
명칭	사람이 읽는 이름
범주	Primitive/Composite/Layout/State/Chart
ZIP 파일	정확한 경로
export 또는 함수	코드 식별자
사용 화면	실제 위치
DOM 구조	핵심 계층
스타일 근거	클래스·CSS 변수
variant	존재하는 variant
state	모든 확인 상태
responsive	D/T/M 동작
data coupling	mock data와 결합 여부
framework coupling	Next/React/Radix 등
직접 재사용 가능성	High/Medium/Low/None
이식 방식	Recreate/Adapt/Derive/Do not use
스크린샷	증거 경로
비고	차이·위험
반드시 감사할 범주

Dashboard Shell

Sidebar

Sidebar item

Sidebar active state

Sidebar collapsed state

Header

Breadcrumb

Page title

Section title

Card

Metric card

Button

Icon button

Input

Textarea

Select

Checkbox

Radio

Switch

Tab

Filter

Search

Pagination

Badge

Status chip

Table

Table header

Table row

List

List row

Chart container

Chart axis

Chart legend

Chart tooltip

Progress

Avatar

Dropdown

Popover

Modal/Dialog

Drawer/Sheet

Toast/feedback

Loading

Skeleton

Empty

Error

Success

Disabled

Hover

Focus

Active

Selected

SalesOps에 실제로 없는 항목은 억지로 만들지 말고 Not present로 기록하십시오.

9. ORDOSPACE ↔ SalesOps 완전 대조표

이번 라운드의 핵심 산출물입니다.

문서:

docs/redo/r02/component-migration-matrix.md

기계 판독 artifact:

artifacts/redo/r02/component-migration-matrix.json

artifacts/redo/r02/component-migration-matrix.csv

Round 1의 UI-001부터 UI-073까지 정확히 73개 행이 모두 존재해야 합니다.

필수 열
열	요구사항
ORDOSPACE Inventory ID	Round 1 ID 그대로
ORDOSPACE 역할과 라우트	모든 발견 위치
ORDOSPACE 컴포넌트	현재 명칭
기존 위치와 기능	레이아웃·목적
현재 상태	지원 상태 전체
대응 SalesOps ID	카탈로그 ID
대응 SalesOps 컴포넌트	명칭
SalesOps ZIP 근거	정확한 파일 경로
SalesOps 코드 근거	함수·export·클래스·변수
라이브 근거	URL 및 스크린샷
공식 v0 근거	확인 내용
이식 분류	Exact / Adapted / Derived
분류 이유	구체적 근거
유지할 레이아웃	ORDOSPACE에서 동결되는 구조
유지할 데이터	의미·한국어 문구
유지할 기능	액션·권한·세션·API
이식할 외형	토큰·DOM wrapper·state 표현
금지되는 복사	SalesOps 메뉴·영업 데이터 등
responsive 전략	D/T/M
접근성 요구	label/focus/keyboard 등
구현 라운드	Round 3~9
검증 방법	visual/DOM/function
불확실성	없음 또는 설명
완료 상태	Mapped for implementation 등
증거	파일 및 캡처
이식 분류 정의
Exact

SalesOps에 목적과 구조가 사실상 동일한 컴포넌트가 존재하며, ORDOSPACE의 데이터와 액션만 유지해 외형을 거의 동일하게 재현할 수 있는 경우.

단순히 둘 다 Card 또는 Button이라는 이유로 Exact로 분류하지 마십시오.

Adapted

대응 컴포넌트는 존재하지만 다음 중 하나 이상이 필요한 경우:

ORDOSPACE 고유 데이터 구조 수용

다른 내부 DOM

다른 상태 집합

역할·권한 반영

정적 앱용 재구현

접근성 보강

모바일 동작 조정

Derived

SalesOps에 정확한 대응 요소가 없지만 SalesOps의 토큰과 시각 문법으로 호환 컴포넌트를 파생해야 하는 경우.

Derived에는 반드시 다음을 적으십시오.

어떤 SalesOps 요소들을 조합하는지

어떤 토큰을 사용하는지

왜 Exact/Adapted가 아닌지

ORDOSPACE 목적을 어떻게 보존하는지

중요 규칙

대조표에 없는 컴포넌트는 이후 임의 스타일링 금지

“전역 CSS 적용”만으로 매핑 완료 처리 금지

같은 SalesOps Card를 모든 ORDOSPACE 요소에 무차별 대응 금지

상태별 대응 근거가 없는 행은 완료 처리 금지

라이브 화면에서 확인하지 못한 상태는 코드 근거와 함께 Code only 표시

SalesOps에 존재하지 않는 기능을 존재한다고 작성 금지

10. 상태 커버리지 매트릭스

문서:

docs/redo/r02/state-coverage-matrix.md

artifact:

artifacts/redo/r02/state-coverage-matrix.json

각 ORDOSPACE Inventory ID에 대해 다음 상태를 표시하십시오.

Default

Hover

Focus-visible

Active/Pressed

Selected

Disabled

Loading

Skeleton

Empty

Error

Success

Validation error

Long content

Overflow

Desktop

Tablet

Mobile

상태 값:

SalesOps exact evidence

SalesOps adaptable evidence

Derived from token grammar

Not applicable

Unresolved

Unresolved가 남아 있다면 Round 2 완료로 보고하지 마십시오. 근거가 실제로 없으면 Derived from token grammar로 설계하되 파생 규칙을 명시하십시오.

11. 이식 아키텍처 결정 기록

문서:

docs/redo/r02/migration-architecture-decisions.md

Round 3 이후 구현에 필요한 의사결정을 기록하되 실제 코드는 적용하지 마십시오.

최소 ADR:

Dashboard 전용 스타일 격리 방식

공개 화면 동결 보장 방식

CSS token namespace

기존 CSS와 SalesOps token 충돌 방지

정적 앱에서 React/shadcn 구조를 재현하는 방식

Radix 의존 컴포넌트의 대체 원칙

Next.js 전용 코드 배제 원칙

원격 폰트 배제 또는 대체 원칙

Lucide 아이콘 호환 정책

차트 스타일 이식 정책

Overlay z-index 정책

반응형 Sidebar 정책

상태 클래스 또는 data-* 속성 정책

접근성 보존 정책

기존 기능 DOM selector 안정성 정책

각 결정에 다음을 포함하십시오.

Context

Decision

근거

대안

배제한 대안

위험

적용 라운드

검증 기준

12. 구현 라운드 배분

문서:

docs/redo/r02/round-allocation-plan.md

73개 ORDOSPACE Inventory ID를 Round 3~9에 전부 배분하십시오.

기본 역할:

Round 3: 토큰

Round 4: Primitive 및 UI Lab

Round 5: Sidebar·Header·Dashboard Shell

Round 6: Admin

Round 7: Client

Round 8: Worker

Round 9: 역할 간 누락·반응형·접근성·상태 보강

각 Inventory ID는 다음을 가져야 합니다.

주 구현 라운드

의존 라운드

검증 라운드

역할

예상 난이도

핵심 위험

다음을 검증하십시오.

73개 전부 배분

중복 주 구현 없음

미배정 없음

Dashboard target만 배분

Frozen public은 구현 대상에서 제외하고 회귀 대상으로 지정

QA gallery는 Round 4 UI Lab과 혼동하지 않도록 별도 처리

13. 대조표 자동 검증

다음 경로에 검증 스크립트를 추가하십시오.

tests/redo/r02/

최소 검사:

Round 1 Inventory ID 73개 추출

Round 2 대조표 ID 73개와 정확히 일치

누락 ID 없음

중복 ID 없음

알 수 없는 추가 ID 없음

모든 행에 SalesOps 대응 또는 명시적 Derived 근거 존재

모든 행에 Exact/Adapted/Derived 중 하나 존재

모든 행에 구현 라운드 존재

모든 행에 ZIP 또는 Derived 근거 존재

모든 Dashboard target에 검증 방법 존재

Frozen public이 운영 이식 대상으로 지정되지 않음

모든 증거 경로 존재

JSON과 CSV와 Markdown 행 수 일치

Unresolved 상태 0

제품 파일 parity 유지

실행 명령을 제공하십시오.

예:

Bash
npm --prefix tests/redo/r02 ci
npm --prefix tests/redo/r02 run validate

테스트 구조는 저장소 상황에 맞게 최소한으로 구성하십시오.

14. SalesOps 캡처 검증

Playwright 감사 스크립트에서 다음을 수집하십시오.

console error

pageerror

실패한 request

HTTP 4xx/5xx

각 URL title

실제 메뉴 수와 순서

반응형 layout metrics

Sidebar expanded/collapsed width

Header height

주요 Card padding

Table row height

주요 색상 computed style

typography computed style

radius

shadow

focus-visible

hover 상태

기계 판독 artifact:

artifacts/redo/r02/salesops-browser-audit.json

측정치가 환경에 따라 달라질 수 있으면 허용 범위와 측정 방법을 기록하십시오.

15. ORDOSPACE 제품 parity 재검증

Round 2 완료 전에 Round 1 제품 기준선과 비교하십시오.

기준:

937d38b92d5b062f6110dba42bc4690c35f3ff15

다음이 0이어야 합니다.

제품 파일 수정

제품 파일 삭제

제품 파일 추가

공개 화면 변화

대시보드 화면 변화

라우트 변화

기능 변화

Round 2 전용 문서·테스트·artifact·evidence만 추가할 수 있습니다.

문서:

docs/redo/r02/product-parity.md

artifact:

artifacts/redo/r02/product-parity.json

Round 1 캡처와 Round 2 ORDOSPACE 캡처를 비교하여 운영 화면이 변하지 않았다는 증거를 남기십시오.

16. 필수 산출물

최소 다음 파일이 있어야 합니다.

docs/redo/r02/README.md
docs/redo/r02/salesops-source-audit.md
docs/redo/r02/salesops-live-audit.md
docs/redo/r02/salesops-token-spec.md
docs/redo/r02/salesops-component-catalog.md
docs/redo/r02/component-migration-matrix.md
docs/redo/r02/state-coverage-matrix.md
docs/redo/r02/migration-architecture-decisions.md
docs/redo/r02/round-allocation-plan.md
docs/redo/r02/product-parity.md
docs/redo/r02/verification-results.md

artifacts/redo/r02/salesops-zip-manifest.json
artifacts/redo/r02/salesops-file-hashes.json
artifacts/redo/r02/salesops-file-classification.json
artifacts/redo/r02/salesops-tokens.json
artifacts/redo/r02/salesops-component-catalog.json
artifacts/redo/r02/component-migration-matrix.json
artifacts/redo/r02/component-migration-matrix.csv
artifacts/redo/r02/state-coverage-matrix.json
artifacts/redo/r02/salesops-browser-audit.json
artifacts/redo/r02/product-parity.json

tests/redo/r02/
evidence/redo/r02/salesops-live/
evidence/redo/r02/ordospace-unchanged/
17. 검증 명령

기존 Round 1 검증도 다시 실행하십시오.

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

가능하면 backend의 기존 비파괴 검증도 재실행하십시오.

금지:

Production DB mutation

Production API write

테스트 통과를 위한 오류 숨김

테스트 기대값을 실제 결함에 맞춰 약화

ignoreBuildErrors

공개 화면 snapshot 갱신으로 회귀 은폐

Round 1 baseline 이미지 덮어쓰기

모든 실행 결과는 다음에 기록하십시오.

docs/redo/r02/verification-results.md

18. 완료 조건

다음 조건을 전부 만족해야 합니다.

 redo/r02-salesops-audit가 Round 1 승인 HEAD에서 분기됨

 SalesOps ZIP 전체 파일을 감사함

 ZIP 전체 SHA-256과 파일 manifest를 기록함

 실제 SalesOps 배포의 모든 탐색 가능 화면을 감사함

 공식 v0 원형을 대조함

 제공된 8개 로컬 스크린샷을 확인함

 디자인 토큰을 근거 기반으로 추출함

 SalesOps 컴포넌트 카탈로그를 작성함

 ORDOSPACE 73개 Inventory ID가 전부 대조표에 있음

 누락·중복·추가 ID가 없음

 모든 행이 Exact/Adapted/Derived로 분류됨

 모든 Derived 행에 파생 근거가 있음

 모든 행에 ZIP·라이브·v0 근거 상태가 표시됨

 모든 상태에 대응 전략이 있음

 Unresolved가 0개임

 Round 3~9 배분이 완전함

 대조표 자동 검증이 통과함

 Round 1 기존 테스트가 통과함

 제품 파일 parity diff가 0임

 ORDOSPACE 화면이 시각적으로 변경되지 않음

 공개 화면이 변경되지 않음

 기능·라우트·데이터·권한이 변경되지 않음

 Production 배포가 없음

 브랜치를 원격에 push함

 모든 증거가 GitHub 또는 대화 첨부로 검수 가능함

하나라도 충족하지 못하면 완료로 표현하지 마십시오.

19. Git 규칙

허용:

redo/r02-salesops-audit에만 commit

원격 branch push

Draft PR 생성

금지:

main 변경

Round 1 브랜치 수정

기존 ui/r* 수정

기존 fix/* 수정

원본 ORDOSPACE 저장소 변경

force push

Production 배포

Vercel alias 변경

ZIP 원본 commit

비밀정보 commit

권장 커밋:

docs(redo-r02): audit SalesOps source and live surfaces

docs(redo-r02): catalog SalesOps tokens and components

docs(redo-r02): map ORDOSPACE inventory to SalesOps

test(redo-r02): validate migration matrix and parity

docs(redo-r02): publish verification evidence

20. 제출 형식

작업 완료 후 다음 Marker로 시작하십시오.

[ROUND 2 IMPLEMENTATION REPORT]

보고서는 아래 순서를 따르십시오.

A. 작업 식별

저장소

브랜치

시작 HEAD

종료 HEAD

Round 1 merge-base

Branch 또는 Draft PR URL

B. 기준 접근 결과

SalesOps ZIP

SalesOps 실제 배포

공식 v0

로컬 스크린샷

Round 1 기준 문서

접근 실패 항목

C. ZIP 감사 결과

SHA-256 전체값

파일 수

구조

기술 스택

스타일링 방식

주요 source 파일

직접 이식 불가 요소

manifest 링크

D. 라이브 감사 결과

전체 화면 수

메뉴와 순서

재현한 상태 수

Desktop/Tablet/Mobile 결과

console/pageerror/network 결과

라이브·ZIP·v0 차이

E. 토큰 결과

범주별 개수:

Color

Typography

Geometry

Shadow

Interaction

Responsive

Chart

각 범주의 대표 근거와 전체 문서 링크를 제공하십시오.

F. SalesOps 컴포넌트 카탈로그

전체 SalesOps ID 수

범주별 개수

실제 라이브 확인 수

Code-only 수

Not present 수

framework coupling 요약

G. ORDOSPACE 대조표

ORDOSPACE 행 수

Exact 수

Adapted 수

Derived 수

누락 수

중복 수

추가 ID 수

Unresolved 수

전체 대조표 링크

UI-001부터 UI-073까지 자동 검증 결과를 포함하십시오.

H. 상태 커버리지

상태별:

Exact evidence

Adaptable evidence

Derived

Not applicable

Unresolved

I. 구현 라운드 배분

Round 3

Round 4

Round 5

Round 6

Round 7

Round 8

Round 9

각 라운드별 Inventory ID 수를 보고하십시오.

J. 아키텍처 결정

주요 ADR과 Round 3 이후 강제할 원칙을 요약하십시오.

K. 테스트 결과

각 명령:

명령

종료 코드

PASS/FAIL/SKIPPED

실패 원인

artifact 링크

L. 제품 parity

기준 커밋

제품 추가

제품 수정

제품 삭제

ORDOSPACE 시각 차이

공개 화면 차이

기능 차이

정상 값은 전부 0 또는 없음이어야 합니다.

M. 변경 파일

추가

수정

삭제

각 변경 이유

N. 범위 준수

명시적으로 답하십시오.

ORDOSPACE 디자인 변경: Yes/No

ORDOSPACE 레이아웃 변경: Yes/No

ORDOSPACE 기능 변경: Yes/No

ORDOSPACE 라우트 변경: Yes/No

ORDOSPACE 데이터 변경: Yes/No

공개 화면 변경: Yes/No

원본 저장소 변경: Yes/No

main 변경: Yes/No

Production 배포: Yes/No

SalesOps 제품 코드 복사: Yes/No

기존 잘못된 브랜치 Cherry-pick: Yes/No

정상 답변은 모두 No입니다.

O. 미해결 위험

ZIP·라이브·v0 불일치

재현하지 못한 상태

측정 불확실성

framework coupling

접근성 위험

반응형 위험

Round 3 이전에 해결해야 할 사항

P. Round 2 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 2 REVIEW

NOT READY — ROUND 2 INCOMPLETE

로컬 경로만 있는 증거는 인정되지 않습니다. 모든 핵심 문서·artifact·스크린샷을 GitHub 링크 또는 이 대화 첨부로 제출하십시오.


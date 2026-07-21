# Round 3 Planner Response

- ChatGPT conversation URL: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
- Received at: 2026-07-21T09:46:31.469Z
- Round Marker: `[ROUND 3 IMPLEMENTATION PROMPT]`

## Original response

[ROUND 2 ACCEPTED]

Round 2는 통과합니다. 승인된 Round 1 HEAD에서 정확히 분기했고, 최종 HEAD까지의 변경은 Round 2 문서·검증 스크립트·artifact·증거 파일 추가로 한정되어 있습니다. 73개 ORDOSPACE Inventory ID는 Exact 10, Adapted 42, Derived 21로 전부 매핑되었으며 누락·중복·추가·미해결 항목은 없습니다. SalesOps의 모바일 결함, 프레임워크 결합, 접근성 결함과 ignoreBuildErrors도 복사 금지 대상으로 적절히 분리되었습니다. 

붙여넣은 마크다운(1)

[ROUND 3 IMPLEMENTATION PROMPT]

편집

당신은 ORDOSPACE 대시보드에 SalesOps 디자인 체계를 이식하는 프로젝트의 Round 3 구현 담당자입니다.

이번 라운드의 목표는 SalesOps에서 감사·확정한 디자인 토큰을 ORDOSPACE의 인증된 대시보드 영역에만 격리하여 실제 적용하는 것입니다.

Round 3에서는 다음만 구현합니다.

Dashboard background

Surface 계층

Color token

Typography token

Border

Radius

Shadow

Focus·Hover·Active·Selected·Disabled 등 공통 상태 토큰

Chart·Overlay 등 이후 라운드에서 사용할 토큰 기반

이번 라운드에서는 개별 컴포넌트 구조, Sidebar·Header 외형, 역할별 화면 스타일을 완성하지 않습니다.

1. 시작 기준
저장소

로컬:

C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ordospace-ui-rebuild

GitHub:

https://github.com/magus81818-bit/ordospace-ui-rebuild

승인된 Round 2

브랜치:

redo/r02-salesops-audit

승인 HEAD:

921280578b4261e1cb25a1f507e0f71915c390d2

새 브랜치

Round 2 승인 HEAD에서 다음 브랜치를 생성하십시오.

redo/r03-dashboard-tokens

다음 명령 결과를 artifact로 저장하십시오.

git status
git remote -v
git branch --show-current
git log --oneline --decorate -12
git merge-base redo/r02-salesops-audit HEAD

기계 판독 파일:

artifacts/redo/r03/git-prestate.json

금지

Round 2 승인 HEAD 이전에서 분기

기존 ui/r* 또는 fix/* 사용

기존 잘못된 브랜치 Cherry-pick

main 변경

원본 ORDOSPACE 저장소 변경

Production 배포

Vercel alias 변경

force push

2. 반드시 읽을 Round 2 기준 자료

구현 전에 다음 문서를 모두 읽고 실제 코드 변경 계획에 반영하십시오.

docs/redo/r02/salesops-token-spec.md

artifacts/redo/r02/salesops-tokens.json

docs/redo/r02/component-migration-matrix.md

artifacts/redo/r02/component-migration-matrix.json

docs/redo/r02/state-coverage-matrix.md

artifacts/redo/r02/state-coverage-matrix.json

docs/redo/r02/migration-architecture-decisions.md

docs/redo/r02/round-allocation-plan.md

docs/redo/r02/product-parity.md

docs/redo/r01/frozen-public-baseline.md

docs/redo/r01/layout-function-inventory.md

SalesOps 원본 근거:

app/globals.css

실제 SalesOps 배포 computed style

Round 2 token artifact

Round 2 screenshots

Round 3에서 토큰 값을 임의로 다시 정하거나 일반적인 Dark Dashboard 관행으로 대체하지 마십시오.

3. 절대 보존 대상

다음은 Round 3 전후에 동일해야 합니다.

ORDOSPACE 대시보드 레이아웃

Sidebar 너비와 메뉴 순서

Header 구조

각 화면 Section 순서

Grid와 column 구조

Admin·Client·Worker 라우트

해시 URL

모든 한국어 문구

실제 데이터와 데이터 의미

버튼과 폼의 기능

역할·권한

세션

로컬 스토리지

API

백엔드

DOM ID

기능 코드가 사용하는 selector

공개·비대시보드 화면의 시각 결과

모바일 Sidebar와 모바일 하단 탭 동작

Round 3는 디자인 토큰 계층만 추가·적용하는 라운드입니다.

4. 적용 범위 격리
4.1 기본 격리 원칙

SalesOps 토큰은 인증된 Dashboard Shell 내부에서만 유효해야 합니다.

Round 2 ADR에서 확정한 다음 원칙을 구현하십시오.

--ordo-so-* namespace

인증된 Dashboard 전용 root scope

공개 화면과 CSS cascade 분리

기존 selector와 충돌하지 않는 additive 방식

기존 기능 selector 보존

권장 scope는 현재 앱 구조를 조사한 뒤 다음 중 가장 안전한 것을 사용하십시오.

body.auth-on

또는 실제 Dashboard Shell root에 추가하는 명시적 클래스나 data-* 속성.

단, body.auth-on이 공개 화면이나 인증 화면에 남을 가능성이 있다면 더 좁은 Dashboard root scope를 사용하십시오.

예:

body.auth-on .app-shell

또는:

[data-ordo-dashboard-shell]
4.2 공개 화면 격리

다음 화면에는 신규 --ordo-so-* 토큰의 시각적 적용이 없어야 합니다.

landing

auth

terms

privacy

support

select-workspace

기타 공개 화면

공개 화면에서 동일한 기존 클래스명을 사용하더라도 신규 Dashboard CSS가 침범하지 않도록 하십시오.

4.3 403과 QA 화면

forbidden-403은 현재 Shell 및 인증 상태와의 관계를 조사하여 분류대로 처리

기존 components-gallery는 QA 화면이며 운영 화면으로 간주하지 않음

Round 4 UI Lab을 미리 구현하지 않음

QA 화면에 토큰이 노출될 필요가 있다면 운영 컴포넌트 변경 없이 token swatch 정도의 검증 수단만 허용

새로운 운영 라우트 추가 금지

5. 토큰 구현
5.1 전용 토큰 파일

가능한 경우 Dashboard 전용 토큰 파일을 추가하십시오.

권장 예:

app/styles/dashboard-salesops.tokens.css

프로젝트의 현재 스타일 로딩 구조상 다른 위치가 더 안전하다면 변경할 수 있으나, 이유를 문서화하십시오.

토큰 파일에는 실제 컴포넌트별 세부 스타일을 넣지 마십시오.

허용:

CSS custom properties

scope

공통 semantic state token

reduced-motion 관련 token

공통 focus ring foundation

Dashboard root의 최소 background·foreground 적용

금지:

Sidebar 완성 스타일

Header 완성 스타일

Metric Card 완성 스타일

Table 완성 스타일

역할별 화면 전용 selector

페이지별 임시 override

!important 남용

5.2 필수 namespace

모든 신규 토큰은 다음 prefix를 사용하십시오.

--ordo-so-

예:

--ordo-so-bg-dashboard
--ordo-so-bg-surface
--ordo-so-bg-surface-muted
--ordo-so-border-default
--ordo-so-text-primary
--ordo-so-text-secondary
--ordo-so-accent
--ordo-so-radius-card

기존 전역 변수명을 SalesOps 원본 변수명으로 직접 덮어쓰지 마십시오.

다음을 금지합니다.

--background: ...
--card: ...
--primary: ...

기존 앱 전체에 영향을 줄 수 있는 비격리 전역 변수 재정의는 허용되지 않습니다.

6. 필수 토큰 범주

Round 2에서 추출한 토큰을 다음 semantic 체계로 구현하십시오.

6.1 Background와 Surface

최소:

Dashboard root background

Sidebar surface foundation

Header surface foundation

Primary surface

Secondary/muted surface

Elevated surface

Overlay surface

Hover surface

Selected surface

Disabled surface

Sidebar와 Header의 구체적인 selector 적용은 Round 5 범위입니다. Round 3에서는 사용 가능한 semantic token을 정의하고 Dashboard 전체 배경·기본 Surface 계층만 최소 적용하십시오.

6.2 Text

최소:

Primary

Secondary

Muted

Inverse

Accent

Success

Warning

Critical

Informational

Disabled

Link

Link hover

6.3 Border와 Divider

최소:

Default border

Subtle border

Strong border

Interactive border

Focus border

Selected border

Error border

Divider

Overlay border

6.4 Accent와 Lifecycle Tone

ORDOSPACE의 상태 의미는 보존해야 합니다.

필수 semantic tone:

neutral

informational

pending

warning

success

critical

disabled

SalesOps 색상 문법을 사용하되 다음을 지키십시오.

상태 의미를 SalesOps 영업 개념으로 바꾸지 않음

기존 ORDOSPACE status 값 변경 금지

lifecycle 로직 변경 금지

색상만 보고 상태를 판별하도록 만들지 않음

text/icon/label 의미 유지

6.5 Typography

Round 2 결과에 따라 SalesOps는 DM Sans와 JetBrains Mono를 선언하지만 packaged remote font가 없습니다.

따라서:

원격 폰트 네트워크 의존성을 추가하지 마십시오.

빌드 시 외부 폰트 다운로드를 추가하지 마십시오.

폰트 파일을 임의로 저장소에 복사하지 마십시오.

system/local fallback stack을 사용하십시오.

기존 한글 가독성을 우선하십시오.

토큰으로 최소 정의:

sans family

mono family

page title

section title

card title

metric value

body

label

caption

button

table

badge

Round 3에서는 각 기존 요소의 font-size를 전부 강제 변경하지 마십시오. 토큰과 Dashboard root 기본 typography foundation을 구현하고, 개별 primitive 적용은 Round 4 이후로 남기십시오.

6.6 Radius

최소 scale:

none

xs

sm

md

lg

card

control

pill

overlay

Round 2에서 확인한 SalesOps 주요 12px radius를 기준으로 semantic scale을 구성하십시오.

모든 요소에 일괄 12px를 적용하면 안 됩니다.

6.7 Shadow

SalesOps는 강한 다중 shadow보다 border 중심의 elevation을 사용합니다.

최소:

none

surface

raised

overlay

focus

과도한 glow 또는 범용 box-shadow를 전체 Card에 일괄 적용하지 마십시오.

6.8 Geometry와 Density

최소:

control heights

icon sizes

card padding

content gap

section gap

compact row height

standard row height

overlay padding

chart gap

Round 3에서는 토큰 정의만 하며 현재 레이아웃 치수를 변경하지 않습니다.

특히 금지:

Sidebar 260px 적용

Collapsed Sidebar 72px 적용

Header 64px 강제 적용

모바일 fixed Sidebar

Content width 변경

Grid gap 일괄 변경

Card padding 일괄 변경

이 값들은 토큰으로 기록할 수 있으나 실제 Shell·컴포넌트 적용은 Round 4~5에서 수행합니다.

6.9 Chart

최소:

chart-1~chart-5

axis

grid

legend

tooltip surface

tooltip border

tooltip text

기존 차트 데이터와 라이브러리 구조를 변경하지 마십시오.

6.10 Overlay

최소:

backdrop

surface

border

shadow

z-index scale

animation duration

Modal·Dialog·Drawer의 구조 변경은 Round 4 이후입니다.

7. 상태 토큰

다음 상태를 semantic token으로 정의하십시오.

default

hover

focus-visible

active/pressed

selected

disabled

loading

skeleton

empty

error

success

validation error

상태별 최소 구성:

background

foreground

border

ring

opacity

cursor

transition

Focus

기존 ORDOSPACE 접근성을 보존하십시오.

:focus-visible 기반

키보드 포커스 명확

단순 outline 제거 금지

배경과 충분히 구분되는 ring

icon-only control에도 적용 가능한 foundation

Disabled

비활성화 기능을 활성화된 것처럼 보이게 하지 않음

기존 disabled, aria-disabled, class 기반 상태 모두 고려

pointer-events를 전역으로 무분별하게 제거하지 않음

Loading과 Skeleton

Round 3에서는 token만 정의하십시오.

실제 Skeleton DOM 추가나 기존 Loading 구조 변경은 금지합니다.

Reduced motion

다음을 지원하십시오.

@media (prefers-reduced-motion: reduce)

animation과 transition을 완전히 전역 제거하지 말고 신규 Dashboard token 기반 동작에만 안전하게 적용하십시오.

8. 최소 실제 적용 범위

토큰이 선언만 되고 사용되지 않는 상태는 허용되지 않습니다. 다만 Round 3의 범위를 넘지 않도록 다음 수준까지만 적용하십시오.

반드시 적용

인증 Dashboard root background

Dashboard root 기본 foreground

Dashboard root 기본 font stack

Dashboard root 기본 selection 색상

Dashboard root 공통 focus-visible foundation

기존 generic surface 계층에 대한 최소 semantic 연결

기존 border 계층에 대한 최소 semantic 연결

선택적 적용

기존 CSS 구조상 안전하게 가능한 경우:

공통 text muted 계층

기존 generic status tone 변수 연결

기존 generic divider 연결

적용 금지

Sidebar 메뉴 item 완성

Sidebar active UI 완성

Header 버튼 완성

Metric Card 완성

Table 완성

Input·Select 완성

Modal·Drawer 완성

Admin·Client·Worker 페이지별 스타일 완성

Round 3 결과는 “전체가 완성된 SalesOps 화면”이 아니라, 이후 컴포넌트가 일관되게 사용할 Dashboard 전용 디자인 기반층이어야 합니다.

9. 기존 CSS와의 연결 원칙

기존 CSS를 대규모로 삭제하거나 재작성하지 마십시오.

허용되는 방식:

body.auth-on .existing-surface {
  background: var(--ordo-so-bg-surface);
  border-color: var(--ordo-so-border-default);
}

또는 기존 전역 변수가 Dashboard scope에서만 신규 semantic token을 참조하도록 연결:

body.auth-on {
  --existing-dashboard-surface: var(--ordo-so-bg-surface);
}

단, 실제 기존 변수와 selector를 먼저 조사하고 최소 변경으로 처리하십시오.

금지:

전체 CSS 파일 교체

body { background: ... } 전역 적용

공개 화면과 공유되는 클래스에 비격리 스타일 적용

모든 div 또는 모든 .card 일괄 override

무분별한 !important

Tailwind/shadcn 전체 도입

CSS-in-JS 도입

Next.js 코드 추가

10. Round 3 대상 Inventory

Round 2 배분표에서 Round 3 주 구현 대상으로 지정된 3개 Inventory ID를 정확히 확인하십시오.

문서:

docs/redo/r03/inventory-scope.md

각 ID에 대해 기록:

Inventory ID

현재 컴포넌트

역할·라우트

Round 2 분류

SalesOps 근거

이번 라운드 적용 내용

이번 라운드에서 하지 않는 내용

변경 파일

검증 방법

상태

Round 3에서 다른 Inventory ID의 완성 스타일을 선행 구현하지 마십시오.

공통 토큰 연결로 다른 요소의 색이 일부 변할 수는 있으나, 이는 의도와 영향을 명확히 기록해야 합니다.

11. 공개 화면 회귀 방지

Round 1의 frozen baseline을 기준으로 다음 공개 화면을 Desktop·Tablet·Mobile에서 비교하십시오.

landing

auth

terms

privacy

support

select-workspace

총 18개 기본 비교가 필요합니다.

추가로 가능한 경우:

로그인 오류

비밀번호 재설정

문의 상태

공개 화면의 focus 상태

공개 화면에는 다음이 없어야 합니다.

배경색 변경

폰트 변경

Surface 변경

Border 변경

Radius 변경

Shadow 변경

Focus 스타일 변경

레이아웃 이동

horizontal overflow 신규 발생

증거 경로:

evidence/redo/r03/frozen-public/

기계 판독 결과:

artifacts/redo/r03/frozen-public-regression.json

동적 animation frame 차이를 단순 PASS로 처리하지 마십시오. 다음을 함께 검사하십시오.

DOM 구조

주요 computed style

bounding box

screenshot diff

animation 불안정 영역

12. 대시보드 검증 화면

최소 다음 화면을 Desktop에서 캡처하십시오.

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

각 역할 홈은 다음 뷰포트도 필요합니다.

Desktop 1440 × 1000

Tablet 1024 × 1366

Mobile 390 × 844

증거 경로:

evidence/redo/r03/dashboard/admin/

evidence/redo/r03/dashboard/client/

evidence/redo/r03/dashboard/worker/

evidence/redo/r03/dashboard/shared/

Round 3 토큰 적용 후 다음을 확인하십시오.

Background가 SalesOps 계층과 일치

Surface 대비가 일관적

텍스트 가독성

상태 색상 의미 보존

기존 레이아웃 좌표 유지

Sidebar와 Header 구조 유지

Mobile Sidebar 고정 260px 결함이 유입되지 않음

horizontal overflow 신규 발생 없음

13. 시각 비교 기준

Round 3에서 SalesOps와 동일해야 하는 것은 색상·Surface·Typography foundation·Border·Radius·Shadow 문법입니다.

SalesOps와 동일하면 안 되는 것:

페이지 배치

메뉴

Sidebar 너비

모바일 Sidebar

Header 내용

영업 데이터

카드 개수

차트 데이터

Section 순서

각 대표 Dashboard 화면에 대해 다음 3-way 비교를 작성하십시오.

Round 1 ORDOSPACE baseline

Round 3 ORDOSPACE result

SalesOps reference

문서:

docs/redo/r03/visual-token-review.md

비교 항목:

Dashboard background

Surface

Text hierarchy

Border

Radius

Shadow

Status tone

Focus

Disabled

Contrast

Layout preservation

14. 자동 검증

다음 경로에 Round 3 검증을 추가하십시오.

tests/redo/r03/

최소 검사:

14.1 Branch와 scope

현재 브랜치가 redo/r03-dashboard-tokens

merge-base가 Round 2 승인 HEAD

금지된 이전 브랜치 commit 미포함

14.2 토큰 정합성

모든 신규 token이 --ordo-so-*

필수 token 목록 존재

중복 token 없음

빈 값 없음

raw unresolved placeholder 없음

var() 참조가 존재하는 token을 가리킴

비격리 :root SalesOps override 없음

기존 generic --background, --card, --primary 전역 덮어쓰기 없음

원격 font URL 없음

ignoreBuildErrors 없음

Next/Radix/shadcn dependency 신규 추가 없음

14.3 Scope

Dashboard scope 안에서만 token 적용

Public routes에서 신규 Dashboard computed style 미적용

인증 Dashboard에서 token 적용 확인

로그아웃 후 scope 제거 확인

역할 전환 후 scope 유지·정상 적용

403 및 QA 화면 scope 규칙 확인

14.4 구조 보존

19개 screen ID 유지

역할별 메뉴 순서 유지

DOM ID 유지

route hash 유지

Header·Sidebar 주요 child 순서 유지

주요 Section 순서 유지

역할 guard 유지

14.5 기능 회귀

로그인·로그아웃

역할 전환

403 guard

Sidebar navigation

Mobile navigation

Dropdown

Tab

Filter

주요 form

lifecycle 비파괴 smoke

14.6 반응형

1440, 1024, 390

신규 horizontal overflow 없음

모바일 Sidebar 260px 고정 없음

모바일 탭 유지

주요 content bounding box 변화 허용치 내

14.7 접근성

focus-visible 존재

outline 제거 후 대체 ring 없는 selector 없음

contrast 자동 측정 가능한 대표 조합 검사

visible icon-only control accessible name 유지

reduced-motion 지원

15. 기계 판독 artifact

최소 다음을 생성하십시오.

artifacts/redo/r03/git-prestate.json
artifacts/redo/r03/token-inventory.json
artifacts/redo/r03/token-usage.json
artifacts/redo/r03/css-scope-audit.json
artifacts/redo/r03/dashboard-browser-audit.json
artifacts/redo/r03/frozen-public-regression.json
artifacts/redo/r03/layout-preservation.json
artifacts/redo/r03/accessibility-audit.json
artifacts/redo/r03/verification-summary.json
token-inventory.json

각 token:

name

semantic category

value

SalesOps source

declaration file

scope

current usage

intended later usage

confidence

token-usage.json

각 token:

declared

used in Round 3

reserved for Round 4+

selector usage

fallback

orphan 여부

사용되지 않는 토큰은 무조건 실패시키지 말고 reservedForLater로 명시하십시오. 그러나 핵심 Dashboard background·text·surface·border 토큰은 Round 3에서 실제 사용되어야 합니다.

16. 문서

최소 다음을 작성하십시오.

docs/redo/r03/README.md
docs/redo/r03/inventory-scope.md
docs/redo/r03/token-implementation.md
docs/redo/r03/css-isolation.md
docs/redo/r03/visual-token-review.md
docs/redo/r03/public-regression.md
docs/redo/r03/accessibility-review.md
docs/redo/r03/verification-results.md
docs/redo/r03/change-manifest.md
token-implementation.md

기록:

SalesOps token → ORDOSPACE token 대응

원본 값

실제 구현 값

값 변경 여부

변경 이유

fallback

적용 selector

향후 적용 라운드

css-isolation.md

기록:

최종 scope

scope를 설정·해제하는 코드

공개 화면 보호 방식

selector specificity 전략

기존 CSS와의 충돌

!important 사용 여부

403·QA 처리

로그아웃 처리

역할 전환 처리

change-manifest.md

각 제품 파일:

파일 경로

변경 이유

변경 유형

영향 라우트

영향 Inventory ID

기능 영향

공개 화면 영향

rollback 방법

17. 기존 테스트 재실행

최소 실행:

npm ci
npm run build
npm run check:js
npm run static:validate-components
npm run static:validate-lifecycle
npm run smoke
npm --prefix tests/redo/r01 run audit
npm --prefix tests/redo/r02 run validate
npm --prefix tests/redo/r03 run validate

가능하면 다음도 실행:

npm --prefix backend test -- --runInBand
npm --prefix backend run type
npm --prefix backend run build

Production DB 또는 API를 변경하는 테스트는 실행하지 마십시오.

모든 결과는 다음에 기록하십시오.

docs/redo/r03/verification-results.md

실패를 숨기거나 expected failure로 임의 전환하지 마십시오.

18. 코드 품질 규칙

CSS custom property 기반

Dashboard scope 명시

기존 스타일 최소 수정

원격 font 금지

CDN 추가 금지

Next.js 코드 금지

React 컴포넌트 복사 금지

Radix/shadcn 전체 복사 금지

ignoreBuildErrors 금지

!important 최소화

runtime warning 숨김 금지

색상 몇 개만 덮는 임시 CSS 금지

역할별 중복 token 선언 금지

페이지별 ad hoc 색상 금지

inline style 대량 추가 금지

기능 selector 변경 금지

접근성 속성 삭제 금지

새 CSS 파일을 추가한 경우 Production 엔트리에서 로컬 asset으로 정상 로드되어야 합니다.

19. 허용되는 제품 변경

Round 3에서는 제품 파일 수정이 발생할 수 있습니다.

허용 예:

Dashboard token CSS 파일 추가

기존 style entry에 token CSS 연결

Dashboard root scope class/data attribute를 안정적으로 설정

인증 상태 종료 시 scope 제거

공통 Dashboard foundation selector 최소 연결

테스트에 필요한 비시각적 식별 속성 추가

허용되지 않는 제품 변경:

데이터 변경

메뉴 변경

문구 변경

라우트 변경

기능 변경

Section 재배치

Sidebar 구조 변경

Header 구조 변경

컴포넌트 마크업 전면 재작성

공개 화면 CSS 변경

백엔드 변경

API 변경

20. 완료 조건

다음을 모두 만족해야 합니다.

redo/r03-dashboard-tokens가 Round 2 승인 HEAD에서 분기됨

Round 2 토큰 값을 근거로 구현함

모든 신규 token이 --ordo-so-* namespace를 사용함

Dashboard 전용 scope에 격리됨

공개 화면에는 신규 디자인이 적용되지 않음

Dashboard background가 실제 token을 사용함

Dashboard 기본 foreground와 typography가 token을 사용함

Surface·Border foundation이 실제 token과 연결됨

상태 token이 구현됨

focus-visible 접근성이 유지됨

reduced-motion이 지원됨

원격 font 의존성이 없음

Next/Radix/shadcn 신규 의존성이 없음

Sidebar·Header 구조가 변경되지 않음

화면 Section 순서가 변경되지 않음

Admin·Client·Worker 기능이 유지됨

모든 해시 라우트가 유지됨

역할과 권한이 유지됨

Desktop·Tablet·Mobile 검증이 통과함

모바일 고정 260px Sidebar가 유입되지 않음

신규 horizontal overflow가 없음

공개 화면 18개 비교가 통과함

기존 Round 1·2 검증이 통과함

Round 3 검증이 통과함

콘솔·pageerror·network 회귀가 없음

Production 배포가 없음

브랜치를 원격에 push함

모든 증거가 GitHub 또는 대화 첨부로 검수 가능함

하나라도 충족하지 못하면 완료로 보고하지 마십시오.

21. Git 규칙

허용:

redo/r03-dashboard-tokens에만 commit

해당 브랜치 원격 push

Draft PR 생성

금지:

main 변경

Round 2 브랜치 수정

기존 브랜치 수정

원본 저장소 변경

force push

Production 배포

Vercel alias 변경

비밀정보 commit

권장 커밋:

feat(redo-r03): add isolated dashboard token system

feat(redo-r03): connect dashboard foundation styles

test(redo-r03): add token isolation and regression audits

docs(redo-r03): publish token implementation evidence

22. 제출 형식

완료 후 반드시 다음 Marker로 시작하십시오.

[ROUND 3 IMPLEMENTATION REPORT]

보고 순서:

A. 작업 식별

저장소

브랜치

시작 HEAD

종료 HEAD

Round 2 merge-base

Branch 또는 Draft PR URL

B. 구현 범위

Round 3 Inventory ID

변경한 토큰 범주

실제 적용 범위

의도적으로 미구현한 Round 4+ 범위

C. Token 결과

범주별 개수:

Background/Surface

Text

Border

Status

Typography

Radius

Shadow

Geometry

Interaction

Chart

Overlay

Responsive

전체 token 수와 실제 사용 수, 향후 예약 수를 보고하십시오.

D. CSS 격리

최종 scope selector

scope 설정 위치

scope 제거 위치

공개 화면 보호 방식

403 처리

QA 화면 처리

기존 CSS 충돌

!important 사용 건수

E. 제품 변경

각 제품 파일:

경로

변경 이유

영향 Inventory ID

영향 라우트

기능 영향

F. 시각 결과

Admin

Client

Worker

Desktop

Tablet

Mobile

SalesOps token 문법 일치

ORDOSPACE 레이아웃 보존

대표 전후 비교 링크를 제공하십시오.

G. 공개 화면 회귀

각 공개 화면 D/T/M 결과:

screenshot

pixel 또는 image 결과

DOM 결과

computed style 결과

bounding box 결과

PASS/FAIL

H. 구조·기능 보존

라우트

메뉴

DOM ID

Section 순서

역할 guard

세션

로컬 스토리지

API

lifecycle

모바일 navigation

각 항목에 PASS/FAIL을 표시하십시오.

I. 접근성

focus-visible

contrast

keyboard

icon accessible name

disabled

reduced motion

J. 브라우저 QA

console error

pageerror

failed request

HTTP 4xx/5xx

horizontal overflow

responsive 문제

기존 결함

신규 회귀

K. 테스트 결과

각 명령:

명령

exit code

PASS/FAIL/SKIPPED

실패 이유

artifact 링크

L. 변경 파일

추가

수정

삭제

audit-only와 product 파일 구분

M. 범위 준수

다음에 Yes/No로 답하십시오.

ORDOSPACE 레이아웃 변경

Sidebar 구조 변경

Header 구조 변경

라우트 변경

문구 변경

데이터 변경

기능 변경

권한 변경

API 변경

백엔드 변경

공개 화면 변경

원본 저장소 변경

main 변경

Production 배포

원격 font 추가

Next/Radix/shadcn 복사

기존 잘못된 브랜치 Cherry-pick

정상 답변은 전부 No입니다.

N. 미해결 위험

token 충돌

contrast

legacy CSS

상태 표현

반응형

Round 4 primitive 적용 위험

재현하지 못한 상태

O. Round 3 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 3 REVIEW

NOT READY — ROUND 3 INCOMPLETE

로컬 경로만 제출한 증거는 인정되지 않습니다. 핵심 문서, artifact, 스크린샷은 GitHub 링크 또는 이 대화 첨부로 제출하십시오.


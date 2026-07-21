# Round 1 planner prompt evidence

- Conversation title: `ORDOSPACE SalesOps 이식`
- Conversation URL: `https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748`
- Retrieved at: `2026-07-21T17:48:16.3854479+09:00`
- Round marker: `[ROUND 1 IMPLEMENTATION PROMPT]`
- Validation: accepted; round number and scope match, public surfaces remain frozen, dashboard layout/function remain preserved, and no Production/original-repo/alias/deletion/auth-bypass/secret operation is requested.

## Verbatim prompt

[ROUND 1 IMPLEMENTATION PROMPT]

당신은 ORDOSPACE 대시보드에 SalesOps 디자인 체계를 이식하는 프로젝트의 Round 1 구현 담당자입니다.

이번 라운드의 목적은 올바른 ORDOSPACE 정적 앱 기준선을 독립 저장소에 구축하고, 이후 라운드의 검수 기준이 될 전체 구조·라우트·기능·컴포넌트·상태 인벤토리와 동결 화면 증거를 작성하는 것​입니다.

이번 라운드에서는 어떠한 시각적 디자인 변경도 허용되지 않습니다.

1. 절대 기준과 작업 대상
1.1 현재 ORDOSPACE 원본 — 절대 기준

실제 배포:

https://ordospace-rebuild.vercel.app/

원본 GitHub:

https://github.com/magus81818-bit/ordospace-rebuild/

읽기 전용 로컬 원본:

C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ORDOSPACE_rebuild

검증된 기준 커밋:

ea1dc111440207608401c529b5bc27ebc5e61fd7

다음 항목은 반드시 이 배포와 해당 커밋을 기준으로 보존하십시오.

대시보드 레이아웃

화면별 Section 구성과 배치

Sidebar 메뉴와 순서

Header 정보 구조

Admin·Client·Worker 역할별 화면

해시 URL 및 라우팅

한국어 문구

실제 데이터와 데이터 의미

버튼·폼·탭·필터 등의 사용자 액션

역할 권한과 접근 제한

세션 및 로컬 스토리지

API와 백엔드 동작

반응형 동작

react-mvp나 일부 파일만 보고 제품 기준을 추측하지 마십시오. 실제 Vercel 화면과 루트 정적 앱 코드를 함께 확인해야 합니다.

1.2 이전 정적 원형 — 보조 비교 전용

배포:

https://ordospace-sprint5.vercel.app/

GitHub:

https://github.com/magus81818-bit/ordospace-sprint5/

현재 Rebuild와 구조·기능 차이를 파악하는 보조 자료로만 사용하십시오. 새 기준선을 Sprint 5에서 만들거나 Sprint 5 구조로 되돌리면 안 됩니다.

1.3 SalesOps — 이번 라운드에서는 존재와 접근성만 확인

실제 배포:

https://v0-sales-operations-dashboard.vercel.app/

공식 v0 원형:

https://v0.app/templates/salesops-dashboard-9q2Mfgu6cDi

코드 ZIP:

C:\Users\Admin\OneDrive\Desktop\모든 자료 날짜별 아카이브\260718\sales-ops-dashboard.zip

스크린샷:

C:\Users\Admin\OneDrive\Desktop\모든 자료 날짜별 아카이브\260718\v0 스크린샷

Round 1에서는 SalesOps를 구현하거나 상세 감사하지 마십시오. 상세 감사와 대조표 완성은 Round 2 범위입니다.

이번 라운드에서는 다음만 확인합니다.

각 URL 접근 여부

ZIP과 스크린샷 경로 존재 여부

ZIP을 원본으로 사용할 수 있는지

공개 SalesOps GitHub가 제공되지 않았다는 사실

임의의 SalesOps GitHub 주소를 찾거나 유사 프로젝트를 원본으로 사용하지 마십시오.

1.4 실제 결과 저장소

로컬:

C:\Users\Admin\Desktop\K-디지털\수업자료\코덱스\ordospace-ui-rebuild

GitHub:

https://github.com/magus81818-bit/ordospace-ui-rebuild

기존 브랜치:

ui/r01-*부터 ui/r10-*

fix/scope-correction-existing-site

위 브랜치는 잘못 진행된 기록입니다.

다음 행위를 금지합니다.

기존 잘못된 브랜치를 새 기준으로 사용

기존 브랜치를 통째로 Cherry-pick

기존 결과물을 복사하여 기준선으로 사용

기존 브랜치 삭제

main 변경

원본 저장소 변경

기존 ORDOSPACE 배포 변경

2. 브랜치와 기준선 구축
2.1 작업 전 상태 기록

작업 전에 다음을 기록하십시오.

git status
git remote -v
git branch --all
git log --oneline --decorate -20

결과 저장소의 현재 기본 브랜치가 무엇인지도 명시하십시오.

2.2 새 브랜치

깨끗한 새 브랜치를 생성하십시오.

브랜치명:

redo/r01-baseline-audit

새 브랜치는 기존 ui/r* 또는 fix/* 결과물을 기반으로 만들지 마십시오.

2.3 기준선 생성 원칙

새 작업 트리는 반드시 원본 저장소의 다음 커밋과 내용상 동일한 출발점이어야 합니다.

ea1dc111440207608401c529b5bc27ebc5e61fd7

허용되는 방식:

원본 로컬 저장소에서 해당 커밋의 추적 파일을 안전하게 export

결과 저장소의 새 브랜치 작업 트리에 가져오기

결과 저장소의 .git은 유지

결과 저장소 전용 감사 문서와 테스트 산출물만 추가

금지되는 방식:

원본 저장소의 .git 복사

원본 저장소에서 직접 작업

원본 커밋 이후 임의 코드 변경 포함

이전 잘못된 UI 브랜치에서 파일 복사

react-mvp만 별도로 기준선으로 삼기

기존 결과 저장소의 변경된 UI 위에 덮어쓰기만 하고 잔여 파일을 방치하기

기준선 복사 후에는 원본 커밋과 결과 작업 트리의 추적 대상 제품 파일이 동일한지 파일 목록과 해시로 검증하십시오.

OS 또는 저장소별 관리 파일 차이가 있으면 모두 명시해야 합니다.

예:

.git

Round 1 감사 문서

증거 이미지

테스트 산출물

결과 저장소 전용 설정

제품 파일의 내용 차이가 발견되면 Round 1을 완료한 것으로 보고하지 마십시오.

3. 실제 앱 실행 기준 확인

package.json, 빌드 명령, Vercel 설정, 루트 엔트리, 해시 라우터를 직접 확인하여 현재 배포가 어떤 앱을 서비스하는지 판별하십시오.

최소 확인 대상:

package.json

vercel.json

루트 HTML 엔트리

app/main.js

app/router/hash-router.js

app/layout/app-shell.js

app/config/app.config.js

역할별 screen 파일

UI component 파일

session service

API 및 repository 계층

데이터 파일

QA 및 smoke 스크립트

react-mvp 디렉터리의 실제 역할

문서에 다음을 명확히 기록하십시오.

Production build 명령

실제 배포 엔트리

루트 정적 앱과 react-mvp의 관계

어떤 코드가 Vercel의 현재 ORDOSPACE 화면을 생성하는지

API 엔드포인트와 데이터 저장 계층

세션·역할 저장 방식

해시 라우팅 구조

추측하지 말고 파일 경로와 코드 근거를 남기십시오.

4. 브라우저 전체 감사

브라우저 자동화는 Playwright를 우선 사용하십시오.

필요한 경우 기존 앱의 DEV 역할 전환 기능이나 정상적인 로그인 흐름을 사용해 Admin·Client·Worker 화면에 접근할 수 있습니다.

다음은 금지합니다.

인증 코드 삭제

권한 검사 비활성화

세션 강제 우회 코드 추가

Production 데이터 파괴

API 쓰기를 통한 불필요한 데이터 변조

브라우저 콘솔에서 내부 상태를 임의 조작해 정상 흐름인 것처럼 보고

4.1 뷰포트

최소 다음 뷰포트에서 확인하십시오.

Desktop: 1440 × 1000

Tablet: 1024 × 1366

Mobile: 390 × 844

4.2 감사 대상

실제 Rebuild 배포와 로컬 기준선을 모두 확인하십시오.

공개·비대시보드 화면

최소 다음 화면을 모두 분류하고 캡처하십시오.

랜딩

문의

로그인

비밀번호 재설정 관련 화면

역할 또는 워크스페이스 선택

이용약관

개인정보처리방침

고객지원

접근 불가 화면

실제 앱에 존재하는 기타 공개 화면

Client

현재 앱에 존재하는 Client 라우트를 전부 확인하십시오.

최소 예상 범주:

홈

프로젝트

프로젝트 상세 또는 하위 상태

승인함

알림

마이페이지

관련 Dialog·Drawer·Tab·Filter·Form 상태

Worker

현재 앱에 존재하는 Worker 라우트를 전부 확인하십시오.

최소 예상 범주:

작업자 홈

내 작업

작업 상세

제출·수정·블로커·질문 관련 상태

알림

마이페이지

Admin

현재 앱에 존재하는 Admin 라우트를 전부 확인하십시오.

최소 예상 범주:

PM/Admin 홈

프로젝트 관리

프로젝트 상세 또는 하위 상태

Module 관리

Module 상세

인력

감사 로그

생성·배정·검토·반려·승인·에스컬레이션 관련 상태

위 목록을 그대로 정답으로 간주하지 마십시오. 실제 라우터, 메뉴 설정, HTML section, screen 코드와 브라우저에서 발견한 모든 화면을 기준으로 완전하게 확정하십시오.

5. 라우트 및 화면 분류 문서

다음 파일을 작성하십시오.

docs/redo/r01/route-screen-inventory.md

각 화면마다 다음 필드를 포함하십시오.

필드	내용
역할	Public / Shared / Admin / Client / Worker
화면 ID	코드상의 공식 ID
해시 URL	정확한 URL
메뉴 진입 경로	Sidebar/Header/버튼/직접 URL 등
화면 제목	현재 한국어 문구
접근 조건	비로그인/역할/권한
레이아웃 유형	공개 화면/대시보드 Shell/상세 화면 등
주요 Section	화면 순서대로
주요 데이터	실제 의미
사용자 액션	클릭·입력·제출 등
상태	기본/빈 상태/오류/로딩/성공 등
소스 근거	파일 경로와 함수·상수
스크린샷	증거 파일 경로
변경 분류	Dashboard target / Frozen public / Shared but frozen / QA only

다음을 별도 요약하십시오.

대시보드 디자인 이식 대상

시각적으로 동결할 공개 화면

공용 컴포넌트가 양쪽에서 사용되어 격리가 필요한 부분

역할별 접근 제한

존재하지만 메뉴에 노출되지 않는 라우트

코드에는 있으나 브라우저에서 도달할 수 없는 화면

브라우저에는 나타나지만 라우터 목록에서 찾기 어려운 상태

6. 레이아웃·기능 인벤토리

다음 파일을 작성하십시오.

docs/redo/r01/layout-function-inventory.md

각 화면별로 DOM과 코드 구조를 근거로 현재 레이아웃을 기록하십시오.

반드시 포함할 항목:

Dashboard Shell 구조

Sidebar 너비와 반응형 동작

Header 영역과 정보 순서

Page title 영역

콘텐츠 컨테이너

Section 순서

Grid와 column 구성

Card 배치

Table/List 배치

Footer 또는 모바일 탭

Overlay 계층

Modal/Dialog/Drawer 위치

Desktop·Tablet·Mobile 변화

숨김·축약·재배치되는 요소

기능 인벤토리에는 다음을 포함하십시오.

역할 전환

로그인·로그아웃

세션 복구

권한 검사

라우트 보호

데이터 로드

로컬 저장

API 호출

생성

편집

제출

승인

반려

보완 요청

상태 변경

검색

필터

정렬

페이지네이션

탭

알림

파일 또는 산출물 처리

오류 처리

로딩 처리

성공 피드백

각 기능마다 다음을 명시하십시오.

역할

시작 화면

사용자 액션

기대 결과

데이터 변경 여부

저장 위치

관련 파일

Round 1 실행 검증 여부

이후 회귀 테스트 필요 여부

7. 전체 컴포넌트·상태 인벤토리

다음 파일을 작성하십시오.

docs/redo/r01/component-state-inventory.md

이번 라운드에서는 SalesOps 대응을 확정하지 않습니다. 대신 ORDOSPACE에 실제로 존재하는 모든 대시보드 컴포넌트와 상태를 빠짐없이 기록하십시오.

최소 분류:

Dashboard background

App shell

Sidebar

Sidebar item

Sidebar badge

Mobile navigation

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

Chart

Axis

Legend

Tooltip

Progress

Avatar

Dropdown

Popover

Modal

Dialog

Drawer/Sheet

Toast 또는 Success feedback

Loading

Skeleton

Empty state

Error state

Disabled state

Hover state

Focus state

Active state

Selected state

Validation state

각 항목은 다음 스키마로 작성하십시오.

필드	내용
Inventory ID	고유 ID
역할과 라우트	발견 위치
컴포넌트	현재 명칭
기존 위치와 기능	화면 내 위치와 목적
구현 형태	공통 primitive / 화면 전용 / 인라인 마크업
데이터	표시하는 데이터 의미
액션	연결된 동작
상태	존재하는 모든 상태
반응형	Desktop/Tablet/Mobile
소스 근거	파일 경로·함수·클래스
스크린샷 근거	파일 경로
SalesOps 대응	Pending Round 2
이식 분류	Pending Round 2
구현 라운드	예상 Round 3~9
완료 상태	Baseline audited 또는 누락 사유

중요:

한 화면에만 존재하는 컴포넌트도 제외하지 마십시오.

공통 CSS 클래스가 같다고 같은 컴포넌트로 무조건 합치지 마십시오.

같은 컴포넌트라도 역할·위치·상태가 다르면 관계를 기록하십시오.

실제로 존재하지 않는 상태를 있다고 적지 마십시오.

코드에만 존재하고 화면에서 재현하지 못한 상태는 그렇게 표시하십시오.

이후 Round 2 대조표의 좌측 기준으로 그대로 사용할 수 있어야 합니다.

8. 동결 화면 기준선

다음 파일을 작성하십시오.

docs/redo/r01/frozen-public-baseline.md

시각적으로 동결할 모든 공개·비대시보드 화면에 대해 다음을 기록하십시오.

정확한 URL

뷰포트

스크린샷 경로

전체 페이지 또는 화면 캡처 여부

주요 텍스트

주요 시각 영역

인터랙션

현재 콘솔 오류

현재 네트워크 오류

이후 비교 방식

허용 오차

스크린샷은 다음 경로에 저장하십시오.

evidence/redo/r01/frozen-public/

파일명 예시:

landing-desktop-1440x1000.png

landing-tablet-1024x1366.png

landing-mobile-390x844.png

login-desktop-1440x1000.png

terms-mobile-390x844.png

가능한 화면은 모두 3개 뷰포트에서 캡처하십시오.

페이지가 길면 full-page 캡처를 사용하십시오.

애니메이션, 시간, 임의 데이터 등으로 픽셀 비교가 불안정한 부분이 있으면 문서에 명시하십시오. 그 영역을 삭제하거나 숨기지 마십시오.

9. 대시보드 기준 캡처

각 역할의 모든 대시보드 라우트와 핵심 상태를 캡처하십시오.

경로:

evidence/redo/r01/dashboard/admin/

evidence/redo/r01/dashboard/client/

evidence/redo/r01/dashboard/worker/

evidence/redo/r01/dashboard/shared/

각 주요 라우트는 최소 Desktop 캡처가 필요합니다.

각 역할의 핵심 홈 화면과 Sidebar·Header 반응형은 Desktop·Tablet·Mobile 캡처가 필요합니다.

Dialog, Drawer, Dropdown, 빈 상태, 오류 상태, 성공 상태, 선택 상태 등 재현 가능한 핵심 상태도 별도 캡처하십시오.

10. 자동화된 기준선 테스트

다음 경로에 Round 1 전용 Playwright 기반 감사 스크립트를 추가하십시오.

tests/redo/r01/

최소 포함:

모든 공식 해시 라우트 도달성 검사

역할별 메뉴 항목 및 순서 검사

역할별 접근 제한 검사

공개 화면에 Dashboard Shell이 나타나지 않는지 검사

대시보드 화면에 올바른 Shell이 나타나는지 검사

주요 한국어 제목 검사

브라우저 콘솔 error 수집

pageerror 수집

실패한 네트워크 요청 수집

각 주요 화면 스크린샷

Desktop·Tablet·Mobile 핵심 레이아웃 검사

현재 기능 smoke test

새 의존성을 추가해야 한다면 최소 범위로 추가하고 이유를 문서화하십시오.

기존 빌드와 런타임을 변경하지 마십시오.

테스트가 현재 앱의 기존 결함 때문에 실패하면 테스트를 약화하거나 결함을 숨기지 마십시오. 다음과 같이 분류하십시오.

Baseline existing defect

Test/environment issue

Round 1 regression

Access or credential limitation

Round 1 regression이 하나라도 있으면 완료 보고하지 마십시오.

11. 기존 검증 명령 실행

저장소에 정의된 관련 명령을 실제로 확인한 후 가능한 검증을 모두 실행하십시오.

최소 후보:

npm ci
npm run build
npm run check:js
npm run static:validate-components
npm run static:validate-lifecycle
npm run smoke

그 외 현재 정적 앱과 API에 관련된 검증 명령도 package.json을 근거로 실행하십시오.

다음 사항을 지키십시오.

실행하지 않은 명령을 성공했다고 적지 마십시오.

환경변수나 DB가 없어 실행할 수 없는 테스트는 정확한 실패 원인과 필요한 조건을 기록하십시오.

원격 Production 데이터에 쓰는 테스트는 실행하지 마십시오.

런타임 경고를 숨기거나 필터링하지 마십시오.

ignoreBuildErrors를 추가하지 마십시오.

테스트 결과 문서:

docs/redo/r01/verification-results.md

각 명령에 대해 기록:

명령

실행 위치

종료 코드

결과

실패 로그 요약

산출물 경로

기준선 결함 여부

수정 여부

Round 1은 시각 변경 금지 라운드이므로 기존 결함을 대규모로 수정하지 마십시오. 기준선 실행 자체를 방해하는 복사·설정 오류만 최소 수정할 수 있으며, 수정 이유와 원본 대비 차이를 별도 기록해야 합니다.

12. 원본 대비 무변경 검증

다음 파일을 작성하십시오.

docs/redo/r01/source-parity.md

포함 사항:

원본 커밋 SHA 확인 결과

원본과 결과 저장소의 제품 파일 목록 비교

파일별 SHA-256 비교

원본 대비 추가 파일

원본 대비 삭제 파일

원본 대비 수정 파일

허용된 결과 저장소 전용 파일

의도하지 않은 차이 없음 여부

가능하면 기계 판독 가능한 결과도 저장하십시오.

예:

artifacts/redo/r01/source-file-hashes.json

artifacts/redo/r01/source-parity-report.json

Round 1 감사 문서·테스트·증거 파일을 제외한 제품 코드가 기준 커밋과 다르면 그 차이를 0으로 만들거나 명확히 정당화해야 합니다.

시각적 제품 코드 변경은 정당화할 수 없습니다.

13. 기준 URL 확인 보고

다음 파일을 작성하십시오.

docs/redo/r01/reference-access-report.md

각 항목별로 기록:

기준	URL 또는 경로	접근 결과	확인 방식	확인 시각	비고
Rebuild Vercel	실제 URL	성공/실패	Browser	ISO 시각	

Rebuild GitHub	실제 URL	성공/실패	Git/GitHub	ISO 시각	

Rebuild local source	로컬 경로	성공/실패	Filesystem/Git	ISO 시각	

Sprint 5 Vercel	실제 URL	성공/실패	Browser	ISO 시각	

Sprint 5 GitHub	실제 URL	성공/실패	Git/GitHub	ISO 시각	

SalesOps Vercel	실제 URL	성공/실패	Browser	ISO 시각	

Official v0	실제 URL	성공/실패	Browser	ISO 시각	

SalesOps ZIP	로컬 경로	성공/실패	Filesystem	ISO 시각	

SalesOps screenshots	로컬 경로	성공/실패	Filesystem	ISO 시각	

Result repository	GitHub/로컬	성공/실패	Git/GitHub	ISO 시각	


접근하지 못한 항목을 확인했다고 주장하지 마십시오.

로그인·네트워크·권한 문제로 접근하지 못했다면 정확히 기록하고, 가능한 공개 코드와 로컬 파일 근거로만 작업하십시오.

14. README

다음 파일을 작성하십시오.

docs/redo/r01/README.md

포함 내용:

Round 1 목적

기준 원본

기준 커밋

결과 브랜치

이번 라운드에서 변경한 것

이번 라운드에서 변경하지 않은 것

산출물 색인

테스트 실행 방법

스크린샷 생성 방법

발견된 기존 결함

Round 2에 전달할 입력

미해결 제한 사항

15. Git 규칙

허용:

redo/r01-baseline-audit 브랜치 생성

해당 브랜치에만 커밋

해당 브랜치 원격 push

필요하면 Draft PR 생성

금지:

main 변경

기존 ui/r* 변경

기존 fix/* 변경

원본 저장소에 commit 또는 push

Production 배포

Vercel alias 변경

기존 배포 삭제

force push

기록 삭제

비밀정보 commit

커밋은 의미 단위로 분리하십시오.

권장 예:

chore(redo-r01): establish clean source baseline

docs(redo-r01): add route and component inventories

test(redo-r01): add baseline browser audit

docs(redo-r01): add visual evidence and verification report

16. Round 1 완료 조건

다음 조건을 모두 만족해야 완료 보고할 수 있습니다.

모든 기준 URL·GitHub·로컬 경로의 접근 여부를 실제로 확인함

원본 기준 커밋 ea1dc111440207608401c529b5bc27ebc5e61fd7을 확인함

새 브랜치 redo/r01-baseline-audit에서 작업함

이전 잘못된 브랜치를 구현 기준으로 사용하지 않음

결과 작업 트리가 원본 정적 앱 기준선과 제품 코드상 동일함

실제 배포 엔트리와 react-mvp의 역할을 판별함

공개·Admin·Client·Worker 전체 라우트를 목록화함

Sidebar 메뉴와 순서를 역할별로 기록함

모든 화면의 Section과 기능을 기록함

전체 ORDOSPACE 컴포넌트·상태 인벤토리를 작성함

공개 동결 화면 기준 캡처를 생성함

역할별 대시보드 기준 캡처를 생성함

Desktop·Tablet·Mobile 기준을 확인함

콘솔·pageerror·네트워크 실패를 수집함

기존 빌드·정적 검증·smoke 검사를 실행함

원본 대비 파일 해시 검증을 완료함

제품의 시각적 디자인을 변경하지 않음

공개 화면을 변경하지 않음

기능·데이터·라우트·권한을 변경하지 않음

Production 배포를 하지 않음

브랜치를 원격에 push함

검수자가 접근할 수 있는 GitHub 링크와 증거를 준비함

하나라도 충족하지 못하면 완료로 표현하지 말고 미완료 항목을 명시하십시오.

17. 제출 형식

작업 완료 후 이 대화에 반드시 다음 Marker로 시작하여 보고하십시오.

[ROUND 1 IMPLEMENTATION REPORT]

보고서는 아래 순서를 정확히 따르십시오.

A. 작업 식별

결과 저장소

브랜치

기준 원본 저장소

기준 커밋

작업 시작 HEAD

작업 종료 HEAD

Draft PR 또는 branch URL

B. 기준 접근 결과

Rebuild Vercel

Rebuild GitHub

Rebuild 로컬 원본

Sprint 5 Vercel

Sprint 5 GitHub

SalesOps Vercel

공식 v0

SalesOps ZIP

SalesOps 스크린샷

결과 저장소

각 항목에 성공·실패와 근거를 기재하십시오.

C. 기준선 구축 결과

기준선 생성 방법

이전 브랜치를 사용하지 않았다는 증거

원본 커밋 확인 결과

파일 목록 비교 결과

해시 비교 결과

원본 대비 추가·삭제·수정 파일

제품 코드 parity 결론

D. 실제 앱 구조 결론

실제 Production 엔트리

빌드 방식

루트 정적 앱 구조

react-mvp의 실제 역할

해시 라우팅 구조

세션·권한 구조

API·저장 구조

모든 결론에 파일 경로 근거를 붙이십시오.

E. 전체 화면 목록

역할별로 다음을 표로 제출하십시오.

화면 ID

해시 URL

한국어 제목

접근 조건

Dashboard target 또는 Frozen public

스크린샷 링크

F. 컴포넌트 인벤토리 요약

전체 Inventory ID 개수

역할별 개수

컴포넌트 분류별 개수

상태 분류별 개수

Round 2 대조표 입력 가능 여부

누락 또는 재현 불가 항목

전체 목록은 GitHub 문서 링크로 제공하십시오.

G. 기능 검증 결과

검증한 사용자 흐름

성공

실패

데이터 변경을 피하기 위해 생략한 흐름

기존 결함

Round 1에서 발생한 회귀 여부

H. 테스트 결과

각 명령에 대해:

명령

종료 코드

PASS/FAIL/SKIPPED

실패 원인

로그 또는 artifact 링크

I. 브라우저 QA

Desktop 결과

Tablet 결과

Mobile 결과

콘솔 오류

pageerror

네트워크 실패

접근성 또는 반응형 문제

기존 결함과 신규 회귀의 구분

J. 동결 화면 증거

공개 화면별 Desktop·Tablet·Mobile 캡처 링크

불안정 비교 영역

이후 회귀 비교 방식

모든 스크린샷을 이 대화에 직접 첨부하거나 GitHub에서 검수 가능한 링크로 제공하십시오. 로컬 경로만 제출하면 증거로 인정되지 않습니다.

K. 변경 파일

추가 파일

수정 파일

삭제 파일

각 파일의 변경 이유

L. 범위 준수

명시적으로 답하십시오.

디자인 변경을 했는가: Yes/No

레이아웃을 변경했는가: Yes/No

라우트를 변경했는가: Yes/No

기능을 변경했는가: Yes/No

공개 화면을 변경했는가: Yes/No

원본 저장소를 변경했는가: Yes/No

main을 변경했는가: Yes/No

Production 배포를 했는가: Yes/No

기존 잘못된 브랜치를 Cherry-pick했는가: Yes/No

허용되는 정상 답변은 모두 No입니다.

M. 미해결 위험

접근하지 못한 기준

재현하지 못한 상태

테스트하지 못한 기능

환경변수·DB·권한 제한

기존 코드 결함

Round 2에 영향을 줄 수 있는 위험

N. Round 1 완료 판정

다음 중 하나만 사용하십시오.

READY FOR ROUND 1 REVIEW

NOT READY — ROUND 1 INCOMPLETE

증거가 없는 성공 주장은 인정되지 않습니다.

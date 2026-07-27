# Round 9 Correction Prompt 03

- ChatGPT conversation: https://chatgpt.com/c/6a5f2f98-9674-83ee-80da-0a76c2d31748
- Received at: 2026-07-27T16:25:54.7029792+09:00
- Round Marker: `[ROUND 9 CORRECTION PROMPT]`

## Original prompt

[ROUND 9 CORRECTION PROMPT]

Round 9은 아직 미완료입니다.

보정 HEAD `4636e5ccc0ea274c6e00db2af2aeaf761994328a`는 이전 제출의 주요 결함을 상당 부분 해결했습니다.

확인된 개선 사항:

- Round 8 승인 HEAD에서 ahead-only, merge-base 정확
- 제품 파일 변경 0
- 잘못된 `0r*` 경로 제거
- Full Inventory 73개 내부 PASS 강제
- Round 1 별도 서버를 통한 공개 화면 18-case 비교 구현
- UI-065~071 상호작용 실측 보강
- UI-072 keyboard·focus·multi-role·long-route evidence 보강
- Browser Health·UI Lab 실측 구조 추가
- 독립 validator 대폭 강화

그러나 다음 두 영역이 완료 조건을 충족하지 못합니다.

## 1. Full State Coverage가 아직 실제 상태별 검증을 과장함

`tests/redo/r09/generate.cjs`는 Round 3과 Round 5 Inventory에서 Matrix의 `currentStates` 문자열을 읽어 모든 상태를 implemented로 생성합니다.

현재 구조:

```JavaScript
if(round === 'Round 3' || round === 'Round 5') {
  for (const name of row.currentStates.split(',')) {
    states[name] = stateEntry(
      'implemented',
      sources[0],
      primaryEvidence(id, round),
      assertion(round, id, name)
    );
  }
}
```

문제:

- 실제 Primary Round state artifact가 해당 상태를 검증했는지 확인하지 않음
- 동일한 broad test title을 여러 Inventory·상태에 연결
- `#UI-xxx/state` marker는 test source에 존재하는 assertion marker가 아니라 generator가 문자열 뒤에 붙인 값
- Round 3·5의 하나의 screenshot이 여러 상태의 증거로 사용됨
- `currentStates`에 있다는 이유만으로 실제 hover·focus·loading·open 등 상태를 구현 검증된 것으로 간주함
- validator는 marker가 artifact 문자열 안에 있는지만 확인하고, 해당 test가 그 Inventory/state를 실제 assertion하는지 확인하지 않음

이는 다음 완료 조건과 충돌합니다.

- 실제 Round 3~8 state artifact 통합
- 통합 test가 확인하지 않은 상태를 implemented 처리 금지
- exact test-title plus item/state assertion marker
- fabricated state bridge 0
- evidence relevance

### 수정 원칙

Round 3과 Round 5도 실제 Primary Round artifact를 기반으로 상태를 분류하십시오.

### Round 3

다음을 직접 조사하십시오.

- `artifacts/redo/r03/`
- Round 3 browser audit
- token inventory
- accessibility audit
- responsive/layout audit
- 실제 test source

각 UI-010~012의 상태별로 다음 중 하나만 사용하십시오.

- 실제 assertion과 evidence가 있으면 implemented
- 상태가 구조적으로 존재하지 않으면 구체 사유가 있는 not_applicable
- 검증 근거가 없으면 Round 9에서 실제 browser assertion과 evidence를 추가한 후 implemented

### Round 5

다음을 직접 조사하십시오.

- `artifacts/redo/r05/shell-state-coverage.json`
- `shell-interaction-audit.json`
- `shell-audit.spec.cjs`
- 관련 screenshots

UI-001~009 각각에 대해 실제 source item과 상태를 매핑하십시오.

Matrix `currentStates` 문자열만으로 implemented를 생성하지 마십시오.

### 실제 assertion 연결

각 implemented 상태는 다음 중 하나여야 합니다.

- Primary Round test가 해당 상태를 실제로 검증하며 해당 assertion 위치를 식별할 수 있음
- Round 9 통합 test에서 해당 Inventory/state를 실제로 재현하고 assertion함

단순히 다음처럼 marker를 문자열로 붙이는 방식은 금지합니다.

```JavaScript
`${testFile}::${broadTestTitle}#${inventoryId}/${state}`
```

실제 test source에 Inventory/state별 assertion registry를 두십시오.

예:

```JavaScript
const stateAssertions = {
  'UI-001': {
    default: async ({ page }) => {
      // 실제 assertion
    },
    expanded: async ({ page }) => {
      // 실제 assertion
    }
  }
};
```

또는 source test에 식별 가능한 registry/marker를 선언하고 실제 assertion과 연결하십시오.

Validator는:

- registry에 Inventory ID가 존재
- state key가 존재
- assertion function 또는 assertion record가 존재
- evidence가 해당 assertion 실행에서 생성
- generic broad test title만으로는 PASS 불가

를 검사해야 합니다.

## 2. 필수 감사 문서가 여전히 placeholder 수준임

이전 Correction Prompt는 다음 문서를 실제 감사 내용으로 확장하도록 명시했습니다.

그러나 최종 HEAD에서도 다수 문서가 3~5줄 수준입니다.

예:

- `docs/redo/r09/full-inventory-review.md`
- `docs/redo/r09/data-function-parity.md`
- `docs/redo/r09/css-token-review.md`
- `docs/redo/r09/product-diff-review.md`
- `docs/redo/r09/role-isolation-review.md`
- `docs/redo/r09/ui-lab-review.md`
- `docs/redo/r09/accessibility-review.md`
- `docs/redo/r09/responsive-review.md`

Artifact가 상세하더라도, 필수 문서는 사람이 검수 가능한 감사 설명을 제공해야 합니다.

### 각 문서 최소 요구사항

#### full-inventory-review.md

- 73개 집계 방법
- Round별 source artifact
- Inventory별 evidence relevance 판정 방법
- completion artifact PASS 판정 방법
- UI-065~072 처리 차이
- invalid path·누락·중복 검사
- 결과와 남은 제한

#### state-coverage-review.md

- Round별 state source
- 실제 병합 규칙
- Round 3·5의 보정 방식
- implemented/N/A 판정 기준
- assertion registry
- evidence relevance
- fabricated-state detector
- 최종 수치

#### public-freeze-review.md

- Round 1 baseline server 구성
- baseline/current 분리 방식
- 18-case 비교 필드
- box 비교 허용 오차
- 외부 font failure 처리
- interaction 검증
- 결과

#### ui-072-implementation-review.md

- Matrix 원문
- renderer·route guard source
- exact CTA
- single/multi-role
- keyboard/focus
- long route
- D/T/M
- 제품 변경이 불필요했던 이유

#### data-function-parity.md

- baseline HEAD
- 비교 대상 파일
- routes·IDs·Korean copy 비교 방식
- storage/API/lifecycle signature 비교
- backend hash
- 결과

#### css-token-review.md

- definition/reference parser
- unresolved 계산
- raw color baseline diff
- important baseline diff
- role/public leakage 검사
- stylesheet order
- 결과

#### validator-integrity-review.md

- 이전 validator hash 비교
- expectation 완화 탐지
- hardcoded result 탐지
- artifact 내부 독립 검사
- state assertion registry 검사
- 결과

#### 나머지 문서

최소한 다음을 설명해야 합니다.

- source
- methodology
- measured values
- pass criteria
- result
- limitations

단순히 “artifact 참조, PASS”만 적은 문서는 허용하지 않습니다.

## 3. State Artifact schema 보강

`full-state-coverage.json`의 각 implemented 상태에 다음을 추가하십시오.

```JSON
{
  "status": "implemented",
  "sourceArtifact": "",
  "sourceInventoryItemFound": true,
  "sourceStateFound": true,
  "assertionRegistryFile": "",
  "assertionRegistryKey": "UI-001/default",
  "assertionExecuted": true,
  "evidence": [],
  "evidenceGeneratedByAssertion": true,
  "pass": true
}
```

Primary Round artifact가 item/state 기반 schema를 제공하지 않는 경우:

- `sourceStateFound:false`
- Round 9에서 실제 assertion을 추가
- `assertionExecuted:true`
- 해당 실행에서 evidence 생성

으로 처리하십시오.

`sourceStateFound:false`인데 Round 9 실제 assertion도 없으면 implemented 금지입니다.

## 4. State validator 보강

`tests/redo/r09/validate.cjs`에 다음을 추가하십시오.

### implemented 상태 필수 조건

- `sourceInventoryItemFound === true`
- `sourceStateFound === true` 또는 `assertionExecuted === true`
- assertion registry 파일 존재
- registry key 존재
- registry key가 실제 source 코드에 존재
- evidence 존재
- `evidenceGeneratedByAssertion === true`
- 상태별 `pass true`

### 금지 패턴

- Matrix `currentStates`만으로 상태 자동 구현 처리
- broad test title 하나를 동일 Round 전체 상태에 재사용
- artifact 문자열에만 `#UI/state`를 덧붙인 marker
- assertion registry 없이 generated marker만 사용
- 동일 evidence가 unrelated state에 반복 사용
- source state도 없고 Round 9 assertion도 없는 implemented row

### 추가 summary 필드

```JSON
{
  "stateRowsWithSourceState": 0,
  "stateRowsWithRound9Assertions": 0,
  "stateRowsWithoutRealAssertion": 0,
  "generatedMarkerOnlyRows": 0,
  "broadTestTitleReuseViolations": 0,
  "stateAssertionRegistryPass": true
}
```

PASS 조건:

- `stateRowsWithoutRealAssertion === 0`
- `generatedMarkerOnlyRows === 0`
- `broadTestTitleReuseViolations === 0`
- `stateAssertionRegistryPass === true`

## 5. 문서 placeholder validator 추가

Validator가 필수 문서의 존재만 확인하지 말고 내용도 검사하도록 하십시오.

각 필수 review 문서:

- 최소 20개 이상의 비어 있지 않은 줄
- 최소 5개 이상의 section heading 또는 명확한 단락
- source artifact 경로 포함
- methodology 또는 검증 방법 포함
- pass criteria 포함
- measured result 포함
- limitation 또는 risk 포함

다음 문서는 최소 30개 이상의 비어 있지 않은 줄을 요구하십시오.

- `full-inventory-review.md`
- `state-coverage-review.md`
- `public-freeze-review.md`
- `ui-072-implementation-review.md`
- `validator-integrity-review.md`
- `correction-report.md`

길이만 채우기 위한 반복 문구는 금지합니다.

Artifact JSON을 그대로 복사하지 말고 사람이 이해할 수 있는 검수 설명으로 작성하십시오.

## 6. 기존 보정 결과 유지

이번 수정 과정에서도 다음 PASS를 유지하십시오.

- 제품 변경 0
- Matrix 변경 0
- Round 1 baseline 18/18
- UI-065~071 interaction 7/7
- UI-072 4-state 검증
- Browser Health 신규 실패 0
- UI Lab D/T/M 실측
- Full Inventory 73/73
- data/function parity
- CSS/token audit
- 역할 격리
- responsive 60
- prior validator hash 유지
- Round 1~8 전체 재검증
- main 변경 없음
- Production 배포 없음
- Round 10 선행 작업 없음

## 7. Artifact 갱신

필수 갱신:

- `artifacts/redo/r09/full-state-coverage.json`
- `artifacts/redo/r09/validator-integrity-audit.json`
- `artifacts/redo/r09/full-inventory-audit.json`
- `artifacts/redo/r09/test-results.json`
- `artifacts/redo/r09/verification-summary.json`

상태 assertion을 추가 실행했다면 관련:

- evidence
- browser health
- accessibility
- role isolation
- responsive

artifact도 재생성하십시오.

## 8. 문서 갱신

반드시 실질적으로 확장:

- `docs/redo/r09/full-inventory-review.md`
- `docs/redo/r09/public-freeze-review.md`
- `docs/redo/r09/ui-072-implementation-review.md`
- `docs/redo/r09/role-isolation-review.md`
- `docs/redo/r09/data-function-parity.md`
- `docs/redo/r09/state-coverage-review.md`
- `docs/redo/r09/accessibility-review.md`
- `docs/redo/r09/responsive-review.md`
- `docs/redo/r09/css-token-review.md`
- `docs/redo/r09/product-diff-review.md`
- `docs/redo/r09/validator-integrity-review.md`
- `docs/redo/r09/browser-health-review.md`
- `docs/redo/r09/ui-lab-review.md`
- `docs/redo/r09/verification-results.md`
- `docs/redo/r09/implementation-report.md`
- `docs/redo/r09/correction-report.md`

## 9. 테스트 재실행

```Bash
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
```

가능하면 backend도 재실행하십시오.

Dependency advisory는 숨기지 말되 강제 수정하지 마십시오.

## 10. 완료 조건

- [ ] Round 3 상태가 Matrix 문자열만으로 implemented 처리되지 않음
- [ ] Round 5 상태가 Matrix 문자열만으로 implemented 처리되지 않음
- [ ] 실제 Primary Round state source 또는 Round 9 assertion 존재
- [ ] generated marker-only 상태 0
- [ ] broad test title reuse violation 0
- [ ] implemented 상태마다 assertion registry key 존재
- [ ] registry key가 실제 코드에 존재
- [ ] assertion 실행 여부 기록
- [ ] evidence가 assertion 실행과 연결
- [ ] `stateRowsWithoutRealAssertion` 0
- [ ] Full State Coverage PASS
- [ ] Full Inventory 73/73 유지
- [ ] 필수 review 문서 placeholder 0
- [ ] 주요 문서 최소 30개 비어 있지 않은 줄
- [ ] 기타 문서 최소 20개 비어 있지 않은 줄
- [ ] 문서별 source·method·criteria·result·risk 포함
- [ ] 문서 validator PASS
- [ ] 제품 변경 0
- [ ] Matrix 변경 0
- [ ] Round 1 baseline 18/18
- [ ] UI-065~071 interaction PASS
- [ ] UI-072 PASS
- [ ] Browser Health PASS
- [ ] UI Lab PASS
- [ ] Data/Function PASS
- [ ] CSS/Token PASS
- [ ] Responsive·Role Isolation PASS
- [ ] Round 1~8 PASS
- [ ] 수정된 Round 9 PASS
- [ ] main 변경 없음
- [ ] Production 배포 없음
- [ ] Round 10 선행 작업 없음
- [ ] branch push 완료

하나라도 충족하지 못하면 `READY FOR ROUND 9 REVIEW`로 보고하지 마십시오.

## 11. 제출 형식

완료 후 반드시 다음 Marker로 시작하십시오.

`[ROUND 9 CORRECTION REPORT]`

### A. 작업 식별

- 이전 HEAD
- 최종 HEAD
- 추가 commits
- merge-base
- worktree
- remote

### B. State Coverage 결함 수정

- 기존 Matrix 기반 자동 구현 문제
- Round 3 source
- Round 5 source
- 실제 assertion registry
- generated marker 제거
- evidence 연결
- 결과

### C. State 통합 결과

- 총 Inventory
- implemented
- N/A
- source-state rows
- Round 9 assertion rows
- no-real-assertion rows
- marker-only rows
- broad-title violations
- missing evidence
- PASS/FAIL

### D. 문서 보강

각 필수 문서:

- 비어 있지 않은 줄 수
- heading 수
- source
- methodology
- pass criteria
- result
- risk
- PASS/FAIL

### E. 기존 통합 감사 유지

- Inventory 73
- Public baseline
- Public interaction
- UI-072
- Browser Health
- UI Lab
- Data/Function
- CSS/Token
- Responsive
- Role Isolation
- PASS/FAIL

### F. Validator 독립성

- state registry 검사
- marker-only 탐지
- broad-title 재사용 탐지
- 문서 placeholder 탐지
- item 내부 PASS
- evidence relevance
- PASS/FAIL

### G. 테스트 결과

각 command:

- exit code
- PASS/FAIL
- warning
- artifact

### H. 변경 파일

- Product
- Test
- Artifact
- Evidence
- Docs
- 이유

### I. 범위 준수

Yes/No:

- Matrix 변경
- 제품 변경
- Admin 변경
- Client 변경
- Worker 변경
- Public 변경
- data/API/backend 변경
- font 변경
- dependency 변경
- main 변경
- Production 배포
- Round 10 선행 작업

정상 답변은 모두 `No`입니다.

### J. 남은 위험

실제 남은 위험만 기록하십시오.

### K. 완료 판정

다음 중 하나만 사용하십시오.

- `READY FOR ROUND 9 REVIEW`
- `NOT READY — ROUND 9 INCOMPLETE`

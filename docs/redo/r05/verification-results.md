# Verification results

| Gate | Result |
|---|---|
| Root install/build/check | PASS; npm ci 0 vulnerabilities, build, JS syntax |
| Static component/lifecycle | PASS; 35 entries, 19 escaped outputs, full lifecycle |
| Root smoke | PASS; 12 routes, runtime QA 20/20 |
| Round 5 Playwright | PASS 4/4 |
| Public regression | PASS 18/18, 15 static byte-identical, landing dynamic region quantified |
| Dashboard responsive | PASS 18 role/viewport runs at six sizes |
| Shell states | PASS empty/long/disabled at desktop/mobile; deferred 0, missing 0 |
| Browser errors | PASS; console 0, pageerror 0, HTTP 4xx/5xx 0 |
| Round 1 browser | PASS 4/4 |
| Round 2 inventory | PASS 73/73 in clean verification checkout |
| Round 3 | PASS 4/4 plus validator in clean verification checkout |
| Round 4 | PASS 9/9 plus validator in clean verification checkout |
| Backend | PASS 8 suites/36 tests, type, build |

Existing non-failing notices: Browserslist data age and Node experimental VM modules.

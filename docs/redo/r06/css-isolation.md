# CSS Isolation

Round 6 CSS는 `body.auth-on`과 다섯 Admin screen ID 아래로만 제한됩니다. Client/Worker/public selector, Shell selector, `:root`, 원격 font, raw color, 신규 `!important` 선언이 없습니다. 사용한 색·경계·radius·shadow·typography·motion 값은 Round 3 `--ordo-so-*` token을 소비합니다.

기계 판독 결과: public leak 0, Client leak 0, Worker leak 0, Shell selector 변경 0, raw color 0, unresolved token 0, 신규 important 0.


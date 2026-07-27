# Browser health review

Console errors, page errors, request failures, HTTP failures, unhandled rejections, observer loops, duplicate actions, mutation bounds, and horizontal overflow are measured with runtime listeners and service/event spies.

The observed Orbitron `fonts.gstatic.com` failure is recorded as an existing external dependency: the Round 8 and current `index.html` font contracts are byte-identical and declare the same Orbitron/Google Fonts dependency. Known baseline/existing dependency failures are separated from new failures; new request failures are zero.

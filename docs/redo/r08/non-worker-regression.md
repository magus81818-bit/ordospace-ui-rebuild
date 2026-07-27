# Non-Worker regression

Admin, Client, and Profile screens are regression-only in Round 8.

The browser audit exercises 16 non-Worker route/viewport cases and checks for Worker class/token leakage, DOM/style/box stability, console errors, page errors, request failures, and overflow. All cases pass; Worker class leak count and Worker token leak count are zero.

No Admin renderer/class, Client renderer/class, Profile screen, shared Shell, route, data, or behavior was changed by the product implementation.


# SalesOps live audit

Live URL: https://v0-sales-operations-dashboard.vercel.app/

Screens: 24; menu order: Overview → Pipeline → Deals → Customers → Team → Forecasting → Reports → Settings. Captures: 33. Console errors 0, page errors 0, request failures 0, HTTP 4xx/5xx 0.

| Screen | URL / entry | Layout and components | States | Desktop | Tablet | Mobile | ZIP evidence |
|---|---|---|---|---|---|---|---|
| Overview | same URL; sidebar Overview button | fixed sidebar + sticky header + section composition | default plus section-specific filters/tabs/tables/charts | captured | captured | captured; source has no mobile navigation | `components/dashboard/sections/overview.tsx` |
| Pipeline | same URL; sidebar Pipeline button | fixed sidebar + sticky header + section composition | default plus section-specific filters/tabs/tables/charts | captured | captured | captured; source has no mobile navigation | `components/dashboard/sections/pipeline.tsx` |
| Deals | same URL; sidebar Deals button | fixed sidebar + sticky header + section composition | default plus section-specific filters/tabs/tables/charts | captured | captured | captured; source has no mobile navigation | `components/dashboard/sections/deals.tsx` |
| Customers | same URL; sidebar Customers button | fixed sidebar + sticky header + section composition | default plus section-specific filters/tabs/tables/charts | captured | captured | captured; source has no mobile navigation | `components/dashboard/sections/customers.tsx` |
| Team | same URL; sidebar Team button | fixed sidebar + sticky header + section composition | default plus section-specific filters/tabs/tables/charts | captured | captured | captured; source has no mobile navigation | `components/dashboard/sections/team.tsx` |
| Forecasting | same URL; sidebar Forecasting button | fixed sidebar + sticky header + section composition | default plus section-specific filters/tabs/tables/charts | captured | captured | captured; source has no mobile navigation | `components/dashboard/sections/forecasting.tsx` |
| Reports | same URL; sidebar Reports button | fixed sidebar + sticky header + section composition | default plus section-specific filters/tabs/tables/charts | captured | captured | captured; source has no mobile navigation | `components/dashboard/sections/reports.tsx` |
| Settings | same URL; sidebar Settings button | fixed sidebar + sticky header + section composition | default plus section-specific filters/tabs/tables/charts | captured | captured | captured; source has no mobile navigation | `components/dashboard/sections/settings.tsx` |

The source is state-switched, not URL-routed; all sections retain the same exact URL. ZIP and live broadly match. The official v0 page confirms the intended overall visual finish. Known source/live risks: missing distinct header title keys for Customers/Forecasting/Settings, fixed sidebar at mobile widths, and code-only shadcn primitives not demonstrated by navigation. Evidence is under `evidence/redo/r02/salesops-live/`.

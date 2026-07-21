# Round 3 Component Tiering

## Classification basis

SalesOps ZIP의 `components/ui` 57개 파일을 실제 Dashboard import, ORDO의 현재 React MVP, Round 4~8 Shell·운영 화면 요구로 분류했다. Source Vault는 원본 보존 계층이며 Production 구현 여부와 독립적이다.

| Tier | Count | Production | Components |
| --- | ---: | --- | --- |
| A | 9 | Ported | Avatar, Badge, Button, Card, Input, Label, Select, Switch, Tabs |
| B | 9 | Ported | DropdownMenu, Progress, ScrollArea, Separator, Sheet, Skeleton, Table, Textarea, Tooltip |
| C | 27 | Deferred | Accordion, Alert, AlertDialog, Breadcrumb, ButtonGroup, Calendar, Checkbox, Collapsible, Command, Dialog, Drawer, Empty, Field, Form, HoverCard, InputGroup, Item, Kbd, Pagination, Popover, RadioGroup, Slider, Spinner, Toast, Toaster, Toggle, ToggleGroup |
| D | 12 | Vault only or rejected | AspectRatio, Carousel, Chart, ContextMenu, InputOtp, Menubar, NavigationMenu, Resizable, Sidebar, Sonner, UseMobile, UseToast |

The machine-readable source of truth is `references/salesops-source-vault/source-manifest.json`. It records source usage, ORDO plan, dependency, source path, port path, and Production status for all 57 items.

## Why each tier exists

- Tier A is both used by the source Dashboard and immediately reusable in ORDO.
- Tier B is required for the upcoming App Shell, mobile drawer, menus, progress, and operational tables.
- Tier C has a plausible route-specific use but is intentionally deferred until the relevant workflow exists.
- Tier D has no current ORDO requirement or conflicts with this migration policy. Chart is rejected because Round 3 prohibits Recharts; Sidebar is rejected because the source shell must not be copied.

## Dependency boundary

Installed and pinned: 11 Radix packages for the 18 ported primitives, plus `class-variance-authority`, `clsx`, and `tailwind-merge`. Sheet reuses Radix Dialog.

Not installed: Next.js, next-themes, Recharts, React Hook Form, Zod, Sonner, Embla Carousel, Vaul, cmdk, date-fns, react-day-picker, react-resizable-panels, input-otp, and unused Radix packages.

## Planned review

Tier C is reconsidered only when a later round introduces the matching route or interaction. Tier D stays in the Vault unless a new product requirement and accessibility review justify a different decision.

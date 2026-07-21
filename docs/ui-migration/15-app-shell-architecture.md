# App shell architecture

```text
AppShell
├─ SkipLink
├─ DesktopSidebar (>=1024)
│  ├─ Brand / WorkspaceBadge
│  ├─ RoleNavigation
│  └─ UserMenu
├─ CompactSidebarRail (768–1023)
├─ MobileHeader + MobileNavigation Sheet (<768)
├─ AppHeader + PageHeading
└─ ShellMain
   └─ existing Outlet
```

`AppShell` reads the existing session context and React Router location. Navigation and route metadata are pure central configuration. Logout calls the existing `signOut`, then preserves the existing `/auth` redirect behavior. The shell never reads or writes ModuleCard state or browser storage.

Catalog primitives used: Avatar, Badge, Button, DropdownMenu, ScrollArea, Separator, Sheet, and Tooltip. Lucide supplies shell icons. `SheetContent` gained an optional `closeLabel` property without changing its existing default behavior.


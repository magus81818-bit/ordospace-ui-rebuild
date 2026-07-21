import { useEffect, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  ScrollArea,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ordospace/ui-catalog";
import { ChevronDown, LogOut, Menu, Orbit, UserRound } from "lucide-react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import {
  getNavigationForRole,
  isNavigationItemActive,
  ROLE_LABELS,
} from "../../config/navigation.js";
import { getRouteMeta } from "../../config/route-meta.js";
import { useSession } from "../../session/SessionContext.jsx";

function initials(name) {
  return name
    ? name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase()
    : "OR";
}

function Brand({ compact = false }) {
  return (
    <Link className={compact ? "shell-brand shell-brand--compact" : "shell-brand"} to="/">
      <span className="shell-brand__mark" aria-hidden="true"><Orbit size={20} /></span>
      {compact ? null : (
        <span className="shell-brand__copy">
          <strong>ORDOSPACE</strong>
          <small>Control workspace</small>
        </span>
      )}
    </Link>
  );
}

function WorkspaceBadge({ role, compact = false }) {
  if (!role) return null;
  return (
    <div className={compact ? "workspace-badge workspace-badge--compact" : "workspace-badge"}>
      <span className="workspace-badge__signal" aria-hidden="true" />
      {compact ? null : (
        <span>
          <small>ORDO Workspace</small>
          <strong>{ROLE_LABELS[role]}</strong>
        </span>
      )}
    </div>
  );
}

function RoleNavigation({ role, compact = false, onNavigate }) {
  const location = useLocation();
  const items = getNavigationForRole(role);

  return (
    <nav className={compact ? "shell-navigation shell-navigation--rail" : "shell-navigation"} aria-label={`${ROLE_LABELS[role]} 메뉴`}>
      {items.map((item) => {
        const active = isNavigationItemActive(item, location.pathname);
        const Icon = item.icon;
        const link = (
          <NavLink
            aria-current={active ? "page" : undefined}
            aria-label={compact ? item.label : undefined}
            className={active ? "shell-nav-link is-active" : "shell-nav-link"}
            key={item.id}
            onClick={onNavigate}
            to={item.path}
          >
            <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
            {compact ? null : <span>{item.label}</span>}
          </NavLink>
        );

        return compact ? (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>{link}</TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ) : link;
      })}
    </nav>
  );
}

function UserMenu({ currentUser, role, onSignOut, compact = false }) {
  if (!currentUser) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={compact ? "user-menu-trigger user-menu-trigger--compact" : "user-menu-trigger"} size={compact ? "icon" : "md"} variant="ghost" aria-label="사용자 메뉴 열기">
          <Avatar><AvatarFallback>{initials(currentUser.name)}</AvatarFallback></Avatar>
          {compact ? null : (
            <span className="user-menu-trigger__copy">
              <strong>{currentUser.name}</strong>
              <small>{currentUser.email}</small>
            </span>
          )}
          {compact ? null : <ChevronDown aria-hidden="true" size={16} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="shell-user-menu">
        <div className="shell-user-menu__identity">
          <strong>{currentUser.name}</strong>
          <span>{currentUser.email}</span>
          <Badge variant="outline">{ROLE_LABELS[role]}</Badge>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive onSelect={onSignOut}>
          <LogOut aria-hidden="true" size={16} />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function PageHeading({ meta }) {
  return (
    <div className="shell-page-heading" aria-label={`현재 페이지: ${meta.title}`}>
      <div className="shell-breadcrumb" aria-label="경로">
        {meta.breadcrumb.map((item, index) => (
          <span key={`${item}-${index}`}>{index > 0 ? <span aria-hidden="true">/</span> : null}{item}</span>
        ))}
      </div>
      <strong className="shell-page-heading__title">{meta.title}</strong>
      {meta.description ? <p>{meta.description}</p> : null}
    </div>
  );
}

function DesktopSidebar({ currentUser, role, onSignOut }) {
  return (
    <aside className="desktop-sidebar" aria-label="ORDOSPACE 사이드바">
      <Brand />
      <WorkspaceBadge role={role} />
      <Separator />
      <ScrollArea className="desktop-sidebar__scroll"><RoleNavigation role={role} /></ScrollArea>
      <UserMenu currentUser={currentUser} role={role} onSignOut={onSignOut} />
    </aside>
  );
}

function CompactSidebarRail({ currentUser, role, onSignOut }) {
  return (
    <TooltipProvider delayDuration={120}>
      <aside className="compact-sidebar-rail" aria-label="ORDOSPACE 축약 사이드바">
        <Brand compact />
        <WorkspaceBadge compact role={role} />
        <RoleNavigation compact role={role} />
        <UserMenu compact currentUser={currentUser} role={role} onSignOut={onSignOut} />
      </aside>
    </TooltipProvider>
  );
}

function MobileNavigation({ currentUser, meta, role, onSignOut }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  function closeAndSignOut() {
    setOpen(false);
    onSignOut();
  }

  return (
    <header className="mobile-header">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="mobile-menu-trigger" size="icon" variant="ghost" aria-label="메뉴 열기"><Menu aria-hidden="true" size={21} /></Button>
        </SheetTrigger>
        <SheetContent className="mobile-navigation-sheet" closeLabel="메뉴 닫기" side="left">
          <SheetTitle className="visually-hidden">ORDOSPACE 메뉴</SheetTitle>
          <SheetDescription className="visually-hidden">현재 역할의 워크스페이스 메뉴입니다.</SheetDescription>
          <Brand />
          <WorkspaceBadge role={role} />
          <Separator />
          <RoleNavigation role={role} onNavigate={() => setOpen(false)} />
          <div className="mobile-navigation-sheet__footer"><UserMenu currentUser={currentUser} role={role} onSignOut={closeAndSignOut} /></div>
        </SheetContent>
      </Sheet>
      <div className="mobile-header__title"><small>ORDOSPACE</small><strong>{meta.shortTitle ?? meta.title}</strong></div>
      <UserRound aria-hidden="true" size={18} />
    </header>
  );
}

function PublicHeader({ meta }) {
  return <header className="public-header"><Brand /><span>{meta.shortTitle ?? meta.title}</span></header>;
}

export function AppShell() {
  const { session, currentUser, isAuthenticated, signOut } = useSession();
  const location = useLocation();
  const navigate = useNavigate();
  const meta = getRouteMeta(location.pathname);
  const isWorkspace = isAuthenticated && location.pathname.startsWith("/workspace/");
  const role = session?.role;

  function handleSignOut() {
    signOut();
    navigate("/auth", { replace: true });
  }

  return (
    <div className={isWorkspace ? "app-shell app-shell--workspace" : "app-shell app-shell--public"}>
      <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
      {isWorkspace ? (
        <>
          <DesktopSidebar currentUser={currentUser} onSignOut={handleSignOut} role={role} />
          <CompactSidebarRail currentUser={currentUser} onSignOut={handleSignOut} role={role} />
          <MobileNavigation currentUser={currentUser} meta={meta} onSignOut={handleSignOut} role={role} />
          <header className="app-header"><PageHeading meta={meta} /><UserMenu currentUser={currentUser} onSignOut={handleSignOut} role={role} /></header>
        </>
      ) : <PublicHeader meta={meta} />}
      <main className="shell-main" id="main-content" tabIndex="-1"><Outlet /></main>
    </div>
  );
}

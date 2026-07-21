import {
  LayoutDashboard,
} from "lucide-react";

export const APP_ROLES = ["admin", "worker", "client"];

export const ROLE_LABELS = {
  admin: "관리자",
  worker: "작업자",
  client: "클라이언트",
};

export const navigationItems = [
  {
    id: "admin-workspace",
    label: "운영 현황",
    shortLabel: "현황",
    path: "/workspace/admin",
    icon: LayoutDashboard,
    roles: ["admin"],
    match: "prefix",
  },
  {
    id: "worker-workspace",
    label: "작업 현황",
    shortLabel: "현황",
    path: "/workspace/worker",
    icon: LayoutDashboard,
    roles: ["worker"],
    match: "prefix",
  },
  {
    id: "client-workspace",
    label: "프로젝트 현황",
    shortLabel: "현황",
    path: "/workspace/client",
    icon: LayoutDashboard,
    roles: ["client"],
    match: "prefix",
  },
];

export function getNavigationForRole(role) {
  return navigationItems.filter((item) => item.roles.includes(role));
}

export function isNavigationItemActive(item, pathname) {
  return item.match === "exact"
    ? pathname === item.path
    : pathname === item.path || pathname.startsWith(`${item.path}/`);
}

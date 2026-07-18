export type OrdoTone = "ok" | "warn" | "crit" | "pend" | "rej";

export interface StatusView {
  label: string;
  tone: OrdoTone;
  description: string;
}

export const STATUS_VIEW = Object.freeze({
  draft: {
    label: "Draft",
    tone: "rej",
    description: "Not yet assigned or active",
  },
  assigned: {
    label: "Assigned",
    tone: "pend",
    description: "Owned and waiting for work to begin",
  },
  in_progress: {
    label: "In progress",
    tone: "pend",
    description: "Work is actively underway",
  },
  qc_ready: {
    label: "QC ready",
    tone: "warn",
    description: "Ready for verification before review",
  },
  admin_review: {
    label: "Admin review",
    tone: "pend",
    description: "Pending an administrator decision",
  },
  client_review: {
    label: "Client review",
    tone: "pend",
    description: "Pending client approval",
  },
  approved: {
    label: "Approved",
    tone: "ok",
    description: "Accepted and complete",
  },
  revision_requested: {
    label: "Revision requested",
    tone: "crit",
    description: "Blocked until requested changes are resolved",
  },
} satisfies Record<string, StatusView>);

export const FALLBACK_STATUS_VIEW: StatusView = Object.freeze({
  label: "Unknown status",
  tone: "rej",
  description: "No visual mapping is registered for this state",
});

export function getStatusView(status: string | null | undefined): StatusView {
  if (!status) {
    return FALLBACK_STATUS_VIEW;
  }

  return STATUS_VIEW[status as keyof typeof STATUS_VIEW] ?? FALLBACK_STATUS_VIEW;
}

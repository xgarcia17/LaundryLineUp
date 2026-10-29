import type { MachineStatus } from "../types/machine";

export type StatusInfo = {
  message: string;
  color: string;
};

const statusInfo: Record<MachineStatus, StatusInfo> = {
  available: {
    message: "Ready to use",
    color: "var(--status-available)",
  },
  running: {
    message: "Currently running",
    color: "var(--status-running)",
  },
  finished: {
    message: "Cycle finished",
    color: "var(--status-finished)",
  },
  offline: {
    message: "Unable to contact machine",
    color: "var(--status-offline)",
  },
};

const unknownStatus: StatusInfo = {
  message: "Unknown machine status",
  color: "var(--status-unknown)",
};

export function getStatusInfo(status: string): StatusInfo {
  if (status in statusInfo) {
    return statusInfo[status as MachineStatus];
  }

  return unknownStatus;
}

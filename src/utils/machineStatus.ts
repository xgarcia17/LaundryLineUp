import type { MachineStatus } from "../types/machine";

export type StatusInfo = {
  message: string;
  color: string;
};

const statusInfo: Record<MachineStatus, StatusInfo> = {
  available: {
    message: "Ready to use",
    color: "green",
  },
  running: {
    message: "Currently running",
    color: "blue",
  },
  finished: {
    message: "Cycle finished",
    color: "orange",
  },
  offline: {
    message: "Unable to contact machine",
    color: "gray",
  },
};

const unknownStatus: StatusInfo = {
  message: "Unknown machine status",
  color: "gray",
};

export function getStatusInfo(status: string): StatusInfo {
  if (status in statusInfo) {
    return statusInfo[status as MachineStatus];
  }

  return unknownStatus;
}

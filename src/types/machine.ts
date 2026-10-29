import type { QueueSummary } from "./queue";

export type MachineStatus = "available" | "running" | "finished" | "offline";

export type Machine = {
  id: string;
  name: string;
  status: MachineStatus;
  minutesRemaining: number | null;
};

export type MachineWithQueue = Machine & {
  queue: QueueSummary;
};

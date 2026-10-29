export type QueueEntryStatus =
  | "waiting"
  | "ready"
  | "using"
  | "completed"
  | "cancelled";

export type QueueEntry = {
  id: string;
  machineId: string;
  userId: string;
  userDisplayName: string;
  position: number;
  status: QueueEntryStatus;
  joinedAt: string;
  notifiedAt: string | null;
};

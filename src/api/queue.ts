import type { QueueEntry } from "../types/queue.ts";

const mockQueue: QueueEntry[] = [
  {
    id: "mock-queue-entry-1",
    machineId: "1",
    userId: "mock-user-1",
    userDisplayName: "Mock User 1",
    position: 1,
    status: "using",
    joinedAt: new Date().toISOString(),
    notifiedAt: null,
  },
  {
    id: "mock-queue-entry-2",
    machineId: "1",
    userId: "mock-user-2",
    userDisplayName: "Mock User 2",
    position: 2,
    status: "waiting",
    joinedAt: new Date().toISOString(),
    notifiedAt: null,
  },
];

export async function addUserToQueueForMachine(
  machineId: string,
): Promise<QueueEntry> {
  return {
    id: "mock-queue-entry",
    machineId,
    userId: "mock-user",
    userDisplayName: "Mock User",
    position: 1,
    status: "waiting",
    joinedAt: new Date().toISOString(),
    notifiedAt: null,
  };
}

export async function getQueueForMachine(
  machineId: string,
): Promise<QueueEntry[]> {
  return mockQueue.filter((entry) => entry.machineId === machineId);
}

import type { MachineWithQueue } from "../types/machine";

const mockMachines: MachineWithQueue[] = [
  {
    id: "1",
    name: "LQ Washer",
    status: "running",
    minutesRemaining: 25,
    queue: {
      totalWaitingCount: 2,
      currentUserPosition: 2,
    },
  },
  {
    id: "2",
    name: "LG Dry Master",
    status: "available",
    minutesRemaining: null,
    queue: {
      totalWaitingCount: 0,
      currentUserPosition: null,
    },
  },
];

export async function getMachines({
  householdId,
}: {
  householdId: string;
}): Promise<MachineWithQueue[]> {
  if (!householdId) {
    throw new Error("householdId is required");
  }

  return mockMachines;
}

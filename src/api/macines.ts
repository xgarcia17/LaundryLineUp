import type { Machine } from "../types/machine";

const mockMachines: Machine[] = [
  {
    id: "1",
    name: "LQ Washer",
    status: "running",
    minutesRemaining: 25,
  },
  {
    id: "2",
    name: "LG Dry Master",
    status: "available",
    minutesRemaining: null,
  },
];

export async function getMachines({
  householdId,
}: {
  householdId: string;
}): Promise<Machine[]> {
  if (!householdId) {
    throw new Error("householdId is required");
  }

  return mockMachines;
}

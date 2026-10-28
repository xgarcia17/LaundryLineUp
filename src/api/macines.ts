import type { Machine } from "../types/machine";

const hardcodedMachines: Machine[] = [
  {
    id: "1",
    type: "washer",
    name: "LQ Washer",
    status: "running",
    minutesRemaining: 25,
  },
  {
    id: "2",
    type: "dryer",
    name: "LG Dry Master",
    status: "available",
    minutesRemaining: null,
  },
];

export async function getMachines(householdId: string): Promise<Machine[]> {
  return hardcodedMachines;
}

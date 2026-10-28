import type { Machine } from "../types/machine";
import { getStatusInfo, type StatusInfo } from "../utils/machineStatus";

export default function MachineCard({ machine }: { machine: Machine }) {
  const statusInfo: StatusInfo = getStatusInfo(machine.status);

  return (
    <section className="machine-card">
      <div className="machine-title">
        <h2>{machine.type}</h2>
        <h3>{machine.name}</h3>
      </div>
      <p style={{ color: statusInfo.color }}>{statusInfo.message}</p>
      {machine.status === "running" && machine.minutesRemaining !== null && (
        <p>{machine.minutesRemaining} minutes remaining.</p>
      )}
    </section>
  );
}

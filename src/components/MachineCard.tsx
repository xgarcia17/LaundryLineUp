import type { Machine } from "../types/machine";
import styles from "./MachineCard.module.css";
import { getStatusInfo, type StatusInfo } from "../utils/machineStatus";

export default function MachineCard({ machine }: { machine: Machine }) {
  const statusInfo: StatusInfo = getStatusInfo(machine.status);

  return (
    <section className={styles.machineCard}>
      <div className="machine-title">
        <h2>{machine.name}</h2>
      </div>
      <p style={{ color: statusInfo.color }}>{statusInfo.message}</p>
      {machine.status === "running" && machine.minutesRemaining !== null && (
        <p>{machine.minutesRemaining} minutes remaining.</p>
      )}
    </section>
  );
}

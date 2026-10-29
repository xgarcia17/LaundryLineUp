import type { Machine } from "../types/machine";
import RoundedSquareCard from "./RoundedSquareCard";
import styles from "./MachineCard.module.css";
import { getStatusInfo, type StatusInfo } from "../utils/machineStatus";

type MachineCardProps = {
  machine: Machine;
  onSelect: (machine: Machine) => void;
};

export default function MachineCard({ machine, onSelect }: MachineCardProps) {
  const statusInfo: StatusInfo = getStatusInfo(machine.status);

  return (
    <RoundedSquareCard
      className={styles.machineCard}
      onClick={() => onSelect(machine)}
    >
      <span className={styles.machineTitle}>{machine.name}</span>
      <span className={styles.statusInfo} style={{ color: statusInfo.color }}>
        {statusInfo.message}
      </span>
      {machine.status === "running" && machine.minutesRemaining !== null && (
        <span>{machine.minutesRemaining} minutes remaining.</span>
      )}
      <span className={styles.machineDescription}>{machine.id}</span>
    </RoundedSquareCard>
  );
}

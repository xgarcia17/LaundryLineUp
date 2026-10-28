import MachineCard from "../components/MachineCard";
import type { Machine } from "../types/machine";
import styles from "./MachinePage.module.css";

export default function MachinePage({ machines }: { machines: Machine[] }) {
  return (
    <main>
      <h1 className="page-title">Machine Status</h1>
      <div className={styles.machineCardGrid}>
        {machines.map((machine) => (
          <MachineCard key={machine.id} machine={machine} />
        ))}
      </div>
    </main>
  );
}

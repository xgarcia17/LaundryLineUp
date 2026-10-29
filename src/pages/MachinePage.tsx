import { useEffect, useRef, useState } from "react";
import MachineCard from "../components/MachineCard";
import type { Machine } from "../types/machine";
import styles from "./MachinePage.module.css";

export default function MachinePage({ machines }: { machines: Machine[] }) {
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedMachine && !dialog.open) {
      dialog.showModal();
    } else if (!selectedMachine && dialog.open) {
      dialog.close();
    }
  }, [selectedMachine]);

  return (
    <main>
      <h1 className="page-title">Machine Status</h1>
      <div className={styles.machineCardGrid}>
        {machines.map((machine) => (
          <MachineCard
            key={machine.id}
            machine={machine}
            onSelect={setSelectedMachine}
          />
        ))}
      </div>
      <dialog
        ref={dialogRef}
        aria-labelledby="machine-dialog-title"
        onClose={() => setSelectedMachine(null)}
      >
        {selectedMachine && (
          <>
            <h2>Hi, can you see me?</h2>
          </>
        )}
      </dialog>
    </main>
  );
}

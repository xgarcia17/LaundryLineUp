import { useEffect, useState } from "react";
import { getMachines } from "./api/macines";
import type { Machine } from "./types/machine";
import MachinePage from "./pages/MachinePage";
import "./App.css";

function App() {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const householdId = "0";

  useEffect(() => {
    getMachines({ householdId })
      .then(setMachines)
      .catch(() => {
        setError("Could not resolve machine status.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading your machine data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <main className="app-shell">
        <section className="main-title">
          <h1>Laundry Lineup</h1>
        </section>
        <MachinePage machines={machines} />
      </main>
    </>
  );
}

export default App;

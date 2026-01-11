import React, { useEffect, useState } from "react";
import FineTable from "../../components/FineTable";

function Fines() {
  const [fines, setFines] = useState([]);

  useEffect(() => {
    loadFines();
  }, []);

  const loadFines = async () => {
    const res = await fetch("http://localhost:5000/api/fines");
    const data = await res.json();
    setFines(data);
  };

  const addFine = async (studentId, issueId, amount) => {
    if (amount <= 0) return alert("Invalid amount");

    await fetch("http://localhost:5000/api/fines", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentId, issueId, amount }),
    });

    loadFines();
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Manage Student Fines</h2>
      <FineTable fines={fines} onAddFine={addFine} />
    </div>
  );
}

export default Fines;

const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff" },
};

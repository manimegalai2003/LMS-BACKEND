import React, { useState } from "react";

function FineTable({ fines = [], onAddFine }) {
  const [amount, setAmount] = useState("");

  if (!Array.isArray(fines) || fines.length === 0) {
    return <p>No fines found.</p>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Student Name</th>
          <th style={styles.th}>Roll No</th>
          <th style={styles.th}>Book</th>
          <th style={styles.th}>Amount</th>
          <th style={styles.th}>Status</th>
        </tr>
      </thead>

      <tbody>
        {fines.map((f) => (
          <tr key={f._id}>
            <td style={styles.td}>{f.student?.name}</td>
            <td style={styles.td}>{f.student?.roll}</td>
            <td style={styles.td}>{f.issue?.book?.title || "—"}</td>
            <td style={styles.td}>₹{f.amount}</td>
            <td style={styles.td}>{f.paid ? "Paid ✅" : "Unpaid ❌"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FineTable;

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    background: "#FFE6F2",
    padding: "10px",
    border: "2px solid #FF4D6A",
  },
  td: {
    padding: "10px",
    border: "1px solid #FF4D6A",
    textAlign: "center",
  },
};

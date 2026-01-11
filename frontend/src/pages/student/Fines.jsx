import React, { useEffect, useState } from "react";

export default function StudentFines() {
  const student = JSON.parse(localStorage.getItem("currentStudent"));
  const [fines, setFines] = useState([]);

  useEffect(() => {
    loadFines();
  }, []);

  const loadFines = async () => {
    const res = await fetch(
      `http://localhost:5000/api/fines/student/${student._id}`
    );
    const data = await res.json();
    setFines(data);
  };

  const payFine = async (id) => {
    await fetch(`http://localhost:5000/api/fines/${id}/pay`, {
      method: "PUT",
    });
    loadFines();
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>My Fines</h2>

      {fines.length === 0 ? (
        <p>No fines found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Book</th>
              <th style={styles.th}>Amount</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {fines.map((f) => (
              <tr key={f._id}>
                <td style={styles.td}>{f.issue?.book?.title || "—"}</td>

                <td style={styles.td}>₹{f.amount}</td>

                <td style={styles.td}>{f.paid ? "Paid ✅" : "Unpaid ❌"}</td>

                <td style={styles.td}>
                  {!f.paid ? (
                    <button
                      style={styles.payBtn}
                      onClick={() => payFine(f._id)}
                    >
                      Pay
                    </button>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff", marginBottom: "15px" },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },

  th: {
    background: "#FFE6F2",
    padding: "10px",
    border: "2px solid #FF4D6A",
    textAlign: "center",
  },

  td: {
    padding: "10px",
    border: "1px solid #FF4D6A",
    textAlign: "center",
  },

  payBtn: {
    padding: "6px 12px",
    background: "#FF4D6A",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

import React, { useEffect, useState } from "react";

function MyIssues() {
  const [myIssues, setMyIssues] = useState([]);
  const student = JSON.parse(localStorage.getItem("currentStudent"));

  useEffect(() => {
    if (!student?._id) return;

    fetch(`http://localhost:5000/api/issues/student/${student._id}`)
      .then((res) => res.json())
      .then((data) => setMyIssues(data))
      .catch((err) => console.error("Failed to load issues", err));
  }, []);

  // ✅ Common date formatter (IST)
  function formatDateTime(date) {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  function getDueDate(issuedAt) {
    const dueDate = new Date(
      new Date(issuedAt).getTime() + 7 * 24 * 60 * 60 * 1000
    );
    return formatDateTime(dueDate);
  }

  function getRemainingDays(issuedAt) {
    const due = new Date(issuedAt).getTime() + 7 * 24 * 60 * 60 * 1000;

    const diffMs = due - Date.now();
    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (days > 0) return `${days} day(s) left`;
    if (days === 0) return "Due Today";
    return "Overdue";
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>My Issued Books</h2>

      {myIssues.length === 0 ? (
        <p>No issued books.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Book</th>
              <th style={styles.th}>Issued At</th>
              <th style={styles.th}>Due Date</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {myIssues.map((i) => (
              <tr key={i._id}>
                <td style={styles.td}>{i.book?.title || "Unknown Book"}</td>
                <td style={styles.td}>{formatDateTime(i.issuedAt)}</td>
                <td style={styles.td}>{getDueDate(i.issuedAt)}</td>
                <td style={styles.td}>{getRemainingDays(i.issuedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyIssues;

const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff", marginBottom: "10px" },
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

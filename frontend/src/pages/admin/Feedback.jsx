import React, { useEffect, useState } from "react";
function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    setFeedbacks(JSON.parse(localStorage.getItem("feedbacks")) || []);
  }, []);

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Student Feedback</h2>

      {feedbacks.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        feedbacks.map((f) => (
          <div key={f.id} style={styles.card}>
            <h3>{f.name}</h3>
            <p>{f.message}</p>
            <small>{f.date}</small>
          </div>
        ))
      )}
    </div>
  );
}
export default AdminFeedback;

const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff" },
  card: {
    background: "#FFE6F2",
    padding: "12px",
    borderRadius: "10px",
    border: "2px solid #FF4D6A",
    marginBottom: "12px",
    color: "#e4125cff",
  },
};

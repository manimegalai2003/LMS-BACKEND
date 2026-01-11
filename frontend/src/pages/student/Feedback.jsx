import React, { useState } from "react";
function Feedback() {
  const [message, setMessage] = useState("");

  function submitFeedback() {
    if (!message.trim()) return alert("Please enter feedback!");

    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    const student = JSON.parse(localStorage.getItem("currentStudent"));

    feedbacks.push({
      id: Date.now(),
      studentId: student.id,
      name: student.name,
      message,
      date: new Date().toLocaleDateString(),
    });

    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    alert("Thank you! Your feedback has been submitted.");
    setMessage("");
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Send Feedback</h2>

      <textarea
        style={styles.textarea}
        placeholder="Write your feedback here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button style={styles.btn} onClick={submitFeedback}>
        Submit
      </button>
    </div>
  );
}
export default Feedback;
const styles = {
  page: { padding: "20px", maxWidth: "500px", margin: "auto" },
  title: { color: "#e4125cff", marginBottom: "12px" },
  textarea: {
    width: "100%",
    height: "150px",
    padding: "12px",
    borderRadius: "10px",
    border: "2px solid #FF4D6A",
    background: "#FFE6F2",
    color: "#e4125cff",
    marginBottom: "10px",
  },
  btn: {
    padding: "10px",
    background: "#FF4D6A",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    width: "100%",
  },
};

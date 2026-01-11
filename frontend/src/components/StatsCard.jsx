import React from "react";
import { FaBook, FaUser, FaCommentDots } from "react-icons/fa";
function StatsCard({ title, value, clickable, onClick }) {
  return (
    <div
      onClick={clickable ? onClick : undefined}
      style={{
        ...styles.card,
        cursor: clickable ? "pointer" : "default",
      }}
    >
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.iconBox}>{value}</div>
    </div>
  );
}
export default StatsCard;
const styles = {
  card: {
    padding: "20px",
    background: "#FFE6F2",
    border: "2px solid #FF4D6A",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(255, 77, 106, 0.3)",
    transition: "0.2s ease",
  },
  title: {
    color: "#5A001F",
    fontSize: "17px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  iconBox: {
    fontSize: "32px",
    color: "#FF4D6A",
    marginTop: "5px",
  },
};

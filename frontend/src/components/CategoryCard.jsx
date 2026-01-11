import React from "react";

function CategoryCard({ name }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
    </div>
  );
}
export default CategoryCard;
const styles = {
  card: {
    background: "#FFE6F2",
    border: "2px solid #FF4D6A",
    padding: "14px",
    borderRadius: "10px",
    width: "140px",
    textAlign: "center",
  },
  name: {
    color: "#5A001F",
    fontWeight: "600",
  },
};

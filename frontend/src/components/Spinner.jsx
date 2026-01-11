import React from "react";

function Spinner() {
  return (
    <div style={styles.container}>
      <img src="/loading.gif" alt="Loading..." style={styles.gif} />
      <p style={styles.text}>Loading…</p>
    </div>
  );
}
export default Spinner;

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  gif: {
    width: "70px",
    height: "70px",
    objectFit: "contain",
  },
  text: {
    color: "#e4125cff",
    marginTop: "10px",
    fontWeight: "600",
  },
};

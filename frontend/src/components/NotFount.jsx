import React from "react";

function NotFound() {
  return (
    <div style={styles.box}>
      <h1 style={styles.text}>404 - Page Not Found</h1>
    </div>
  );
}

const styles = {
  box: {
    padding: "80px",
    textAlign: "center",
  },
  text: {
    color: "#FF4D6A",
    fontWeight: "700",
  },
};
export default NotFound;
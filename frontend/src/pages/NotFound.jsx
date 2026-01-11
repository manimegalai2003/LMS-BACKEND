import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.error}>404</h1>
      <p style={styles.message}>
        Oops! The page you are looking for does not exist.
      </p>

      <Link to="/" style={styles.button}>
        Go Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px",
    textAlign: "center",
  },
  error: {
    fontSize: "80px",
    fontWeight: "700",
    color: "#FF4D6A",
  },
  message: {
    color: "#5A001F",
    marginTop: "10px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 16px",
    background: "#FF4D6A",
    color: "white",
    textDecoration: "none",
    borderRadius: "10px",
  },
};

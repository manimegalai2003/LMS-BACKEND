import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <img src="/LMS.png" alt="LMS" style={styles.logo} />
        <h1 style={styles.title}> Welcome to the Campus Library</h1>
        <p style={styles.subtitle}>Choose your portal to continue</p>

        <div style={styles.buttons}>
          <Link to="/student/login" style={styles.btnStudent}>
            Student Login
          </Link>

          <Link to="/admin/login" style={styles.btnAdmin}>
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  logo: {
    width: "120px",
    height: "120px",
    marginBottom: "20px",
    borderRadius: "60px",
    border: "4px solid #FF4D6A",
  },
  container: {
    marginTop: "150px",
    padding: "40px",
    textAlign: "center",
    background: "#FFE6F2",
    margin: "40px auto",
    border: "3px solid #FF4D6A",
    borderRadius: "14px",
    maxWidth: "700px",
    boxShadow: "0 0 10px rgba(255, 77, 106, 0.3)",
  },
  title: {
    color: "#5A001F",
    fontWeight: "700",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#FF4D6A",
    fontSize: "18px",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  btnStudent: {
    padding: "12px 20px",
    background: "#FFB3C6",
    color: "#5A001F",
    textDecoration: "none",
    borderRadius: "10px",
    border: "2px solid #FF4D6A",
    fontWeight: "600",
  },
  btnAdmin: {
    padding: "12px 20px",
    background: "#FF4D6A",
    color: "white",
    textDecoration: "none",
    borderRadius: "10px",
    border: "2px solid #FF4D6A",
    fontWeight: "600",
  },
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundImage:
      "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

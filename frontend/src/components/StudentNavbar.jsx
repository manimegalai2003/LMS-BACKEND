import React from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentNavbar() {
  const navigate = useNavigate();

  function handleLogout() {
    
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  }

  return (
    <div style={styles.nav}>
      <Link style={styles.link} to="/student/dashboard">
        Dashboard
      </Link>
      <Link style={styles.link} to="/student/browse">
        Browse
      </Link>
      <Link style={styles.link} to="/student/my-books">
        My Books
      </Link>
      <Link style={styles.link} to="/student/profile">
        Profile
      </Link>
      <Link style={styles.link} to="/student/fines">
        Fines
      </Link>
      <Link style={styles.link} to="/student/issues">
        My Issues
      </Link>

      <button style={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default StudentNavbar;
const styles = {
  nav: {
    background: "#FFE6F2",
    padding: "12px",
    borderBottom: "3px solid #FF4D6A",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  link: {
    color: "#5A001F",
    fontWeight: "600",
    textDecoration: "none",
    border: "1px solid #FF4D6A",
    padding: "6px 10px",
    borderRadius: "8px",
    background: "white",
  },
  logoutBtn: {
    padding: "6px 14px",
    background: "#FF4D6A",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

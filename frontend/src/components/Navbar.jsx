import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <Link style={styles.link} to="/">
        Home
      </Link>
      <Link style={styles.link} to="/student/login">
        Student Login
      </Link>
      <Link style={styles.link} to="/admin/login">
        Admin Login
      </Link>
    </div>
  );
}
export default Navbar;
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
    padding: "6px 12px",
    borderRadius: "8px",
    background: "white",
  },
};

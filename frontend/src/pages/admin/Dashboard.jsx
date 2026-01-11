import React, { useEffect, useState } from "react";
import StatsCard from "../../components/StatsCard";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function AdminDashboard() {
  const [books, setBooks] = useState(0);
  const [students, setStudents] = useState(0);
  const [issues, setIssues] = useState(0);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    loadCounts();
  }, []);

  const loadCounts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/dashboard/counts");
      const data = await res.json();

      setStudents(data.students);
      setBooks(data.books);
      setIssues(data.issues);
    } catch (err) {
      console.error("Failed to load dashboard counts", err);
    }
  };

  return (
    <div style={styles.page}>
      <button onClick={toggleTheme} style={styles.themeBtn}>
        {theme === "light" ? (
          <>
            <FaMoon size={20} /> Dark Mode
          </>
        ) : (
          <>
            <FaSun size={20} /> Light Mode
          </>
        )}
      </button>

      <h2 style={styles.title}>Admin Dashboard</h2>

      <div style={styles.cardGrid}>
        <StatsCard title="Total Books" value={books} />
        <StatsCard title="Total Students" value={students} />
        <StatsCard title="Issued Books" value={issues} />
      </div>
    </div>
  );
}

export default AdminDashboard;

const styles = {
  page: {
    padding: "20px",
    minHeight: "100vh",
    background: "var(--bg)",
  },

  themeBtn: {
    background: "none",
    border: "2px solid var(--accent)",
    padding: "10px 14px",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "600",
    gap: "8px",
    marginBottom: "20px",
    color: "var(--text)",
  },

  title: {
    color: "var(--accent)",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "30px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
  },
};

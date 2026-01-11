import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatsCard from "../../components/StatsCard";
import {
  FaBook,
  FaCommentDots,
  FaQuestionCircle,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function StudentDashboard() {
  const [student, setStudent] = useState(null);

  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedStudent = JSON.parse(localStorage.getItem("currentStudent"));
    setStudent(loggedStudent);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={toggleTheme}
        style={{
          background: "#ff6b84",
          border: "2px solid",
          padding: "10px",
          borderRadius: "10px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          fontSize: "16px",
          fontWeight: "bold",
          gap: "8px",
          marginBottom: "20px",
          color: "white",
        }}
      >
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

      <h2 style={{ color: "#e4125cff", fontSize: "26px", fontWeight: "700" }}>
        Welcome, {student?.name}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
        }}
      >
        <StatsCard
          title="Browse Books"
          value={<FaBook size={30} color="var(--accent)" />}
          clickable
          onClick={() => navigate("/student/browse")}
        />

        <StatsCard
          title="Give Feedback"
          value={<FaCommentDots size={30} color="var(--accent)" />}
          clickable
          onClick={() => navigate("/student/feedback")}
        />

        <StatsCard
          title="Help & Support"
          value={<FaQuestionCircle size={30} color="var(--accent)" />}
          clickable
          onClick={() => navigate("/student/help")}
        />
      </div>
    </div>
  );
}

export default StudentDashboard;

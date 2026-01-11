import React, { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";

function MyBooks() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMyBooks();
  }, []);

  const loadMyBooks = async () => {
    const student = JSON.parse(localStorage.getItem("currentStudent"));

    if (!student) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/issues/student/${student._id}`
      );
      const data = await res.json();
      setIssues(data);
    } catch (err) {
      console.error("Failed to load my books", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#e4125cff" }}>My Issued Books</h2>

      {loading ? (
        <p>Loading...</p>
      ) : issues.length === 0 ? (
        <p>No books issued yet.</p>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {issues.map((i) => (
            <BookCard key={i._id} book={i.book} mode="student" />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBooks;

const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff" },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
};

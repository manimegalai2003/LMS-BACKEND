import React, { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/books");
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Failed to fetch books", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this book?")) return;

    try {
      await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "DELETE",
      });
      setBooks((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Books</h2>

      <button style={styles.addBtn} onClick={() => navigate("/admin/add")}>
        + Add Book
      </button>

      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div style={styles.grid}>
          {books.map((b) => (
            <BookCard
              key={b._id}
              book={b}
              mode="admin"
              onEdit={() => handleEdit(b._id)}
              onDelete={() => handleDelete(b._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff" },

  addBtn: {
    padding: "10px 14px",
    background: "#FF4D6A",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginBottom: "20px",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
};

import React, { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";

function Browse() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/books");
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Failed to load books", err);
    } finally {
      setLoading(false);
    }
  };

  const issueBook = async (bookId) => {
    const student = JSON.parse(localStorage.getItem("currentStudent"));

    if (!student) {
      alert("Please login first");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/issues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: student._id,
          bookId: bookId,
        }),
      });

      if (!res.ok) {
        throw new Error("Issue failed");
      }

      alert("Book issued successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to issue book");
    }
  };

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Browse Books</h2>

      <input
        style={styles.search}
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div style={styles.grid}>
          {filtered.map((b) => (
            <BookCard
              key={b._id}
              book={b}
              mode="student"
              onIssue={() => issueBook(b._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Browse;

const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff" },
  search: {
    width: "280px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #FF4D6A",
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
};

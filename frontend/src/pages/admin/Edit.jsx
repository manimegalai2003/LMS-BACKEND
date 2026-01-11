import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

 function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    copies: "",
    cover: "",
    description: "",
  });

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const found = storedBooks.find((b) => b.id === Number(id));

    if (!found) {
      alert("Book not found!");
      navigate("/admin/books");
    } else {
      setBook(found);
    }
  }, [id, navigate]);

  function handleChange(e) {
    setBook({ ...book, [e.target.name]: e.target.value });
  }

  function handleSave() {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

    const updatedBooks = storedBooks.map((b) =>
      b.id === Number(id) ? book : b
    );

    localStorage.setItem("books", JSON.stringify(updatedBooks));
    alert("Book updated!");
    navigate("/admin/books");
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Edit Book</h2>

      <div style={styles.form}>
        <input
          name="title"
          value={book.title}
          onChange={handleChange}
          style={styles.input}
          placeholder="Book Title"
        />

        <input
          name="author"
          value={book.author}
          onChange={handleChange}
          style={styles.input}
          placeholder="Author"
        />

        <input
          name="category"
          value={book.category}
          onChange={handleChange}
          style={styles.input}
          placeholder="Category"
        />

        <input
          name="copies"
          value={book.copies}
          type="number"
          onChange={handleChange}
          style={styles.input}
          placeholder="Copies"
        />

        <input
          name="cover"
          value={book.cover}
          onChange={handleChange}
          style={styles.input}
          placeholder="Cover Image URL"
        />

        <textarea
          name="description"
          value={book.description}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Description..."
        />

        <button style={styles.saveBtn} onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
export default Edit;
const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff", marginBottom: "20px" },

  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    padding: "20px",
    background: "#FFE6F2",
    borderRadius: "12px",
    border: "2px solid #FF4D6A",
    gap: "12px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #FF4D6A",
  },

  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #FF4D6A",
    minHeight: "80px",
  },

  saveBtn: {
    padding: "10px",
    background: "#FF4D6A",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
};

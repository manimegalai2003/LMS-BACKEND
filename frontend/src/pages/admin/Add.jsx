import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";


const commonStyles = {
  box: {
    maxWidth: "420px",
    margin: "40px auto",
    padding: "24px",
    background: "#FFE6F2",
    border: "2px solid #FF4D6A",
    borderRadius: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #FF4D6A",
    width: "100%",
  },
  btn: {
    padding: "10px",
    background: "#FF4D6A",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "12px",
  },
  img: {
    width: "160px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    border: "2px solid #FF4D6A",
    marginTop: "10px",
  },
};


const styles = {
  box: { ...commonStyles.box },
  form: { display: "flex", flexDirection: "column", gap: "14px" },
  input: { ...commonStyles.input },
  btn: { ...commonStyles.btn },
  img: { ...commonStyles.img },
};


 function Add() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [copies, setCopies] = useState(1);
  const [cover, setCover] = useState("");

  function handleCover(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => setCover(reader.result);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const books = JSON.parse(localStorage.getItem("books")) || [];

    books.push({
      id: Date.now(),
      title,
      author,
      category,
      copies,
      cover,
    });

    localStorage.setItem("books", JSON.stringify(books));

    alert("Book added successfully!");
    navigate("/admin/books");
  }

  return (
    <div style={styles.box}>
      <h2
        style={{ color: "#5A001F", textAlign: "center", marginBottom: "10px" }}
      >
        Add New Book
      </h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          style={styles.input}
          placeholder="Author Name"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          style={styles.input}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="number"
          min="1"
          placeholder="Number of Copies"
          onChange={(e) => setCopies(e.target.value)}
          required
        />

        <input type="file" onChange={handleCover} />

        {cover && <img src={cover} alt="cover preview" style={styles.img} />}

        <button style={styles.btn} type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}export default Add;
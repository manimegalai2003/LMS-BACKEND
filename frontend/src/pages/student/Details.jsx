import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [book, setBook] = useState(undefined);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const found = books.find((b) => b.id === Number(id));

    setBook(found); 
  }, [id]);

  if (book === undefined) {
    return <h2 style={styles.loading}>Loading...</h2>;
  }

  if (book === null) {
    return (
      <h2 style={styles.error}>Book not found or removed from library.</h2>
    );
  }

  return (
    <div style={styles.page}>
      <img
        src={book.cover}
        alt={book.title}
        style={styles.img}
      />

      <div style={styles.info}>
        <h2 style={styles.title}>{book.title}</h2>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Category:</strong> {book.category}
        </p>
        <p>
          <strong>Copies Available:</strong> {book.copies}
        </p>
      </div>
    </div>
  );
}
export default Details;
const styles = {
  loading: { textAlign: "center", marginTop: "40px" },
  error: { textAlign: "center", marginTop: "40px", color: "red" },
  page: { display: "flex", gap: "20px", padding: "20px" },
  img: {
    width: "260px",
    height: "330px",
    objectFit: "cover",
    border: "2px solid #FF4D6A",
    borderRadius: "12px",
  },
  info: {
    padding: "20px",
    background: "#FFE6F2",
    borderRadius: "12px",
    border: "2px solid #FF4D6A",
    color: "#e4125cff",
  },
  title: { color: "#5A001F", marginBottom: "10px" },
};

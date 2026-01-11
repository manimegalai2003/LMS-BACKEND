import React from "react";
import { useNavigate } from "react-router-dom";

const FALLBACK_IMAGE = "https://via.placeholder.com/150x200?text=No+Cover";

function BookCard({ book, mode, onIssue, onEdit, onDelete }) {
  const navigate = useNavigate();

  if (!book) return null; // ✅ prevents crash

  return (
    <div style={styles.card}>
      <img
        src={book.cover || FALLBACK_IMAGE}
        alt={book.title || "Book"}
        style={styles.img}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = FALLBACK_IMAGE;
        }}
      />

      <h3 style={styles.title}>{book.title || "Untitled Book"}</h3>

      <p style={styles.author}>
        <b>Author:</b> {book.author || "Unknown"}
      </p>

      <div style={styles.btnRow}>
        {mode === "student" && (
          <>
            <button
              style={styles.viewBtn}
              onClick={() => navigate(`/student/book/${book._id}`)}
            >
              View
            </button>
            <button style={styles.issueBtn} onClick={() => onIssue(book._id)}>
              Issue
            </button>
          </>
        )}

        {mode === "admin" && (
          <>
            <button style={styles.viewBtn} onClick={() => onEdit(book._id)}>
              Edit
            </button>
            <button style={styles.issueBtn} onClick={() => onDelete(book._id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BookCard;

const styles = {
  card: {
    width: "250px",
    minHeight: "360px",
    padding: "14px",
    background: "#FFE6F2",
    border: "2px solid #FF4D6A",
    borderRadius: "12px",
    textAlign: "center",
  },
  img: {
    width: "150px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    border: "2px solid #FF4D6A",
  },
  title: {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "700",
  },
  author: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  btnRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  viewBtn: {
    flex: 1,
    marginRight: "5px",
    padding: "8px",
    background: "white",
    border: "2px solid #FF4D6A",
    borderRadius: "8px",
    cursor: "pointer",
  },
  issueBtn: {
    flex: 1,
    marginLeft: "5px",
    padding: "8px",
    background: "#FF4D6A",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
};

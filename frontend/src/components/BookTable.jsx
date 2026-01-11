import React from "react";

 function BookTable({ books, onEdit, onDelete }) {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Title</th>
          <th style={styles.th}>Author</th>
          <th style={styles.th}>Category</th>
          <th style={styles.th}>Copies</th>
          <th style={styles.th}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {books.map((b) => (
          <tr key={b.id} style={styles.tr}>
            <td style={styles.td}>{b.title}</td>
            <td style={styles.td}>{b.author}</td>
            <td style={styles.td}>{b.category}</td>
            <td style={styles.td}>{b.copies}</td>
            <td style={styles.td}>
              <button style={styles.edit} onClick={() => onEdit(b.id)}>
                Edit
              </button>
              <button style={styles.delete} onClick={() => onDelete(b.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default BookTable;
const styles = {
  table: {
    width: "100%",
    background: "#FFE6F2",
    borderCollapse: "collapse",
    border: "2px solid #FF4D6A",
  },
  th: {
    padding: "12px",
    background: "#FF4D6A",
    color: "white",
    border: "1px solid #FF4D6A",
  },
  tr: {},
  td: {
    padding: "10px",
    border: "1px solid #FF4D6A",
    color: "#5A001F",
  },
  edit: {
    padding: "6px 10px",
    border: "1px solid #FF4D6A",
    color: "#FF4D6A",
    borderRadius: "6px",
    marginRight: "10px",
  },
  delete: {
    padding: "6px 10px",
    border: "1px solid red",
    color: "white",
    background: "red",
    borderRadius: "6px",
  },
};

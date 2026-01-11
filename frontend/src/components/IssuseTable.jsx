import React from "react";

function IssueTable({ issues, onReturn, onAddFine }) {
  if (!issues.length) {
    return <p style={{ marginTop: "20px" }}>No issues yet.</p>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Student Name</th>
          <th style={styles.th}>Roll No</th>
          <th style={styles.th}>Book Title</th>
          <th style={styles.th}>Issued Date</th>
          <th style={styles.th}>Due Date</th>
          <th style={styles.th}>Action</th>
        </tr>
      </thead>

      <tbody>
        {issues.map((i) => (
          <tr key={i._id}>
            <td style={styles.td}>{i.student?.name || "Unknown"}</td>
            <td style={styles.td}>{i.student?.roll || "N/A"}</td>
            <td style={styles.td}>{i.book?.title || "Deleted Book"}</td>

            <td style={styles.td}>{new Date(i.issuedAt).toLocaleString()}</td>

            <td style={styles.td}>
              {new Date(
                new Date(i.issuedAt).getTime() + 7 * 24 * 60 * 60 * 1000
              ).toLocaleString()}
            </td>

            <td style={styles.td}>
              {/* ADD FINE */}
              <button
                style={{ ...styles.btn, background: "#ff9800" }}
                onClick={() => onAddFine(i)}
              >
                Add Fine
              </button>

              {/* RETURN BOOK */}
              <button
                style={{ ...styles.btn, marginLeft: "8px" }}
                onClick={() => onReturn(i._id)}
              >
                Return
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default IssueTable;

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    background: "#FFE6F2",
    padding: "10px",
    border: "2px solid #FF4D6A",
  },
  td: {
    padding: "10px",
    border: "1px solid #FF4D6A",
    textAlign: "center",
  },
  btn: {
    background: "#FF4D6A",
    color: "white",
    padding: "6px 10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

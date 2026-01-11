import React from "react";

function UserTable({ users }) {
  if (!users || users.length === 0) {
    return <p>No students found</p>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Roll No</th>
          <th style={styles.th}>Email</th>
          <th style={styles.th}>Department</th>
          <th style={styles.th}>Fine Status</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td style={styles.td}>{user.name || "-"}</td>
            <td style={styles.td}>{user.roll || "-"}</td>
            <td style={styles.td}>{user.email || "-"}</td>
            <td style={styles.td}>{user.department || "-"}</td>
            <td style={styles.td}>
              {user.fineStatus ? user.fineStatus : "No Fine"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;

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
};

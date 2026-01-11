import React, { useEffect, useState } from "react";

function Profile() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("currentStudent"));
    setStudent(data);
  }, []);

  if (!student) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Loading...</h2>
    );
  }

  return (
    <div style={styles.box}>
      <h2 style={styles.title}>My Profile</h2>

      <div style={styles.infoBox}>
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Roll Number:</strong> {student.roll}
        </p>
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>Department:</strong> {student.department}
        </p>
      </div>
    </div>
  );
}
export default Profile;
const styles = {
  box: {
    maxWidth: "420px",
    margin: "40px auto",
    padding: "24px",
    background: "#FFE6F2",
    border: "2px solid #FF4D6A",
    borderRadius: "12px",
    textAlign: "center",
  },
  title: {
    color: "#5A001F",
    fontWeight: "700",
    marginBottom: "16px",
  },
  infoBox: {
    background: "white",
    border: "1px solid #FF4D6A",
    padding: "16px",
    borderRadius: "12px",
    textAlign: "left",
    lineHeight: "28px",
    color: "#e4125cff",
  },
};

import React, { useEffect, useState } from "react";
import UserTable from "../../components/UserTable";

function Users() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users/students");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Failed to fetch students", err);
    } finally {
      setLoading(false); // ✅ THIS WAS MISSING
    }
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>All Students</h2>

      {loading ? <p>Loading students...</p> : <UserTable users={students} />}
    </div>
  );
}

export default Users;

const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff" },
};

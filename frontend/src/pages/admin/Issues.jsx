import React, { useEffect, useState } from "react";
import IssueTable from "../../components/IssuseTable";

export default function Issues() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadIssues();
  }, []);

  const loadIssues = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/issues");
      const data = await res.json();
      setIssues(data);
    } catch (err) {
      console.error("Failed to fetch issues", err);
    } finally {
      setLoading(false);
    }
  };

  const returnBook = async (id) => {
    if (!window.confirm("Return this book?")) return;

    try {
      await fetch(`http://localhost:5000/api/issues/${id}/return`, {
        method: "PUT",
      });

      setIssues((prev) => prev.filter((i) => i._id !== id));
    } catch (err) {
      console.error("Return failed", err);
    }
  };

 const addFine = async (issue) => {
   const amount = prompt("Enter fine amount (₹)");

   if (!amount || isNaN(amount)) return;

   await fetch("http://localhost:5000/api/fines", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
       studentId: issue.student._id,
       issueId: issue._id,
       amount: Number(amount),
     }),
   });

   alert("Fine added successfully");
 };

return (
  <div style={styles.page}>
    <h2 style={styles.title}>Issued Books</h2>

    {loading ? (
      <p>Loading issued books...</p>
    ) : (
      <IssueTable
        issues={issues}
        onReturn={returnBook}
        onAddFine={addFine}
      />
    )}
  </div>
);
}



const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff" },
};


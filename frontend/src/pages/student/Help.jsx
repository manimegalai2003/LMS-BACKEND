 function Help() {
  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Help & Support</h2>

      <ul style={styles.list}>
        <li>To issue a book, go to Browse → Click Issue</li>
        <li>To return a book, contact the library admin</li>
        <li>Check fines in the Fines section</li>
        <li>For help, contact: librarysupport@college.com</li>
        <li>Phone: +91 12345 67890</li>
      </ul>
    </div>
  );
}
export default Help;
const styles = {
  page: { padding: "20px" },
  title: { color: "#e4125cff", marginBottom: "16px", fontWeight: "bold" },
  list: {
    padding: 0,
    lineHeight: "4",
    fontSize: "20px",
    color: "#e4125cff",
  },
};

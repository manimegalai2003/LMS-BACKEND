import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function StudentSignup() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();

    if (pass !== confirm) {
      return alert("Passwords do not match!");
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        roll,
        email,
        department: dept,
        password: pass,
      });

      alert("Account created successfully!");
      navigate("/student/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={styles.title}>Create Student Account</h2>

        <form style={styles.form} onSubmit={handleSignup}>
          <input
            style={styles.input}
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            style={styles.input}
            type="text"
            placeholder="Roll Number"
            onChange={(e) => setRoll(e.target.value)}
            required
          />

          <select
            style={styles.input}
            onChange={(e) => setDept(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            <option value="AIDS">AIDS</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="CSBS">CSBS</option>
            <option value="MECH">MECH</option>
            <option value="AIML">AIML</option>
            <option value="CYBER SECURITY">CYBER SECURITY</option>
          </select>

          <input
            style={styles.input}
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div style={styles.passwordRow}>
            <input
              style={{ ...styles.input, flex: 1 }}
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              style={styles.eyeBtn}
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>

          <input
            style={styles.input}
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <button style={styles.btn}>Create Account</button>
        </form>

        <p style={styles.text}>
          Already have an account?{" "}
          <Link to="/student/login" style={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default StudentSignup;

const styles = {
  box: {
    width: "500px",
    minHeight: "300px",
    margin: "40px auto",
    padding: "28px",
    background: "#FFE6F2",
    border: "2px solid #FF4D6A",
    borderRadius: "12px",
    textAlign: "center",
  },
  title: {
    color: "#5A001F",
    fontWeight: "650",
    marginBottom: "12px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #FF4D6A",
    background: "white",
    fontSize: "14px",
  },
  passwordRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  eyeBtn: {
    padding: "10px",
    border: "1px solid #FF4D6A",
    background: "white",
    color: "#FF4D6A",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
  },
  btn: {
    padding: "12px",
    background: "#FF4D6A",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "8px",
    fontWeight: "600",
  },
  text: {
    marginTop: "14px",
    color: "#5A001F",
  },
  link: {
    color: "#FF4D6A",
    textDecoration: "none",
    fontWeight: "600",
  },
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1677187301444-fd793e33e8d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w5fHx8ZW58MHx8fHx8')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

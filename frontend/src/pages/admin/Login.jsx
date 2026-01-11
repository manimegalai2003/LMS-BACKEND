
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const commonBox = {
  width: "500px",
  minHeight: "300px",
  margin: "40px auto",
  padding: "24px",
  background: "#FFE6F2",
  border: "2px solid #FF4D6A",
  borderRadius: "12px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #FF4D6A",
};

const btnStyle = {
  padding: "10px",
  background: "#FF4D6A",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const styles = {
  box: { ...commonBox },
  title: { color: "#5A001F", textAlign: "center", marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column", gap: "20px" },
  input: inputStyle,
  btn: btnStyle,

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
    fontWeight: "600",
    fontSize: "12px",
  },

  linkText: {
    marginTop: "14px",
    color: "#5A001F",
    textAlign: "center",
  },
  link: {
    color: "#FF4D6A",
    fontWeight: "600",
    textDecoration: "none",
  },

  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1750137406099-d62ad30c4467?w=1200')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const { setAdminLogged } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();

    const admins = JSON.parse(localStorage.getItem("admins")) || [];
    const admin = admins.find((a) => a.email === email && a.password === pass);

    if (!admin) {
      alert("Invalid admin credentials!");
      return;
    }

    localStorage.setItem("adminLogged", "true");
    setAdminLogged(true);

    localStorage.removeItem("currentStudent");

    navigate("/admin/dashboard");
  }

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={styles.title}>Admin Login</h2>

        <form style={styles.form} onSubmit={handleLogin}>
        
          <input
            style={styles.input}
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

         
          <div style={styles.passwordRow}>
            <input
              style={{ ...styles.input, flex: 1 }}
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) => setPass(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              style={styles.eyeBtn}
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>

          <button style={styles.btn}>Login</button>
        </form>

        <br />

        <p style={styles.linkText}>
          Don't have an account?{" "}
          <a href="/admin/signup" style={styles.link}>
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
export default AdminLogin;
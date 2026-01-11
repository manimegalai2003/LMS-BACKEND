import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const commonBox = {
  width: "500px",
  minHeight: "300px",
  margin: "60px auto",
  padding: "30px",
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
  title: { color: "#5A001F", marginBottom: "10px", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "30px" },
  input: inputStyle,
  btn: btnStyle,
  text: { marginTop: "10px", textAlign: "center", color: "#5A001F" },
  link: { color: "#FF4D6A", fontWeight: "600", textDecoration: "none" },

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

  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1750360906458-b1aee8f58b31?w=1200')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

function AdminSignup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const { setAdminLogged } = useContext(AuthContext);

  function handleSignup(e) {
    e.preventDefault();

    const admins = JSON.parse(localStorage.getItem("admins")) || [];

    if (admins.some((a) => a.email === email)) {
      alert("Admin with this email already exists!");
      return;
    }

    const newAdmin = {
      id: Date.now(),
      email,
      password: pass,
    };

    admins.push(newAdmin);
    localStorage.setItem("admins", JSON.stringify(admins));

    localStorage.setItem("adminLogged", "true");
    setAdminLogged(true);

    localStorage.removeItem("currentStudent");

    navigate("/admin/dashboard");
  }

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={styles.title}>Admin Signup</h2>

        <form style={styles.form} onSubmit={handleSignup}>
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

          <button style={styles.btn}>Create Account</button>
        </form>

        <br />

        <p style={styles.text}>
          Already have an account?{" "}
          <Link to="/admin/login" style={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default AdminSignup;
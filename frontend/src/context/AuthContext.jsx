import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [adminLogged, setAdminLogged] = useState(
    localStorage.getItem("adminLogged") === "true"
  );

  const [student, setStudent] = useState(
    JSON.parse(localStorage.getItem("currentStudent")) || null
  );

  useEffect(() => {
    localStorage.setItem("adminLogged", adminLogged ? "true" : "false");
  }, [adminLogged]);

  useEffect(() => {
    if (student)
      localStorage.setItem("currentStudent", JSON.stringify(student));
    else localStorage.removeItem("currentStudent");
  }, [student]);

  return (
    <AuthContext.Provider
      value={{ adminLogged, setAdminLogged, student, setStudent }}
    >
      {children}
    </AuthContext.Provider>
  );
}

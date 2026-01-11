import React, { lazy, Suspense, useContext, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar.jsx";
import StudentNavbar from "./components/StudentNavbar.jsx";
import Spinner from "./components/Spinner";
import { AuthContext } from "./context/AuthContext";


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function lazyWithDelay(factory, ms = 2000) {
  return lazy(() => delay(ms).then(factory));
}

const Home = lazyWithDelay(() => import("./pages/Home.jsx"));
const NotFound = lazyWithDelay(() => import("./pages/NotFound.jsx"));

const StudentLogin = lazyWithDelay(() => import("./pages/student/Login.jsx"));
const StudentSignup = lazyWithDelay(() => import("./pages/student/Signup.jsx"));
const StudentDashboard = lazyWithDelay(() => import("./pages/student/Dashboard.jsx"));
const Browse = lazyWithDelay(() => import("./pages/student/Browse.jsx"));
const MyBooks = lazyWithDelay(() => import("./pages/student/MyBooks.jsx"));
const Details = lazyWithDelay(() => import("./pages/student/Details.jsx"));
const Profile = lazyWithDelay(() => import("./pages/student/Profile.jsx"));
const StudentFines = lazyWithDelay(() => import("./pages/student/Fines.jsx"));
const Feedback = lazyWithDelay(() => import("./pages/student/Feedback.jsx"));
const Help = lazyWithDelay(() => import("./pages/student/Help.jsx"));
const StudentIssues = lazyWithDelay(() => import("./pages/student/MyIssues.jsx"));

const AdminFeedback = lazyWithDelay(() => import("./pages/admin/Feedback.jsx"));
const AdminLogin = lazyWithDelay(() => import("./pages/admin/Login.jsx"));
const AdminSignup = lazyWithDelay(() => import("./pages/admin/Signup.jsx"));
const AdminDashboard = lazyWithDelay(() => import("./pages/admin/Dashboard.jsx"));
const Books = lazyWithDelay(() => import("./pages/admin/Books.jsx"));
const Add = lazyWithDelay(() => import("./pages/admin/Add.jsx"));
const Edit = lazyWithDelay(() => import("./pages/admin/Edit.jsx"));
const Issues = lazyWithDelay(() => import("./pages/admin/Issues.jsx"));
const Users = lazyWithDelay(() => import("./pages/admin/Users.jsx"));
const Fines = lazyWithDelay(() => import("./pages/admin/Fines.jsx"));

function App() {
  const { adminLogged, student } = useContext(AuthContext);



  const noNavbarPaths = [
    "/",
    "/student/login",
    "/student/signup",
    "/admin/login",
    "/admin/signup",
  ];

  const hideNavbar = noNavbarPaths.includes(window.location.pathname);

  return (
    <>
      
      {!hideNavbar &&
        (adminLogged ? (
          <AdminNavbar />
        ) : student ? (
          <StudentNavbar />
        ) : (
          <StudentNavbar /> 
        ))}

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/browse" element={<Browse />} />
          <Route path="/student/my-books" element={<MyBooks />} />
          <Route path="/student/book/:id" element={<Details />} />
          <Route path="/student/profile" element={<Profile />} />
          <Route path="/student/fines" element={<StudentFines />} />
          <Route path="/student/feedback" element={<Feedback />} />
          <Route path="/student/help" element={<Help />} />
<Route path="/student/issues" element={<StudentIssues />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/books" element={<Books />} />
          <Route path="/admin/add" element={<Add />} />
          <Route path="/admin/edit/:id" element={<Edit />} />
          <Route path="/admin/issues" element={<Issues />} />
          <Route path="/admin/fines" element={<Fines />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/feedback" element={<AdminFeedback />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
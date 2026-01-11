

export function adminSignup(email, password) {
  localStorage.setItem("admin", JSON.stringify({ email, password }));
}

export function adminLogin(email, password) {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (!admin) return false;
  return admin.email === email && admin.password === password;
}


export function studentSignup(student) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
}

export function studentLogin(roll, password) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  return students.find((s) => s.roll === roll && s.password === password);
}
export function getStudentByRoll(roll) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  return students.find((s) => s.roll === roll);
}
const express = require("express");
const router = express.Router();
const {
  getAllFines,
  addFine,
  getStudentFines,
  payFine,
} = require("../controllers/fineController");

router.get("/", getAllFines); // Admin
router.post("/", addFine); // Admin
router.get("/student/:studentId", getStudentFines); // Student
router.put("/:id/pay", payFine); // Student

module.exports = router;

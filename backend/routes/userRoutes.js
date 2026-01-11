const express = require("express");
const router = express.Router();

const { getAllStudents } = require("../controllers/userController");

// Admin – get all students
router.get("/students", getAllStudents);

module.exports = router;

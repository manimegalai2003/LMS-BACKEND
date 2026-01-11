const express = require("express");
const router = express.Router();

const issueController = require("../controllers/issueController");

// 🔍 Debug log (TEMPORARY – VERY IMPORTANT)

router.post("/", issueController.issueBook);
router.get("/", issueController.getAllIssues);
router.put("/:id/return", issueController.returnBook);
router.get("/student/:studentId", issueController.getStudentIssues);

module.exports = router;

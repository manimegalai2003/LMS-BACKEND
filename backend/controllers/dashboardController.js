const User = require("../models/User");
const Book = require("../models/Book");
const Issue = require("../models/Issue");

exports.getDashboardCounts = async (req, res) => {
  try {
    const students = await User.countDocuments({ role: "student" });
    const books = await Book.countDocuments();
    const issues = await Issue.countDocuments();

    res.json({
      students,
      books,
      issues,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

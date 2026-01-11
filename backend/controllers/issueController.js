const Issue = require("../models/Issue");

exports.issueBook = async (req, res) => {
  try {
    const { studentId, bookId } = req.body;

    const issue = await Issue.create({
      student: studentId, // ObjectId
      book: bookId, // ObjectId
      issuedAt: new Date(),
      returned: false,
    });

    res.status(201).json({
      message: "Book issued successfully",
      issue,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2️⃣ Issue a book (student)
exports.issueBook = async (req, res) => {
  try {
    const { studentId, bookId } = req.body;

    const issue = await Issue.create({
      student: studentId,
      book: bookId,
      issuedAt: new Date(),
      returned: false,
    });

    res.status(201).json({
      message: "Book issued successfully",
      issue,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3️⃣ Return a book
exports.returnBook = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.returned = true;
    await issue.save();

    res.json({ message: "Book returned successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 4️⃣ Get issues of a specific student (MY BOOKS)
exports.getStudentIssues = async (req, res) => {
  try {
    const { studentId } = req.params;

    const issues = await Issue.find({
      student: studentId,
      returned: false,
    }).populate("book");

    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// 5️⃣ Get all issues (admin)
exports.getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ returned: false })
      .populate("student", "name roll email department")
      .populate("book", "title author cover");

    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


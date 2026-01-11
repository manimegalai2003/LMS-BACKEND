const Fine = require("../models/Fine");

/**
 * ADMIN – Get all fines
 */
exports.getAllFines = async (req, res) => {
  try {
    const fines = await Fine.find()
      .populate("student", "name roll")
      .populate({
        path: "issue",
        populate: {
          path: "book",
          select: "title",
        },
      });

    res.json(fines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/**
 * ADMIN – Add fine
 */
exports.addFine = async (req, res) => {
  try {
    const { studentId, issueId, amount } = req.body;

    const fine = await Fine.create({
      student: studentId,
      issue: issueId,
      amount,
    });

    res.status(201).json({
      message: "Fine added successfully",
      fine,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * STUDENT – Get my fines
 */
exports.getStudentFines = async (req, res) => {
  try {
    const fines = await Fine.find({ student: req.params.studentId }).populate({
      path: "issue",
      populate: {
        path: "book",
        select: "title",
      },
    });

    res.json(fines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/**
 * STUDENT – Pay fine
 */
exports.payFine = async (req, res) => {
  try {
    const fine = await Fine.findById(req.params.id);

    if (!fine) {
      return res.status(404).json({ message: "Fine not found" });
    }

    fine.paid = true;
    await fine.save();

    res.json({ message: "Fine paid successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

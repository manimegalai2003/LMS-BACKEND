const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  issuedAt: {
    type: Date,
    default: Date.now,
  },
  returned: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Issue", issueSchema);

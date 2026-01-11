const router = require("express").Router();
const { getBooks, deleteBook } = require("../controllers/bookController");

router.get("/", getBooks);
router.delete("/:id", deleteBook);

module.exports = router;

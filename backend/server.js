const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);


app.use(express.json());


connectDB();


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/issues", require("./routes/issueRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/fines", require("./routes/fineRoutes"));


app.get("/", (req, res) => {
  res.send("Library Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

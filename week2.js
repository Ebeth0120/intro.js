const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Custom middleware (Bonus)
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// GET /
app.get("/", (req, res) => {
  res.send("My Week 2 API!");
});
  
// POST /user
app.post("/user", (req, res) => {
  const { name, email } = req.body;
  
if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }
  res.send(`Hello, ${name}!`);
});

// GET /user/:id
app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  res.send(`User ${id} profile`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
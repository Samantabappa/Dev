const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// 🔥 static frontend serve (optional but useful)
app.use(express.static("public"));

// DB connect
require("./config/db");

// routes
const userRoutes = require("./routes/userRoutes");

// 🔥 API route
app.use("/api/users", userRoutes);

// 🔥 root route (fix "Cannot GET /")
app.get("/", (req, res) => {
  res.send("🚀 Server is running");
});

// server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

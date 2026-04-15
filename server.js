const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
require("./config/db");

// routes
const userRoutes = require("./routes/userRoutes");

// 🔥 FIX: /api use করো
app.use("/api/users", userRoutes);

// server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

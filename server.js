const express = require("express");
const cors = require("cors");
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// database connect
require("./config/db");

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

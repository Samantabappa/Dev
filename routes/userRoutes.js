const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET সব user
router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// POST add user
router.post("/", async (req, res) => {
  const newUser = new User({
    name: req.body.name
  });

  await newUser.save();
  res.send("User Added");
});

// DELETE user
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User Deleted");
});

module.exports = router;

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://<db_username>:<db_password>@cluster0.r6wwufn.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://merizindegi40_db_user:bappa121212@cluster0.r6wwufn.mongodb.net/myapp?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  username: String,
  age: Number,
  nationality: String,
});

module.exports = mongoose.model("Userlist", UserSchema);

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  image: { type: String },
  friedRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  sentfriedRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
const user = mongoose.model("User", userSchema);
module.exports = user;

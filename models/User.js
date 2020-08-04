const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// dotenv.config({
//    path: "./config/config.env",
// });

const UserSchema = new mongoose.Schema({
   fullName: {
      type: String,
      required: [true, "Name is Required"],
   },
   email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email"],
   },
   profilePic: {
      type: String,
      required: [true, "Email is required"],
   },
   googleId: {
      type: String,
      unique: true,
   },
   joinedAt: {
      type: Date,
      default: Date.now,
   },
});
//Sign jwt and return token
UserSchema.methods.getSignedJwt = function () {
   return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
   });
};

module.exports = mongoose.model("User", UserSchema);

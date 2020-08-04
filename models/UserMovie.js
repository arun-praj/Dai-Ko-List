const mongoose = require("mongoose");

const UserMovieSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true,
   },
   movie: {
      type: [mongoose.Schema.ObjectId],
      ref: "Movie",
      required: true,
      unique: true,
   },
});

module.exports = mongoose.model("UserMovie", UserMovieSchema);

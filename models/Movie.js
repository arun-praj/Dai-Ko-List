const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
   movie_id: {
      type: "String",
      unique: true,
   },
   original_title: {
      type: String,
      required: [true, "Title is Required"],
   },
   overview: {
      type: String,
      required: [true, "Overview is required"],
      unique: true,
   },
   genre_ids: {
      type: [Number],
   },
   poster_path: {
      type: String,
   },
   backdrop_path: {
      type: String,
   },
   releaseDate: {
      type: String,
   },
   adult: {
      type: Boolean,
   },
   original_language: {
      type: String,
   },
   addedAt: {
      type: Date,
      default: Date.now,
   },
});

module.exports = mongoose.model("Movie", MovieSchema);

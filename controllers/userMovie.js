const mongoose = require("mongoose");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const User = require("../models/User");
const Movie = require("../models/Movie");
const UserMovie = require("../models/UserMovie");

exports.storeMyMovie = asyncHandler(async (req, res, next) => {
   //delete user id from body
   const user_id = req.body.user_id;
   delete req.body.user_id;

   const findmovie = await Movie.findOne({
      movie_id: req.body.movie_id,
   });

   let movieId;

   if (findmovie) {
      movieId = findmovie._id;
      new ErrorResponse(`Movie Already in Database`, 400);
   } else {
      movie = await Movie.create(req.body);
      movieId = movie._id;
   }

   //Find if user already exist in Usermovie collection
   const userMovie = await UserMovie.findOne({
      user: user_id,
   });
   if (userMovie) {
      const tempUserMovie = await UserMovie.updateOne(
         {
            user: user_id,
         },
         {
            $addToSet: {
               movie: movieId,
            },
         }
      );
      res.json({
         status: "success",
         data: tempUserMovie,
      }).status(200);
   } else {
      const newUserMovie = await UserMovie.create({
         user: user_id,
         movie: [movieId],
      });
      res.json({
         status: "success",
         data: newUserMovie,
      }).status(200);
   }
});

exports.getMyMovie = asyncHandler(async (req, res, next) => {
   const movie = await UserMovie.findOne({
      user: req.params.userId,
   });
   const movieList = [];
   for (let i = 0; i < movie.movie.length; i++) {
      const result = await Movie.findById({
         _id: movie.movie[i],
      });
      movieList.push(result);
   }
   res.json({
      success: true,
      data: movieList,
   });
});

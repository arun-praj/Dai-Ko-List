const mongoose = require("mongoose");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");

//Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
   //Create/Sign Token from User model

   const token = user.getSignedJwt();

   res.status(statusCode).json({
      success: true,
      user: user,
      token,
   });
};

exports.loginWithGoogle = asyncHandler(async (req, res, next) => {
   //    const { sW, yu, sU, PK, OU } = req.body;
   const { googleId, fullName, email, profilePic } = req.body;

   const user = await User.findOne({
      //   email: yu,
      email,
   });
   if (user) {
      sendTokenResponse(user, 200, res);
   } else {
      const newUser = await User.create({
         //  googleId: OU,
         //  fullName: sW,
         //  email: yu,
         //  photo: PK,
         googleId,
         fullName,
         email,
         profilePic,
      });
      sendTokenResponse(newUser, 200, res);
   }
});

exports.getMe = asyncHandler(async (req, res, next) => {
   const user = await User.findById(req.user.id);
   sendTokenResponse(user, 200, res);

   // res.status(200).json({
   //    success: true,
   //    data: user,
   //    token:
   // });
});

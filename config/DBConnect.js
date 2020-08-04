const mongoose = require("mongoose");
const connect = async () => {
   try {
      const conn = await mongoose.connect(
         process.env.MONGO_URI,
         {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
         },
         () => {
            console.log("Database Connected".black.bold.underline.bgGreen);
         }
      );
   } catch (e) {
      console.log("Cannot connect to Database".black.bold.underline.bgRed);
   }
};

module.exports = connect;

const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const colors = require("colors");
const connect = require("./config/DBConnect");

const app = express();

dotenv.config({
   path: "./config/config.env",
});

connect();
app.use(cors());
app.use(express.json());

//root route
app.use("/", (req, res, next) => {
   res.json({
      "🖥 Server Status": "Running...",
      AvailableRoutes: listEndpoints(app),
   }).status(200);
   next();
});

const PORT = process.env.PORT || 7000;

if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));
   app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });
}

app.listen(PORT, () => {
   console.log(`Server started, PORT : ${PORT}`.black.bold.underline.bgGreen);
});

//HANDLE unhandled Promise Rejection
process.on("unhandledRejection", (reason, promise) => {
   console.log(`Error : ${reason.message}`.red.bold);
   //    server.close(() => process.exit(1));
});

const functions = require("firebase-functions");
const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors"); //Install this if you don't have
require("dotenv").config(); //Install this if you don't have to work with .env file
const app = express();

//Enable Cors
app.use(cors());

app.use(express.json()); //Accept application/json Data
app.use(express.urlencoded({ extended: false })); //Accept xxx-www.form_urlencounded Data

//All API Routes Goes Here
//this is a proper way to create routes and import
app.use("/v1", require("./routes"));

//handle all kind of error that sent by this app
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message || "Server Error";
  const data = error.data || [];
  res.status(status).json({
    message: message,
    data: data,
  });
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>console.log('Db connected'))
  .catch(err=>console.log("Db connection error",err))

exports.app = functions.https.onRequest(app)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const mongoose = require("mongoose");
const connectDB = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/travel-guide");
  var db = mongoose.connection;
  db.on("error", console.error.bind("error"));
  db.once("open", function () {
    console.log("Database connection successful");
  });
};

module.exports = connectDB;

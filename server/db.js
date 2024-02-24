const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://admin:password1234@hospital.x2x4bra.mongodb.net/";
// const dbUrl = "mongodb://localhost:27017/hospital";
mongoose.connect(dbUrl);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

module.exports = mongoose;

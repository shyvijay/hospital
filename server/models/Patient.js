const mongoose = require("../db");

const patientSchema = mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});
const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;

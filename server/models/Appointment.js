const mongoose = require("../db");

const appointmentSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
});
const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;

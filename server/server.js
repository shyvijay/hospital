const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const Patient = require("./models/Patient");
const Appointment = require("./models/Appointment");
const { default: axios } = require("axios");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get all patients
app.get("/api/patients", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).send(patients);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});

// Get specific patients
app.get("/api/patients/:id", async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.send(patient);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});

// Create a new patient
app.post("/api/patients", async (req, res) => {
  try {
    const newPatient = await Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    console.log("Error: ", error.message);
  }
});

// Update a patient
app.patch("/api/patients/:id", async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (req.body.name) patient.name = req.body.name;
    if (req.body.age) patient.age = req.body.age;
    if (req.body.gender) patient.gender = req.body.gender;
    const savedPatient = await patient.save();
    res.json(savedPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a patient
app.delete("/api/patients/:id", async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all appointment
app.get("/api/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    await res.status(200).send(appointments);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
});
// Create a new appointment
app.post("/api/appointments", async (req, res) => {
  console.log(req.body);
  try {
    const newAppointment = await Appointment(req.body);
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    console.log("Error: ", error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is runnign on port: ${PORT}`);
});

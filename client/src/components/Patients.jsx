import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000/api/patients";
const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        axios.get(baseUrl).then((response) => {
          setPatients(response.data);
        });
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };
    fetchData();
    console.log(patients);
  }, []);
  return (
    <div>
      {patients &&
        patients.map((patient) => <p key={patient._id}>{patient.name}</p>)}
    </div>
  );
};

export default Patients;

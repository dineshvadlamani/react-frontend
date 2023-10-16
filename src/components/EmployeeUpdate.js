// EmployeeUpdate.js

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Employeeservice from "../services/Employeeservice";

export const EmployeeUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useEffect(() => {
    Employeeservice.getEmployeeById(id)
      .then((response) => {
        const { firstName, lastName, emailId } = response.data;
        setFormData({ firstName, lastName, emailId });
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
      });
  }, [id]);

  const handleFieldChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await Employeeservice.updateEmployee(id, formData);
      console.log("Employee updated successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleFieldChange("firstName", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleFieldChange("lastName", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="emailId">Email ID:</label>
          <input
            type="text"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={(e) => handleFieldChange("emailId", e.target.value)}
          />
        </div>
        <div>
            <br/>
          <button type="submit">Update Employee</button>
        </div>
      </form>
    </div>
  );
};

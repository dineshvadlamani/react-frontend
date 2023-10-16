import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Employeeservice from "../services/Employeeservice";
import "./../css/CreateEmployee.css";
const CreateEmployee = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const handleChange = (value, fieldName) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to save the employee data (formData) here

    // For demonstration purposes, log the form data to the console
    console.log("Form Data:", formData);

     Employeeservice.addEmployee(formData)
    .then((response)=>{
        console.log(response.data)
        setFormData({
            firstName: "",
            lastName: "",
            emailId: "",
          });
    })
    .catch((error)=>{
        console.log("Error handling",error);
    })
    
  };
   
    
   
  const handleCancel = () => {
    // Redirect to the home page when Cancel is clicked
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2 >Add Employee</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="Dinesh Vadlamani"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleChange(e.target.value, "firstName")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Vadlamani"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange(e.target.value, "lastName")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailId">Email ID:</label>
          <input
            type="text"
            id="emailId"
            placeholder="Vadlamani@gmail.com"
            name="emailId"
            value={formData.emailId}
            onChange={(e) => handleChange(e.target.value, "emailId")}
          />
        </div>

        <div className="form-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateEmployee;

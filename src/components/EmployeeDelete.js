// EmployeeDelete.js

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Employeeservice from "../services/Employeeservice";

export const EmployeeDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch details of the employee to be deleted
    Employeeservice.getEmployeeById(id)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
      });
  }, [id]);

  const handleDelete = () => {
    Employeeservice.deleteEmployeeById(id)
      .then(() => {
        console.log("Employee deleted successfully");
        navigate("/employees");
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      {employee && (
        <div>
          <p>
            Are you sure you want to delete {employee.firstName}{" "}
            {employee.lastName}?
          </p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

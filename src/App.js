import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"; // Import useNavigate
import CreateEmployee from "./components/CreateEmployee";
import { EmployeeDelete } from "./components/EmployeeDelete";
import { EmployeeUpdate } from "./components/EmployeeUpdate";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Employees } from "./components/ListOfEmployees";
import "./index.css";
import Employeeservice from "./services/Employeeservice";

function App() {
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh", // Set minimum height to 100% of the viewport
  };

  const addEmployeeButtonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  };

  function AddEmployeeButton() {
    const addEmployee = () => {
      navigate("/add-employee");
    };

    const showButton =
      window.location.pathname === "/" ||
      window.location.pathname === "/employees";

    return showButton ? (
      <button onClick={addEmployee} style={addEmployeeButtonStyle}>
        Add Employee
      </button>
    ) : null;
  }

  const handleUpdateClick = (employeeId) => {
    navigate(`/update-employee/${employeeId}`);
  };

 const handleDeleteClick = (employeeId)=>{
  navigate(`/delete-employee/${employeeId}`);
 };
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Employeeservice.getAllEmployees()
      .then((response) => {
        console.log(response.data);
        setEmployeeList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="container" style={containerStyle}>
        <Routes>
          <Route
            path="/"
            element={
              <Employees
                employeeList={employeeList}
                handleUpdateClick={handleUpdateClick}
                handleDeleteClick={handleDeleteClick}
              />
            }
          />
          <Route
            path="/employees"
            element={
              <Employees
                employeeList={employeeList}
                handleUpdateClick={handleUpdateClick}
                handleDeleteClick={handleDeleteClick}
              />
            }
          />
          <Route path="/add-employee" element={<CreateEmployee />} />
          <Route path="/update-employee/:id" element={<EmployeeUpdate />} />
          <Route path="/delete-employee/:id" element={<EmployeeDelete />} />
        </Routes>
        <AddEmployeeButton />
      </div>
      <Footer />
    </div>
  );
}

export default App;

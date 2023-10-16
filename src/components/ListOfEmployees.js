import React from "react";

export const Employees = (props) => {
  const handleUpdate = (employeeId) => {
    props.handleUpdateClick(employeeId);
  };

  const handleDelete = (employeeId) => {
    props.handleDeleteClick(employeeId);
  };


  const tableStyle = {
    margin: "0 auto", // Center horizontally
    width: "80%", // Set the width as needed
  };
  const buttonStyle = {
    marginRight:"5px",
    backgroundColor: "green",
    color: "white",
    // Add any additional styles if needed
  };

  return (
    <div className="text-center">
      <h2>Employee List</h2>
      <div style={tableStyle}>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.employeeList.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button
                    style={buttonStyle}
                    className="btn btn-info"
                    onClick={() => handleUpdate(employee.id)}
                  >
                    Update
                  </button>
                  <button
                    style={{buttonStyle}}
                    className="btn btn-danger"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

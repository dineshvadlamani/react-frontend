import Axios from "axios";
const Employee_API_BASE_URL = "http://localhost:8080/api/v1/employees";
class Employeeservice {
  getAllEmployees() {
    return Axios.get(Employee_API_BASE_URL, { timeout: 5000 }); // Set timeout value in milliseconds
  }
  addEmployee(formData) {
    return Axios.post(`${Employee_API_BASE_URL}`, formData);
  }
  updateEmployee(id, updatedEmployee) {
    return Axios.put(`${Employee_API_BASE_URL}/${id}`, updatedEmployee);
  }
  getEmployeeById(id) {
    return Axios.get(`${Employee_API_BASE_URL}/${id}`);
  }
  deleteEmployeeById(id){
    return Axios.delete(`${Employee_API_BASE_URL}/${id}`);
  }
}

export default new Employeeservice();

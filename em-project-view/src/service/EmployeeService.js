import axios from 'axios';
const EMPLOYEE_SAPI_BASE_URL = "http://localhost:9090/employees";
class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_SAPI_BASE_URL, employee);

  }
  getEmployees() {
    return axios.get(EMPLOYEE_SAPI_BASE_URL);
  }
  getEmployeesById(id) {
    return axios.get(EMPLOYEE_SAPI_BASE_URL+'/'+id);
  }
  deleteEmployeesById(id) {
    return axios.delete(EMPLOYEE_SAPI_BASE_URL+'/'+id);
  }
  updateEmployee(employee, id) {
    return axios.put(EMPLOYEE_SAPI_BASE_URL+'/'+id, employee);
  }
}

export default new EmployeeService();

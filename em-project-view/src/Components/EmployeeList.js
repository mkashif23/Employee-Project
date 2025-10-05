import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import EmployeeService from "../service/EmployeeService";

const EmployeeList = () => {
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`)
  };

  const navigate = useNavigate();

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeesById(id)
      .then(() => {
        setEmployee(employee.filter(emp => emp.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex justify-end pr-72 pt-5">
        <button
          onClick={() => navigate("/add-employee")}
          className="bg-slate-600 hover:bg-red-700 font-semibold px-4 py-2 rounded"
        >
          Add Employee
        </button>
      </div>
      <div className="flex justify-end pr-10 pt-2">
        <table className="shadow">
          <thead className="bg-slate-600 ">
            <tr>
              <th className="px-4 py-2 uppercase tracking-wide">Name</th>
              <th className="px-4 py-2 uppercase tracking-wide">Phone</th>
              <th className="px-4 py-2 uppercase tracking-wide">Email</th>
              <th className="px-4 py-2 uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employee.map((emp) => (
                <tr className="hover:bg-blue-400 hover:text-white" >
                  <td className="text-left px-6 py-4 whitespace-nowrap">{emp.name}</td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">{emp.phone}</td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">{emp.email}</td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <button
                      type="button"
                      className="ml-2 hover:underline hover:text-green-800"
                      onClick={(e) => editEmployee(e, emp.id)}
                    >Edit </button>
                    <button
                      type="button"
                      className="ml-2 hover:underline hover:text-red-600"
                      onClick={(e) => deleteEmployee(e, emp.id)}
                    >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
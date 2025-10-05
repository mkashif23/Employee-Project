import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: ""
  });

  const reset = (e) => {
    e.preventDefault();
    setEmployee({ id: "", name: "", phone: "", email: "" });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log("saved",response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  return (
    <div className="pt-5">
      <div className="w-[600px] bg-slate-600 rounded shadow py-6 px-8 ml-auto mr-20">
        <div className="text-2xl font-bold text-center mb-6 text-white">
          <p>Add Employee</p>
        </div>
        <div>
          <input
            className="w-full py-2 my-3 px-2 rounded text-slate-800"
            type='text'
            name='name'
            placeholder="Name"
            value={employee.name}
            onChange={handleChange}
          />
          <input
            className="w-full py-2 my-3 px-2 rounded text-slate-800"
            type='number'
            name='phone'
            placeholder="Phone"
            value={employee.phone}
            onChange={handleChange}
          />
          <input
            className="w-full py-2 my-3 px-2 rounded text-slate-800"
            type='email'
            name='email'
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center my-6 space-x-6">
          <button
            onClick={saveEmployee}
            className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded"
          >
            Clear
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;

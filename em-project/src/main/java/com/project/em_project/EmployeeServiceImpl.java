package com.project.em_project;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRespository employeeRespository;

    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRespository.save(employeeEntity);
        //employees.add(employee);
        return "Saved Successfully";

    }

    @Override
    public List<Employee> readEmployees() {
        List<EmployeeEntity> employeesList=employeeRespository.findAll();
        List<Employee> employees = new ArrayList<>();
        for(EmployeeEntity employeeEntity:employeesList){
            Employee emp=new Employee();
            emp.setId(employeeEntity.getId());
            emp.setName(employeeEntity.getName());
            emp.setEmail(employeeEntity.getEmail());
            emp.setPhone(employeeEntity.getPhone());
            employees.add(emp);
        }
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        if (employeeRespository.existsById(id)) {
            employeeRespository.deleteById(id);
            return true;
        }
        return false;
    }


    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity exestingEmployee = employeeRespository.findById(id).get();
        exestingEmployee.setName(employee.getName());
        exestingEmployee.setEmail(employee.getEmail());
        exestingEmployee.setPhone(employee.getPhone());
        employeeRespository.save(exestingEmployee);
        return "Update Successfully";
    }


    @Override
    public Employee readEmployee(Long id) {
        EmployeeEntity employeeEntity = employeeRespository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity,employee );
        return employee;
    }

}

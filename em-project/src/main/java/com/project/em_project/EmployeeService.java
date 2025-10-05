package com.project.em_project;

import java.util.*;

public interface EmployeeService{
    
        String createEmployee(Employee employee);
        List<Employee> readEmployees();
        boolean deleteEmployee(Long id);
        String updateEmployee(Long id, Employee employee);
        Employee readEmployee(Long id);

}
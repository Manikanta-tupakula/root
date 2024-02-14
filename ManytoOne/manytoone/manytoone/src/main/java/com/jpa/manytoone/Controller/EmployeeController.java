package com.jpa.manytoone.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jpa.manytoone.Entity.Employee;
import com.jpa.manytoone.Service.EmployeeService;

@RestController
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employee")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @GetMapping("/employee/{eid}")
    public Optional<Employee> getEmployeesById(@PathVariable Long eid){
        return employeeService.getEmployeesById(eid);
    }
    @PostMapping("/employee")
    public Employee saveEmployees(@RequestBody Employee employee){
        return employeeService.saveEmployees(employee);
    }

    @DeleteMapping("/employee/{eid}")
    public void deleteEmployeeById(@PathVariable Long eid){
        employeeService.deleteEmployeesById(eid);
    
    }
    
}

package com.jpa.manytoone.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jpa.manytoone.Entity.Employee;
import com.jpa.manytoone.Repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeesById(Long aid){
        return employeeRepository.findById(aid);
    }    

    public Employee saveEmployees(Employee employee){
    return employeeRepository.save(employee);
    }

    public void deleteEmployeesById(Long aid){
        employeeRepository.deleteById(aid);
    }
    
}

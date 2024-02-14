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

import com.jpa.manytoone.Entity.Address;
import com.jpa.manytoone.Service.AddressService;

@RestController
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping("/address")
    public List<Address> getAllAddress(){
        return addressService.getAllAddress();
    }

    @GetMapping("/address/{aid}")
    public Optional<Address> getAddressById(@PathVariable Long aid){
        return addressService.getAddressById(aid);
    }

    @PostMapping("/address")
    public Address saveAddress(@RequestBody Address address){
        return addressService.saveAddress(address);
    }

    @DeleteMapping("/address/{aid}")
    public void deleteAddressById(@PathVariable Long aid){
        addressService.deleteAddressById(aid);
    }

    
}

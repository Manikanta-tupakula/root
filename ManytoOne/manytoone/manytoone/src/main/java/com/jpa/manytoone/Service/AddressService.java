package com.jpa.manytoone.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jpa.manytoone.Entity.Address;
import com.jpa.manytoone.Repository.AddressRepository;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public List<Address> getAllAddress(){
        return addressRepository.findAll();
    }

    public Optional<Address> getAddressById(Long aid){
        return addressRepository.findById(aid);
    }    

    public Address saveAddress(Address address){
    return addressRepository.save(address);
    }

    public void deleteAddressById(Long aid){
        addressRepository.deleteById(aid);
    }
    
}

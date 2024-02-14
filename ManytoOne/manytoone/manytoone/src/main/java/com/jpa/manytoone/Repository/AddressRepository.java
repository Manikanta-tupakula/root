package com.jpa.manytoone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jpa.manytoone.Entity.Address;
@Repository
public interface AddressRepository extends JpaRepository<Address,Long>{
    
}

package com.mapping.onetoone.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapping.onetoone.Entity.Person;
import com.mapping.onetoone.Repository.PersonRepository;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public List<Person> getAllPersons(){
        return personRepository.findAll();
    }

    public Optional<Person> getPersonById(Long id){
        return personRepository.findById(id);
    }    

    public Person savePerson(Person person){
    return personRepository.save(person);
    }

    public void deleteById(Long id){
        personRepository.deleteById(id);
    }

}

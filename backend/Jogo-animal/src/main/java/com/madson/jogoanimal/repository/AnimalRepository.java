package com.madson.jogoanimal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.madson.jogoanimal.entities.Animal;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long>{

}

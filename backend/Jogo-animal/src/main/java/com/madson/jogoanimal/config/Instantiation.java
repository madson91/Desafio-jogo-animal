package com.madson.jogoanimal.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.madson.jogoanimal.entities.Animal;
import com.madson.jogoanimal.repository.AnimalRepository;
import com.madson.jogoanimal.utils.Funcoes;

@Configuration
public class Instantiation implements CommandLineRunner {

	@Autowired
	private AnimalRepository animalRepository;
	
	
	@Override
	public void run(String... args) throws Exception {
		
		animalRepository.deleteAll();
		
		Animal animal = new Animal(null, "Macaco", Funcoes.TIPO_TERRA, null);
		Animal animal2 = new Animal(null, "Tubarão", Funcoes.TIPO_AGUA, null);
		animalRepository.saveAll(Arrays.asList(animal,animal2));
		
	}

}
package com.madson.jogoanimal.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.madson.jogoanimal.entities.Animal;
import com.madson.jogoanimal.service.AnimalService;

@RestController
@RequestMapping("/animais")
public class AnimalController {

	@Autowired
	private AnimalService animalService;

	@GetMapping
	public ResponseEntity<List<Animal>> animalAll() {

		List<Animal> list = animalService.getAnimais();
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/{tipo}")
	public ResponseEntity<List<Animal>> getAnimalByTipo(@PathVariable("tipo") int tipo) {
		
		List<Animal> list = animalService.getAnimaisByTipo(tipo);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping(value = "/msg/{tipo}")
	public ResponseEntity<List<String>> getMessageByTipo(@PathVariable("tipo") int tipo) {
		
		List<String> lista = new ArrayList<>();
		lista.add(animalService.getMessageByTipo(tipo));
		return ResponseEntity.ok(lista);
	}
	
	@PostMapping
	public ResponseEntity<Animal> createAnimal(@RequestBody Animal obj) {
		
		Animal animal = animalService.createAnimal(obj);
		return ResponseEntity.ok(animal);
	}
}

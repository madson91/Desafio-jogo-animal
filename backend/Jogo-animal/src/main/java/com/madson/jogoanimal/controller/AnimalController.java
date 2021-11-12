package com.madson.jogoanimal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
}

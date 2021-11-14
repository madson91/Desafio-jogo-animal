package com.madson.jogoanimal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madson.jogoanimal.entities.Animal;
import com.madson.jogoanimal.repository.AnimalRepository;
import com.madson.jogoanimal.utils.Funcoes;

@Service
public class AnimalService {
	
	@Autowired
	private AnimalRepository animalRepository;
	
	public List<Animal> getAnimais() {
		return animalRepository.findAll();
	}
	
	public List<Animal> getAnimaisByTipoCaracNotNull(int tipo) {
		return animalRepository.getAnimaisByTipoCaracNotNull((byte) tipo);
	}
	
	public String getMessageByTipo(int tipo) {
		List<Animal> lista =  getAnimaisByTipo((byte) tipo);
		if(lista.size() == 1)
			return Funcoes.getMensagemAnimal(lista.get(0).getNome());
		return "teste";
		
	}
	
	public List<Animal> getAnimaisByTipo(int tipo) {
		return animalRepository.getAnimaisByTipo((byte) tipo);
	}

	public Animal createAnimal(Animal animal) {
		
		return animalRepository.save(animal);
	}
}

package com.madson.jogoanimal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madson.jogoanimal.entities.Animal;
import com.madson.jogoanimal.entities.MsgDto;
import com.madson.jogoanimal.repository.AnimalRepository;
import com.madson.jogoanimal.utils.Funcoes;

@Service
public class AnimalService {

	@Autowired
	private AnimalRepository animalRepository;

	public MsgDto getMsgDto(MsgDto msgDto) {

		List<Animal> animais = getAnimaisByTipo(msgDto.getTipoAnimal());
		verificarCaracteristica(msgDto);

		if (msgDto.getAnimal() == null) {
			return new MsgDto(animais.get(0), null, Funcoes.MSG_ANIMAL);
		} else {
			if (msgDto.getDescricaoAnimal() != null && msgDto.getCaracteristica() == null) {
				String animalAntigo = msgDto.getAnimal().getNome();
				preencherMsgDtoByAnimal(msgDto);
				return new MsgDto(msgDto.getAnimal(), animalAntigo, Funcoes.MSG_ANIMAL_SET_CARCT);
			} else if (msgDto.getCaracteristica()!= null && msgDto.getAnimal().isCheckCaract()) {
				return new MsgDto(msgDto.getAnimal(), null, Funcoes.MSG_ANIMAL_GET_CARCT);
			} else if (msgDto.getCaracteristica() != null) {
				updateMsgDtoByAnimal(msgDto);
				return new MsgDto(msgDto.getAnimal(), null, Funcoes.MSG_ANIMAL);
			} else if (msgDto.getResposta()) {
				return new MsgDto(msgDto.getAnimal(), null, Funcoes.MSG_VENCEDORA);
			} else if (!msgDto.getResposta()) {
				return new MsgDto(msgDto.getAnimal(), null, Funcoes.MSG_ANIMAL_PENSOU);
			}

			return new MsgDto(msgDto.getAnimal(), null, Funcoes.MSG_VENCEDORA);
		}
	}

	private void updateMsgDtoByAnimal(MsgDto msgDto) {

		Optional<Animal> animal = getAnimalById(msgDto.getAnimal().getId());

		if (animal.isPresent()) {
			animal.get().setCaracteristica(msgDto.getCaracteristica());
			createAnimal(animal.get());
			msgDto.setAnimal(animal.get());
		}

	}

	private void preencherMsgDtoByAnimal(MsgDto msgDto) {

		Animal animal = new Animal(null, msgDto.getDescricaoAnimal(), msgDto.getTipoAnimal(), null, false);
		createAnimal(animal);
		msgDto.setAnimal(animal);
	}

	private void verificarCaracteristica(MsgDto msgDto) {

		List<Animal> lista = getAnimaisByTipoCaracNotNull(msgDto.getTipoAnimal());

		if (lista != null && lista.size() > 0) {
			Animal animal = lista.get(0);
			animal.setCheckCaract(true);
			createAnimal(animal);
			msgDto.setAnimal(animal);
			msgDto.setCaracteristica(animal.getCaracteristica());
			
		}

	}

	public List<Animal> getAnimais() {
		return animalRepository.findAll();
	}

	public Optional<Animal> getAnimalById(Long id) {
		return animalRepository.findById(id);
	}

	public List<Animal> getAnimaisByTipoCaracNotNull(int tipo) {
		return animalRepository.getAnimaisByTipoCaracNotNull((byte) tipo);
	}

	public List<Animal> getAnimaisByTipo(int tipo) {
		return animalRepository.getAnimaisByTipo((byte) tipo);
	}

	public void createAnimal(Animal animal) {

		animalRepository.save(animal);
	}
}

package com.madson.jogoanimal.utils;

import com.madson.jogoanimal.entities.Animal;
import com.madson.jogoanimal.entities.MsgDto;

public class Funcoes {
	
	public static byte TIPO_AGUA = 1;
	public static byte TIPO_TERRA = 2;
	
	public static byte MSG_ANIMAL = 1;
	public static byte MSG_ANIMAL_PENSOU = 2;
	public static byte MSG_ANIMAL_SET_CARCT = 3;
	public static byte MSG_ANIMAL_GET_CARCT = 4;
	public static byte MSG_VENCEDORA = 5;
	
	private static String getMensagemTipo() {
		return "Este animal que você pensou vive na água?";
	}
	
	private static String getMensagemAnimal(String animal) {
		return "O animal que você pensou é "+animal;
	}

	private static String getMensagemGetCaract(String Caracteristica) {
		return "O animal que você pensou "+Caracteristica;
	}
	
	private static String getMensagemVencedora() {
		return "Eu Venci!";
	}
	
	private static String getMensagemSetAnimal() {
		return "Qual animal você pensou?";
	}
	
	private static String getMensagemSetCaracAnimal(String nome, String nome2) {
		return "Um(a)"+nome+"_______mas um(a)"+nome2+" não.";
	}
	
	public static String getMensagem(int msg, Animal animal, String param2) {
		
		if(MSG_ANIMAL == msg) {
			return getMensagemAnimal(animal.getNome());
		}else if (MSG_ANIMAL_PENSOU == msg) {
			return getMensagemSetAnimal();
		}else if (MSG_ANIMAL_SET_CARCT == msg) {
			return getMensagemSetCaracAnimal(animal.getNome(), param2);
		}else if (MSG_ANIMAL_GET_CARCT == msg) {
			return getMensagemGetCaract(animal.getCaracteristica());
		}else {
			return getMensagemVencedora();
		}
		
	}
	
	public static boolean compareToMsgVencedora(MsgDto dto) {
		
		if(dto.getResposta() && dto.getMensagem().equals(getMensagemAnimal(dto.getAnimal().getNome()))) {
			return true;
		}
		return false;
	}
 	
	public static MsgDto getMsgDtoByMensagem(MsgDto msgDto, Animal animalComCaracte) { 
		
		if(msgDto.getMensagem().equals(getMensagemTipo()) && animalComCaracte != null)
			return new MsgDto(animalComCaracte, null, Funcoes.MSG_ANIMAL_GET_CARCT);
		
		if(msgDto.getMensagem().equals(getMensagemAnimal(msgDto.getAnimal().getNome()))) {
			if(msgDto.getResposta())
				return new MsgDto(msgDto.getAnimal(), null, Funcoes.MSG_VENCEDORA);
			else
				return new MsgDto(msgDto.getAnimal(), null, Funcoes.MSG_ANIMAL_PENSOU);
		}else if (msgDto.getMensagem().equals(getMensagemGetCaract(msgDto.getAnimal().getCaracteristica()))){
			if(msgDto.getResposta()) {
				return new MsgDto(msgDto.getAnimal(), null, Funcoes.MSG_ANIMAL);
			}else if(animalComCaracte != null && msgDto.getResposta()){
				return new MsgDto(animalComCaracte, null, Funcoes.MSG_ANIMAL_GET_CARCT);
			}else {
				return new MsgDto(msgDto.getAnimal(), null, Funcoes.MSG_ANIMAL_PENSOU);
			}
		}
		return null;
	}
	

}

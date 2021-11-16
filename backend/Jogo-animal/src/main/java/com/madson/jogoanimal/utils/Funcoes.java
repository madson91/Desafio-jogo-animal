package com.madson.jogoanimal.utils;

import com.madson.jogoanimal.entities.Animal;

public class Funcoes {
	
	public static byte TIPO_AGUA = 1;
	public static byte TIPO_TERRA = 2;
	
	public static byte MSG_ANIMAL = 1;
	public static byte MSG_ANIMAL_PENSOU = 2;
	public static byte MSG_ANIMAL_SET_CARCT = 3;
	public static byte MSG_ANIMAL_GET_CARCT = 4;
	public static byte MSG_VENCEDORA = 5;
	
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
	
	
	

}

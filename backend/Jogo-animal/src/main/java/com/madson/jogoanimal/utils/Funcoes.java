package com.madson.jogoanimal.utils;

public class Funcoes {
	
	public static byte TIPO_AGUA = 1;
	public static byte TIPO_TERRA = 2;
	
	public static String getMensagemAnimal(String animal) {
		return "O animal que você pensou é "+animal;
	}
	
	public static String getMensagemVencedora() {
		return "Eu Venci!";
	}
	
	public static String getMensagemSetAnimal() {
		return "Qual animal você pensou?";
	}
	
	public static String getMensagemSetCaracAnimal(String nome, String nome2) {
		return "Um(a)"+nome+"_______mas um(a)"+nome2+" não.";
	}
	
	

}

package com.madson.jogoanimal.entities;

import com.madson.jogoanimal.utils.Funcoes;

public class MsgDto {

	private Animal animal;
	private String descricaoAnimal;
	private String mensagem;
	private String caracteristica;
	private byte tipoAnimal;
	private boolean resposta;
	
	public MsgDto() {
		// TODO Auto-generated constructor stub
	}

	public MsgDto(Animal animal, String animal2String, int tipoMSg) {
		
		this.animal = animal;
		this.mensagem = Funcoes.getMensagem(tipoMSg, animal, animal2String);
		this.caracteristica = animal.getCaracteristica();
		this.tipoAnimal = animal.getTipo();
	}

	public MsgDto(String animal, String mensagem, String caracteristica, Boolean check, Boolean resposta) {
		this.descricaoAnimal = animal;
		this.mensagem = mensagem;
		this.caracteristica = caracteristica;
		this.resposta = resposta;
	}


	public void setAnimal(Animal animal) {
		this.animal = animal;
	}

	public Animal getAnimal() {
		return animal;
	}
	
	public String getDescricaoAnimal() {
		return descricaoAnimal;
	}

	public void setDescricaoAnimal(String descricaoAnimal) {
		this.descricaoAnimal = descricaoAnimal;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}

	public String getCaracteristica() {
		return caracteristica;
	}

	public void setCaracteristica(String caracteristica) {
		this.caracteristica = caracteristica;
	}

	public byte getTipoAnimal() {
		return tipoAnimal;
	}

	public void setTipoAnimal(byte tipoAnimal) {
		this.tipoAnimal = tipoAnimal;
	}

	public boolean getResposta() {
		return resposta;
	}

	public void setResposta(boolean resposta) {
		this.resposta = resposta;
	}

}

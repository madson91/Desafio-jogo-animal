package com.madson.jogoanimal.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Animal implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private byte tipo;
	private String caracteristica;
	
	public Animal() {
	
	}
	
	public Animal(Long id, String nome, byte tipo, String caracteristica) {
		this.id = id;
		this.nome = nome;
		this.tipo = tipo;
		this.caracteristica = caracteristica;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public byte getTipo() {
		return tipo;
	}
	public void setTipo(byte tipo) {
		this.tipo = tipo;
	}
	public String getCaracteristica() {
		return caracteristica;
	}
	public void setCaracteristica(String caracteristica) {
		this.caracteristica = caracteristica;
	}
	
	@Override
	public String toString() {
		return "Animal [nome=" + nome + ", tipo=" + tipo + ", caracteristica=" + caracteristica + "]";
	}
	

}

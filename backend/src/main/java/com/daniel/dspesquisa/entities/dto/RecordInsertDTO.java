package com.daniel.dspesquisa.entities.dto;

import java.io.Serializable;

import com.daniel.dspesquisa.entities.Record;

public class RecordInsertDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Integer age;
	private Long game;

	public RecordInsertDTO() {

	}

	public RecordInsertDTO(Record entity) {
		id = entity.getId();
		name = entity.getName();
		age = entity.getAge();
		game = entity.getGame().getId();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Long getGame() {
		return game;
	}

	public void setGame(Long game) {
		this.game = game;
	}
}

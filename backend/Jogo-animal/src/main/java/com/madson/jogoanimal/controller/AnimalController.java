package com.madson.jogoanimal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.madson.jogoanimal.entities.MsgDto;
import com.madson.jogoanimal.service.AnimalService;

@RestController
@RequestMapping("/animais")
public class AnimalController {

	@Autowired
	private AnimalService animalService;

	@PostMapping
	@ResponseBody
	public ResponseEntity<MsgDto> getMessageByTipo(@RequestBody MsgDto msgDto) {
		
		MsgDto  obj =  animalService.getMsgDto(msgDto);
		return ResponseEntity.ok(obj);
	}
	
}

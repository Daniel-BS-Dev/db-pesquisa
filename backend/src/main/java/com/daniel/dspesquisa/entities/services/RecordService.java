package com.daniel.dspesquisa.entities.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniel.dspesquisa.entities.Game;
import com.daniel.dspesquisa.entities.Record;
import com.daniel.dspesquisa.entities.dto.RecordDTO;
import com.daniel.dspesquisa.entities.dto.RecordInsertDTO;
import com.daniel.dspesquisa.entities.repositories.GameRepository;
import com.daniel.dspesquisa.entities.repositories.RecordRepository;

@Service
public class RecordService {
	
	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	
	@Transactional(readOnly = true)
	public Page<RecordDTO> findAllPage(Instant minDate, Instant maxDate, PageRequest pageRequest) {
		return repository.findMoments(minDate,maxDate,pageRequest).map(x -> new RecordDTO(x));
	}
	

	@Transactional
	public RecordDTO insert(RecordInsertDTO dto){
		Record entity = new Record();
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game GameId = gameRepository.getById(dto.getGame());
		entity.setGame(GameId);
		entity = repository.save(entity);
		return new RecordDTO(entity);
		
	}	

}

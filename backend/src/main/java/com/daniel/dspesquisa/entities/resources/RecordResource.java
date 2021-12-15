package com.daniel.dspesquisa.entities.resources;

import java.net.URI;
import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.daniel.dspesquisa.entities.dto.RecordDTO;
import com.daniel.dspesquisa.entities.dto.RecordInsertDTO;
import com.daniel.dspesquisa.entities.services.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordResource {

	@Autowired
	private RecordService service;
	
	@GetMapping
	public ResponseEntity<Page<RecordDTO>> findAll(
			@RequestParam(value="min", defaultValue="") String min,
			@RequestParam(value="max", defaultValue="") String max,
			@RequestParam(value="page", defaultValue="0") Integer page,
			@RequestParam(value="linePerPage", defaultValue="0") Integer linePerPage,
			@RequestParam(value="orderBy", defaultValue="moment") String orderBy,
			@RequestParam(value="direction", defaultValue="DESC") String direction){
		
		Instant minDate = ("".equals(min)) ? null : Instant.parse(min);
		Instant maxDate = ("".equals(max)) ? null : Instant.parse(max);
		
		if(linePerPage == 0) {
			linePerPage = Integer.MAX_VALUE;
		}
		
	    PageRequest pageRequest = PageRequest.of(page,linePerPage, Direction.valueOf(direction), orderBy);
        Page<RecordDTO> list = service.findAllPage(minDate, maxDate, pageRequest);		

		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<RecordDTO> findAll(@RequestBody RecordInsertDTO dto){
		RecordDTO entity = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				  .buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(entity);
	}
}

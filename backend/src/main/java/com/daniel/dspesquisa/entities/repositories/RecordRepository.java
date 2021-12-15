package com.daniel.dspesquisa.entities.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.daniel.dspesquisa.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {

	@Query("SELECT obj FROM Record obj Where " + "(COALESCE(:min, null) IS NULL OR obj.moment >= :min) AND "
			+ "(COALESCE(:max, null) IS NULL OR obj.moment <= :max)")
	Page<Record> findMoments(Instant min, Instant max, Pageable pageable);

}

//(COALESCE(:min, null) IS NULL OR -> se não colocar parametros min e max não retorna uma lista vazia, lembra que o coalesce e para rodar no postgres

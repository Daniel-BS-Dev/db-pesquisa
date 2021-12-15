package com.daniel.dspesquisa.entities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniel.dspesquisa.entities.Game;

@Repository
public interface RecordRepository extends JpaRepository<Game, Long> {

}

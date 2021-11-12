package com.madson.jogoanimal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.madson.jogoanimal.entities.Animal;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long>{
	
	@Query("SELECT obj FROM Animal AS obj where obj.tipo = :tipo and "
			+ "obj.caracteristica != null GROUP BY obj.id")
	List<Animal> getAnimaisByTipoCaracNotNull(@Param("tipo") byte tipo);
	
//	@Query("SELECT  com.madson.jogoanimal.entities.Animal FROM Animal AS obj where obj.tipo = 2 and "
//			+ "obj.caracteristica != null GROUP BY obj.id")
//	List<Animal> getAnimaisTerraByCaracteristica();

}

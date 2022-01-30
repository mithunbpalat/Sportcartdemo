package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Productdetail;

@Repository
public interface ProductdetailRepository extends JpaRepository<Productdetail, Integer>{
	
	@Query("SELECT d FROM Productdetail d WHERE d.category = ?1 and d.subcategory =?2 and d.brand =?3")
	List<Productdetail> findByCat(String category, String subcategory, String brand);
	
	@Query("SELECT d FROM Productdetail d GROUP BY d.category")
	List<Productdetail> findByCategory();
	
	@Query("SELECT d FROM Productdetail d GROUP BY d.subcategory")
	List<Productdetail> findBySubcategory();
	
	@Query("SELECT d FROM Productdetail d GROUP BY d.brand")
	List<Productdetail> findByBrand();
	
}

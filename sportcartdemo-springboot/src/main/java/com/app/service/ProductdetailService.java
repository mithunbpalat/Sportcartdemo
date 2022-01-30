package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ProductdetailRepository;
import com.app.model.Productdetail;

@Service
public class ProductdetailService {
	
	@Autowired
	private ProductdetailRepository productdetailRepo;
	
	public Productdetail saveProductdetail(Productdetail productdetail) {
		return productdetailRepo.save(productdetail);
	}
	public Productdetail updateProductdetail(Productdetail productdetail) {
		return productdetailRepo.save(productdetail);
	}
	public List<Productdetail> getAllProductdetails() {
		return (List<Productdetail>) productdetailRepo.findAll();
	}
	public void deleteProductdetail(int pid) {
		productdetailRepo.deleteById(pid);
	}
	public Productdetail findProductdetailByPid(int pid) {
		return productdetailRepo.findById(pid).get();
	}
	public List<Productdetail> getProductdetailByCat(String category, String subcategory, String brand) {
		return (List<Productdetail>) productdetailRepo.findByCat(category, subcategory, brand);
	}
	public List<Productdetail> getProductdetailByCategory() {
		return (List<Productdetail>) productdetailRepo.findByCategory();
	}
	public List<Productdetail> getProductdetailBySubategory() {
		return (List<Productdetail>) productdetailRepo.findBySubcategory();
	}
	public List<Productdetail> getProductdetailByBrand() {
		return (List<Productdetail>) productdetailRepo.findByBrand();
	}
	
}

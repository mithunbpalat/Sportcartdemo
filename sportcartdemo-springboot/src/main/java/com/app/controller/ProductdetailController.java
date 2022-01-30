package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.FileDB;
import com.app.model.Productdetail;
import com.app.service.FileStorageService;
import com.app.service.ProductdetailService;

@RestController
@CrossOrigin("*")
public class ProductdetailController {
	@Autowired
	private ProductdetailService productdetailServ;
	
	@Autowired
    private FileStorageService storageService;
	
	@PostMapping(value="postproductdetail")
	public List<Productdetail> saveProductdetail(@RequestBody Productdetail productdetail){
		System.out.println("Productdetail works");
		String filename = productdetail.getFilename();
		System.out.println(filename);
		FileDB file = storageService.getFileByName(filename);
		String id = file.getId();
		String url = "http://localhost:8083/files/"+id ;
		productdetail.setUrl(url);
		productdetailServ.saveProductdetail(productdetail);
		return productdetailServ.getAllProductdetails();
	}
	@PutMapping(value="updateproductdetail")
	public List<Productdetail> updateProductdetail(@RequestBody Productdetail productdetail){
		System.out.println("Productdetail update works");
		String filename = productdetail.getFilename();
		FileDB file = storageService.getFileByName(filename);
		String id = file.getId();
		String url = "http://localhost:8083/files/"+id ;
		productdetail.setUrl(url);
		productdetailServ.updateProductdetail(productdetail);
		return productdetailServ.getAllProductdetails();
	}
	@GetMapping(value="getallproductdetails")
	public List<Productdetail> getAllProductdetail(){
		return productdetailServ.getAllProductdetails();
	}
	@DeleteMapping(value="deleteproductdetailbyid")
	public List<Productdetail> deleteCourse(@RequestParam int pid){
		productdetailServ.deleteProductdetail(pid);
		return productdetailServ.getAllProductdetails();
	}
	@GetMapping(value="getproductdetailbyid")
	public Productdetail getProductdetailById(@RequestParam int pid){
		return productdetailServ.findProductdetailByPid(pid);
	}
	
	@GetMapping(value="getproductdetailbycat")
	public List<Productdetail> getProductdetailByCat(@RequestParam String category,@RequestParam String subcategory,@RequestParam String brand){
		return productdetailServ.getProductdetailByCat(category, subcategory, brand);
	}
	@GetMapping(value="getproductsbycategory")
	public List<Productdetail> getProductdetailByCategory(){
		return productdetailServ.getProductdetailByCategory();
	}
	@GetMapping(value="getproductsbysubcategory")
	public List<Productdetail> getProductdetailBySubcategory(){
		return productdetailServ.getProductdetailBySubategory();
	}
	@GetMapping(value="getproductsbybrand")
	public List<Productdetail> getProductdetailByBrand(){
		return productdetailServ.getProductdetailByBrand();
	}
}

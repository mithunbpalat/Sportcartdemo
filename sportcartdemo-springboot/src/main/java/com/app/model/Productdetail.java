package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="productdetail",catalog="sportcartdemodatabase")
public class Productdetail {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int pid;
    private String category;
    private String subcategory;
    private String brand;
    private String filename;
    private String productname;
    private String stock;
    private String size;
    private String colour;
    private String price;
    private String url;
	public Productdetail() {
		super();
	}
	public Productdetail(int pid, String category, String subcategory, String brand, String filename,
			String productname, String stock, String size, String colour, String price, String url) {
		super();
		this.pid = pid;
		this.category = category;
		this.subcategory = subcategory;
		this.brand = brand;
		this.filename = filename;
		this.productname = productname;
		this.stock = stock;
		this.size = size;
		this.colour = colour;
		this.price = price;
		this.url = url;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getSubcategory() {
		return subcategory;
	}
	public void setSubcategory(String subcategory) {
		this.subcategory = subcategory;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getStock() {
		return stock;
	}
	public void setStock(String stock) {
		this.stock = stock;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getColour() {
		return colour;
	}
	public void setColour(String colour) {
		this.colour = colour;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
    
}

package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="order",catalog="sportcartdemodatabase")
public class Order {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int oid;
    private String brand;
    private String productname;
    private String size;
    private String colour;
    private String username;
    private String address;
    private String items;
    private String paymentstatus;
    private String price;
    private String phone;
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Order(int oid, String brand, String productname, String size, String colour, String username, String address,
			String items, String paymentstatus, String price, String phone) {
		super();
		this.oid = oid;
		this.brand = brand;
		this.productname = productname;
		this.size = size;
		this.colour = colour;
		this.username = username;
		this.address = address;
		this.items = items;
		this.paymentstatus = paymentstatus;
		this.price = price;
		this.phone = phone;
	}
	public int getOid() {
		return oid;
	}
	public void setOid(int oid) {
		this.oid = oid;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
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
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getItems() {
		return items;
	}
	public void setItems(String items) {
		this.items = items;
	}
	public String getPaymentstatus() {
		return paymentstatus;
	}
	public void setPaymentstatus(String paymentstatus) {
		this.paymentstatus = paymentstatus;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
    
}

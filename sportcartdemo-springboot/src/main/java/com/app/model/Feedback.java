package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="feedback",catalog="sportcartdemodatabase")
public class Feedback {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	 private int fid;
     private String username;
     private String message;
	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Feedback(int fid, String username, String message) {
		super();
		this.fid = fid;
		this.username = username;
		this.message = message;
	}
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
     

}

package com.springboot.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Registration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String Fname;
	private String Lname;
	private String DOB;
	private String email;
	private String Gender;
	private long mobile_no;

	public Registration() {
		// TODO Auto-generated constructor stub
	}

	public Registration(int id, String fname, String lname, String dOB, String email, String gender, long mobile_no) {
		super();
		this.id = id;
		Fname = fname;
		Lname = lname;
		DOB = dOB;
		this.email = email;
		Gender = gender;
		this.mobile_no = mobile_no;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return Fname;
	}

	public void setFname(String fname) {
		Fname = fname;
	}

	public String getLname() {
		return Lname;
	}

	public void setLname(String lname) {
		Lname = lname;
	}

	public String getDOB() {
		return DOB;
	}

	public void setDOB(String dOB) {
		DOB = dOB;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public long getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(long mobile_no) {
		this.mobile_no = mobile_no;
	}

	@Override
	public String toString() {
		return "Registration [id=" + id + ", Fname=" + Fname + ", Lname=" + Lname + ", DOB=" + DOB + ", email=" + email
				+ ", Gender=" + Gender + ", mobile_no=" + mobile_no + "]";
	}

}

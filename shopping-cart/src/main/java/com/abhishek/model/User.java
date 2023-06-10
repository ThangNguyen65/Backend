package com.abhishek.model;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="user")
public class User {
	@Id
	private String id;
	private String username;
	private String password;
	private String name;
	private String email;
	private String cpassword;
	private String phone;
	private String gender;
	

	
	
	
	

}

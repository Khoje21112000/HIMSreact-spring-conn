package com.springboot.service;

import java.util.List;

import com.springboot.model.User;

public interface IUserService {
	
	//register user
	User adduser(User user);
	
	//get users
	List<User> getAllusers();
	
	//get specific user
	User getuser(long id);
	
	//delete specific user
	
	String deleteUser(long id);
	
	// update specific user
	
	User updateUser(User updateuser,User oldUser);
	
	String LocalDataTime();

}


package com.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.customexception.UserHandlingException;
import com.springboot.jparepository.UserRepository;
import com.springboot.model.User;

@Service
public class UserService implements IUserService {

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User adduser(User user) {
		// TODO Auto-generated method stub
		return userRepo.save(user);
	}
	
	@Override
	public List<User> getAllusers() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}
	@Override
	public User getuser(long id) {
		// TODO Auto-generated method stub
		return userRepo.findById(id).orElseThrow(()->new UserHandlingException("invaid id"));
	}
	@Override
	public String deleteUser(long id) {
		// TODO Auto-generated method stub
		userRepo.deleteById(id);
		return id+" deleted";
	}
	@Override
	public User updateUser(User updateuser, User oldUser) {
		oldUser.setEmail(updateuser.getEmail());
		oldUser.setPassword(updateuser.getPassword());
		
		return userRepo.save(oldUser);
	}
	@Override
	public String LocalDataTime() {
		// TODO Auto-generated method stub
		return null;
	}

}

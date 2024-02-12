package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.jparepository.UserRepository;
import com.springboot.model.User;


@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {
	
    @Autowired
    private UserRepository userRepository;
//    
//    @Autowired
//    private IUserService userservice;

    
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
    	System.out.println(user);
        return userRepository.save(user);
    }
    
//    @PostMapping()
//    public ResponseEntity<?> loginUser(@RequestBody User user) {
//        User existingUser = userservice.getuser(user.getId());
//        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
//            // User authenticated successfully
//            return ResponseEntity.ok(existingUser);
////            System.out.println(user);
////            return userRepository.save(user);
//        } else {
//            // Invalid credentials
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
//        }
    
}

package com.abhishek.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abhishek.model.User;
import com.abhishek.repo.UserRepo;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepo repo;
	
	@Override
	public void registerUser(User user) {
		repo.save(user);
	};

	

}

package com.abhishek.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.abhishek.model.User;

@Repository

public interface UserRepo extends JpaRepository<User, String>{


	

}

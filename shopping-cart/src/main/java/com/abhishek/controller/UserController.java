package com.abhishek.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


import org.springframework.web.bind.annotation.GetMapping;

import com.abhishek.model.User;
import com.abhishek.repo.UserRepo;


@Controller
	public class UserController {
	
	@Autowired(required = true)
	private UserRepo repo;
	
		@GetMapping("/login")
		public String login(Model model) {
			User user = new User();
			model.addAttribute("user",user);
			
			return "login";
		}
	@PostMapping("/userLogin")
	public String loginUser(@ModelAttribute("user") User user) {

		String userId=user.getUserId();
		Optional<User> userdata= repo.findById(userId);
	   if(user.getPassword().equals(userdata.get().getPassword())) {
		   return "redirect:/";
	   }else {
		   return"error";
	   }
		
	}

	

}

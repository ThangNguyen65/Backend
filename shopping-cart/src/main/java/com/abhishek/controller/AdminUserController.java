package com.abhishek.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.abhishek.model.User;
import com.abhishek.repo.UserRepo;


@Controller
@RequestMapping("/admin/users")
public class AdminUserController {
	@Autowired
	private UserRepo userRepo;
	
	@GetMapping
	public String getUserList(Model model) {
		List<User> users = userRepo.findAll();
		model.addAttribute("users", users);
		return "admin/users/index";
	}

	@GetMapping("/add")
	public String showAddUserForm(Model model) {
		User user = new User();
		model.addAttribute("user",user);
		return "admin/users/addUser";
	}

	@PostMapping("/addd")
	public String addUser(@ModelAttribute("user") User user) {
		userRepo.save(user);
		return "redirect:/admin/users";
	}

	@GetMapping("/edit/{id}")
	public String showEditUserForm(@PathVariable("id") String id, Model model) {
		User user = userRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid user Id: " + id));
		model.addAttribute("user", user);
		return "admin/users/editUser";
	}

	@PostMapping("/update")
	public String updateUser(@ModelAttribute("user") User user) {
		userRepo.save(user);
		return "redirect:/admin/users";
	}
	@GetMapping("/delete/{id}")
	public String deleteUser(@PathVariable("id") String id) {
	    userRepo.deleteById(id);
	    return "redirect:/admin/users";
	}

}

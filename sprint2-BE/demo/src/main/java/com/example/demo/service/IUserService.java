package com.example.demo.service;

import com.example.demo.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IUserService extends UserDetailsService {
    User findByUserName(String userName);
    User findById(int id);
}

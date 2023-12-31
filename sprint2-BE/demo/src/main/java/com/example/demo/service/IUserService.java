package com.example.demo.service;

import com.example.demo.dto.CustomerDto;
import com.example.demo.model.Customer;
import com.example.demo.model.User;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IUserService extends UserDetailsService {
    User findByUserName(String userName);
    User findById(int id);
    CustomerDto findCustomerByUser(int userId);
    void updateCustomer(String phone,String email,String address,int userId);
}

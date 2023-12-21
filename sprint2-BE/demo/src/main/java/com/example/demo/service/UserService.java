package com.example.demo.service;

import com.example.demo.dto.CustomerDto;
import com.example.demo.dto.JwtResponseUserDetail;
import com.example.demo.model.Customer;
import com.example.demo.model.User;
import com.example.demo.model.UserRole;
import com.example.demo.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements IUserService{
    @Autowired
    private IUserRepository userRepository;
    @Override
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    public User findById(int id) {
        return userRepository.findById(id).get();
    }

    @Override
    public CustomerDto findCustomerByUser(int userId) {
        return userRepository.findCustomerByUser(userId);
    }

    @Override
    public void updateCustomer(String phone, String email, String address, int userId) {
        userRepository.updateCustomer(phone,email,address,userId);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findByUserName(username);
        if (user == null){
            throw new UsernameNotFoundException("Tên đăng nhập hoặc mât khẩu bị sai!");
        }
        List<GrantedAuthority> grantedAuthorityList = new ArrayList<>();
        for(UserRole userRole:user.getUserRoles()){
            grantedAuthorityList.add(new SimpleGrantedAuthority(userRole.getRole().getName()));
        }
        UserDetails userDetails = new JwtResponseUserDetail(
                user.getUserName(),
                user.getPassword(),
                grantedAuthorityList
        );
        return userDetails;
    }


}

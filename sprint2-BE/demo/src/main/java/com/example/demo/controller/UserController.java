package com.example.demo.controller;

import com.example.demo.config.JwtTokenUtil;
import com.example.demo.dto.UserLoginDto;
import com.example.demo.model.JwtResponse;
import com.example.demo.model.User;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private IUserService userService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    private static final String LOGIN_FAILED = "Sai tên đăng nhập hoặc mật khẩu";
    @PostMapping("/login")
    public ResponseEntity<Object> login(@Valid @RequestBody UserLoginDto userLoginDto, BindingResult bindingResult){
        new UserLoginDto().validate(userLoginDto,bindingResult);
        if(bindingResult.hasErrors()){
            return new ResponseEntity<>(LOGIN_FAILED, HttpStatus.UNAUTHORIZED);
        }
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLoginDto.getUserName(),userLoginDto.getPassword()));
        }catch (DisabledException e){
            return new ResponseEntity<>("Tài khoản của bạn đã bị vô hiệu hóa", HttpStatus.FORBIDDEN);
        }catch (BadCredentialsException e){
            return new ResponseEntity<>(LOGIN_FAILED, HttpStatus.UNAUTHORIZED);
        }
        User user = userService.findByUserName(userLoginDto.getUserName());
        UserDetails userDetails = userService.loadUserByUsername(user.getUserName());
        String jwtToken = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok().body(new JwtResponse(jwtToken));
    }
}

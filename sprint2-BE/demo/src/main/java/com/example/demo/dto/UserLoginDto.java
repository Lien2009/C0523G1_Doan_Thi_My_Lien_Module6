package com.example.demo.dto;

import com.example.demo.common.user.ValidateUser;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserLoginDto implements Validator {
    private int id;
    private String userName;
    private String password;
    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        UserLoginDto userLoginDto = (UserLoginDto) target;
        ValidateUser.checkValidateAppUserName(userLoginDto.getUserName(), errors);
        ValidateUser.checkValidateAppUserPassword(userLoginDto.getPassword(), errors);
    }
}

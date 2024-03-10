package com.anagha.blogapp.services;

import com.anagha.blogapp.dto.UserLoginDto;
import com.anagha.blogapp.dto.UserRegisterDto;
import com.anagha.blogapp.dto.UserResponseDto;

public interface IUserService {
    UserResponseDto register(UserRegisterDto payload);

    UserResponseDto login(UserLoginDto payload);

}

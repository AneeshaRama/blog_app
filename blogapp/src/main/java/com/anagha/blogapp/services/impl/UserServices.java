package com.anagha.blogapp.services.impl;

import com.anagha.blogapp.dto.UserLoginDto;
import com.anagha.blogapp.dto.UserRegisterDto;
import com.anagha.blogapp.dto.UserResponseDto;
import com.anagha.blogapp.entities.User;
import com.anagha.blogapp.exceptions.InvalidCredentialsException;
import com.anagha.blogapp.exceptions.UserAlreadyExistException;
import com.anagha.blogapp.repository.IUserRepository;
import com.anagha.blogapp.services.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public UserResponseDto register(UserRegisterDto payload) {
        User user = userRepository.getUserByEmail(payload.getEmail());
        if(user != null){
            throw new UserAlreadyExistException("User already exists with this email");
        }
        User newUser = userRepository.save(new User(payload.getFirstName(), payload.getLastName(), payload.getEmail(), payload.getPassword()));
        return modelMapper.map(newUser, UserResponseDto.class);
    }

    @Override
    public UserResponseDto login(UserLoginDto payload) {
        User user = userRepository.getUserByEmail(payload.getEmail());
        if(user == null){
            throw new InvalidCredentialsException("Invalid credentials");
        }
        if(!user.getPassword().equals(payload.getPassword())){
            throw new InvalidCredentialsException("Invalid credentials");
        }
        return modelMapper.map(user, UserResponseDto.class);
    }
}

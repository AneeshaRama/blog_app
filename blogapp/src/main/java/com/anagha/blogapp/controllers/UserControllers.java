package com.anagha.blogapp.controllers;

import com.anagha.blogapp.dto.UserLoginDto;
import com.anagha.blogapp.dto.UserRegisterDto;
import com.anagha.blogapp.dto.UserResponseDto;
import com.anagha.blogapp.services.impl.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserControllers {

    @Autowired
    private UserServices userServices;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserRegisterDto payload){
        return new ResponseEntity<>(userServices.register(payload), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginDto payload){
        return new ResponseEntity<>(userServices.login(payload), HttpStatus.OK);
    }
}

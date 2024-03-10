package com.anagha.blogapp.controllers;

import com.anagha.blogapp.dto.BlogRequestDto;
import com.anagha.blogapp.services.impl.BlogServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class BlogControllers {

    @Autowired
    private BlogServices blogServices;

    @GetMapping("/blog/{blogId}")
    public ResponseEntity<?> getBlogById(@PathVariable(value = "blogId") long blogId){
        return new ResponseEntity<>(blogServices.getBlogById(blogId), HttpStatus.OK);
    }

    @GetMapping("/blogs")
    public ResponseEntity<?> getAllBlogs(){
        return new ResponseEntity<>(blogServices.getAllBlogs(), HttpStatus.OK);
    }

    @GetMapping("/user/{userId}/blogs")
    public ResponseEntity<?> getAllBlogsOfUser(@PathVariable(value = "userId") long userId){
        return new ResponseEntity<>(blogServices.getAllBlogsOfUser(userId), HttpStatus.OK);
    }

    @PostMapping("/blog/{userId}/new")
    public ResponseEntity<?> createBlog(@RequestBody BlogRequestDto payload, @PathVariable(value = "userId") long userId){
        return new ResponseEntity<>(blogServices.createBlog(payload, userId), HttpStatus.CREATED);
    }

    @PutMapping("/user/{userId}/blog/{blogId}")
    public ResponseEntity<?> updateBlog(@RequestBody BlogRequestDto payload, @PathVariable(value = "blogId") long blogId, @PathVariable(value = "userId") long userId){
        return new ResponseEntity<>(blogServices.updateBlog(payload, blogId, userId), HttpStatus.OK);
    }

    @DeleteMapping("/user/{userId}/blog/{blogId}")
    public ResponseEntity<?> deleteBlog(@PathVariable(value = "blogId") long blogId, @PathVariable(value = "userId") long userId){
        return new ResponseEntity<>(blogServices.deleteBlog(blogId, userId), HttpStatus.OK);
    }
}

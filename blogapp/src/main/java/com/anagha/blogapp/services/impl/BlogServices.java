package com.anagha.blogapp.services.impl;

import com.anagha.blogapp.dto.BlogRequestDto;
import com.anagha.blogapp.dto.BlogResponseDto;
import com.anagha.blogapp.entities.Blog;
import com.anagha.blogapp.entities.User;
import com.anagha.blogapp.exceptions.NotAuthorizedException;
import com.anagha.blogapp.exceptions.ResourceNotFoundException;
import com.anagha.blogapp.repository.IBlogRepository;
import com.anagha.blogapp.repository.IUserRepository;
import com.anagha.blogapp.services.IBlogService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BlogServices implements IBlogService {

    @Autowired
    private IBlogRepository blogRepository;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public BlogResponseDto createBlog(BlogRequestDto payload, long userId) {
        User user = userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User not found"));
        Blog blog = blogRepository.save(new Blog(payload.getTitle(), payload.getContent(), user, LocalDate.now()));
        user.getBlogs().add(blog);
        userRepository.save(user);
        return modelMapper.map(blog, BlogResponseDto.class);
    }

    @Override
    public BlogResponseDto getBlogById(long blogId) {
        Blog blog = blogRepository.findById(blogId).orElseThrow(()-> new ResourceNotFoundException("Blog not found"));
        return modelMapper.map(blog, BlogResponseDto.class);
    }

    @Override
    public List<BlogResponseDto> getAllBlogs() {
        return blogRepository.findAll().stream().map(b -> modelMapper.map(b, BlogResponseDto.class)).collect(Collectors.toList());
    }

    @Override
    public List<BlogResponseDto> getAllBlogsOfUser(long userId) {
        User user = userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User not found"));
        return user.getBlogs().stream().map(b -> modelMapper.map(b, BlogResponseDto.class)).collect(Collectors.toList());
    }

    @Override
    public BlogResponseDto updateBlog(BlogRequestDto payload, long blogId, long userId) {
        Blog blog = blogRepository.findById(blogId).orElseThrow(()-> new ResourceNotFoundException("Blog not found"));
        if(blog.getUser().getId() != userId){
            throw new NotAuthorizedException("Unauthorized");
        }
        blog.setTitle(payload.getTitle());
        blog.setContent(payload.getContent());
        return modelMapper.map(blogRepository.save(blog), BlogResponseDto.class);
    }

    @Override
    public String deleteBlog(long blogId, long userId) {
        Blog blog = blogRepository.findById(blogId).orElseThrow(()-> new ResourceNotFoundException("Blog not found"));
        if(blog.getUser().getId() != userId){
            throw new NotAuthorizedException("Unauthorized");
        }
        blogRepository.deleteById(blogId);
        return "OK";
    }
}

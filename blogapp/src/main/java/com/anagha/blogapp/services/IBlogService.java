package com.anagha.blogapp.services;

import com.anagha.blogapp.dto.BlogRequestDto;
import com.anagha.blogapp.dto.BlogResponseDto;
import com.anagha.blogapp.entities.Blog;

import java.util.List;

public interface IBlogService {
    BlogResponseDto createBlog(BlogRequestDto payload, long userId);

    BlogResponseDto getBlogById(long blogId);

    List<BlogResponseDto> getAllBlogs();

    List<BlogResponseDto> getAllBlogsOfUser(long userId);

    BlogResponseDto updateBlog(BlogRequestDto payload, long blogId, long userId);

    String deleteBlog(long blogId, long userId);
}

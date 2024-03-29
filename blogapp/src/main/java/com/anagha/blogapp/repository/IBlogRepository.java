package com.anagha.blogapp.repository;


import com.anagha.blogapp.entities.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IBlogRepository extends JpaRepository<Blog, Long> {
}

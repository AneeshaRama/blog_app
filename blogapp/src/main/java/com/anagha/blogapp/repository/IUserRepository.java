package com.anagha.blogapp.repository;

import com.anagha.blogapp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

    @Query(value = "select u from User u where u.email = :email")
    public User getUserByEmail(@Param(value = "email") String email);
}

package com.anagha.blogapp.dto;

import java.time.LocalDate;

public class BlogResponseDto {

    private long id;

    private String title;

    private String content;

    private LocalDate createdAt;

    private long userId;

    public BlogResponseDto() {

    }

    public BlogResponseDto(long id, String title, String content, LocalDate createdAt, long userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.userId = userId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}

package com.anagha.blogapp.exceptions;

public class ResourceNotFoundException extends RuntimeException{
    private String message;

    public ResourceNotFoundException(String message) {
        this.message = message;
    }

    public ResourceNotFoundException(String message, String message1) {
        super(message);
        this.message = message1;
    }

    public ResourceNotFoundException(String message, Throwable cause, String message1) {
        super(message, cause);
        this.message = message1;
    }

    public ResourceNotFoundException(Throwable cause, String message) {
        super(cause);
        this.message = message;
    }

    public ResourceNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, String message1) {
        super(message, cause, enableSuppression, writableStackTrace);
        this.message = message1;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

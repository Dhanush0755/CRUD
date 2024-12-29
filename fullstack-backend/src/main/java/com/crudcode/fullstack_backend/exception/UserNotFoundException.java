package com.crudcode.fullstack_backend.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("Could not find the user with id: " + id );
    }
}


// https://chatgpt.com/share/67248b26-11a0-8005-a5cf-8c305ae43244
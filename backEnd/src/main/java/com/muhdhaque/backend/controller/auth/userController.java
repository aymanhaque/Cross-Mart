package com.muhdhaque.backend.controller.auth;


import com.muhdhaque.backend.dto.LoginRequest;
import com.muhdhaque.backend.dto.SignupRequest;
import com.muhdhaque.backend.model.User;
import com.muhdhaque.backend.service.auth.userService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class userController {
    private final userService userService;

    public userController(userService userService) {
        this.userService = userService;
    }


    @PostMapping("/signup")
    public User signup(@RequestBody SignupRequest signupRequest) {
        //  logic: save user to the database
        String name = signupRequest.getName();
        String email = signupRequest.getEmail();
        String password = signupRequest.getPassword();
        if (userService.userExists(email)) {
            throw new RuntimeException("User with email " + email + " already exists");
        }
        User user = new User(name,email,password);
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        //  logic: authenticate user
        User user = userService.getUserByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        } else {
            throw new RuntimeException("Invalid email or password");
        }
    }
}

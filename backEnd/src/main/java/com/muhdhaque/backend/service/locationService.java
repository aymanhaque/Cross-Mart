package com.muhdhaque.backend.service;

import com.muhdhaque.backend.model.User;
import com.muhdhaque.backend.repository.usersRepository;
import com.muhdhaque.backend.service.auth.userService;
import org.springframework.stereotype.Service;

@Service
public class locationService {
    private final usersRepository usersRepository;
    private final userService userService;

    public locationService(usersRepository usersRepository,userService userService) {
        this.usersRepository = usersRepository;
        this.userService = userService;
    }

    public String updateLocation(int userID, String location){
        User user = userService.getUserById(userID);
        user.setLocation(location);
        usersRepository.save(user);
        return location;
    }
}

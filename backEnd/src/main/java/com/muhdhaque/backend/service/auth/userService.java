package com.muhdhaque.backend.service.auth;

import com.muhdhaque.backend.model.User;
import com.muhdhaque.backend.repository.usersRepository;
import org.springframework.stereotype.Service;

@Service
public class userService {
    private final usersRepository usersRepository;

    public userService(usersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }


    public User getUserById(Integer id) {
        return usersRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(id + " not found"));
    }

    public User getUserByEmail(String email) {
        return usersRepository.findAll().stream()
                .filter(user -> user.getEmail().equals(email))
                .findFirst()
                .orElse(null);
    }

    public User saveUser(User user) {
        return usersRepository.save(user);
    }

    public void deleteUser(Integer id) {
        if (!usersRepository.existsById(id)) {
            throw new IllegalStateException(id + " not found");
        }
        usersRepository.deleteById(id);
    }

    public boolean userExists(String email) {
        return usersRepository.findAll().stream()
                .anyMatch(user -> user.getEmail().equals(email));
    }



}

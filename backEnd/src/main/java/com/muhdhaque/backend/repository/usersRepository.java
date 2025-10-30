package com.muhdhaque.backend.repository;

import com.muhdhaque.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface usersRepository extends JpaRepository<User, Integer> {
    List<User> getUsersByLocation(String location);

}
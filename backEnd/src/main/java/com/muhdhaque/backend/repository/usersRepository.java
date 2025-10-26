package com.muhdhaque.backend.repository;

import com.muhdhaque.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<User, Integer> {

}
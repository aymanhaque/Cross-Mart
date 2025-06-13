package com.muhdhaque.backend.repository;

import com.muhdhaque.backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<Users, Integer> {

}
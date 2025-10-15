package com.muhdhaque.backend.repository;

import com.muhdhaque.backend.model.PostCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface postCardRepository extends JpaRepository<PostCard,Integer> {

    List<PostCard> findByUserId(Integer userId);
    List<PostCard> findByLocation(String location);
}

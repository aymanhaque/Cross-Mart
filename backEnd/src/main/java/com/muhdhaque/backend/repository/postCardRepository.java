package com.muhdhaque.backend.repository;

import com.muhdhaque.backend.model.PostCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface postCardRepository extends JpaRepository<PostCard,Integer> {

    List<PostCard> findByUserId(Integer userId);
    List<PostCard> findByLocation(String location);
    List<PostCard> findByRequestingFromCountry(String requestingFromCountry);
    List<PostCard> findByLocationContainingIgnoreCase(@Param("keyword") String keyword);
    List<PostCard> findByRequestingFromCountryContainingIgnoreCase(@Param("keyword") String keyword);
}

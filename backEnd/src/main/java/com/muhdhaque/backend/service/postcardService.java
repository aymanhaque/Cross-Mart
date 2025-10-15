package com.muhdhaque.backend.service;

import com.muhdhaque.backend.dto.PostcardDTO;
import com.muhdhaque.backend.model.PostCard;
import com.muhdhaque.backend.repository.postCardRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class postcardService {
    private final postCardRepository postCardRepository;
    public postcardService(postCardRepository postCardRepository) {
        this.postCardRepository = postCardRepository;
    }

//    public List<PostCard> getPostcardsByUserId(String userID) {
//        // Logic to get postcards by user ID
//        return postCardRepository.findByUserId(Integer.parseInt(userID));
//    }

//    public List<PostcardDTO> getAllPostcards() {
//        List<PostCard> postcards = postCardRepository.findAll();
//        return postcards.stream().map(postcard -> new PostcardDTO(
//                postcard.getId(),
//                postcard.getUser().getName(),
//                postcard.getLocation(),
//                postcard.getRequestingFromCountry(),
//                postcard.getText(),
//                postcard.getImageURL(),
//                postcard.getCommentCount()
//        )).collect(Collectors.toList());
//    }
    @Transactional
    public List<PostcardDTO> getPostcardsByUserId(int userID) {
        // Logic to get postcards by user ID
        List<PostCard> postcards =  postCardRepository.findByUserId(userID);
        return postcards.stream().map(postcard -> new PostcardDTO(
                postcard.getId(),
                postcard.getUser().getName(),
                postcard.getLocation(),
                postcard.getRequestingFromCountry(),
                postcard.getText(),
                postcard.getImageURL(),
                postcard.getCommentCount()
        )).collect(Collectors.toList());
    }


}

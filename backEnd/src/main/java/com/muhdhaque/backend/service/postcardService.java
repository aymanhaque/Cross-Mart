package com.muhdhaque.backend.service;

import com.muhdhaque.backend.dto.PostcardDTO;
import com.muhdhaque.backend.mapper.PostcardMapper;
import com.muhdhaque.backend.model.PostCard;
import com.muhdhaque.backend.repository.postCardRepository;
import com.muhdhaque.backend.service.auth.userService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class postcardService {
    private final postCardRepository postCardRepository;
    private final userService userService;
    public postcardService(postCardRepository postCardRepository, userService userService) {
        this.postCardRepository = postCardRepository;
        this.userService = userService;
    }

    @Autowired
    private PostcardMapper postcardMapper;

    public List<PostcardDTO> getAllPostcards() {
        List<PostCard> postcards = postCardRepository.findAll();
        return postcardMapper.toDtoList(postcards);
    }

    public List<PostcardDTO> getAllPostcardsExcept(int userID) {
        List<PostCard> postcards = postCardRepository.findAll();
        List<PostCard> filteredPostcards = postcards.stream()
                .filter(postcard -> postcard.getUser().getId() != userID)
                .toList();
        return postcardMapper.toDtoList(filteredPostcards);
    }

    @Transactional
    public List<PostcardDTO> getPostcardsByUserId(int userID) {
        return postcardMapper.toDtoList(postCardRepository.findByUserId(userID));
}

    public List<PostcardDTO> getPostcardsByLocation(String location) {
        return postcardMapper.toDtoList(postCardRepository.findByLocation(location));
    }

    public List<PostcardDTO> getPostcardsByRequestingFromCountry(String country) {
        return postcardMapper.toDtoList(postCardRepository.findByRequestingFromCountry(country));
    }

    public List<PostcardDTO> searchPostcardsbyLocation(String keyword){
        return postcardMapper.toDtoList(postCardRepository.findByLocationContainingIgnoreCase(keyword));
    }

    public List<PostcardDTO> searchPostcardsbyRequestingFromCountry(String country){
        return postcardMapper.toDtoList(postCardRepository.findByRequestingFromCountryContainingIgnoreCase(country));
    }

    public PostCard createPostcard(PostcardDTO postcardDTO, int userID) {
        PostCard postcard = new PostCard(postcardDTO);
        postcard.setUser(userService.getUserById(userID));

        return postCardRepository.save(postcard);
    }


}

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
import java.util.stream.Collectors;

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

    @Transactional
    public List<PostcardDTO> getPostcardsByUserId(int userID) {
        return postcardMapper.toDtoList(postCardRepository.findByUserId(userID));
}

    public PostCard createPostcard(PostcardDTO postcardDTO, int userID) {
        PostCard postcard = new PostCard();
        postcard.setUserName(postcardDTO.getUserName());
        postcard.setLocation(postcardDTO.getLocation());
        postcard.setRequestingFromCountry(postcardDTO.getRequestingFromCountry());
        postcard.setText(postcardDTO.getText());
        postcard.setImageURL(postcardDTO.getImageURL());
        postcard.setCommentCount(postcardDTO.getCommentCount());
        postcard.setUser(userService.getUserById(userID));

        return postCardRepository.save(postcard);
    }


}

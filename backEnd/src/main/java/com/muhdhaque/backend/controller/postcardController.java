package com.muhdhaque.backend.controller;

import com.muhdhaque.backend.dto.PostcardDTO;
import com.muhdhaque.backend.mapper.PostcardMapper;
import com.muhdhaque.backend.model.PostCard;
import com.muhdhaque.backend.service.postcardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/postcard")
public class postcardController {

    private final postcardService postcardService;
    private final PostcardMapper postcardMapper;

    public postcardController(postcardService postcardService, PostcardMapper postcardMapper) {
        this.postcardService = postcardService;
        this.postcardMapper = postcardMapper;
    }

    @GetMapping("/getAllPostcards")
    public List<PostcardDTO> getAllPostcards() {
        // Logic to get all postcards
        return postcardService.getAllPostcards();
    }

    @GetMapping("/getPostcards/{userID}")
    public List<PostcardDTO> getPostcardsByUserId(@PathVariable int userID) {
        // Logic to get postcards by user ID
        return postcardService.getPostcardsByUserId(userID);
    }

    @GetMapping("/getPostcardsByLocation")
    public List<PostcardDTO> getPostcardsByLocation(@RequestParam String location) {
        // Logic to get postcards by location
        return postcardService.getPostcardsByLocation(location);
    }

    @PostMapping("/createPostcard")
    public PostcardDTO createPostcard(@RequestBody PostcardDTO postcardDTO, @RequestParam int userID) {

        PostCard postcard = postcardService.createPostcard(postcardDTO, userID);

        return postcardMapper.toDto(postcard); // Replace with actual creation logic
    }
}

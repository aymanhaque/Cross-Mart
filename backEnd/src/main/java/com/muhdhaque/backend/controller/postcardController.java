package com.muhdhaque.backend.controller;

import com.muhdhaque.backend.dto.PostcardDTO;
import com.muhdhaque.backend.mapper.PostcardMapper;
import com.muhdhaque.backend.model.PostCard;
import com.muhdhaque.backend.service.postcardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/postcard")
@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
public class postcardController {

    private final postcardService postcardService;
    private final PostcardMapper postcardMapper;

    @GetMapping("/getAllPostcards")
    public List<PostcardDTO> getAllPostcards() {
        // Logic to get all postcards
        return postcardService.getAllPostcards();
    }

    @GetMapping("/getAllPostcardsExcept/{userID}")
    public List<PostcardDTO> getAllPostcardsExcept(@PathVariable int userID) {
        // Logic to get all postcards except those from the specified user ID
        return postcardService.getAllPostcardsExcept(userID);
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

    @GetMapping("/getPostcardsByRequestingFromCountry")
    public List<PostcardDTO> getPostcardsByRequestingFromCountry(@RequestParam String country) {
        // Logic to get postcards by requesting from country
        return postcardService.getPostcardsByRequestingFromCountry(country);
    }

    @GetMapping("/searchPostcardsbyLocation")
    public List<PostcardDTO> searchPostcardsbyLocation(@RequestParam String location) {
        // Logic to search postcards by location
        return postcardService.searchPostcardsbyLocation(location);
    }

    @GetMapping("/searchPostcardsbyRequestingFromCountry")
    public List<PostcardDTO> searchPostcardsbyRequestingFromCountry(@RequestParam String location) {
        // Logic to search postcards by requesting from country
        return postcardService.searchPostcardsbyRequestingFromCountry(location);
    }

    @PostMapping("/createPostcard")
    public PostcardDTO createPostcard(@RequestBody PostcardDTO postcardDTO) {
        // Get userId from the PostcardDTO
        String userId = postcardDTO.getUserId();
        if (userId == null || userId.isEmpty()) {
            throw new IllegalArgumentException("User ID is required");
        }
        
        // Convert userId string to integer
        int userIdInt;
        try {
            userIdInt = Integer.parseInt(userId);
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("Invalid user ID format");
        }

        PostCard postcard = postcardService.createPostcard(postcardDTO, userIdInt);

        return postcardMapper.toDto(postcard);
    }
}

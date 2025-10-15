package com.muhdhaque.backend.controller;

import com.muhdhaque.backend.dto.PostcardDTO;
import com.muhdhaque.backend.service.postcardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/postcard")
public class postcardController {

    private final postcardService postcardService;

    public postcardController(postcardService postcardService) {
        this.postcardService = postcardService;
    }

    @GetMapping("/getPostcards/{userID}")
    public List<PostcardDTO> getPostcardsByUserId(@PathVariable int userID) {
        // Logic to get postcards by user ID
        return postcardService.getPostcardsByUserId(userID);
    }
}

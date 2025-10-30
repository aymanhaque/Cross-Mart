package com.muhdhaque.backend.controller;


import com.muhdhaque.backend.service.locationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/location")
@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
public class locationController {

    private final locationService locationService;

    @PutMapping("/update/{id}")
    public String updateLocation(@PathVariable int id, @RequestParam String location) {
        return locationService.updateLocation(id, location);

    }
}

package com.muhdhaque.backend.controller;


import com.muhdhaque.backend.model.PostCard;
import com.muhdhaque.backend.service.locationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/location")
@CrossOrigin(origins = "*", maxAge = 3600)
public class locationController {

    private final locationService locationService;

    public locationController(locationService  locationService, locationService locationService1) {
        this.locationService = locationService1;
    }

    @PutMapping("/update/{id}")
    public String updateLocation(@PathVariable int id, @RequestParam String location) {
        return locationService.updateLocation(id, location);

    }
}

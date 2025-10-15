package com.muhdhaque.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "postcards")
public class PostCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String userName;
    private String location;
    private String requestingFromCountry;
    private String text;

    @Column(name = "image_url")
    private String imageURL;
    private int commentCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false) // foreign key column
    @JsonBackReference
    private User user;

    // Constructors
    public PostCard() {}

    public PostCard(String userName, String location, String requestingFromCountry,
                    String text, String imageURL, int commentCount, User user) {
        this.userName = userName;
        this.location = location;
        this.requestingFromCountry = requestingFromCountry;
        this.text = text;
        this.imageURL = imageURL;
        this.commentCount = commentCount;
        this.user = user;
    }

    // Getters and setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getRequestingFromCountry() { return requestingFromCountry; }
    public void setRequestingFromCountry(String requestingFromCountry) { this.requestingFromCountry = requestingFromCountry; }

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public String getImageURL() { return imageURL; }
    public void setImageURL(String imageURL) { this.imageURL = imageURL; }

    public int getCommentCount() { return commentCount; }
    public void setCommentCount(int commentCount) { this.commentCount = commentCount; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}

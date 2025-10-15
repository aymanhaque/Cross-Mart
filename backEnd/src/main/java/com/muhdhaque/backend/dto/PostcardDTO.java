package com.muhdhaque.backend.dto;

public class PostcardDTO {
    private int id;
    private String userName;
    private String location;
    private String requestingFromCountry;
    private String text;
    private String imageURL;
    private int commentCount;
//    private int userId;


    public PostcardDTO(int id, String userName, String location, String requestingFromCountry, String text, String imageURL, int commentCount) {
        this.id = id;
        this.userName = userName;
        this.location = location;
        this.requestingFromCountry = requestingFromCountry;
        this.text = text;
        this.imageURL = imageURL;
        this.commentCount = commentCount;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getRequestingFromCountry() {
        return requestingFromCountry;
    }

    public void setRequestingFromCountry(String requestingFromCountry) {
        this.requestingFromCountry = requestingFromCountry;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public int getCommentCount() {
        return commentCount;
    }

    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
    }
}

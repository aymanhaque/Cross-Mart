package com.muhdhaque.backend.mapper;

import com.muhdhaque.backend.dto.PostcardDTO;
import com.muhdhaque.backend.model.PostCard;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PostcardMapper {
        PostcardDTO toDto(PostCard postcard);
        List<PostcardDTO> toDtoList(List<PostCard> postcards);
}

package com.preproject.overflow.tag.mapper;

import com.preproject.overflow.tag.dto.TagDto;
import com.preproject.overflow.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    List<TagDto.Response> tagToTagResponseDto(List<Tag> tags);
}
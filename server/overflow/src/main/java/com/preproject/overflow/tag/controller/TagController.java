//package com.preproject.overflow.tag.controller;
//
//import com.preproject.overflow.question.dto.MultiResponseDto;
//import com.preproject.overflow.question.dto.SingleResponseDto;
//import com.preproject.overflow.tag.entity.Tag;
//import com.preproject.overflow.tag.mapper.TagMapper;
//import com.preproject.overflow.tag.service.TagService;
//import org.springframework.data.domain.Page;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import javax.validation.constraints.Positive;
//import java.util.List;
//
//@CrossOrigin
//@RestController
//@RequestMapping("/tag")
//public class TagController {
//
//    private final TagService tagService;
//    private final TagMapper mapper;
//
//    public TagController(TagService tagService, TagMapper mapper){
//        this.tagService = tagService;
//        this.mapper = mapper;
//    }
//
//    @GetMapping("/{right}")
//    public ResponseEntity getTagsRight(){
//
//        Page<Tag> pageTags = tagService.findTagsRight(0, 5);
//        List<Tag> tags = pageTags.getContent();
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.tagToTagResponseDto(tags)),
//                HttpStatus.OK);
//    }
//
//    @GetMapping
//    public ResponseEntity getTags(@Positive @RequestParam int page,
//                                  @Positive @RequestParam int size){
//
//        Page<Tag> pageTags = tagService.findTags(page - 1, size);
//        List<Tag> tags = pageTags.getContent();
//
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.tagToTagResponseDto(tags), pageTags),
//                HttpStatus.OK);
//    }
//}
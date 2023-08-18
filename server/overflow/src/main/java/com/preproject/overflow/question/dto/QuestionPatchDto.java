package com.preproject.overflow.question.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class QuestionPatchDto {
    private Long questionId;
    private String title;
    private String text;
    private List<QuestionTagDto> questionTagList;
}
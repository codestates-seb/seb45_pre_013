package com.preproject.overflow.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;


import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private long memberId;
    private long questionId;
    private String text;
    private int answerVote;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}

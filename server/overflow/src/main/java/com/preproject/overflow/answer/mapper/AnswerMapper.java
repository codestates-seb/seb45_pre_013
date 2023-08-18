package com.preproject.overflow.answer.mapper;

import com.preproject.overflow.answer.dto.AnswerPatchDto;
import com.preproject.overflow.answer.dto.AnswerPostDto;
import com.preproject.overflow.answer.dto.AnswerResponseDto;
import com.preproject.overflow.answer.dto.AnswerVotePatchDto;
import com.preproject.overflow.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
    Answer answerVotePatchDtoToAnswer(AnswerVotePatchDto answerVotePatchDto);
    AnswerResponseDto AnswerToAnswerResponseDto(Answer answer);
}

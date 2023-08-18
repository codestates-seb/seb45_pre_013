package com.preproject.overflow.answer.controller;

import com.preproject.overflow.answer.dto.AnswerPatchDto;
import com.preproject.overflow.answer.dto.AnswerPostDto;
import com.preproject.overflow.answer.dto.AnswerResponseDto;
import com.preproject.overflow.answer.dto.AnswerVotePatchDto;
import com.preproject.overflow.answer.entity.Answer;
import com.preproject.overflow.answer.mapper.AnswerMapper;
import com.preproject.overflow.answer.service.AnswerService;
import com.preproject.overflow.member.entity.Member;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer answer = mapper.answerPostDtoToAnswer(answerPostDto);

        answer.setAnswerVote(0);

        Answer response = answerService.createAnswer(answer);

        return new ResponseEntity<>(mapper.AnswerToAnswerResponseDto(response), HttpStatus.CREATED);
    }
    @PatchMapping("/{answerId}")
    public ResponseEntity patchAnswer(@PathVariable("answerId") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto,
                                      @AuthenticationPrincipal Member user) {
        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto), user);

        return new ResponseEntity<>(mapper.AnswerToAnswerResponseDto(answer), HttpStatus.OK);
    }
    @GetMapping("/{answerId}")
    public ResponseEntity getAnswer(@PathVariable("answerId") @Positive long answerId) {
        Answer response = answerService.findAnswer(answerId);

        return new ResponseEntity<>(mapper.AnswerToAnswerResponseDto(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAnswers() {
        List<Answer> answers = answerService.findAnswers();

        List<AnswerResponseDto> response =
                answers.stream()
                        .map(answer -> mapper.AnswerToAnswerResponseDto(answer))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @DeleteMapping("/{answerId}")
    public ResponseEntity deleteAnswer(@PathVariable("answerId") @Positive long answerId,
                                       @AuthenticationPrincipal Member user) {

        answerService.deleteAnswer(answerId, user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/voteUp/{answerId}")
    public ResponseEntity voteUp(@PathVariable("answerId") @Positive long answerId) {
        Answer answer = answerService.findAnswer(answerId);

        Answer response = answerService.updateAnswerVoteUp(answer);

        return new ResponseEntity<>(mapper.AnswerToAnswerResponseDto(response), HttpStatus.OK);
    }

    @PatchMapping("/voteDown/{answerId}")
    public ResponseEntity voteDown(@PathVariable("answerId") @Positive long answerId) {
        Answer answer = answerService.findAnswer(answerId);

        Answer response = answerService.updateAnswerVoteDown(answer);

        return new ResponseEntity<>(mapper.AnswerToAnswerResponseDto(response), HttpStatus.OK);
    }

}

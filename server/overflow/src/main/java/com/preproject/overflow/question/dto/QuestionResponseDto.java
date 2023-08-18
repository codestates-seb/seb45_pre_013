package com.preproject.overflow.question.dto;

import com.preproject.overflow.answer.dto.AnswerResponseDto;
import com.preproject.overflow.member.dto.MemberResponseDto;
import com.preproject.overflow.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
public class QuestionResponseDto {
    private Long questionId;
    private String title;
    private String text;
    private List<QuestionTagResponseDto> questionTagList;
    private List<AnswerResponseDto> answers;

    private Long memberId;
    private String name;
    private int voteCount;
    private int answerCount;
    private int viewCount;
    private LocalDateTime createdAt;

    public void setMember(MemberResponseDto memberToMemberResponseDto) {
        this.name = memberToMemberResponseDto.getNickname();
        this.memberId = memberToMemberResponseDto.getMemberId();
    }
}
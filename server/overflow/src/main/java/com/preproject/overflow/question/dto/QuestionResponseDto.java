package com.preproject.overflow.question.dto;

import com.preproject.overflow.member.dto.MemberDto;
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

    private Long memberId;
    private String name;
    private int voteCount;
    private int answerCount;
    private int viewCount;
    private LocalDateTime createdAt;

    public void setMember(MemberDto.Response memberToMemberResponseDto) {
        this.name = memberToMemberResponseDto.getName();
        this.memberId = memberToMemberResponseDto.getMemberId();
    }
}
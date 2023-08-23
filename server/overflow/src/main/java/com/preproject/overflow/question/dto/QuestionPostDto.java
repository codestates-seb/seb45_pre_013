package com.preproject.overflow.question.dto;

import com.preproject.overflow.member.entity.Member;
import lombok.Getter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
public class QuestionPostDto {
    @Positive
    private Long memberId;
    @NotBlank(message = "질문을 작성해 주세요.")

    private String title;
    @NotBlank(message = "질문을 작성해 주세요.")

    private String text;
    //@Valid @NotNull(message = "태그를 작성해 주세요")
    //private List<QuestionTagDto> questionTagList;

    public Long getMemberId() {
        return memberId;
    }

    public String getTitle() {
        return title;
    }

    public String getText() {
        return text;
    }

    /*public List<QuestionTagDto> getQuestionTagList() {
        return questionTagList;
    }*/

    public Member getMember(){
        Member member = new Member();
        member.setMemberId(memberId);
        return member;
    }
}
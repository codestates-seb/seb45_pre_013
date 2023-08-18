package com.preproject.overflow.answer.dto;

import com.preproject.overflow.member.entity.Member;
import com.preproject.overflow.question.entity.Question;
import lombok.AllArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@AllArgsConstructor
public class AnswerPostDto {
    @NotBlank(message = "공백이 아니어야 합니다.")
    private String text;
    private Long questionId;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }

    public Question getQuestion() {
        Question question = new Question();
        question.setQuestionId(questionId);
        return question;
    }
}

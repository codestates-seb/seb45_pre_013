package com.preproject.overflow.answer.dto;

import lombok.AllArgsConstructor;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
public class AnswerPatchDto {
    private long answerId;
    @NotBlank(message = "공백이 아니어야 합니다.")
    private String text;

    public long getAnswerId() {
        return answerId;
    }

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}

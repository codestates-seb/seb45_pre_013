package com.preproject.overflow.question.exception;

import lombok.Getter;
public enum ExceptionCode {

    QUESTION_NOT_FOUND(404, "Question not found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}

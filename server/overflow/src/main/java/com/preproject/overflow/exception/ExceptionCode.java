package com.preproject.overflow.exception;

import lombok.Getter;

public enum ExceptionCode {
    ANSWER_NOT_FOUND(404, "Answer Not Found"),
    MEMBER_NOT_FOUND(404, "Member Not Found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}

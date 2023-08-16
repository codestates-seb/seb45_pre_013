package com.preproject.overflow.member.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_IS_EXIST(409, "Mebmer Is Exist"),
    MEMBER_STATUS_DELETE(409, "Member Status Delete"),
    MEMBER_PERMISSION_DENIED(402, "Permission denied");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
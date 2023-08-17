package com.preproject.overflow.member.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class MemberResponseDto {
    private Long memberId;

    private String email;

    private String nickname;

    private String location;

    private String title;

    private String intro;

    private int reput;
}

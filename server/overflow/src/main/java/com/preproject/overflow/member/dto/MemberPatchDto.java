package com.preproject.overflow.member.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberPatchDto {
    private Long memberId;

    private String nickname;

    private String location;

    private String title;

    private String intro;
}

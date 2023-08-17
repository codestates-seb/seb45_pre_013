package com.preproject.overflow.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class MemberPostDto {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$", message = "비밀번호 양식에 부합하지 않습니다.")
    private String password;

    @NotBlank(message = "이름은 공백이 아니어야 합니다.")
    private String nickname;


}

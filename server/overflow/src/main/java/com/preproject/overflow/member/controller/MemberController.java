package com.preproject.overflow.member.controller;

import com.preproject.overflow.member.dto.MemberPatchDto;
import com.preproject.overflow.member.dto.MemberPostDto;
import com.preproject.overflow.member.entity.Member;
import com.preproject.overflow.member.mapper.MemberMapper;
import com.preproject.overflow.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/members")
@Validated
@Slf4j
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity createMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        Member createMember = memberService.createMember(mapper.memberPostDtoToMember(memberPostDto));

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(createMember), HttpStatus.CREATED);
    }

    @PatchMapping()
    public ResponseEntity patchMember(@Valid @RequestBody MemberPatchDto patchMember,
                                      @AuthenticationPrincipal Member member) {
        patchMember.setMemberId(member.getMemberId());

        Member updateMember = memberService.updateMember(mapper.memberPatchDtoToMember(patchMember));

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(updateMember), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity getUserInfo(@AuthenticationPrincipal Member member) {

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(member), HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity deleteMember(@AuthenticationPrincipal Member user) {
        memberService.deleteMember(user);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}

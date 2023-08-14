package com.preproject.overflow.member.controller;

import com.preproject.overflow.member.dto.MemberPatchDto;
import com.preproject.overflow.member.dto.MemberPostDto;
import com.preproject.overflow.member.entity.Member;
import com.preproject.overflow.member.mapper.MemberMapper;
import com.preproject.overflow.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/members")
@Validated
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

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive Long memberId,
                                      @Valid @RequestBody MemberPatchDto patchMember) {
        patchMember.setMemberId(memberId);

        Member member = memberService.updateMember(mapper.memberPatchDtoToMember(patchMember));

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(member), HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") Long memberId) {
        Member findMember = memberService.findMember(memberId);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(findMember), HttpStatus.OK);
    }
}

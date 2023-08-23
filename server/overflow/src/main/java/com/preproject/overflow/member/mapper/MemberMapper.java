package com.preproject.overflow.member.mapper;

import com.preproject.overflow.member.dto.MemberPatchDto;
import com.preproject.overflow.member.dto.MemberPostDto;
import com.preproject.overflow.member.dto.MemberResponseDto;
import com.preproject.overflow.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto requestBody);
    MemberResponseDto memberToMemberResponseDto(Member member);
    Member memberPatchDtoToMember(MemberPatchDto patchDto);
}
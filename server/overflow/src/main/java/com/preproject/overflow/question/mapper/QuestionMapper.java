package com.preproject.overflow.question.mapper;

import com.preproject.overflow.question.dto.*;
import com.preproject.overflow.question.entity.Question;
import com.preproject.overflow.question.QuestionTag;
import com.preproject.overflow.tag.entity.Tag;
import com.preproject.overflow.member.dto.MemberDto;
import com.preproject.overflow.member.entity.Member;
import com.preproject.overflow.member.mapper.MemberMapper;
import com.preproject.overflow.member.service.UserService;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    List<QuestionResponseDto> questionsToQuestionResponses(List<Question> questions);
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions);

    default Question questionPostToQuestion(UserService userService, QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();
        User user = new User();
        user.setUserId(questionPostDto.getUserId());

        List<QuestionTag> list = questionPostDto.getQuestionTagList().stream()
                .map(questionTagDto -> {
                    QuestionTag questionTag = new QuestionTag();
                    Tag tag = new Tag();
                    tag.setTagName(questionTagDto.getTagName());
                    questionTag.addQuestion(question);
                    questionTag.addTag(tag);
                    return questionTag;
                }).collect(Collectors.toList());
        if ( list != null ) {
            question.setQuestionTagList( new ArrayList<QuestionTag>( list ) );
        }
        question.setTitle( questionPostDto.getTitle() );
        question.setQuestionBody( questionPostDto.getQuestionBody() );
        question.setUser(userService.findUser(user.getUserId()));
        question.setQuestionTagList(list);
        question.setCreatedAt(LocalDateTime.now());

        return question;
    }

    default Question questionPatchDtoToQuestion(QuestionPatchDto requestBody) {
        Question question = new Question();

        question.setQuestionId(requestBody.getQuestionId());
//        question.setVoteCount(requestBody.getVoteCount());
        question.setTitle(requestBody.getTitle());
        question.setQuestionBody(requestBody.getQuestionBody());

        return question;
    }

    default Question questionVoteToQuestion(QuestionVoteDto questionVoteDto) {
        if ( questionVoteDto == null ) {
            return null;
        }

        Question question = new Question();
        question.setQuestionId( questionVoteDto.getQuestionId() );

        return question;
    }


    default QuestionResponseDto questionToQuestionResponse(UserMapper userMapper, Question question) {
        if ( question == null ) {
            return null;
        }

        List<QuestionTag> questionTagList = question.getQuestionTagList();

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setQuestionBody( question.getQuestionBody() );
        questionResponseDto.setQuestionTagList(questionTagListToQuestionTagResponseDtoList(question.getQuestionTagList()));
        questionResponseDto.setVoteCount( question.getVoteCount() );
        questionResponseDto.setAnswerCount( question.getAnswerCount() );
        questionResponseDto.setViewCount(question.getViewCount());
        questionResponseDto.setCreatedAt(question.getCreatedAt());

        Member member = question.getMember();
        questionResponseDto.setMember(memberMapper.membertoMemberResponseDto(member));
        questionResponseDto.setQuestionTagList(questionTagListToQuestionTagResponseDtoList(
                question.getQuestionTagList()
        ));

        return questionResponseDto;
    }

    default List<QuestionTagResponseDto> questionTagListToQuestionTagResponseDtoList(List<QuestionTag> list) {
        if ( list == null ) {
            return null;
        }
        return list.stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
                        .tagName(questionTag.getTag().getTagName())
                        .build())
                .collect(Collectors.toList());
    }

    default MemberDto.Response memberToResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberDto.Response response = new MemberDto.Response();

        response.setMemberId( member.getMemberId() );
        response.setEmail( member.getEmail() );
        response.setName( member.getName() );
        response.setPassword( member.getPassword() );
        response.setQuestionCount( member.getQuestionCount() );

        return response;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setMember( memberToResponse( question.getMember() ) );
        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setText( question.getQuestionBody() );
        questionResponseDto.setQuestionTagList( questionTagListToQuestionTagResponseDtoList( question.getQuestionTagList() ) );
        questionResponseDto.setVoteCount( question.getVoteCount() );
        questionResponseDto.setAnswerCount( question.getAnswerCount() );
        questionResponseDto.setViewCount(question.getViewCount());
        questionResponseDto.setCreatedAt( question.getCreatedAt() );

        return questionResponseDto;
    }
}
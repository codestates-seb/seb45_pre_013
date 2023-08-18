package com.preproject.overflow.answer.service;

import com.preproject.overflow.answer.entity.Answer;
import com.preproject.overflow.answer.repository.AnswerRepository;
import com.preproject.overflow.exception.BusinessLogicException;
import com.preproject.overflow.exception.ExceptionCode;
import com.preproject.overflow.member.entity.Member;
import com.preproject.overflow.member.service.MemberService;
import com.preproject.overflow.question.entity.Question;
import com.preproject.overflow.question.service.QuestionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private AnswerRepository answerRepository;
    private MemberService memberService;
    private QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, MemberService memberService, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
    }
    // 답변 생성 service
    public Answer createAnswer(Answer answer) {

        // Question question = answer.getQuestion();
        // Member member = answer.getMember();
        // 위에를 아래처럼 수정, 위는 아이디만 넣는 것 같고 아래는 아이디값을 가지고 존재하는지 확인 후 객체를 넣는다.
        Question question = questionService.findVerifyQuestion(answer.getQuestionId());
        Member member = memberService.findVerifiedMember(answer.getMemberId());

        answer.setQuestion(question);
        answer.setMember(member);
        answer.setNickname(member.getNickname());

        return answerRepository.save(answer);
    }
    // 답변 수정 service
    public Answer updateAnswer(Answer answer, Member member) {
        // 존재하는 답변인지 찾은 후 업데이트
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        // 답변을 작성한 사람과 수정하려는 사람이 일치하는지 확인
        if(member.getMemberId() != findAnswer.getMember().getMemberId()){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
//        if(!(findAnswer.getMember().getMemberId() == memberId)) {
//            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
//        }

        Optional.ofNullable(answer.getText())
                .ifPresent(text -> findAnswer.setText(text));

        return answerRepository.save(findAnswer);
    }
    // 답변 조회 service
    public Answer findAnswer(long answerId) {

        return findVerifiedAnswer(answerId);
    }
    // 모든 답변 조회 service
    public List<Answer> findAnswers() {
        return answerRepository.findAll();
    }
    // 답변 삭제 service
    public void deleteAnswer(long answerId, Member member) {
        Answer answer = findVerifiedAnswer(answerId);

        if(member.getMemberId() != answer.getMember().getMemberId()){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }

        answerRepository.delete(answer);
    }

    public Answer updateAnswerVoteUp(Answer answer) {

        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        int vote = findAnswer.getAnswerVote();

        findAnswer.setAnswerVote(vote + 1);

        return answerRepository.save(findAnswer);
    }

    public Answer updateAnswerVoteDown(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        int vote = findAnswer.getAnswerVote();

        if(0 < vote) {
            findAnswer.setAnswerVote(vote - 1);
        }

        return answerRepository.save(findAnswer);
    }
    //존재하는 답변인지 확인
    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }
}

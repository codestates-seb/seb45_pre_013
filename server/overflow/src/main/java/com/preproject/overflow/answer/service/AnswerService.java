package com.preproject.overflow.answer.service;

import com.preproject.overflow.answer.entity.Answer;
import com.preproject.overflow.answer.repository.AnswerRepository;
import com.preproject.overflow.member.exception.BusinessLogicException;
import com.preproject.overflow.member.exception.ExceptionCode;
import com.preproject.overflow.member.entity.Member;
import com.preproject.overflow.question.entity.Question;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }
    public Answer createAnswer(Answer answer) {

        //answer.setAnswerVote(0);

        Question question = answer.getQuestion();
        Member member = answer.getMember();

        //answer.setNickname(answer.getMember().getNickname());

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer, long memberId) {
        //존재하는 답변인지 찾은 후 업데이트
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        if(!(findAnswer.getMember().getMemberId() == memberId)) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }

        Optional.ofNullable(answer.getText())
                .ifPresent(text -> findAnswer.setText(text));

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId) {

        return findVerifiedAnswer(answerId);
    }

    public List<Answer> findAnswers() {
        return answerRepository.findAll();
    }

    public void deleteAnswer(long answerId) {
        Answer answer = new Answer();
        answer.setAnswerId(answerId);

//        if(!(answer.getMember().getMemberId() == memberId)) {
//            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
//        }

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

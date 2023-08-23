package com.preproject.overflow.question.repository;

import com.preproject.overflow.question.entity.Question;
import com.preproject.overflow.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Question findByQuestionId(Long questionId);
    List<Question> findAllByMember(Member member);
    List<Question> findByAnswerCountGreaterThan(int answerCount);
    List<Question> findByAnswerCountLessThanEqual(int answerCount);
}
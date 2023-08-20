package com.preproject.overflow.question.service;

import com.preproject.overflow.exception.ExceptionCode;
import com.preproject.overflow.exception.BusinessLogicException;
import com.preproject.overflow.question.entity.Question;
import com.preproject.overflow.question.entity.QuestionTag;
import com.preproject.overflow.question.repository.QuestionRepository;
import com.preproject.overflow.question.repository.QuestionTagRepository;
import com.preproject.overflow.tag.entity.Tag;
import com.preproject.overflow.tag.repository.TagRepository;
import com.preproject.overflow.tag.service.TagService;
import com.preproject.overflow.member.entity.Member;
import com.preproject.overflow.member.repository.MemberRepository;
import com.preproject.overflow.member.service.MemberService;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionTagRepository questionTagRepository;
    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final TagService tagService;
    private final TagRepository tagRepository;

    public QuestionService(QuestionRepository questionRepository, QuestionTagRepository questionTagRepository,
                           MemberService memberService, MemberRepository memberRepository,
                           TagService tagService, TagRepository tagRepository) {
        this.questionRepository = questionRepository;
        this.questionTagRepository = questionTagRepository;
        this.memberService = memberService;
        this.memberRepository = memberRepository;
        this.tagService = tagService;
        this.tagRepository = tagRepository;
    }


    public Question createQuestion(Question question) {
        Member member = memberRepository.findByMemberId(question.getMember().getMemberId());
        question.setMember(member);
        createTag(question);
        //upQuestionCount(question);
        return questionRepository.save(question);
    }

    // 게시글 내용 수정
    public Question updateQuestion(Question question, Member loggedInMember) {
        Question findQuestion = questionRepository.findByQuestionId(question.getQuestionId());

        if (findQuestion.getMember().getMemberId().equals(loggedInMember.getMemberId())) {
            Optional.ofNullable(question.getText())
                    .ifPresent(text -> findQuestion.setText(text));

            return questionRepository.save(findQuestion);
        } else {
            throw new BusinessLogicException(ExceptionCode.MEMBER_PERMISSION_DENIED);
        }
    }

    public Question voteQuestion(Question question, Boolean vote) {
        Question findQuestion = questionRepository.findByQuestionId(question.getQuestionId());
        if (vote.equals(true)) {
            findQuestion.setVoteCount(findQuestion.getVoteCount() + 1);
        } else {
            findQuestion.setVoteCount(findQuestion.getVoteCount() - 1);
        }
        Question question1 = questionRepository.save(findQuestion);
        return question1;
    }

    public Question findQuestion(Long questionId) {
        return findVerifyQuestion(questionId);
    }

    public Question findGetQuestion(Long questionId) {
        Question question = findVerifyQuestion(questionId);
        question.setViewCount(question.getViewCount() + 1);
        questionRepository.save(question);
        return question;
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    @Transactional(readOnly = true)
    public Question findVerifyQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question question = optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return question;
    }

    public Question VerifyQuestionId(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }


    public Page<Question> findAnsweredQuestions(int page, int size) {
        List<Question> list = questionRepository.findByAnswerCountGreaterThan(0)
                .stream().sorted(Comparator.comparing(Question::getQuestionId).reversed())
                .collect(Collectors.toList());
        PageRequest pageRequest = PageRequest.of(page, size);
        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageRequest.getPageSize()), list.size());
        Page<Question> questionPage = new PageImpl<>(list.subList(start, end), pageRequest, list.size());
        return questionPage;
    }

    public Page<Question> findUnansweredQuestions(int page, int size) {
        List<Question> list = questionRepository.findByAnswerCountLessThanEqual(0)
                .stream().sorted(Comparator.comparing(Question::getQuestionId).reversed())
                .collect(Collectors.toList());
        PageRequest pageRequest = PageRequest.of(page, size);
        int start = (int) pageRequest.getOffset();
        int end = Math.min((start + pageRequest.getPageSize()), list.size());
        Page<Question> questionPage = new PageImpl<>(list.subList(start, end), pageRequest, list.size());
        return questionPage;
    }

    public void deleteQuestion(Long questionId, Member loggedInMember) {
        Question question = findVerifyQuestion(questionId);

        if (!question.getMember().getMemberId().equals(loggedInMember.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_PERMISSION_DENIED);
        }
        deleteTag(question);
        //downQuestionCount(question);
        questionRepository.delete(question);
    }

    public void createTag(Question question) {
        Question question1 = questionRepository.save(question);
        List<QuestionTag> questionTagList = new ArrayList<>();
        for (int i = 0; i < question.getQuestionTagList().size(); i++){
            Tag tag = new Tag();
            tag.setTagName(question.getQuestionTagList().get(i).getTag().getTagName().toLowerCase());
            tag.setTagCount(tag.getTagCount() + 1);
            if (!tagRepository.findByTagName(tag.getTagName()).isPresent()) {
                tagRepository.save(tag);
                question.getQuestionTagList().get(i).setTag(tag);
            } else {
                List<Tag> list = tagRepository.findAll().stream()
                        .filter(a -> a.getTagName().equals(tag.getTagName()))
                        .collect(Collectors.toList());
                Tag tag1 = list.get(0);
                question.getQuestionTagList().get(i).setTag(tag1);
                tag1.setTagCount(tag1.getTagCount() + 1);
            }

            question.getQuestionTagList().get(i).setQuestion(question1);
            QuestionTag questionTag = questionTagRepository.save(question.getQuestionTagList().get(i));
            questionTagList.add(questionTag);
        }
        question1.setQuestionTagList(questionTagList);
    }

    public void deleteTag(Question question) {
        for (int i = 0; i < question.getQuestionTagList().size(); i++) {
            Tag tag = new Tag();
            tag.setTagName(question.getQuestionTagList().get(i).getTag().getTagName());
            tag.setTagCount(tag.getTagCount() - 1);
            if (!tagRepository.findByTagName(tag.getTagName()).isPresent()) {
                tagService.updateTag(tag);
                question.getQuestionTagList().get(i).setTag(tag);
            } else {
                List<Tag> list = tagRepository.findAll().stream()
                        .filter(a -> a.getTagName().equals(tag.getTagName()))
                        .collect(Collectors.toList());
                Tag tag1 = list.get(0);
                question.getQuestionTagList().get(i).setTag(tag1);
                tag1.setTagCount(tag1.getTagCount() - 1);
            }
            Question question1 = questionRepository.save(question);
            List<QuestionTag> questionTagList = new ArrayList<>();
            question.getQuestionTagList().get(i).setQuestion(question1);
            QuestionTag questionTag = questionTagRepository.save(question.getQuestionTagList().get(i));
            questionTagList.add(questionTag);
        }
    }
}
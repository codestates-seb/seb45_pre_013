//package com.preproject.overflow.tag.repository;
//
//import com.preproject.overflow.question.entity.Question;
//import com.preproject.overflow.tag.entity.Tag;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//import java.util.Optional;
//
//public interface TagRepository extends JpaRepository<Tag, Long> {
//    Optional<Tag> findByTagName(String tagName);
//    Tag findByTagId(Long tagId);
//
//    List<Tag> findByTagCountGreaterThan(int tagCount);
//}
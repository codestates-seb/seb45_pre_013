package com.preproject.overflow.comment.entity;

import com.preproject.overflow.answer.entity.Answer;
import com.preproject.overflow.audit.Auditable;
import com.preproject.overflow.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Comment extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "ANSER_ID")
    private Answer answer;

    @Column
    private String text;
}

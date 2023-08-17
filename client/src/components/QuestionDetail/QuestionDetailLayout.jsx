import ArticleTitle from "@/components/ArticleTitle";
import RightSidebar from "@/components/RightSidebar";
import Vote from "@/components/QuestionDetail/Vote";
import AnswerArticle from "@/components/QuestionDetail/AnswerArticle";
import AnswerForm from "@/components/QuestionDetail/AnswerForm";
import {
  Div,
  ArticleMoreData,
  Writer,
  Main,
  FlexMain,
  AnswerStart,
  More,
} from "@/styles/QuestionDetail/QuestionStyle";
import { Flex } from "@/styles/DivStyle";
import {
  ID,
  TITLE,
  TEXT,
  USER_NAME,
  USER_REPUTATION,
  CREATED,
  MODIFIED,
  VOTE,
  ANSWER,
} from "@/config/config";
import { RANDOM_AVATAR } from "@/config/config";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion, addAnswer } from "@/store/store";

const QuestionDetailLayout = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);
  const postanswer = useSelector((state) => state.answers);

  useEffect(() => {
    const fetchedQuestion = {
      id: 1,
      title: "How to...",
      text: "How to do something?",
      userName: "bee",
      userReputation: 0,
      created: "today",
      modified: "today",
      vote: 10,
      answer: [{ content: "hi" }, { content: "good" }],
    };
    dispatch(setQuestion(fetchedQuestion));
  }, [dispatch]);

  const handleAddAnswer = (newAnswer) => {
    const updatedAnswers = [...question.answer, newAnswer];
    const updatedQuestion = {
      ...question,
      answer: updatedAnswers,
    };
    dispatch(addAnswer(newAnswer));
    dispatch(setQuestion(updatedQuestion));
  };

  return (
    <Div>
      <ArticleTitle title={question[TITLE]} />
      <ArticleMoreData>
        <div>
          <div>Asked</div>
          <div>{question[CREATED]}</div>
        </div>
        <div>
          <div>Modified</div>
          <div>{question[MODIFIED]}</div>
        </div>
      </ArticleMoreData>
      <FlexMain>
        <Main>
          <Flex>
            <Vote vote={question[VOTE]} />
            <article>{question[TEXT]}</article>
          </Flex>
          <Flex>
            <Writer>
              <div>
                <img
                  alt={question[USER_NAME] + "'s avatar"}
                  src={`${RANDOM_AVATAR}/${question[ID]}.jpg`}
                />
                <div>
                  <p>{question[USER_NAME]}</p>
                  <p>{question[USER_REPUTATION]}</p>
                </div>
              </div>
            </Writer>
          </Flex>
          <AnswerStart>
            <h2>{question[ANSWER].length} Answer</h2>
            <div>
              <p>sorted by:</p>
              <div>Highest score (default)</div>
            </div>
          </AnswerStart>
          {[...question[ANSWER]].map((item, index) => {
            return <AnswerArticle key={index} answer={item} />;
          })}
          <AnswerForm handleAddAnswer={handleAddAnswer} />
          <More>
            Not the answer youre looking for? Browse other questions or{" "}
            <span className="link">ask your own question.</span>
          </More>
        </Main>
        <RightSidebar />
      </FlexMain>
    </Div>
  );
};

export default QuestionDetailLayout;

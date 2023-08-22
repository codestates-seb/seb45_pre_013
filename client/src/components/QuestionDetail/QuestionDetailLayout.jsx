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
import {
  setQuestion,
  deleteAnswer,
  fetchedAnswer,
  addAnswer,
} from "../../store/slice/slice.js";

const apiUrl = import.meta.env.VITE_API_URL;

const QuestionDetailLayout = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);

  useEffect(() => {
    const fetchedQuestion = {
      // id: 0,
      // title: "",
      // text: "",
      // userName: "",
      // userReputation: 0,
      // created: "",
      // modified: "",
      // vote: 0,
      answer: [
        {
          answerId: 0,
          memberId: 0,
          nickname: "",
          questionId: 0,
          text: "",
          answerVote: 0,
          createdAt: null,
          modifiedAt: null,
        },
      ],
    };
    dispatch(setQuestion(fetchedQuestion));
    dispatch(fetchedAnswer());
  }, [dispatch]);

  const handleAddAnswer = (newAnswer) => {
    const updatedAnswers = [...question.answer, newAnswer];
    const updatedQuestion = {
      ...question,
      answer: updatedAnswers,
    };
    console.log(...question.answer); //TEMP
    dispatch(addAnswer(newAnswer));
    dispatch(setQuestion(updatedQuestion));
  };

  // const handleDeleteAnswer = async (answerId) => {
  //   try {
  //     const jwtToken = localStorage.getItem("Authorization");
  //     const response = await fetch(`${apiUrl}/answers/${answerId}`, {
  //       method: "DELETE",
  //       headers: {
  //         Authorization: `Bearer ${jwtToken}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       alert("Failed to delete answer");
  //     }

  //     dispatch(deleteAnswer(answerId));

  //     const updatedAnswers = question.answer.filter(
  //       (answer) => answer.answerId !== answerId
  //     );
  //     const updatedQuestion = {
  //       ...question,
  //       answer: updatedAnswers,
  //     };
  //     dispatch(setQuestion(updatedQuestion));

  //     console(...question.answer); //TEMP
  //   } catch (error) {
  //     alert("error delete answer");
  //   }
  // };

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
            return (
              <AnswerArticle
                key={index}
                answer={item}
                // onDelete={() => handleDeleteAnswer(item.answerId)}
              />
            );
          })}
          <AnswerForm
            questionId={question.questionId}
            handleAddAnswer={handleAddAnswer}
          />

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

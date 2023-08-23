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
  DelModBtn,
} from "@/styles/QuestionDetail/QuestionStyle";
import { Flex, ModifyModal } from "@/styles/DivStyle";
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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getDetailFetch, delQuestionFetch } from "@/store/slice/detailSlice";
import { useState } from "react";

const QuestionDetailLayout = () => {
  const location = useLocation().pathname.slice(11);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const questionDetail = useSelector((state) => state.SquestionDetail);
  const [question, setQuestions] = useState([]);
  const [isModify, setIsModify] = useState(false);

  useEffect(() => {
    dispatch(getDetailFetch(location));
  }, [dispatch, location]);

  useEffect(() => {
    if (questionDetail.status === "fulfilled") {
      setQuestions(questionDetail.data.data);
    }
  }, [questionDetail]);

  const handleAddAnswer = () => {};

  const deleteQuestion = () => {
    dispatch(delQuestionFetch(location));
    nav("/Questions/List");
  };

  const handleModify = () => {
    setIsModify(!isModify);
  };

  return (
    <Div>
      <ArticleTitle title={question[TITLE]}></ArticleTitle>
      <div className="delmodDiv">
        <DelModBtn onClick={deleteQuestion}>Delete</DelModBtn>
        <DelModBtn onClick={handleModify}>Modify</DelModBtn>
        {isModify && (
          <ModifyModal onClick={handleModify}>준비중입니다.</ModifyModal>
        )}
      </div>
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
                  src={`${RANDOM_AVATAR}/1.jpg`}
                />
                <div>
                  <p>{question[USER_NAME]}</p>
                  <p>{question[USER_REPUTATION]}</p>
                </div>
              </div>
            </Writer>
          </Flex>
          <AnswerStart>
            <h2>{question[ANSWER]?.length} Answer</h2>
            <div>
              <p>sorted by:</p>
              <div>Highest score (default)</div>
            </div>
          </AnswerStart>
          {question[ANSWER]?.map((item, index) => {
            return <AnswerArticle key={index} answer={item} />;
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

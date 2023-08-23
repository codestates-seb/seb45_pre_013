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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getDetailFetch } from "@/store/slice/detailSlice";
import { useState } from "react";

const QuestionDetailLayout = () => {
  const location = useLocation().pathname.slice(11);
  const dispatch = useDispatch();
  const questionDetail = useSelector((state) => state.SquestionDetail);
  const [question, setQuestions] = useState([]);

  useEffect(() => {
    dispatch(getDetailFetch(location));
  }, [dispatch, location]);

  useEffect(() => {
    if (questionDetail.status === "fulfilled") {
      setQuestions(questionDetail.data.data);
    }
  }, [questionDetail]);

  if (!question) {
    return;
  } else {
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
              <h2>{question[ANSWER]?.length} Answer</h2>
              <div>
                <p>sorted by:</p>
                <div>Highest score (default)</div>
              </div>
            </AnswerStart>
            {/* {question[ANSWER].map((item, index) => {
            return <AnswerArticle key={index} answer={item} />;
          })} */}
            {question[ANSWER]?.map((item, index) => {
              return <AnswerArticle key={index} answer={item} />;
            })}
            <AnswerForm questionId={question.questionId} />

            <More>
              Not the answer youre looking for? Browse other questions or{" "}
              <span className="link">ask your own question.</span>
            </More>
          </Main>
          <RightSidebar />
        </FlexMain>
      </Div>
    );
  }
};

export default QuestionDetailLayout;

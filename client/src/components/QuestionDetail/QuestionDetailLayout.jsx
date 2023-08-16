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

const QuestionDetailLayout = ({ questionId }) => {
  const question = {
    id: questionId,
    title: "How...",
    text: "How to how ?",
    userName: "bee",
    userReputation: 0,
    created: "today",
    modified: "today",
    vote: 10,
    answer: [{ article: "hi" }, { article: "good" }],
  }; //임시

  console.log(question[ID]);

  const moreText =
    "Not the answer you're looking for? Browse other questions or ask your own question.";

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
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
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
          {question[ANSWER].map((item, index) => {
            return <AnswerArticle key={index} answer={item} />;
          })}
          <AnswerForm />
          <More>{moreText}</More>
        </Main>
        <RightSidebar />
      </FlexMain>
    </Div>
  );
};

export default QuestionDetailLayout;

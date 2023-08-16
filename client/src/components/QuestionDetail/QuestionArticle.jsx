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

const QuestionArticle = () => {
  const question = {
    id: 0,
    title: "How...",
    text: "How to how ?",
    userName: "bee",
    userReputation: 0,
    created: "today",
    modified: "today",
    vote: 10,
    answer: [{ article: "hi" }, { article: "good" }],
  }; //임시

  const moreText =
    "Not the answer you're looking for? Browse other questions or ask your own question.";

  return (
    <Div>
      <ArticleTitle title={question.title} />
      <ArticleMoreData>
        <div>
          <div>Asked</div>
          <div>{question.created}</div>
        </div>
        <div>
          <div>Modified</div>
          <div>{question.modified}</div>
        </div>
      </ArticleMoreData>
      <FlexMain>
        <Main>
          <Flex>
            <Vote />
            <article>{question.text}</article>
          </Flex>
          <Flex>
            <Writer>
              <div>
                <img
                  alt={question.userName + "'s avatar"}
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                />
                <div>
                  <p>{question.userName}</p>
                  <p>{question.userReputation}</p>
                </div>
              </div>
            </Writer>
          </Flex>
          <AnswerStart>
            <h2>{question.answer.length} Answer</h2>
            <div>
              <p>sorted by:</p>
              <div>Highest score (default)</div>
            </div>
          </AnswerStart>
          {question.answer.map((item, index) => {
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

export default QuestionArticle;

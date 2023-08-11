import { styled } from "styled-components";

import ArticleTitle from "@/components/ArticleTitle";
import RightSidebar from "@/components/RightSidebar";
import Vote from "@/components/QuestionDetail/Vote";
import AnswerArticle from "@/components/QuestionDetail/AnswerArticle";
import AnswerForm from "@/components/QuestionDetail/AnswerForm";

const ArticleMoreData = styled.div`
  width: 1051px;
  display: flex;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--black-100);
  margin-bottom: 16px;

  & > div {
    display: flex;
    margin-bottom: 8px;
    margin-right: 16px;

    & > div:first-child {
      margin-right: 5px;
      color: var(--black-500);
    }
  }
`;

const Writer = styled.div`
  width: calc(1051px - 324px);
  display: flex;
  flex-direction: row-reverse;

  & > div {
    width: 200px;
    height: 48px;
    padding: 6px;
    background-color: var(--powder-100);
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;

    & > img {
      width: 32px;
      height: 32px;
      border-radius: 4px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      margin-left: 8px;

      & > p:first-child {
        color: var(--blue-600);
      }

      & > p:nth-child(2) {
        color: var(--black-500);
      }
    }
  }
`;

const Main = styled.main`
  width: calc(1051px - 324px);
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
`;

const AnswerStart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  h2 {
    font-size: var(--fs-headline2);
  }

  & > div {
    display: flex;
    align-items: center;

    p {
      margin-right: 5px;
    }

    div {
      display: flex;
      align-items: center;
      width: 256px;
      height: 32px;
      padding: 7.5px 32px 7.5px 9px;
      border-radius: 4px;
      border: 1px solid var(--black-200);
    }
  }
`;

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
  }; //임시

  return (
    <>
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
      <Flex>
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
            <h2>2 Answer</h2>
            <div>
              <p>sorted by:</p>
              <div>Highest score (default)</div>
            </div>
          </AnswerStart>
          {[{ article: "hi" }, { article: "good" }].map((item, index) => {
            return <AnswerArticle key={index} answer={item} />;
          })}
          <AnswerForm />
        </Main>
        <RightSidebar />
      </Flex>
    </>
  );
};

export default QuestionArticle;

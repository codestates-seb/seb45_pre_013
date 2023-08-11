import { styled } from "styled-components";
import Vote from "./Vote";

const Answer = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--black-100);
`;

const AnswerArticle = ({ answer }) => {
  return (
    <Answer>
      <Vote />
      <div>{answer.article}</div>
    </Answer>
  );
};

export default AnswerArticle;

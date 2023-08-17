import Vote from "./Vote";
import { Article } from "@/styles/QuestionDetail/AnswerStyle";

const AnswerArticle = ({ answer }) => {
  return (
    <Article>
      <Vote />
      <div>{answer.content}</div>
    </Article>
  );
};

export default AnswerArticle;

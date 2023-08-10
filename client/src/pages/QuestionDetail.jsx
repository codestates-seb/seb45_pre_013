import QuestionArticle from "@/components/QuestionArticle";
import AnswerArticle from "@/components/AnswerArticle";
import AnswerForm from "../components/AnswerForm";

const QuestionDetail = () => {
  return (
    <div>
      <QuestionArticle />
      {[{ article: "hi" }].map((item, index) => {
        return <AnswerArticle key={index} answer={item} />;
      })}
      <AnswerForm />
    </div>
  );
};

export default QuestionDetail;

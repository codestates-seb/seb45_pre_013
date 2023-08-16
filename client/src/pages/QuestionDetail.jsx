import QuestionDetailLayout from "@/components/QuestionDetail/QuestionDetailLayout";
import { useParams } from "react-router";

const QuestionDetail = () => {
  const { questionId } = useParams();
  return (
    <>
      <QuestionDetailLayout questionId={questionId} />
    </>
  );
};

export default QuestionDetail;

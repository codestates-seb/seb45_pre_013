import ArticleTitle from "@/components/ArticleTitle";
import QuestionItem from "./QuestionItem";
import { ListDiv } from "@/styles/QuestionList/LayoutStyle";
import RightSidebar from "@/components/RightSidebar";
import { FlexColumn } from "@/styles/DivStyle";
import Pagination from "./Pagination";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionFetch } from "@/store/slice/questionSlice";
import { useEffect } from "react";

const QuestionListLayout = () => {
  const dispatch = useDispatch();
  const questionFetch = useSelector((state) => state.Squestion);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const postPage = { page, limit };
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    dispatch(getQuestionFetch(postPage));
  }, [dispatch]);

  useEffect(() => {
    if (questionFetch.status === "fulfilled") {
      setQuestions(questionFetch.data.data);
    }
  }, [questionFetch]);

  return (
    <>
      <ListDiv>
        <div>
          <FlexColumn>
            <ArticleTitle title="Top Questions" />
            {questions
              ?.slice(offset, offset + limit)
              .reverse()
              .map((item, index) => (
                <QuestionItem key={index} item={item} />
              ))}
            <h2 className="more">
              Looking for more? Browse the{" "}
              <span className="link">complete list of questions</span>, or{" "}
              <span className="link">popular tags</span>. Help us answer{" "}
              <span className="link">unanswered questions</span>.
            </h2>
          </FlexColumn>
        </div>
        <RightSidebar />
      </ListDiv>
      <Pagination
        total={questions?.length}
        limit={limit}
        page={page}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
};

export default QuestionListLayout;

import ArticleTitle from "@/components/ArticleTitle";
import QuestionItem from "./QuestionItem";
import { ListDiv } from "@/styles/QuestionList/LayoutStyle";
import RightSidebar from "@/components/RightSidebar";
import { FlexColumn } from "@/styles/DivStyle";
import Pagination from "./Pagination";
import { useState } from "react";

const QuestionListLayout = () => {
  const questions = [
    {
      id: 0,
      title:
        "C# MVC - Getting 404 for Controller/Method C# MVC - Getting 404 for Controller/Method C# MVC - Getting 404 for Controller/Method ",
      userName: "howuroll",
      created: "asked 10 secs ago",
      modified: "asked 10 secs ago",
      vote: 10,
      answer: [{ article: "hi" }, { article: "good" }],
      view: 13,
    },
    {
      id: 1,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 51220,
      title:
        "C# MVC - Getting 404 for Controller/Method C# MVC - Getting 404 for Controller/Method C# MVC - Getting 404 for Controller/Method ",
      userName: "howuroll",
      created: "asked 10 secs ago",
      modified: "asked 10 secs ago",
      vote: 10,
      answer: [{ article: "hi" }, { article: "good" }],
      view: 13,
    },
    {
      id: 1123124,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 1231250,
      title:
        "C# MVC - Getting 404 for Controller/Method C# MVC - Getting 404 for Controller/Method C# MVC - Getting 404 for Controller/Method ",
      userName: "howuroll",
      created: "asked 10 secs ago",
      modified: "asked 10 secs ago",
      vote: 10,
      answer: [{ article: "hi" }, { article: "good" }],
      view: 13,
    },
    {
      id: 2352351,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 12420,
      title:
        "C# MVC - Getting 404 for Controller/Method C# MVC - Getting 404 for Controller/Method C# MVC - Getting 404 for Controller/Method ",
      userName: "howuroll",
      created: "asked 10 secs ago",
      modified: "asked 10 secs ago",
      vote: 10,
      answer: [{ article: "hi" }, { article: "good" }],
      view: 13,
    },
    {
      id: 14125,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 123123,
      title:
        "C# MVC - Getting 404 for Controller/Method C# MVC - Getting 404 for Controller/Method C# MVC - Getting 404 for Controller/Method ",
      userName: "howuroll",
      created: "asked 10 secs ago",
      modified: "asked 10 secs ago",
      vote: 10,
      answer: [{ article: "hi" }, { article: "good" }],
      view: 13,
    },
    {
      id: 5123,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 5112323,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 25123,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 54123,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 512323,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 512423,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 51235,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 52123,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 51253,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 51231,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 512334,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 51223,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 513223,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 5123123,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 5123123,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 5123423,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
    {
      id: 5123231,
      title: "Rmd knit is not generating pdf file",
      userName: "Phil",
      created: "asked 10 min ago",
      modified: "modified 25 secs ago",
      vote: 10,
      answer: [{ article: "hihi" }],
      view: 13,
    },
  ]; //임시

  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <>
      <ListDiv>
        <div>
          <FlexColumn>
            <ArticleTitle title="Top Questions" />

            {questions
              .slice(offset, offset + limit)
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
        total={questions.length}
        limit={limit}
        page={page}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
};

export default QuestionListLayout;

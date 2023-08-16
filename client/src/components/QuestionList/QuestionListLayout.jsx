import ArticleTitle from "@/components/ArticleTitle";
import QuestionItem from "./QuestionItem";
import { ListDiv } from "@/styles/QuestionList/LayoutStyle";
import RightSidebar from "@/components/RightSidebar";
import { FlexColumn } from "@/styles/DivStyle";

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
  ]; //임시

  return (
    <ListDiv>
      <div>
        <FlexColumn>
          <ArticleTitle title="Top Questions" />

          {questions
            .slice(0)
            .reverse()
            .map((item, index) => (
              <QuestionItem key={index} item={item} />
            ))}
          <h2 className="more">
            Looking for more? Browse the{" "}
            <span className="link">complete list of questions</span>, or
            <span className="link">popular tags</span>. Help us answer
            <span className="link">unanswered questions</span>.
          </h2>
        </FlexColumn>
      </div>
      <RightSidebar />
    </ListDiv>
  );
};

export default QuestionListLayout;

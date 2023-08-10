import ArticleTitle from "@/components/ArticleTitle";
import RightSidebar from "@/components/RightSidebar";

const QuestionArticle = () => {
  const question = { title: "How...", created: "today", modified: "today" }; //임시

  return (
    <>
      <ArticleTitle title={question.title} />
      <div>
        <div>
          <div>Asked</div>
          <div>{question.created}</div>
        </div>
        <div>
          <div>Modified</div>
          <div>{question.modified}</div>
        </div>
      </div>

      <div>
        <div>
          <button>▲</button>
          <div>0</div>
          <button>▼</button>
        </div>
        <div>How to how ?</div>
        <RightSidebar />
      </div>
    </>
  );
};

export default QuestionArticle;

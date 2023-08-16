import { TitleDiv } from "@/styles/TitleStyle";

const ArticleTitle = ({ title }) => {
  return (
    <TitleDiv>
      <h1>{title}</h1>
      <button>Ask Question</button>
    </TitleDiv>
  );
};

export default ArticleTitle;

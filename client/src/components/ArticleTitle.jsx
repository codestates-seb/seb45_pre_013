import { TitleDiv } from "@/styles/TitleStyle";
import { Link } from "react-router-dom";

const ArticleTitle = ({ title }) => {
  return (
    <TitleDiv>
      <h1>{title}</h1>
      <Link to={"/Questions/Ask"}>
        <button>Ask Question</button>
      </Link>
    </TitleDiv>
  );
};

export default ArticleTitle;

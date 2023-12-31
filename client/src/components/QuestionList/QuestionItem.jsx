import { Link } from "react-router-dom";
import { ItemDiv } from "@/styles/QuestionList/LayoutStyle";
import {
  TITLE,
  TEXT,
  USER_NAME,
  CREATED,
  MODIFIED,
  VOTE,
  ANSWER,
  VIEW,
  QUESTIONID,
} from "@/config/config";
import { RANDOM_AVATAR } from "@/config/config";

const QuestionItem = ({ item }) => {
  return (
    <ItemDiv>
      <div>
        <p>{item[VOTE]} vites</p>
        <p>{item[ANSWER].length} answers</p>
        <p>{item[VIEW]} views</p>
      </div>
      <div>
        <h3>
          <Link to={"/Questions/" + item[QUESTIONID]}>{item[TITLE]}</Link>
        </h3>
        <h2>{item[TEXT]}</h2>
        <div>
          <img
            alt={`${item[USER_NAME]}'s avatar`}
            src={`${RANDOM_AVATAR}/1.jpg`}
          />
          <p>{item[USER_NAME]}</p>
          <p>{item[MODIFIED] ? item[MODIFIED] : item[CREATED]}</p>
        </div>
      </div>
    </ItemDiv>
  );
};

export default QuestionItem;

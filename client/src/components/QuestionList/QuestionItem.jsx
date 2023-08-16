import { Link } from "react-router-dom";
import { ItemDiv } from "@/styles/QuestionList/LayoutStyle";
import {
  ID,
  TITLE,
  USER_NAME,
  CREATED,
  MODIFIED,
  VOTE,
  ANSWER,
  VIEW,
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
          <Link to={"/Questions/" + item[ID]}>{item[TITLE]}</Link>
        </h3>
        <div>
          <img
            alt={`${item[USER_NAME]}'s avatar`}
            src={`${RANDOM_AVATAR}/${item[ID]}.jpg`}
          />
          <p>{item[USER_NAME]}</p>
          <p>{item[MODIFIED] ? item[MODIFIED] : item[CREATED]}</p>
        </div>
      </div>
    </ItemDiv>
  );
};

export default QuestionItem;

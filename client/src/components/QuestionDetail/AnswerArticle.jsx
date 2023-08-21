import Vote from "./Vote";
import {
  Article,
  AnswerContent,
  AnswerInfoContainer,
  AnswerInfo,
  EditDelete,
  AnswerProfile,
  InfoImageContainer,
  UtilContainer,
} from "@/styles/QuestionDetail/AnswerStyle";
import { Writer } from "@/styles/QuestionDetail/QuestionStyle";
import { RANDOM_AVATAR, USER_NAME, USER_REPUTATION, ID } from "@/config/config";
import { useDispatch } from "react-redux";
import { deleteAnswer, updateAnswer } from "@/store/store";
import { useState } from "react";

const AnswerArticle = ({ answer, onDelete, onEdit }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(answer.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(updateAnswer({ id: answer.id, content: editedContent }));
    setIsEditing(false);
  };

  return (
    <Article>
      <Vote vote={answer.vote} />
      <AnswerContent>
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          answer.content
        )}
        <br />
      </AnswerContent>
      <AnswerInfoContainer>
        <div>
          <AnswerInfo>answered at {answer.createdAt} </AnswerInfo>
          <UtilContainer>
            {isEditing ? (
              <>
                <EditDelete onClick={handleSaveEdit}>Save</EditDelete>
                <EditDelete onClick={() => setIsEditing(false)}>
                  Cancel
                </EditDelete>
              </>
            ) : (
              <>
                <EditDelete onClick={handleEdit}>Edit</EditDelete>
                <EditDelete onClick={onDelete}>delete</EditDelete>
              </>
            )}
          </UtilContainer>
          <div>
            <InfoImageContainer>
              <AnswerProfile
                //TEMP
                alt={answer.userName + "'s avatar"}
                src={`${RANDOM_AVATAR}/${answer.userId}.jpg`}
              />
              <p>{answer.userName}</p>
            </InfoImageContainer>
          </div>
        </div>
      </AnswerInfoContainer>
    </Article>
  );
};

export default AnswerArticle;

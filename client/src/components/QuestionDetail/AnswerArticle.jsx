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
// import { Writer } from "@/styles/QuestionDetail/QuestionStyle";
// import { RANDOM_AVATAR, USER_NAME, USER_REPUTATION, ID } from "@/config/config";
import { useDispatch } from "react-redux";
import { updateAnswer } from "@/store/slice/slice.js";
import { useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

const AnswerArticle = ({ answer, onDelete, onEdit }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(answer.text);
  const timeoptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    const updatedAnswer = {
      ...answer,
      text: editedContent,
      modifiedAt: new Date().toLocaleString("ko-KR", timeoptions),
    };

    try {
      const response = await fetch(`${apiUrl}/answers/)`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAnswer),
      });

      if (!response.ok) {
        throw new Error("error update answer");
      }
      const updatedResponse = await fetch(`${apiUrl}/${answer.answerId}`);
      const updatedData = await updatedResponse.json();
      dispatch(updateAnswer(updatedData));

      setIsEditing(false);
    } catch (error) {
      console.error("error update answer:", error);
    }
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
          answer.text
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
              // alt={answer.nickname + "'s avatar"}
              // src={`${RANDOM_AVATAR}/${answer.memberd}.jpg`}
              />
              <p>{answer.nickname}</p>
            </InfoImageContainer>
          </div>
        </div>
      </AnswerInfoContainer>
    </Article>
  );
};

export default AnswerArticle;

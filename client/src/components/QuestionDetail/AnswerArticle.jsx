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
import { updateAnswer, deleteAnswer } from "@/store/slice/slice.js";
import { useState } from "react";
import { RANDOM_AVATAR } from "@/config/config";
const apiUrl = import.meta.env.VITE_API_URL;
const jwtToken = localStorage.getItem("Authorization");

const AnswerArticle = ({ answer, onDelete, questionId }) => {
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
      text: editedContent,
    };

    try {
      const response = await fetch(`${apiUrl}/answers/${questionId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(updatedAnswer),
      });

      if (!response.ok) {
        throw new alert("error update answer");
      }
      const updatedResponse = await fetch(`${apiUrl}/answers/1`);
      const updatedData = await updatedResponse.json();
      dispatch(updateAnswer(updatedData));
      setIsEditing(false);
    } catch (error) {
      console.error("error update answer:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${apiUrl}/answers/1`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete answer");
      }

      dispatch(deleteAnswer(answer.answerId));
      onDelete();
    } catch (error) {
      console.error("error delete answer:", error);
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
                <EditDelete onClick={handleDelete}>delete</EditDelete>
              </>
            )}
          </UtilContainer>
          <div>
            <InfoImageContainer>
              <AnswerProfile
                //TEMP
                alt={answer.nickname + "'s avatar"}
                src={`${RANDOM_AVATAR}/${answer.memberd}.jpg`}
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

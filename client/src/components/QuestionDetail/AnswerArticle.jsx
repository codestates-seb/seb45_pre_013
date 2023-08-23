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

import { useDispatch } from "react-redux";
import { editAnswer, deleteAnswer } from "../../store/slice/slice";
import { useState } from "react";
import { RANDOM_AVATAR } from "@/config/config";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const jwtToken = localStorage.getItem("Authorization");

const AnswerArticle = ({ answer }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(answer.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const answerId = answer.answerId;
  const handleSaveEdit = async () => {
    const updatedAnswer = {
      text: editedContent,
    };

    try {
      const response = await fetch(`${apiUrl}/answers/${answerId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${jwtToken}`,
        },
        body: JSON.stringify(updatedAnswer),
      });

      if (!response.ok) {
        throw new alert("error update answer");
      }
      const updatedData = await response.json();
      dispatch(editAnswer({ answerId, updatedAnswer: updatedData }));
      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating answer:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteAnswer(answerId)).unwrap();
      window.location.reload();
    } catch (error) {
      console.error("Error deleting answer:", error);
    }
  };
  return (
    <Article>
      <Vote vote={answer.answervote} />
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

// const timeoptions = {
//   year: "numeric",
//   month: "short",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
// };

// const handleDelete = async () => {
//   try {
//     const response = await fetch(`${apiUrl}/answers/1`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${jwtToken}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to delete answer");
//     }

//     dispatch(deleteAnswer(answer.answerId));
//     onDelete();
//   } catch (error) {
//     console.error("error delete answer:", error);
//   }
// };

import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { FormHeadline, Form } from "@/styles/QuestionDetail/AnswerStyle";

// import { addAnswer } from "../../store/slice/slice";

const apiUrl = import.meta.env.VITE_API_URL;
const jwtToken = localStorage.getItem("Authorization");
const AnswerForm = ({ handleAddAnswer, questionId }) => {
  const [content, setContent] = useState("");
  // const dispatch = useDispatch();

  const handleCreate = async (e) => {
    e.preventDefault();

    // const timeoptions = {
    //   year: "numeric",
    //   month: "short",
    //   day: "numeric",
    //   hour: "2-digit",
    //   minute: "2-digit",
    //   second: "2-digit",
    // };

    const newAnswer = {
      // answerId: 0,
      // memberId: 0,
      // nickname: "",
      questionId: 1,
      text: content, //FIX
      // answerVote: 0,
    };

    try {
      handleAddAnswer(newAnswer);
      // dispatch(addAnswer(newAnswer));
      setContent("");

      const response = await fetch(`${apiUrl}/answers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(newAnswer),
      });

      const data = await response.json();
      console.log(jwtToken, data);
      return data;

      // if (!response.ok) {
      //   alert(response.statusText);
      // }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <FormHeadline>Your Answer</FormHeadline>
      <Form>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={handleCreate}>Post Your Answer</button>
      </Form>
    </>
  );
};

export default AnswerForm;

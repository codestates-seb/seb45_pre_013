import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { FormHeadline, Form } from "@/styles/QuestionDetail/AnswerStyle";

// import { addAnswer } from "../../store/slice/slice";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const jwtToken = localStorage.getItem("Authorization");
const AnswerForm = () => {
  const [content, setContent] = useState("");

  const handleCreate = async (e) => {
    if (content.trim() === "") {
      alert("Please enter your answer.");
    }
    e.preventDefault();
    const newAnswer = {
      questionId: 1,
      text: content, //FIX
    };

    try {
      newAnswer;
      setContent("");

      const response = await fetch(`${apiUrl}/answers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${jwtToken}`,
        },
        body: JSON.stringify(newAnswer),
      });
      if (!response.ok) {
        alert(response.statusText);
      }
    } catch (error) {
      alert(error);
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

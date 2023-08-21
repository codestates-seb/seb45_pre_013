import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormHeadline, Form } from "@/styles/QuestionDetail/AnswerStyle";

const apiUrl = import.meta.env.VITE_API_URL;
const AnswerForm = ({ handleAddAnswer }) => {
  const [content, setContent] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    const timeoptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    const newAnswer = {
      answerId: 0,
      memberId: 0,
      nickname: "",
      questionId: 0,
      text: content,
      answerVote: 0,
      createdAt: new Date().toLocaleString("ko-KR", timeoptions),
      modifiedAt: new Date().toISOString("ko-KR", timeoptions),
    };

    handleAddAnswer(newAnswer);
    console.log(newAnswer);
    setContent("");

    try {
      const response = await fetch(`${apiUrl}/answers/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAnswer),
      });

      if (!response.ok) {
        throw new Error("Failed to create answer");
      }
    } catch (error) {
      console.error("Error", error);
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

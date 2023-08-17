import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "@/store/store";
import { FormHeadline, Form } from "@/styles/QuestionDetail/AnswerStyle";

const AnswerForm = ({ handleAddAnswer }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    const newAnswer = {
      content,
    };
    handleAddAnswer(newAnswer);
    setContent("");
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

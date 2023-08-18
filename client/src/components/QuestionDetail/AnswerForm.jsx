import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormHeadline, Form } from "@/styles/QuestionDetail/AnswerStyle";

const AnswerForm = ({ handleAddAnswer }) => {
  // const dispatch = useDispatch();
  // const [editingAnswerId, setEditingAnswerId] = useState(null);
  const [content, setContent] = useState("");

  const handleCreate = (e) => {
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
      //TEMP
      content,
      userId: Math.floor(Math.random() * 50) + 1,
      id: Math.floor(Math.random() * 50) + 1,
      userName: "",
      createdAt: new Date().toLocaleString("ko-KR", timeoptions),
      modifiedAt: new Date().toISOString(),
      vote: 0,
      reputation: 0,
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

          // onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={handleCreate}>Post Your Answer</button>
      </Form>
    </>
  );
};

export default AnswerForm;

import { useState } from "react";
import { FormHeadline, Form } from "@/styles/QuestionDetail/AnswerStyle";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const jwtToken = localStorage.getItem("Authorization");
const AnswerForm = ({ questionId }) => {
  const [content, setContent] = useState("");

  const handleCreate = async (e) => {
    if (content.trim() === "") {
      alert("Please enter your answer.");
    }
    e.preventDefault();

    const newAnswer = {
      questionId: questionId,
      text: content,
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
      window.location.reload();
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

import { FormHeadline, Form } from "@/styles/AnswerStyle";

const AnswerForm = () => {
  return (
    <>
      <FormHeadline>Your Answer</FormHeadline>
      <Form>
        <textarea></textarea>
        <button>Post Your Answer</button>
      </Form>
    </>
  );
};

export default AnswerForm;

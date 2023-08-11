import { styled } from "styled-components";
const H2 = styled.h2`
  font-size: var(--fs-headline2);
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  textarea {
    width: 100%;
    height: 198px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--black-200);
  }
  button {
    margin-top: 10px;
    margin-bottom: 15px;
    width: 128px;
    height: 38px;
    border-radius: 6px;
    background-color: var(--blue-500);
    color: var(--white);
  }
`;

const AnswerForm = () => {
  return (
    <>
      <H2>Your Answer</H2>
      <Form>
        <textarea></textarea>
        <button>Post Your Answer</button>
      </Form>
    </>
  );
};

export default AnswerForm;

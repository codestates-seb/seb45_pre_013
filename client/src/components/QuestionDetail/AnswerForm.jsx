import { styled } from "styled-components";
const H2 = styled.h2`
  font-size: var(--fs-headline2);
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  textarea {
    width: 727px;
    height: 198px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--black-200);
  }
`;

const AnswerForm = () => {
  return (
    <>
      <H2>Your Answer</H2>
      <Form>
        <textarea></textarea>
      </Form>
    </>
  );
};

export default AnswerForm;

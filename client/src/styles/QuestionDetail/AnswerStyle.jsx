import { styled } from "styled-components";

export const Article = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--black-100);
`;

export const FormHeadline = styled.h2`
  font-size: var(--fs-headline2);
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
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
    cursor: pointer;

    &:hover {
      background-color: var(--blue-600);
    }
  }
`;

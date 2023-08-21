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

export const AnswerInfoContainer = styled.div`
  width: 250px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: right;
  /* text-align: top; */

  & > div {
    width: 100%;
  }
`;

export const AnswerContent = styled.div`
  width: 100%;
  height: auto;

  & > textarea {
    padding-right: 20px;
    width: 95%;
    height: 100%;
    border: 1px solid var(--black-200);
    border-radius: 5px;
  }
`;

export const AnswerInfo = styled.p`
  font-size: 10px;
  color: var(--black-200);
  margin-right: 5px;
`;

export const EditDelete = styled.p`
  font-size: 10px;
  color: var(--black-200);
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    color: var(--black-500);
    text-decoration: underline;
  }
`;

export const AnswerProfile = styled.img`
  width: 32px;
  height: 32px;
`;

export const InfoImageContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
`;

export const UtilContainer = styled.div`
  display: flex;

  flex-direction: row;
`;

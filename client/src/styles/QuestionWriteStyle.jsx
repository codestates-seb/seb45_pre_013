import { styled } from "styled-components";

export const Background = styled.div`
  background-color: var(--black-025);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: flex-end;
  width: 1216px;
  height: max-content;
  margin-bottom: 48px;
  padding: 0 24px 24px 24px;
`;

export const Null = styled.div`
  width: 1px;
  height: 1px;
`;

export const HeadlineDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  h1 {
    width: 100%;
    font-size: var(--fs-headline1);
    font-weight: 800;
    margin-top: 24px;
    margin-bottom: 27px;
  }

  img {
    height: 130px;
  }

  @media (max-width: 1050px) {
    img {
      display: none;
    }
  }
`;

export const Notice = styled.div`
  width: 850px;
  height: min-content;
  margin-top: 16px;
  margin-bottom: 4px;
  padding: 24px;
  border: 1px solid var(--powder-300);
  border-radius: 4px;
  background-color: var(--blue-050);
  color: var(--black-700);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: var(--fs-headline);
    font-weight: 600;
    margin-bottom: 8px;
  }

  div {
    margin-bottom: 16px;
  }

  h5 {
    font-size: var(--fs-normal);
    font-weight: 800;
    margin-bottom: 8px;
  }

  ul {
    margin-left: 30px;
    font-size: var(--fs-normal);
    display: flex;
    flex-direction: column;
  }

  span.link {
    color: var(--blue-600);

    &:hover {
      color: var(--blue-500);
    }
  }

  @media (max-width: 1265px) {
    width: calc(100% - 318px);
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Write = styled.div`
  width: 850px;
  height: min-content;
  padding: 24px;
  border: 1px solid var(--black-100);
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  @media (max-width: 1265px) {
    width: calc(100% - 318px);
  }

  label {
    font-weight: 800;
    color: var(--black-900);
  }

  p {
    font-size: var(--fs-normal);
    color: var(--black-700);
    margin-top: 2px;
    margin-bottom: 6px;
  }

  input {
    width: 100%;
    padding: 7.8px 9.1px 7.8px 9.1px;
    border: 1px solid var(--black-200);
    border-radius: 4px;
    font-size: var(--fs-base);
    color: var(--black-900);
    &::placeholder {
      color: var(--black-200);
    }
  }

  textarea {
    width: 100%;
    height: 256px;
    padding: 7.8px 9.1px 7.8px 9.1px;
    border: 1px solid var(--black-200);
    border-radius: 4px;
    font-size: var(--fs-base);
    color: var(--black-900);
    resize: vertical;
  }

  @media (max-width: 1265px) {
    width: calc(100% - 318px);
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const WriteGuide = styled.div`
  width: 302px;
  height: min-content;
  background-color: var(--white);
  border: 1px solid var(--black-200);
  border-radius: 4px;
  margin-left: 16px;
  margin-top: 12px;

  h4 {
    width: 100%;
    height: 45px;
    padding: 12px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 1px solid var(--black-200);
    background-color: var(--black-025);
    color: var(--black-800);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: var(--fs-base);
    font-weight: 500;
  }

  & > div:nth-child(2) {
    display: flex;
    padding: 16px;

    img {
      width: 60px;
      height: 58px;
      margin-right: 8px;
    }

    span.link {
      color: var(--blue-600);

      &:hover {
        color: var(--blue-500);
      }
    }

    & > div {
      display: flex;
      flex-direction: column;
      font-size: var(--fs-small);
      margin-top: 2px;
      margin-bottom: 6px;

      p:not(:last-of-type) {
        margin-bottom: 12px;
      }
    }
  }

  @media (max-width: 1100px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const PostButton = styled.button`
  margin-top: 10px;
  margin-bottom: 15px;
  width: 135px;
  height: 38px;
  border-radius: 6px;
  background-color: var(--blue-500);
  color: var(--white);

  &:hover {
    background-color: var(--blue-600);
  }
`;

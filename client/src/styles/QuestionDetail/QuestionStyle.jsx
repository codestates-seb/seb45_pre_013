import { styled } from "styled-components";

export const Div = styled.div`
  width: 1051px;

  @media (max-width: 1265px) {
    width: calc(100vw - 214px);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ArticleMoreData = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--black-100);
  margin-bottom: 16px;

  & > div {
    display: flex;
    margin-bottom: 8px;
    margin-right: 16px;

    & > div:first-child {
      margin-right: 5px;
      color: var(--black-500);
    }
  }
`;

export const Writer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  & > div {
    width: 200px;
    height: 48px;
    padding: 6px;
    background-color: var(--powder-100);
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;

    & > img {
      width: 32px;
      height: 32px;
      border-radius: 4px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      margin-left: 8px;

      & > p:first-child {
        color: var(--blue-600);
      }

      & > p:nth-child(2) {
        color: var(--black-500);
      }
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FlexMain = styled.div`
  display: flex;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const AnswerStart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  h2 {
    font-size: var(--fs-headline2);
  }

  & > div {
    display: flex;
    align-items: center;

    p {
      margin-right: 5px;
    }

    div {
      display: flex;
      align-items: center;
      width: 256px;
      height: 32px;
      padding: 7.5px 32px 7.5px 9px;
      border-radius: 4px;
      border: 1px solid var(--black-200);
    }
  }
`;

export const More = styled.p`
  font-size: var(--fs-headline2);
`;

export const DelModBtn = styled.button`
  cursor: pointer;
  margin-right: 10px;
  width: 100px;
  height: 35px;
  border-radius: 5px;
  color: var(--white);
  background-color: var(--blue-500);

  &:hover {
    background-color: var(--blue-600);
  }
`;

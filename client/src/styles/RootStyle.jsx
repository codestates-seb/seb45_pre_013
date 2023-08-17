import { styled } from "styled-components";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  margin-top: 60px;
  display: flex;

  & > div {
    display: flex;
    width: 100%;
    height: max-content;
    flex-direction: column;
    align-items: center;

    & > div:first-child {
      padding: 20px;
      min-height: calc(100vh - 382px);
    }
  }
`;

export const Background = styled.div`
  background-color: var(--black-025);
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    width: 100%;
    height: max-content;
    flex-direction: column;
    align-items: center;

    & > div:first-child {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      justify-content: flex-end;
      width: 100%;
      max-width: 1216px;
      height: max-content;
      min-height: calc(100vh - 382px);
      margin-top: 60px;
      margin-bottom: 48px;
      padding: 0 24px 24px 24px;
    }
  }
`;

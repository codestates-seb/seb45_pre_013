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
    }
  }
`;

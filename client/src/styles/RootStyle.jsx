import { styled } from "styled-components";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:first-child {
    padding: 20px;
  }
`;

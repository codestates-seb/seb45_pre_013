import { styled } from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
  width: 100%;
  height: 100vh;
  background-color: var(--black-050);

  p {
    margin: 2px;
    padding: 2px;
    color: var(--black);
    font-size: 12px;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  margin: 0 auto 20px;
`;

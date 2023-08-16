import styled from "styled-components";

export const Contents = styled.main`
  display: flex;
  justify-content: center;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px 50px;
  }

  h1 {
  }

  .frontEnd {
    width: 300px;
    height: 300px;
    background-color: var(--black);
    border-radius: 30px;
  }

  .backEnd {
    width: 300px;
    height: 300px;
    background-color: var(--black);
    border-radius: 30px;
  }
`;

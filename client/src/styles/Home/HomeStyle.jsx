import styled from "styled-components";

export const Contents = styled.main`
  margin: 28px;
  width: calc(100vw - 96px);
  border-radius: 8px;
  padding: 32px 32px 128px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--black-700);

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
    }
  }

  article {
    margin: 16px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;

    &:first-child > div {
      background-color: var(--orange-100);

      button {
        background-color: var(--orange-500);
      }
    }

    &:last-child > div {
      background-color: var(--blue-100);

      button {
        background-color: var(--blue-500);
      }
    }

    & > div {
      width: 100%;
      height: 300px;
      border-radius: 8px;
      padding: 24px;
      font-size: var(--fs-headline2);
      text-align: center;
      color: var(--black-800);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      h1 {
        margin: 0 39px;
      }

      button {
        width: 210px;
        height: 43px;
        border-radius: 8px;
        margin-bottom: 24px;
        color: var(--white);
        font-size: var(--fs-base);
        cursor: pointer;
      }
    }
  }

  & > h1 {
    padding: 64px 100px;
    font-size: var(--fs-big);
    color: var(--white);
    font-weight: 800;
    text-align: center;

    span.highlight {
      color: var(--orange);
    }
  }
`;

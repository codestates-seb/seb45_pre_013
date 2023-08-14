import { styled } from "styled-components";

export const Background = styled.div`
  background-color: var(--black-025);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1216px;

  @media (max-width: 1265px) {
    width: calc(100vw - 214px);
  }
`;

export const HeadlineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 130px;

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
`;

export const Notice = styled.div`
  width: 850px;
  height: 250px;
  margin-top: 16px;
  margin-bottom: 16px;
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

  span.link {
    color: var(--blue-600);

    &:hover {
      color: var(--blue-500);
    }
  }

  h5 {
    font-size: var(--fs-normal);
    font-weight: 800;
    margin-bottom: 8px;
  }

  ul {
    margin-left: 30px;
    font-size: var(--fs-normal);
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const TitleWrite = styled.div`
  width: 850px;
  height: 124px;
  padding: 24px;
  border: 1px solid var(--black-100);
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    font-weight: 800;
    color: var(--black-900);
  }

  p {
    font-size: var(--fs-normal);
    color: var(--black-700);
  }

  input {
    width: 100%;
    height: 32.5px;
    padding: 7.8px 9.1px 7.8px 9.1px;
    border: 1px solid var(--black-200);
    border-radius: 4px;
    font-size: var(--fs-base);
    color: var(--black-900);
    &::placeholder {
      color: var(--black-200);
    }
  }
`;

export const WriteGuide = styled.div`
  width: 350px;
  height: 150px;
  background-color: var(--white);
  border: 1px solid var(--black-200);
  border-radius: 4px;
  margin-left: 16px;

  & > div:first-child {
    width: 100%;
    height: 45px;
    padding: 12px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: var(--black-025);
    font-size: var(--fs-normal);
    font-weight: 500;
    color: var(--black-800);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & > div:nth-child(2) {
    display: flex;
    padding: 16px;

    img {
      width: 60px;
      height: 58px;
      margin-left: 8px;
      margin-right: 8px;
    }

    div {
      display: flex;
      flex-direction: column;
      font-size: var(--fs-small);

      p {
        margin-bottom: 12px;
      }
    }
  }
`;

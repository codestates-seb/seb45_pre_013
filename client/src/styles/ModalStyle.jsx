import styled from "styled-components";

export const IsModalBtn = styled.button`
  cursor: pointer;
  margin: 10px 10px;
  padding: 5px;
  height: 38px;
  border-radius: 5px;
  border: 3px solid transparent;
  color: var(--red);
  box-sizing: border-box;

  &:hover {
    background-color: #b40000;
    color: var(--white);
  }
  &:active {
    border: 3px solid #a0a0a064;
  }
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1400006c;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 35%;
  left: 35%;
  padding: 20px;
  border-radius: 15px;
  width: 450px;
  height: 150px;
  background-color: var(--white);
  box-shadow: 0 0 10px var(--black-500);
  h1 {
    margin-bottom: 10px;
    font-size: var(--fs-headline1);
    color: var(--red);
  }

  h3 {
    margin-bottom: 10px;
    font-size: var(--fs-small);
  }

  button {
    cursor: pointer;
  }

  .close {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    font-size: var(--fs-headline2);
  }
  .discard {
    margin-right: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 3px solid transparent;
    background-color: var(--red);
    color: var(--white);
    box-sizing: border-box;

    &:hover {
      background-color: #b40000;
    }
    &:active {
      border: 3px solid #a0a0a064;
    }
  }
  .cancel {
    margin-right: 10px;
  }

  .close,
  .cancel {
    padding: 5px;
    border-radius: 5px;
    border: 3px solid transparent;

    &:hover {
      background-color: #a0a0a01c;
    }
    &:active {
      background-color: #a0a0a042;
      border: 3px solid #a0a0a064;
    }
  }
`;

import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  position: fixed;
  left: 0;
  background-color: #1400006c;
  width: 100%;
  height: 100%;

  &.hidden {
    display: none;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 15px;
  width: 35%;
  height: 20%;
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

    &:hover {
      background-color: #b40000;
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

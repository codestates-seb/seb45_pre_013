import { styled } from "styled-components";

export const MyPageTapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1051px;
  height: 33px;
  justify-content: top;
  /* border: 1px solid blue; */
`;

export const NormalBtn = styled.button`
  text-align: center;
  width: 60px;
  height: 29px;
  border-radius: 13px;
  color: var(--black);
  cursor: pointer;

  &:hover {
    background-color: var(--black-200);
    /* color: var(); */
  }

  /* border: px solid red; */
`;

export const ActiveBtn = styled.button`
  text-align: center;
  width: 60px;
  height: 29px;
  border-radius: 13px;
  color: var(--white);
  cursor: pointer;

  background-color: var(--orange);
  margin-right: 10px;

  &:hover {
    background-color: var(--orange-700);
    color: var();
  }

  /* border: px solid red; */
`;

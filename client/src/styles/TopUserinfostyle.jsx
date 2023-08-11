import styled from "styled-components";

export const UserImg = styled.img`
  cursor: pointer;
  width: 40px;
  &:hover {
    background-color: var(--black-100);
  }
`;

export const IconDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px 5px 4px;
  width: 40px;
  height: 53px;
  &:hover {
    background-color: var(--black-100);
  }
`;

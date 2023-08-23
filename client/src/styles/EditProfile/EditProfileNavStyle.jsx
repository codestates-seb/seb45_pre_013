import { styled } from "styled-components";

export const ProfileNav = styled.nav`
  width: 100%;
  max-width: 175px;
  height: 1356px;
  margin-right: 32px;
`;

export const NavNormalBtn = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  height: 29px;
  border-radius: 15px;
  color: var(--black-700);
  cursor: pointer;
  &:hover {
    background-color: var(--black-100);
  }
`;

export const NavActiveBtn = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  height: 29px;
  background-color: var(--orange);
  border-radius: 15px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--orange-600);
  }
`;

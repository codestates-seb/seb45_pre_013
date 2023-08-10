import styled from "styled-components";

export const MenuOl = styled.ul`
  display: flex;
  list-style: none;
  padding: 2px;
`;

export const MenuLi = styled.li`
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 20px;
  &:hover {
    background-color: var(--black-100);
  }
`;

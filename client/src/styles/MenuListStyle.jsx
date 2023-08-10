import styled from "styled-components";

export const MenuOl = styled.ul`
  display: flex;
  flex: 1;
  list-style: none;
  padding: 2px;
  min-width: 252px;
`;

export const MenuLi = styled.li`
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 20px;
  &:hover {
    background-color: var(--black-100);
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--black-200);
  border-radius: 5px;
  width: auto;
  height: 32.59px;
`;

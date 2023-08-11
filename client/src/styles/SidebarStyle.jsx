import styled from "styled-components";

export const SidebarDiv = styled.div`
  z-index: 0;
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 0;
  width: 164px;
  height: 100%;
  border-right: 1px solid var(--black-100);
`;

export const SidebarContent = styled.div`
  position: fixed;
  padding-top: 70px;

  li {
    width: 164px;
    font-size: 13px;
    padding: 4px 4px 4px 30px;
    color: var(--black-300);
    &:hover {
      color: var(--black);
    }
    &:active {
      color: var(--black);
      border-right: 2px solid var(--orange);
      background-color: var(--black-100);
    }
  }
`;

import styled from "styled-components";

export const SidebarDiv = styled.div`
  position: absolute;
  top: 56px;
  padding-top: 24px;
  left: 0px;
  width: 240px;
  background-color: var(--white);
  box-shadow: 0px 0px 10px var(--black-100);

  .SidebarContent {
    height: 300px;
  }

  li {
    list-style-type: none;
    width: 240px;
    font-size: var(--fs-base);
    padding: 4px 4px 4px 30px;
    color: var(--black-300);
    &:hover {
      color: var(--black);
    }
  }

  .selectedPage {
    color: var(--black);
    font-weight: bold;
    border-right: 2px solid var(--orange);
    background-color: var(--black-100);
  }
`;

export const RightSidebarDiv = styled.div`
  width: 300px;
  height: 500px;
  margin-left: 24px;
  margin-bottom: 15px;
  background-color: var(--yellow);
  border-radius: 4px;
  border: 1px solid var(--orange-200);

  @media (max-width: 980px) {
    width: 100%;
    margin-left: 0;
  }
`;

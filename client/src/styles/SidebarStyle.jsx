import styled from "styled-components";

export const SidebarDiv = styled.div`
  padding: 24px 0 0 0;
  ${(props) => {
    return props.$small
      ? `
        position: absolute;
        top: 56px;
        left: 0px;
        width: 240px;
        background-color: var(--white);
        box-shadow: 0px 0px 10px var(--black-100);
      `
      : `
        width: 164px;
        background-color: transparent;
        border-right: 1px solid var(--black-100);
      `;
  }}

  .SidebarContent {
    height: 300px;
  }

  li {
    list-style-type: none;
    width: 100%;
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
  margin-left: 24px;
  margin-bottom: 15px;
  background-color: var(--yellow);
  border-radius: 4px;
  border: 1px solid var(--orange-200);
  display: flex;
  flex-direction: column;

  h5 {
    width: 100%;
    padding: 12px 15px;
    border-bottom: 1px solid var(--orange-200);
    font-size: var(--fs-small);
    font-weight: 800;
    color: var(--black-600);
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    background-color: rgba(255, 255, 255, 0.5);

    &:not(:last-child) {
      border-bottom: 1px solid var(--orange-200);
    }

    li {
      margin-bottom: 12px;
      width: 100%;
      color: var(--black-800);
      font-size: var(--fs-normal);
      list-style-type: none;
      display: flex;

      &:first-child {
        margin-top: 12px;
      }

      & > svg {
        margin-right: 4px;
      }

      & > p {
        width: calc(100% - 22px);

        span.italic {
          color: var(--black-500);
          font-style: italic;
        }
      }
    }
  }

  @media (max-width: 980px) {
    width: 100%;
    margin-left: 0;
  }
`;

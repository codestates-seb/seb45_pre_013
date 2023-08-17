import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin: 10px;

  .pageBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 5px;
  }

  .perPage {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    flex: 3;
    gap: 5px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const PageButton = styled.button`
  cursor: pointer;
  padding: 10px;
  background: var(--white);
  color: var(--black);
  font-size: var(--fs-base);
  border-radius: 8px;
  border: 1px solid var(--black-100);

  &:hover {
    background: var(--black-100);
    transform: translateY(-3px);
  }

  &[disabled] {
    display: none;
  }

  &[aria-current] {
    color: var(--white);
    background: var(--orange);
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export const PageEllipsis = styled.p`
  &[disabled] {
    display: none;
  }
`;

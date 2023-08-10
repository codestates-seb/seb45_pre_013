import styled from "styled-components";

export const Logo = styled.a`
  display: flex;
  flex: 0.5;
  justify-content: center;
  margin-bottom: 5px;
  padding: 0 8px 5px 8px;
  height: 100%;
  &:hover {
    background-color: var(--black-100);
  }
`;

export const LogoImg = styled.img`
  width: 150px;
`;

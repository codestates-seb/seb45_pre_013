import styled from "styled-components";

export const FooterBg = styled.div`
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 32px 12px 12px;
  width: 100%;
  height: 322px;
  background-color: var(--black-800);
`;

export const FooterContent = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  color: var(--black-100);
`;

export const LogoImage = styled.img`
  width: 32px;
  height: 37px;
`;

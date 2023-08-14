import styled from "styled-components";

export const FooterBg = styled.footer`
  z-index: 9999;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 32px 12px 12px;
  width: 100%;
  height: 322px;
  background-color: var(--black-800);

  .FooterContent {
    flex: 1;
    height: 100%;
    color: var(--black-100);
  }

  img {
    width: 32px;
    height: 37px;
  }

  .FootoerTitle {
    color: var(--black-200);
    font-size: 18px;
  }

  .FootoerText {
    color: var(--black-400);
    font-size: 13px;
  }
`;

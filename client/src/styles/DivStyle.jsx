import { styled } from "styled-components";

export const Flex = styled.div`
  display: flex;

  .delmodDiv {
    display: flex;
    justify-content: right;
    margin: 10px 0;
  }
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const ModifyModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1400006c;
  width: 100%;
  height: 100%;
`;

import styled from "styled-components";

export const TopBtn = styled.button`
  cursor: pointer;
  margin-left: 4px;
  padding: 8px 10.4px;
  border-radius: 5px;
  width: auto;
  min-width: 72px;
  height: 33px;
  color: ${(props) => `var(${props.color})` || "var(--black)"};
  background-color: ${(props) => `var(${props.bgColor})` || "var(--black)"};
  &:hover {
    background-color: ${(props) => `var(${props.hover})`};
  }
`;

export const TopBtnDiv = styled.div`
  min-width: 130px;
  display: flex;
  align-items: center;
  flex: 1;
  padding-right: 12px;
`;

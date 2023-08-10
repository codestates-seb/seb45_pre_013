import styled from "styled-components";

export const Btn = styled.button`
  margin: 0 0 0 4px;
  padding: 8px 10.4px;
  border-radius: 5px;
  color: ${(props) => `var(${props.color})` || "var(--black)"};
  background-color: ${(props) => `var(${props.bgColor})` || "var(--black)"};
`;

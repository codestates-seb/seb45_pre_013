import styled from "styled-components";

export const Menubtn = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  width: 50px;
`;
export const MenuLine = styled.div`
  display: ${(props) => props.dp};
  margin: 2px;
  width: 20px;
  height: 3px;
  background-color: var(--black-300);
  transform: rotate(${(props) => props.age}deg)
    translate(0, ${(props) => props.y / 10}px);
  transition: 0.5s;
`;

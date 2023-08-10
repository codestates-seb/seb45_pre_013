import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const Input = styled.input`
  padding: 7.8px 9.2px 7.8px 10px;
  font-size: 13px;
  width: 100%;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  margin: 5px;
  color: var(--black-400);
  font-size: 24px;
`;

export const SearchDiv = styled.div`
  display: flex;
  flex: 3;
  align-items: center;
  border: 1px solid var(--black-200);
  border-radius: 5px;
  width: auto;
  height: 32.59px;
`;

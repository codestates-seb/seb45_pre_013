import styled from "styled-components";
import { HiMiniInbox, HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { FcBiohazard } from "react-icons/fc";
import { MdSource } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

export const HiInboxIcon = styled(HiMiniInbox)`
  font-size: 20px;
`;

export const QuestionIcon = styled(HiMiniQuestionMarkCircle)`
  font-size: 20px;
`;

export const FcBiohazardOIcon = styled(FcBiohazard)`
  font-size: 20px;
`;

export const MdSourceIcon = styled(MdSource)`
  font-size: 20px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  margin: 5px;
  color: var(--black-500);
  font-size: 24px;

  @media (max-width: 700px) {
    cursor: pointer;
    font-size: 30px;
    &:hover {
      background-color: var(--black-100);
      border-radius: 5px;
    }
  }
`;

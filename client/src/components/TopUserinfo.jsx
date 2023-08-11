/* eslint-disable react/prop-types */
import { userProfileImg } from "@/config/config";
import {
  HiInboxIcon,
  QuestionIcon,
  FcBiohazardOIcon,
  MdSourceIcon,
} from "@/styles/Iconstyle";
import { UserImg, IconDiv } from "@/styles/TopUserinfostyle";

const TopUserinfo = ({ setInOutWhether }) => {
  const changeInOutWhether = () => {
    setInOutWhether(false);
  };

  return (
    <>
      <IconDiv>
        <UserImg src={userProfileImg} />
      </IconDiv>
      <IconDiv>
        <HiInboxIcon />
      </IconDiv>
      <IconDiv>
        <FcBiohazardOIcon />
      </IconDiv>
      <IconDiv>
        <QuestionIcon />
      </IconDiv>
      <IconDiv>
        <MdSourceIcon onClick={changeInOutWhether} />
      </IconDiv>
    </>
  );
};

export default TopUserinfo;

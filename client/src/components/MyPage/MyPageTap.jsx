import {
  MyPageTapContainer,
  ActiveBtn,
  NormalBtn,
} from "@/styles/MyPage/MyPageTapStyle";

const MyPageTap = () => {
  return (
    <>
      <MyPageTapContainer>
        <ActiveBtn>Profile</ActiveBtn>
        <NormalBtn>Settings</NormalBtn>
      </MyPageTapContainer>
    </>
  );
};

export default MyPageTap;

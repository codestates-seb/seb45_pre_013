import { styled } from "styled-components";

const MyPageTapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1051px;
  height: 33px;
  justify-content: top;
  /* border: 1px solid blue; */
`;

const ProfileBtn = styled.button`
  text-align: center;
  width: 60px;
  height: 29px;
  border-radius: 13px;
  color: var(--white);
  background-color: var(--orange);
  /* border: px solid red; */
`;

const MyPageTap = () => {
  return (
    <>
      <MyPageTapContainer>
        <ProfileBtn>Profile</ProfileBtn>
      </MyPageTapContainer>
    </>
  );
};

export default MyPageTap;

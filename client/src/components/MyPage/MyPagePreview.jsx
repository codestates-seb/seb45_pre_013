import { styled } from "styled-components";
import GlobalStyle from "@/styles/global";

const MyPageProfileContainer = styled.div`
  display: relative;
  width: 100%;
  max-width: 1037px;
  height: 144px;
`;

const MyPageProfilelayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1066px;
  height: 144px;
  margin-bottom: var(--su16) !important;
  /* border: 2px solid red; */
`;

const ProfileImageContainer = styled.div`
  margin: 5px;
  display: flex;
  width: 128px;
  height: 128px;
  /* border: 2px solid green; */
`;

const ProfileImage = styled.img`
  display: block;
`;

const StatusContainer = styled.div`
  justify-content: left;
  display: block;
  width: 480px;
  height: 123px;
`;

const EditProfileBtn = styled.div`
  margin-left: auto;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100px;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid var(--black-500);
`;

const DisplayName = styled.div`
  display: flex;
  width: 421px;
  height: 50px;
  font-size: var(--fs-headline1);
  /* border: 1px solid blue; */
`;

const ProfileTitle = styled.div`
  display: flex;
  width: 484px;
  height: 26px;
  margin-bottom: var(--su8) !important;
  font-size: var(--fs-headline);
  color: var(--black-400);
  /* border: 1px solid purple; */
`;

const ListsContainer = styled.div`
  width: 484px;
  height: 26px;
  color: var(--black-400);
  /* border: 1px solid purple; */
`;

const EditProfileText = styled.span``;

// const CalendarBtn = styled.button`
//   width: 196px;
//   height: 18px;
//   cursor: pointer
//
// `;

const MyPagePreview = () => {
  return (
    <>
      <GlobalStyle />
      <MyPageProfileContainer>
        <MyPageProfilelayout>
          <ProfileImageContainer>
            <ProfileImage src="" alt="PROFILE IMAGE" />
          </ProfileImageContainer>
          <StatusContainer>
            <DisplayName>DISPLAYNAME</DisplayName>
            <ProfileTitle>TITLE</ProfileTitle>
            <ListsContainer>
              MEMBER SINCE {""}, LAST SEEN, CONSECUTIVE{""}{" "}
            </ListsContainer>
            <ListsContainer>
              <img src="src/assets/image/MyPage/twitterlogo.svg"></img>
              <img src="src/assets/image/MyPage/githublogo.svg"></img>
              <img src="src/assets/image/MyPage/weblinklogo.svg"></img>
              <span>WEBSITENAME</span>
              <img src="src/assets/image/MyPage/locationlogo.svg"></img>
              <span>LOCATION</span>
            </ListsContainer>
          </StatusContainer>
          <EditProfileBtn>
            <img src="src/assets/image/MyPage/editlogo.svg"></img>
            <EditProfileText>Edit Profile</EditProfileText>{" "}
          </EditProfileBtn>
        </MyPageProfilelayout>
      </MyPageProfileContainer>
    </>
  );
};

export default MyPagePreview;

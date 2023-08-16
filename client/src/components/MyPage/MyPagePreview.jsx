import { Link } from "react-router-dom";

import GlobalStyle from "@/styles/global";
import {
  MyPageProfileContainer,
  MyPageProfilelayout,
  ProfileImageContainer,
  ProfileImage,
  StatusContainer,
  DisplayName,
  ProfileTitle,
  ListsContainer,
  EditProfileBtn,
  EditProfileText,
} from "../../styles/MyPage/MyPagePreview";

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
          <Link to="/MyPage/EditProfile">
            <EditProfileBtn>
              <img src="src/assets/image/MyPage/editlogo.svg"></img>
              <EditProfileText>Edit Profile</EditProfileText>{" "}
            </EditProfileBtn>
          </Link>
        </MyPageProfilelayout>
      </MyPageProfileContainer>
    </>
  );
};

export default MyPagePreview;

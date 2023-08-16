import { styled } from "styled-components";
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
  TwitterIcon,
  GithubIcon,
  WebLinkIcon,
  LocationIcon,
  EditIcon,
} from "../../styles/MyPage/MyPagePreview";
import { RANDOM_AVATAR } from "@/config/config";

const MyPagePreview = () => {
  return (
    <>
      <GlobalStyle />
      <MyPageProfileContainer>
        <MyPageProfilelayout>
          <ProfileImageContainer>
            <ProfileImage src={`${RANDOM_AVATAR}/23.jpg`} alt="PROFILE IMAGE" />
          </ProfileImageContainer>
          <StatusContainer>
            <DisplayName>DISPLAYNAME</DisplayName>
            <ProfileTitle>TITLE</ProfileTitle>
            <ListsContainer>
              MEMBER SINCE {""}, LAST SEEN, CONSECUTIVE{""}{" "}
            </ListsContainer>
            <ListsContainer>
              <TwitterIcon />
              <GithubIcon />
              <WebLinkIcon />
              <span>WEBSITENAME</span>
              <LocationIcon />
              <span>LOCATION</span>
            </ListsContainer>
          </StatusContainer>
          <EditProfileBtn>
            <EditIcon />
            <EditProfileText>Edit Profile</EditProfileText>{" "}
          </EditProfileBtn>
        </MyPageProfilelayout>
      </MyPageProfileContainer>
    </>
  );
};

export default MyPagePreview;

import { Link } from "react-router-dom";
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
} from "@/styles/MyPage/MyPagePreview";
import { RANDOM_AVATAR } from "@/config/config";

const MyPagePreview = ({ nickname, title = "title" }) => {
  return (
    <>
      <MyPageProfileContainer>
        <MyPageProfilelayout>
          <ProfileImageContainer>
            <ProfileImage src={`${RANDOM_AVATAR}/23.jpg`} alt="PROFILE IMAGE" />
          </ProfileImageContainer>
          <StatusContainer>
            <DisplayName>{nickname}</DisplayName>
            <ProfileTitle>{title}</ProfileTitle>
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
          <Link to="/MyPage/EditProfile">
            <EditProfileBtn>
              <EditIcon />
              <EditProfileText>Edit Profile</EditProfileText>{" "}
            </EditProfileBtn>
          </Link>
        </MyPageProfilelayout>
      </MyPageProfileContainer>
    </>
  );
};

export default MyPagePreview;

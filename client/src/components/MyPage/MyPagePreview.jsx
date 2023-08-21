import { useEffect, useState } from "react";
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
import { API_URL } from "@/config/config";

const MyPagePreview = () => {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    fetch(`${API_URL}/members`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch();
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user]);

  return (
    <>
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

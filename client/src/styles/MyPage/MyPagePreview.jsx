import { styled } from "styled-components";

export const MyPageProfileContainer = styled.div`
  position: static;
  display: relative;
  width: 100%;
  height: 144px;
`;

export const MyPageProfilelayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 144px;
  margin-bottom: var(--su16) !important;
  /* border: 2px solid red; */
`;

export const ProfileImageContainer = styled.div`
  margin: 5px;
  display: flex;
  width: 128px;
  height: 128px;
  /* border: 2px solid green; */
`;

export const ProfileImage = styled.img`
  display: block;
`;

export const StatusContainer = styled.div`
  justify-content: left;
  display: block;
  width: calc(100% - 238px);
  height: 123px;
`;

export const EditProfileBtn = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100px;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid var(--black-500);
`;

export const DisplayName = styled.div`
  display: flex;
  width: 421px;
  height: 50px;
  font-size: var(--fs-headline1);
  /* border: 1px solid blue; */
`;

export const ProfileTitle = styled.div`
  display: flex;
  width: 484px;
  height: 26px;
  margin-bottom: var(--su8) !important;
  font-size: var(--fs-headline);
  color: var(--black-400);
  /* border: 1px solid purple; */
`;

export const ListsContainer = styled.div`
  width: 484px;
  height: 26px;
  color: var(--black-400);
  /* border: 1px solid purple; */
`;

export const EditProfileText = styled.span``;

// const CalendarBtn = styled.button`
//   width: 196px;
//   height: 18px;
//   cursor: pointer
//
// `;

const EditIcon = () => (
  <img src="src/assets/image/MyPage/editlogo.svg" alt="Edit Logo" />
);

const TwitterIcon = () => (
  <img src="src/assets/image/MyPage/twitterlogo.svg" alt="Twitter Logo" />
);

const GithubIcon = () => (
  <img src="src/assets/image/MyPage/githublogo.svg" alt="GitHub Logo" />
);

const WebLinkIcon = () => (
  <img src="src/assets/image/MyPage/weblinklogo.svg" alt="Web Link Logo" />
);

const LocationIcon = () => (
  <img src="src/assets/image/MyPage/locationlogo.svg" alt="Location Logo" />
);

export { TwitterIcon, GithubIcon, WebLinkIcon, LocationIcon, EditIcon };

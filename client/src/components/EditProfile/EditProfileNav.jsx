import {
  ProfileNav,
  NavActiveBtn,
  NavNormalBtn,
} from "../../styles/EditProfile/EditProfileNavStyle";
import { styled } from "styled-components";

const EditProfileNav = () => {
  return (
    <>
      <ProfileNav>
        <NavActiveBtn>Edit profile</NavActiveBtn>
        <NavNormalBtn>Delete profile</NavNormalBtn>
      </ProfileNav>
    </>
  );
};

export default EditProfileNav;

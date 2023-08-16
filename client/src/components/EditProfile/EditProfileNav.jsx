import {
  ProfileNav,
  NavActiveBtn,
  NavNormalBtn,
} from "../../styles/EditProfile/EditProfileNavStyle";

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

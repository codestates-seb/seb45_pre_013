import {
  EditProfileContainer,
  FormContainer,
  EditFormContainer,
  ProfileTitle,
  BtnContainer,
  SaveBtn,
  CancelBtn,
} from "@/styles/EditProfile/EditProfilePageStyle";

import EditProfileNav from "@/components/EditProfile/EditProfileNav";
import LinksForm from "@/components/EditProfile/LinksForm";
import PrivateInfoForm from "@/components/EditProfile/PrivateInfoForm";
import PublicInformation from "@/components/EditProfile/PublicInformation";

const EditProfilePage = () => {
  return (
    <>
      <EditProfileContainer>
        <EditProfileNav></EditProfileNav>
        <FormContainer>
          <ProfileTitle>
            <h1>Edit your profile</h1>
          </ProfileTitle>
          <EditFormContainer>
            <PublicInformation></PublicInformation>
            <LinksForm></LinksForm>
            <PrivateInfoForm></PrivateInfoForm>
            <BtnContainer>
              <SaveBtn>Save profile</SaveBtn>
              <CancelBtn>Cancel</CancelBtn>
            </BtnContainer>
          </EditFormContainer>
        </FormContainer>
      </EditProfileContainer>
    </>
  );
};

export default EditProfilePage;

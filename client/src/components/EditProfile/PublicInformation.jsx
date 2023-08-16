import {
  InformationTitle,
  InformationForm,
  EditImageContainer,
  EditImage,
  EditInfoForm,
  EditInfoFormContainer,
  AboutMeContainer,
  AboutMeForm,
} from "@/styles/EditProfile/PublicInformationStyle";

const PublicInformation = () => {
  return (
    <>
      <InformationTitle>Public information</InformationTitle>
      <InformationForm>
        <label>Profile image</label>
        <EditImageContainer>
          <EditImage></EditImage>
        </EditImageContainer>
        <label>Display name</label>
        <EditInfoFormContainer>
          <EditInfoForm></EditInfoForm>
        </EditInfoFormContainer>
        <label>Location</label>
        <EditInfoFormContainer>
          <EditInfoForm></EditInfoForm>
        </EditInfoFormContainer>
        <label>Title</label>
        <EditInfoFormContainer>
          <EditInfoForm></EditInfoForm>
        </EditInfoFormContainer>
        <label>About me</label>
        <AboutMeContainer>
          <AboutMeForm></AboutMeForm>
        </AboutMeContainer>
      </InformationForm>
    </>
  );
};

export default PublicInformation;

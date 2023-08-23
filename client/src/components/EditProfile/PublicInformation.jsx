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

const PublicInformation = ({ nickname, location, title, intro }) => {
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
          <EditInfoForm value={nickname.value} onInput={nickname.onChange} />
        </EditInfoFormContainer>
        <label>Location</label>
        <EditInfoFormContainer>
          <EditInfoForm value={location.value} onInput={location.onChange} />
        </EditInfoFormContainer>
        <label>Title</label>
        <EditInfoFormContainer>
          <EditInfoForm value={title.value} onInput={title.onChange} />
        </EditInfoFormContainer>
        <label>About me</label>
        <AboutMeContainer>
          <AboutMeForm onChange={intro.onChange}>{intro.value}</AboutMeForm>
        </AboutMeContainer>
      </InformationForm>
    </>
  );
};

export default PublicInformation;

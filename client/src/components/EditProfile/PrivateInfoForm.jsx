import {
  PrivateInfoContainer,
  PrivateTitle,
  PrivateInfoFormContainer,
  PrivateTitleContainer,
  PrivateInformationForm,
  InformationTitle,
} from "@/styles/EditProfile/PrivateInfoFormStyle";

const PrivateInfoForm = () => {
  return (
    <>
      <PrivateTitleContainer>
        <InformationTitle>Private information</InformationTitle>
        <PrivateTitle>Not shown publicy</PrivateTitle>
      </PrivateTitleContainer>
      <PrivateInfoContainer>
        <PrivateInfoFormContainer>
          <label>Full name</label>
          <PrivateInformationForm></PrivateInformationForm>
        </PrivateInfoFormContainer>
      </PrivateInfoContainer>
    </>
  );
};

export default PrivateInfoForm;

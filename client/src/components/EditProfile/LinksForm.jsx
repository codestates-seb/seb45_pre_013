import {
  InformationTitle,
  LinksFormContainer,
  LinksFormInput,
  LinksItemContainer,
  FlexItemContainer,
} from "@/styles/EditProfile/LinksFormStyle";

const LinksForm = () => {
  return (
    <>
      <InformationTitle>Links</InformationTitle>
      <LinksFormContainer>
        <LinksItemContainer>
          <FlexItemContainer>
            {" "}
            <label>Website Link</label>
            <LinksFormInput></LinksFormInput>
          </FlexItemContainer>
          <FlexItemContainer>
            {" "}
            <label>Twitter link or username</label>
            <LinksFormInput></LinksFormInput>
          </FlexItemContainer>{" "}
          <FlexItemContainer>
            {" "}
            <label>Github link or username</label>
            <LinksFormInput></LinksFormInput>
          </FlexItemContainer>
        </LinksItemContainer>
      </LinksFormContainer>
    </>
  );
};

export default LinksForm;

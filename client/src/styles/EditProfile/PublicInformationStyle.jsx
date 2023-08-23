import { styled } from "styled-components";

export const InformationForm = styled.div`
  width: 100%;
  max-width: 795px;
  height: 709px;
  padding: 24px;
  border: 1px solid var(--black-200);
  margin-bottom: 48px;
`;
export const InformationTitle = styled.div`
  max-width: 844px;
  margin-bottom: 8px;
  font-size: var(--fs-headline);
`;

export const EditImageContainer = styled.div`
  width: 100%;
  max-width: 794px;
  height: 164px;
`;

export const EditImage = styled.div`
  width: 100%;
  max-width: 163px;
  height: 163px;
  border: 1px solid var(--black-200);

  &.a {
    font-size: 2px;
  }
`;

export const EditInfoFormContainer = styled.div`
  width: 100%;
  max-width: 794px;
  height: 34px;
  margin-bottom: 2px;
`;

export const EditInfoForm = styled.input`
  width: 100%;
  max-width: 423px;
  height: 34px;
  border: 1px solid var(--black-200);
  border-radius: 5px;
`;

export const AboutMeContainer = styled.div`
  width: 100%;
  max-width: 794px;
  height: 255px;
  margin-bottom: 2px;
  border: 1px solid var(--black-200);
  border-radius: 10px;
`;

export const AboutMeForm = styled.textarea`
  width: 100%;
  max-width: 793px;
  height: 255px;
`;

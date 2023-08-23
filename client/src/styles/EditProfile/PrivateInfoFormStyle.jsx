import { styled } from "styled-components";

export const InformationTitle = styled.div`
  max-width: 844px;
  margin-bottom: 8px;
  font-size: var(--fs-headline);
`;

export const PrivateInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 843px;
  height: 107px;
  border: 1px solid var(--black-200);
  border-radius: 10px;
  margin-bottom: 60px;
`;

export const PrivateInfoFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  max-width: 844px;
  height: 107px;
`;
export const PrivateInformationForm = styled.input`
  width: 100%;
  max-width: 421px;
  height: 34px;
  border: 1px solid var(--black-200);
  border-radius: 5px;
`;

export const PrivateTitleContainer = styled.div`
  display: flex;

  width: 100%;
  max-width: 843px;
  height: 28px;
  align-items: center;
`;

export const PrivateTitle = styled.div`
  margin-left: 7px;
  font-size: 10px;
  color: var(--black-200);
`;

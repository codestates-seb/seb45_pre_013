import { styled } from "styled-components";

export const InformationForm = styled.div`
  width: 100%;
  max-width: 795px;
  height: 709px;
  padding: 24px;
  border: 1px solid var(--black-200);
  margin-bottom: 48px;
`;

export const LinksFormContainer = styled.div`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 843px;
  height: 107px;
  border: 1px solid var(--black-200);
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const LinksItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 809px;
  height: 72px;
  flex-grow: 1;
`;

export const FlexItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 254px;
  height: 34px;
  margin: auto;
  padding-top: 30px;
`;

export const LinksFormInput = styled.input`
  width: 100%;
  max-width: 254px;
  height: 34px;
  border: 1px solid var(--black-200);
  border-radius: 5px;
`;

export const InformationTitle = styled.div`
  max-width: 844px;
  margin-bottom: 8px;
  font-size: var(--fs-headline);
`;

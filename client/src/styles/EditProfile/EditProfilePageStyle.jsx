import { styled } from "styled-components";

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1051px;
  height: 1359px;
  /* border: 2px solid red; */
  padding: 24px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 832px;
  height: 1358px;
  /* border:2px solid orange; */
`;

export const ProfileTitle = styled.div`
  justify-content: center;
  text-align: left;
  width: 800px;

  height: 48px;
  font-size: var(--fs-headline1);
  border-bottom: 1px solid var(--black-200);
  padding-bottom: 50px;
  margin-bottom: 24px;
`;

export const InformationTitle = styled.div`
  max-width: 844px;
  /* border: 2px solid crimson; */
  margin-bottom: 8px;
  font-size: var(--fs-headline);
`;

export const EditFormContainer = styled.div`
  width: 100%;
  max-width: 844px;
  height: 1284px;

  justify-content: center;
  align-items: center;
  /* border: solid 1px red; */
  margin: 1px;
`;

export const BtnContainer = styled.div`
  display: flex;

  width: 100%;
  max-width: 840px;
  height: 46px;
  /* border:1px solid red; */

  align-items: center;
`;

export const SaveBtn = styled.button`
  width: 100%;
  max-width: 94px;
  height: 38px;
  text-align: center;
  background-color: var(--blue-500);
  border-radius: 5px;
  color: var(--white);
  &:hover {
    background-color: var(--blue-700);
  }
`;

export const CancelBtn = styled.button`
  width: 100%;
  max-width: 94px;
  height: 38px;
  color: var(--blue-700);
  border-radius: 5px;
  &:hover {
    background-color: var(--blue-200);
  }
`;

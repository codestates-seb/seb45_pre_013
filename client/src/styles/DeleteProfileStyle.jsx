import { styled } from "styled-components";

export const DeleteTitle = styled.div`
  max-width: 844px;
  margin-bottom: 8px;
  font-size: var(--fs-headline);
`;

export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 831px;
  height: 543px;
`;

export const DeleteTxtContainer = styled.div`
  width: 100%;
  max-width: 831px;
  height: 345px;
  > p {
    margin-bottom: 10px;
  }
  > ul {
    padding-left: 20px;
  }
  > ul > li {
    margin-bottom: 20px;
  }
`;

export const DeleteForm = styled.form`
  width: 100%;
  max-width: 831px;
  height: 107px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  height: inherit;
  margin-right: 10px;
  cursor: pointer;

  .checkbox {
    margin-bottom: 18px;
    margin-right: 10px;
  }
`;
export const AgreeFormContainer = styled.div`
  display: flex;
`;

export const DeleteBtn = styled.button`
  width: 104px;
  height: 40px;
  color: white;
  background-color: ${(props) => (props.disabled ? "red" : "red")};
  border-radius: 7px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-radius: 7px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:not(:disabled):hover {
    background-color: crimson;
  }
`;

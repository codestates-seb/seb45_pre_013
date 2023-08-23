import { styled } from "styled-components";

export const SignUpContainer = styled.div`
  align-items: center;
  width: 100%;
  max-width: 316px;
  height: 450px;
  padding: 24px;

  /* margin-top: 24px;
  margin-bottom: 20px; */
  background-color: var(--white);
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 240px;

    label {
      font-size: 15px;
      font-weight: bold;
      padding-bottom: 6px;
    }

    input {
      border: 1px solid var(--black-200);
      border-radius: 4px;
      height: 32px;
    }

    button {
      width: 240px;
      height: 32.59px;
      border-radius: 5px;
      background-color: var(--blue-500);
      color: var(--white);
      margin-top: 20px;
      margin-bottom: 20px;
    }

    button:hover {
      cursor: pointer;
      background-color: var(--blue-700);
    }
  }

  .signup-email {
    margin-bottom: 10px;
  }

  .signup-displayname {
    margin-bottom: 10px;
  }

  .agreement {
    display: block;
    font-size: 11px;
    color: var(--black-500);
  }

  .passwordwarning {
    color: var(--black-500);
    font-size: 11px;
  }

  a {
    vertical-align: baseline;
    color: var(--blue);
    overflow: hidden;
    word-break: break-all;
  }
`;

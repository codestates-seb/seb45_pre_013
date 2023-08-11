import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global";

const SignUpContainer = styled.div`
  width: 100%;
  max-width: 316px;
  height: 692px;
  padding: 24px;
  margin: auto;
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
    color: var(--black-400);
  }

  p {
    font-size: 11px;
    color: var(--black-400);
  }
  a {
    vertical-align: baseline;
    color: var(--blue);
    overflow: hidden;
    word-break: break-all;
  }
`;

const SignUpForm = () => {
  // const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  return (
    <>
      <GlobalStyle />
      <SignUpContainer>
        <div className="signup-displayname">
          <label htmlFor="displayname">Display name</label>
          <input id="displayname" type="displayname" />
        </div>
        <div className="signup-email">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="login-password">
          <label htmlFor="email">Password</label>
          <input id="password" type="password" />
          <p className="passwordtip">
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </p>
        </div>
        <div>
          <button>Sign up</button>
          <div className="agreement">
            By clicking “Sign up”, you agree to our
            <a href="https://stackoverflow.com/legal/terms-of-service/public">
              terms of service
            </a>{" "}
            and acknowledge that you have read and understand our
            <a href="https://stackoverflow.com/legal/privacy-policy">
              privacy policy
            </a>{" "}
            and <a href="https://stackoverflow.com/conduct">code of conduct</a>.{" "}
          </div>
        </div>
      </SignUpContainer>
    </>
  );
};

export default SignUpForm;

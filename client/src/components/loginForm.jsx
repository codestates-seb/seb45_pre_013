import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global";

const LoginContainer = styled.div`
  width: 100%;
  max-width: 288px;
  height: 234px;
  padding: 24px;
  margin-top: 24px;
  margin-bottom: 20px;
  background-color: var(--white);
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 288px;

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
    }
  }

  .login-email {
    margin-bottom: 10px;
  }

  .login-password {
    margin-bottom: 20px;
  }
`;

const LoginForm = () => {
  // const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  return (
    <>
      <GlobalStyle />
      <LoginContainer className="login-container">
        <div className="login-email">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="login-password">
          <label htmlFor="email">Password</label>
          <input id="password" type="password" />
        </div>
        <div>
          <button>Log in</button>
        </div>
      </LoginContainer>
    </>
  );
};

export default LoginForm;

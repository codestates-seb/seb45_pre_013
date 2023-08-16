import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global";
import { SignUpContainer } from "../styles/Signup/SignupFormStyle";

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
          <p className="passwordwarning">
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

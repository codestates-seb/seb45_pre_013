import React from "react";
import styled from "styled-components";
import LoginForm from "../components/loginForm";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--black-050);

  p {
    margin: 2px;
    padding: 2px;
    color: var(--black);
    font-size: 12px;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  margin: 0 auto 20px;
`;

const LoginPage = () => {
  return (
    <>
      <PageContainer>
        <Icon
          className="icon"
          src="src/assets/image/stackoverflow-icon-mini.svg"
          alt="minilogo"
        />
        <LoginForm />
        <p>Don't have an account?</p>
        <p>Are you an employer?</p>
      </PageContainer>
    </>
  );
};

export default LoginPage;

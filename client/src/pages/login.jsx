import React from "react";
import styled from "styled-components";
import LoginForm from "../components/loginForm";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vh;
  background-color: var(--black-050);
`;

const LoginPage = () => {
  return (
    <PageContainer>
      <LoginForm />
    </PageContainer>
  );
};

export default LoginPage;

import Header from "@/components/Header";
import LoginForm from "../components/LoginForm";
import { Icon, PageContainer } from "../styles/Login/LoginPageStyle";
const LoginPage = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Icon
          className="icon"
          src="src/assets/image/minilogo.svg"
          alt="minilogo"
        />
        <LoginForm />
        <p>Don{"'"}t have an account?</p>
        <p>Are you an employer?</p>
      </PageContainer>
    </>
  );
};

export default LoginPage;

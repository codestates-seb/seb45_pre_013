import GlobalStyle from "../styles/global";
import { LoginContainer } from "../styles/Login/LoginFormStyle";

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

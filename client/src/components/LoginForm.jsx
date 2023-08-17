import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import useInput from "@/hooks/useInput";
import { LoginContainer } from "@/styles/Login/LoginFormStyle";
import { API_URL } from "@/config/config";

const LoginForm = () => {
  const email = useInput("");
  const password = useInput("");
  const [cookies, setCookie, removeCookie] = useCookies(); //eslint-disable-line
  const navigate = useNavigate();

  const onClickLoginHandler = () => {
    fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCookie("user", data.access_token);
        navigate("/");
      })
      .catch();
  };

  return (
    <>
      <LoginContainer className="login-container">
        <div className="login-email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email.value}
            onInput={email.onChange}
          />
        </div>
        <div className="login-password">
          <label htmlFor="email">Password</label>
          <input
            id="password"
            type="password"
            value={password.value}
            onInput={password.onChange}
          />
        </div>
        <div>
          <button onClick={onClickLoginHandler}>Log in</button>
        </div>
      </LoginContainer>
    </>
  );
};

export default LoginForm;

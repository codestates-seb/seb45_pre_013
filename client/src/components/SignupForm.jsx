import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "@/hooks/useInput";
import { SignUpContainer } from "@/styles/Signup/SignupFormStyle";
import { API_URL } from "@/config/config";

const SignUpForm = () => {
  const navigate = useNavigate();
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const [validationError, setValidationError] = useState("");

  const validation = (name, email, password) => {
    if (name !== "") {
      const isAtSign = email.indexOf("@");
      const isDot = email.slice(isAtSign + 1).indexOf(".");
      const isSpare = email.slice(isAtSign + isDot + 2).length;
      const validEmail =
        isAtSign !== -1 &&
        isAtSign !== 0 &&
        isDot !== -1 &&
        isDot !== 0 &&
        isSpare !== 0;
      if (validEmail) {
        const validPassword =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%#?&]{8,}$/.test(
            password
          );
        if (validPassword) {
          setValidationError("");
          fetch(`${API_URL}/members`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              nickname: name,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.status !== 409) {
                navigate("/Login");
              }
            })
            .catch((err) => console.log(err));
        } else {
          setValidationError("password");
        }
      } else {
        setValidationError("email");
      }
    } else {
      setValidationError("name");
    }
  };

  const onClickSignUpHandler = () => {
    validation(name.value, email.value, password.value);
  };

  return (
    <>
      <SignUpContainer>
        <div className="signup-displayname">
          <label htmlFor="displayname">Display name</label>
          <input
            id="displayname"
            type="displayname"
            value={name.value}
            onInput={name.onChange}
            className={validationError === "name" ? "error" : ""}
          />
        </div>
        <div className="signup-email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email.value}
            onInput={email.onChange}
            className={validationError === "email" ? "error" : ""}
          />
          {validationError === "email" ? (
            <p className="errorMessage">
              {email.value} is not a valid email address.
            </p>
          ) : null}
        </div>
        <div className="login-password">
          <label htmlFor="email">Password</label>
          <input
            id="password"
            type="password"
            value={password.value}
            onInput={password.onChange}
            className={validationError === "password" ? "error" : ""}
          />
          {validationError === "password" ? (
            <p className="errorMessage">is not a valid password.</p>
          ) : null}
          <p className="passwordwarning">
            Passwords must contain at least eight characters, including at least
            1 letter in english and 1 number and 1 special character.
          </p>
        </div>
        <div>
          <button onClick={onClickSignUpHandler}>Sign up</button>
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

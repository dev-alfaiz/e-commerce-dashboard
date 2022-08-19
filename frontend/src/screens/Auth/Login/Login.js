import * as React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    } else {
      navigate("/signup");
    }
  }, [navigate]);
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="form-fields-wrapper">
        <input
          className="input-box"
          type={"email"}
          placeholder={"Enter Email"}
          // value={email}
          // onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="input-box"
          type={"password"}
          placeholder={"Enter Password"}
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
        />
        <button className="login-button" type="button">
          Login
        </button>
      </div>
    </div>
  );
};

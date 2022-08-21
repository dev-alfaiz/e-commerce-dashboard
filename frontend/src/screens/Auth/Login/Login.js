import * as React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (email && password) {
      let response = await fetch("http://localhost:5050/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      response = await response.json();
      if (response.user.name) {
        setEmail("");
        setPassword("");
        localStorage.setItem("user", JSON.stringify(response?.user));
        localStorage.setItem("token", JSON.stringify(response?.auth));
        navigate("/");
      } else {
        alert(response.result);
      }
    } else {
      alert("Please provide valid information!");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="form-fields-wrapper">
        <input
          className="input-box"
          type={"email"}
          placeholder={"Enter Email"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="input-box"
          type={"password"}
          placeholder={"Enter Password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="login-button" type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

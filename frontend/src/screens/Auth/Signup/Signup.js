import * as React from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    let response = await fetch("http://localhost:5050/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();

    if (response) {
      setName("");
      setEmail("");
      setPassword("");
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/");
    } else {
      alert(response);
    }
  };

  React.useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    } else {
      navigate("/signup");
    }
  }, [navigate]);

  return (
    <div className="signup">
      <h1>Registration</h1>
      <div className="form-fields-wrapper">
        <input
          className="input-box"
          type={"text"}
          placeholder={"Enter Name"}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
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
        <button className="register-button" type="button" onClick={collectData}>
          Register
        </button>
      </div>
    </div>
  );
};

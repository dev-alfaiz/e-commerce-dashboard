import * as React from "react";

export const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const collectData = () => {
    console.warn({ name, email, password });
  };

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

// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import SignupFormPage from "../SignupFormPage";

function LoginForm({ Modal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [userHasALogin, setUserHasALogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      sessionActions.login({
        credential: "loganfrye714",
        password: "password",
      })
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  if (userHasALogin === true) {
    return (
      <>
        <form onSubmit={handleSubmit} className="login__modal">
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div>
            <h4 id="login__header">Login </h4>
            <label>
              Username or Email
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Log In</button>
            <button onClick={handleDemoSubmit}>Demo Login</button>
          </div>
          <div>
            <button onClick={(e) => setUserHasALogin(false)}>
              Join Share Wine
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return <SignupFormPage />;
  }
}

export default LoginForm;

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
          <div className="form__container">
            <div className="form__container-leftSide">
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}>{error}</li>
                ))}
              </ul>

              <div>
                <h4 id="login__header">Login | Sign Up </h4>
                <label>
                  Username or Email
                  <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
                <div />
                <button type="submit">Login</button>
                <button onClick={(e) => setUserHasALogin(false)}>
                  Sign Up
                </button>
              </div>
              <div>
                <button onClick={handleDemoSubmit}>Demo Login</button>
              </div>
            </div>
            <div className="form__container-rightSide">
              This is where the picture will go
            </div>
          </div>
        </form>
      </>
    );
  } else {
    return <SignupFormPage />;
  }
}

export default LoginForm;

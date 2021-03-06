import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

/**
 * COMPONENT
 */
const AuthForm = ({ name, displayName, _authenticate, error }) => {
  const [password, setPassword] = useState("");

  useEffect(() => {
    setPassword("");
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    _authenticate(e.target.username.value, password, e.target.name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input
            name="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => ({
  name: "login",
  displayName: "Login",
  error: state.auth.error,
});

const mapSignup = (state) => ({
  name: "signup",
  displayName: "Sign Up",
  error: state.auth.error,
});

const mapDispatch = (dispatch) => ({
  _authenticate: (username, password, formName) =>
    dispatch(authenticate(username, password, formName)),
});

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

import React, { useState } from "react";
import "./Register.css";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../../actions";
import logo from "../Images/logo.png";
import Spinner from "../Spinner/Spinner.js";
import { useForm } from "react-hook-form";

const Register = ({ isLoading, error, createUser, history }) => {
  const { register, handleSubmit, errors, getValues, reset } = useForm();
  const [credentials, setCredentials] = useState(null);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = (data) => {
    const { email, displayName, password } = data;

    createUser(email, password, displayName)
      .then(() => {
        reset();
        !error ? history.push("/onboarding") : setCredentials(false);
      })
      .catch((err) => console.log(err));
  };

  const validatePassword = async (value) => {
    await sleep(1000);

    return value === getValues("confirmedPass") ? true : false;
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="register">
          <div className="signupHeader">
            <h3 className="pageTitle">Sign Up</h3>
            <img className="registerLogo" src={logo} alt="Get2It Logo" />
          </div>

          <form className="registerform" onSubmit={handleSubmit(onSubmit)}>
            {credentials === false && (
              <p className="error">Email already exists!</p>
            )}

            {/* DISPLAY NAME */}
            <div className="inputContainer">
              <label to="displayName">
                <i className="registerIcon far fa-user-circle"></i>
              </label>
              <input
                ref={register({ required: true })}
                type="text"
                id="displayName"
                name="displayName"
                placeholder={
                  errors.displayName && errors.displayName.type === "required"
                    ? "DISPLAY NAME IS REQUIRED!"
                    : "Display Name"
                }
              />
              <br />
            </div>

            {/* EMAIL */}
            <div className="inputContainer">
              <label to="email">
                <i className="registerIcon far fa-envelope"></i>
              </label>
              <input
                ref={register({ required: true })}
                type="email"
                id="email"
                name="email"
                placeholder={
                  errors.email && errors.email.type === "required"
                    ? "EMAIL IS REQUIRED!"
                    : "Email"
                }
              />
              <br />
            </div>

            {/* PASSWORD */}
            <div className="inputContainer">
              <label to="password">
                <i className="registerIcon fas fa-unlock-alt"></i>
              </label>
              <input
                ref={register({
                  required: true,
                  minLength: 8,
                  validate: validatePassword,
                })}
                type="password"
                id="password"
                name="password"
                placeholder={
                  errors.password && errors.password.type === "required"
                    ? "PASSWORD IS REQUIRED"
                    : "Password"
                }
              />
              {errors.password && errors.password.type === "minLength" && (
                <p>PASSWORD MUST BE 8 CHARACTERS OR LONGER</p>
              )}
              {errors.password && errors.password.type === "validate" && (
                <p>PASSWORDS MUST MATCH</p>
              )}
              <br />
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="inputContainer">
              <label to="confirmedPass">
                <i className="registerIcon fas fa-unlock-alt"></i>
              </label>
              <input
                ref={register({ required: true, minLength: 8 })}
                type="password"
                id="confirmedPass"
                name="confirmedPass"
                placeholder={
                  errors.confirmedPass &&
                  errors.confirmedPass.type === "required"
                    ? "PLEASE CONFIRM YOUR PASSWORD"
                    : "Confirm Password"
                }
              />
              {errors.confirmedPass &&
                errors.confirmedPass.type === "minLength" && (
                  <p>PASSWORD MUST BE 8 CHARACTERS OR LONGER</p>
                )}
              {errors.password && errors.password.type === "validate" && (
                <p>PASSWORDS MUST MATCH</p>
              )}
            </div>

            <button className="registerButton" type="submit">
              Create Account
            </button>
          </form>

          <p className="loginMessage">
            ALREADY HAVE AN ACCOUNT?
            <Link className="loginLink" to="/login">
              SIGN IN
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = {
  createUser,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);

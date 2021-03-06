import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../redux/user/userActions";
import CustomButton from "../customButton/CustomButton";
import signUp from "./signUp.svg";
import profile_pic from "../customSignIn/profile.svg";

import "./customSignUp.style.scss";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const CustomSignUp = () => {
  const [newUser, setNewUser] = useState(initialState);
  const dispatch = useDispatch();
  const signUpNewUser = userCredentails =>
    dispatch(signUpStart(userCredentails));

  const handleSubmit = event => {
    event.preventDefault();
    const { password, confirmPassword, email, displayName } = newUser;

    const userData = { email, password, displayName };

    if (password !== confirmPassword) {
      alert("Password must match");
      return;
    }

    signUpNewUser(userData);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };
  return (
    <div className="container">
      <div className="img">
        <img src={signUp} alt="signUpImg" />
      </div>
      <div className="sing-up-container">
        <form onSubmit={handleSubmit}>
          <img src={profile_pic} alt="avatar" className="avatar" />
          <h2>SIGN UP</h2>
          <div className="social-container">
            <span className="social">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className="social">
              <i
                className="fab fa-google-plus-g"
                // onClick={signInWithGoogle}
              ></i>
            </span>
            <span className="social">
              <i className="fab fa-linkedin-in"></i>
            </span>
          </div>
          <span className="option">or use your email for registration</span>
          <div
            className={`${
              newUser.displayName.length ? "focus" : ""
            } input-div one `}
          >
            <div className="icon">
              <i className="fas fa-user" />
            </div>
            <div>
              <h5>Display Name</h5>
              <input
                className="input"
                type="text"
                name="displayName"
                value={newUser.displayName}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div
            className={`${newUser.email.length ? "focus" : ""} input-div one `}
          >
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h5>Email</h5>
              <input
                className="input"
                type="text"
                name="email"
                value={newUser.email}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div
            className={`${
              newUser.password.length ? "focus" : ""
            } input-div two `}
          >
            <div className="icon">
              <i className="fas fa-lock" />
            </div>
            <div>
              <h5>Password</h5>
              <input
                className="input"
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div
            className={`${
              newUser.confirmPassword.length ? "focus" : ""
            } input-div two `}
          >
            <div className="icon">
              <i className="fas fa-lock" />
            </div>
            <div>
              <h5>Confirm Password</h5>
              <input
                className="input"
                type="password"
                name="confirmPassword"
                value={newUser.confirmPassword}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <Link to="/signin" className="sign-in-link">
            Already have an account? Sign In
          </Link>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default CustomSignUp;

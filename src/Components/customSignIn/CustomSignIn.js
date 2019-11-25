import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import sign_in from "./sign-in.svg";
import profile_pic from "./profile.svg";
import "./customSignIn.css";

const CustomSignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = user;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser({ email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="container">
      <div className="img">
        <img src={sign_in} alt="loginImg" />
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <img src={profile_pic} alt="avatar" className="avatar" />
          <h2>SIGN IN</h2>
          <div className="social-container">
            <span className="social">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className="social">
              <i
                className="fab fa-google-plus-g"
                onClick={signInWithGoogle}
              ></i>
            </span>
            <span className="social">
              <i className="fab fa-linkedin-in"></i>
            </span>
          </div>
          <span className="option">or use your account</span>
          <div className={`${user.email.length ? "focus" : ""} input-div one `}>
            <div className="icon">
              <i className="fas fa-user" />
            </div>
            <div>
              <h5>Email</h5>
              <input
                className="input"
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div
            className={`${user.password.length ? "focus" : ""} input-div two `}
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
                value={user.password}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <Link to="/signup" className="sign-up-link">
            Don't have an account? Sign Up
          </Link>
          <input type="submit" className="btn" value="Login"></input>
        </form>
      </div>
    </div>
  );
};

export default CustomSignIn;

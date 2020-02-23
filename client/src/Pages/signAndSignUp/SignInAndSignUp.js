import React from "react";
import SignIn from "../../Components/signIn/SignIn";
import SignUp from "../../Components/signUp/SignUp";

import "./signInAndSignUp.style.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;

import React, { useState } from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signUp.style.scss";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUp = () => {
  const [newUser, setNewUser] = useState(initialState);

  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = newUser;

    if (password !== confirmPassword) {
      alert("Password must match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setNewUser(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your details</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={newUser.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={newUser.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;

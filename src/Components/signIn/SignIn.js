import React, { useState } from "react";
import FormInput from "../formInput/FormInput";
import "./signIn.style.scss";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = event => {
    event.preventDefault();
    setUser({ email: "", password: "" });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={user.email}
          required
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={user.password}
          required
          handleChange={handleChange}
          label="Password"
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;

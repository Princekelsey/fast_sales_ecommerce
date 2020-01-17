import React from "react";
import "./customButton.style.scss";
import { CustomButtonContainer } from "./customButtonStyles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

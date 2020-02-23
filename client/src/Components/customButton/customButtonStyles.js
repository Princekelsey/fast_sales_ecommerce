import styled, { css } from "styled-components";

const buttonStyles = css`
  color: #fff;
  border: none;
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);

  &:hover {
    background-color: white;
    color: #363738;
    border: 1px solid #363738;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: #363738;
  border: 1px solid #363738;

  &:hover {
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #ffffff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  font-size: 12px;
  font-weight: bolder;
  height: 35px;
  border-radius: 25px;
  margin: 1rem 0;
  font-size: 1.2rem;
  outline: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  background-size: 200%;
  transition: 0.5s;

  ${getButtonStyles}
`;

import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../utils/logo.svg";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishedKey = process.env.REACT_APP_PUBLISHED_KEY;

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="e-sales"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default StripeButton;

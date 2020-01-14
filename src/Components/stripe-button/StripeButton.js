import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../utils/logo.svg";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishedKey = "pk_test_6KSmsUgbuD3GDXT582kj7hRT00GfzdL681";

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

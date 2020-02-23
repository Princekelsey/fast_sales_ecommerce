import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import logo from "../../utils/logo.svg";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishedKey = "pk_test_mA6ngPMWTRMHuQ9kRrZEArDR00rsOcY6kH";

  const onToken = token => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: stripePrice,
        token
      }
    })
      .then(res => {
        alert("Payment Successful");
      })
      .catch(err => {
        console.log("Payment error:", JSON.parse(err));
        alert(
          "There was an issue with payment. Please make sure you use the provided credit card"
        );
      });
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

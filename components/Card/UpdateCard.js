import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import UpdateCardDetailForm from "./UpdateCardDetailForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const UpdateCard = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <UpdateCardDetailForm />
      </Elements>
    </>
  );
};

export default UpdateCard;

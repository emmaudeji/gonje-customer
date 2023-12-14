import { useState } from "react";

import getStripe from "../../util/getStripe";
import axios from "axios";
import authHeader from "../Api/auth-header";
import { createOrder } from "../Api/Api";

const StripeCheckout = ({ amount, user_id, items }) => {
  const [stripError, setStripError] = useState(false);
  const [loading, setLaoding] = useState(false);

  // === with serverside and client integration ====\

  const redirectToCheckout = async () => {
    setLaoding(true);

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items, user_id }),
    });

    const data = await response.json();
    if (data.statusCode) {
      console.log("SRIPE ERROR", response.json());
      return;
    }
    // const order = await createOrder()
    // console.log("Stripe data==", data);
    // console.log(process.env.NODE_ENV===`development` ? 'http://localhost:3000/pantry' : 'https://customer.gonje.com.au/pantry')
    const stripe = await getStripe();
    const stripeSession = await stripe.redirectToCheckout({
      sessionId: data.id,
    });
    console.log("stripeSession", stripeSession);
    if (stripeSession.error) setStripError(error.message);

    localStorage.setItem("Stripe_Results", JSON.stringify(g));
    // localStorage.setItem('user', JSON.stringify({a: 'emmma', s: "udejo"}));

    setLaoding(false);
  };

  return (
    <div
      onClick={redirectToCheckout}
      disabled={loading}
      className="w-full p-3 text-center rounded-lg bg-blue-900"
    >
      {" "}
      {loading ? "loading..." : "Stripe Pay"}
    </div>
  );
};

export default StripeCheckout;

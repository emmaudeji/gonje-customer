import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardDetailForm from "./CardDetailForm";
import Router from "next/router";
import Image from "next/image";
import { NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY } from "../../util";

const skip = () => {
  Router.push("/delivery_date");
};
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const Card = () => {
  return (
    <>
      <div className="shippingotter">
        <div className="shippinglogo">
          <Image height={75} width={154} src="/images/logo.png" alt="" />
        </div>
        <div className="shippinginr">
          <div className="shippingsteps">
            <ul>
              <li className="activesteps">
                <span>
                  <Image
                    height={30}
                    width={30}
                    src="/images/shoping-detail/tick.svg"
                    alt=""
                  />
                </span>
                <h4>Shipping Address</h4>
              </li>
              <li className="activesteps">
                <span>
                  <Image
                    height={30}
                    width={30}
                    src="/images/shoping-detail/tick.svg"
                    alt=""
                  />
                </span>
                <h4>Payment Details</h4>
              </li>
              <li>
                <span>
                  <Image
                    height={30}
                    width={30}
                    src="/images/shoping-detail/tick.svg"
                    alt=""
                  />
                </span>
                <h4>Delivery Date</h4>
              </li>
            </ul>
          </div>
          <div className="shippingform">
            <Elements stripe={stripePromise}>
              <CardDetailForm />
            </Elements>
          </div>{" "}
          <div className="payment_skip">
            <a onClick={() => skip()}>Skip</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useEffect, React, useState } from "react";
import { addCard } from "../Api/Api.js";
import toasts from "../shared/toast.js";
import Router from "next/router";
import Loader from "../Loader.js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "black",
      fontSize: "16px",
      // "::placeholder": {
      //   color: "#CFD7DF",
      // },
    },
    invalid: {
      color: "#red",
    },
  },
};

const CardDetailForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [zipcode, setzipcode] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const payload = await stripe.createToken(cardElement);
    if (payload.error) {
      toasts.notifyError(payload.error.message);
    }
    if (payload.token) {
      setLoading(true);

      const json = await addCard(payload.token.id);
      if (json.status == 1) {
        toasts.notifySucces("Card Details Added Sucessfully.");

        Router.push("/delivery_date");
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    if (!zipcode) {
      const user_detail = localStorage.getItem("user_detail_postcode");
      const user_detail_obj = user_detail;
      setzipcode(user_detail_obj);
    }
  }, [zipcode]);
  return (
    <>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit}>
        {/* <div className="paymentmthod_otr">
          <div className="paymentmthod">
            <lable>Select Payment Method</lable>
            <select>
              <option disabled={true} value="">
                Payment Method
              </option>
              <option>Visa Card</option>
              <option>Master Card</option>
            </select>
          </div>
        </div> */}
        <div className="feilds">
          <lable>Credit or debit Card</lable>
          <CardNumberElement
            className="form-control"
            options={{ ...CARD_ELEMENT_OPTIONS, placeholder: "Card Number" }}
          />
        </div>
        <div className="doublefeilds">
          <div className="feilds">
            <lable>Expiration</lable>
            <CardExpiryElement
              options={{ ...CARD_ELEMENT_OPTIONS, placeholder: "MM/YY" }}
              className="form-control"
            />
          </div>
          <div className="feilds">
            <lable>CVV</lable>
            <CardCvcElement
              options={CARD_ELEMENT_OPTIONS}
              className="form-control"
            />
          </div>
          <div className="feilds">
            <lable>Zip Code</lable>
            <input
              placeholder="Zip code"
              type="text"
              value={zipcode}
              readOnly
              name="zipcode"
            />
          </div>
        </div>

        <div className="continuebtn">
          <button
            type="submit"
            className="btn btn-light w-100"
            disabled={!stripe}
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default CardDetailForm;

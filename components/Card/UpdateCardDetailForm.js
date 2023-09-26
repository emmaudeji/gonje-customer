import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useEffect, React, useState } from "react";
import { addCard } from "../Api/Api.js";
import BillingInfo from "../manageAccounts/BillingInfo.js";
import toasts from "../shared/toast.js";
import { retrieveUser } from "../../actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
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

const UpdateCardDetailForm = (props) => {
  const [loading, setLoading] = useState(false);
  const { pathname } = useRouter();

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(0);

  const stripe = useStripe();
  const elements = useElements();

  const users = useSelector((state) => state.users);

  // const getCardInfo = (card) => {

  //   CardService.getCardDetail(card) //getting address detail here

  //     .then((response) => {
  //       setValues({
  //         last4: response.data.data.last4,
  //         exp: response.data.data.exp_month + "/" + response.data.data.exp_year,
  //       });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // useEffect(() => {}, []);
  // useEffect(() => {
  //   if (users && typeof users.card !== "undefined" && users.card.length > 0) {
  //     console.log(users.card[0].stripe_card_id,'test here ')
  //     getCardInfo(users.card[0].stripe_card_id);
  //   }
  // }, [!users.card]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);
    const payload = await stripe.createToken(cardElement);
    if (payload.error) {
      setLoading(false);
      toasts.notifyError(payload.error.message);
    }
    if (payload.token) {
      const json = await addCard(payload.token.id);
      if (json.status == 1) {
        setLoading(false);
        await dispatch(retrieveUser());
        toasts.notifySucces("Card Details Added Sucessfully.");
        setIsEdit(0);
      }
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div
        className={`col-xl-6 col-lg-12 ${
          pathname === "/goclub" ? "goclubInfo" : ""
        }`}
      >
        <div className="my-schedule  billing-information shipping-address">
          <div className="top-heading">
            <h3>Billing Information</h3>
            {isEdit == 0 && users.card && users?.card.length > 0 && (
              <a
                href="#"
                onClick={() => {
                  setIsEdit(1);
                }}
              >
                Edit
              </a>
            )}

            {isEdit == 1 && users?.card?.length > 0 && (
              <a
                href="#"
                onClick={() => {
                  setIsEdit(0);
                }}
              >
                Back
              </a>
            )}
          </div>
          {isEdit == 0 && users?.card?.length > 0 ? (
            <BillingInfo isUpdate={"1"}></BillingInfo>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form">
                {users?.card?.length == 0 && (
                  <p>Please enter your card details first</p>
                )}

                <lable>Credit or debit Card</lable>
                <CardNumberElement
                  className="form-control"
                  options={{
                    ...CARD_ELEMENT_OPTIONS,
                    placeholder: "Card Number",
                  }}
                />
              </div>
              <div className="doublefeilds billing_info shipping-checkoutt">
                <div className="form">
                  <lable>Expiration</lable>
                  <CardExpiryElement
                    options={{ ...CARD_ELEMENT_OPTIONS, placeholder: "MM/YY" }}
                    className="form-control"
                  />
                </div>
                <div className="form">
                  <lable>CVV</lable>
                  <CardCvcElement
                    options={CARD_ELEMENT_OPTIONS}
                    className="form-control"
                  />
                </div>
              </div>
              <div
                className={
                  pathname && pathname === "/goclub" ? "" : "card-button"
                }
              >
                <button
                  type="submit"
                  className="btn btn-light ms-0"
                  disabled={!stripe}
                >
                  Continue
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateCardDetailForm;

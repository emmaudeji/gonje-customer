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
import Loader from "../Loader.js";
import AddMoneyToWallet from "../manageAccounts/AddMoneyToWallet.js";

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

const AddMoney = ({ onCloseAddmoneyModal, getWalletInfo, stripeAmount }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(0);

  const stripe = useStripe();
  const elements = useElements();

  const users = useSelector((state) => state.users);

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
      <div className="col-xl-6 col-lg-12 add_money px-3">
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
            <AddMoneyToWallet
              onCloseAddmoneyModal={onCloseAddmoneyModal}
              isUpdate={"1"}
              getWalletInfo={getWalletInfo}
              stripeAmount={stripeAmount}
            ></AddMoneyToWallet>
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
              <div className="doublefeilds shipping-checkoutt">
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

              <button
                type="submit"
                className="btn btn-light"
                disabled={!stripe}
              >
                Continue
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default AddMoney;

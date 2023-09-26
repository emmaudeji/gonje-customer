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

const UpdateBillingInfo = ({ getCardInfo }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(0);
  const [isUpdated, seIsUpdated] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const users = useSelector((state) => state.users);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
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
        await dispatch(retrieveUser());
        toasts.notifySucces("Card Details Added Sucessfully.");

        // const updateCardDetail = getUpdateCarddetail()
        seIsUpdated(true);
      } else {
        toasts.notifyError("Your card was declined");
        seIsUpdated(true);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      users &&
      typeof users.card !== "undefined" &&
      users.card.length > 0 &&
      isUpdated
    ) {
      getCardInfo(users.card[0].stripe_card_id);
    }
  }, [isUpdated, users, getCardInfo]);

  // const getUpdateCarddetail = ()=>{
  //     const users = useSelector((state) => state.users);
  //   const card = users.card[0].stripe_card_id;
  //   return card
  // }

  return (
    <>
      {loading && <Loader />}
      <div className="col-xl-6 col-lg-12">
        <div className="my-schedule  billing-information shipping-address">
          <div className="top-heading">
            <h3>Billing Information</h3>
            {/* { isEdit == 0 && 
                    <a
                    href="#"
                    onClick={() => {
                        setIsEdit(1)
                    }}
                    >
                    Edit
                    </a>
                    }

                    { isEdit == 1 && 
                    <a
                        href="#"
                        onClick={() => {
                        setIsEdit(0);
                        }}
                    >
                        Back
                    </a>
                    } */}
          </div>
          {isEdit == 1 ? (
            <BillingInfo isUpdate={"1"}></BillingInfo>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form">
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
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="submit"
                    className="btn btn-light"
                    disabled={!stripe}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateBillingInfo;

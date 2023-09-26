import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  PayPalScriptProvider,
  BraintreePayPalButtons,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import { addMoneyToWal } from "../Api/Api";
import { useSelector } from "react-redux";
import toasts from "../shared/toast";
import Image from "next/image";
import Loader from "../Loader";
export const closeIcon = (
  <svg width={55} height={55} viewBox="0 0 55 55">
    <title>Close</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Product_detials" transform="translate(-1193.000000, -109.000000)">
        <g id="Group-4" transform="translate(326.000000, 91.000000)">
          <g id="Group-2" transform="translate(867.500000, 18.500000)">
            <g id="whh:skypebusy" fill="#D90D41" fillRule="nonzero">
              <path
                d="M13.3979837,0 C16.9819837,0 20.06144,1.23526214 22.6363526,3.70578641 C24.0629934,3.46221359 25.43744,3.34042718 26.7596924,3.34042718 C29.926139,3.34042718 32.9534012,3.95805825 35.8414788,5.19332039 C38.7295565,6.42858252 41.2174788,8.09009709 43.3052458,10.1778641 C45.3930128,12.2656311 47.0545274,14.7535534 48.2897895,17.6416311 C49.5250517,20.5297087 50.1426827,23.5569709 50.1426827,26.7234175 C50.1426827,28.0456699 50.0208963,29.4201165 49.7773235,30.8467573 C52.2478478,33.4216699 53.4831099,36.5011262 53.4831099,40.0851262 C53.4831099,43.7735146 52.1782555,46.9225631 49.5685468,49.5322718 C46.9588381,52.1419806 43.8097895,53.446835 40.1214012,53.446835 C36.5374012,53.446835 33.4579449,52.2115728 30.8830322,49.7410485 C29.4563915,49.9846214 28.0819449,50.1064078 26.7596924,50.1064078 C23.5932458,50.1064078 20.5659837,49.4887767 17.677906,48.2535146 C14.7898283,47.0182524 12.301906,45.3567379 10.214139,43.2689709 C8.12637204,41.1812039 6.46485748,38.6932816 5.22959534,35.8052039 C3.9943332,32.9171262 3.37670214,29.8898641 3.37670214,26.7234175 C3.37670214,25.401165 3.49848854,24.0267184 3.74206136,22.6000777 C1.27153709,20.025165 0.0362749515,16.9457087 0.0362749515,13.3617087 C0.0362749515,9.67332039 1.34112932,6.52427184 3.95083806,3.91456311 C6.5605468,1.30485437 9.70959534,0 13.3979837,0 Z"
                id="Shape"
              ></path>
            </g>
            <g
              id="ic:outline-cancel"
              transform="translate(12.800000, 12.663467)"
            >
              <rect
                id="ViewBox"
                x="0"
                y="0"
                width="27.648"
                height="27.648"
              ></rect>
              <path
                d="M13.824,2.304 C7.45344,2.304 2.304,7.45344 2.304,13.824 C2.304,20.19456 7.45344,25.344 13.824,25.344 C20.19456,25.344 25.344,20.19456 25.344,13.824 C25.344,7.45344 20.19456,2.304 13.824,2.304 Z M13.824,23.04 C8.74368,23.04 4.608,18.90432 4.608,13.824 C4.608,8.74368 8.74368,4.608 13.824,4.608 C18.90432,4.608 23.04,8.74368 23.04,13.824 C23.04,18.90432 18.90432,23.04 13.824,23.04 Z M17.95968,8.064 L13.824,12.19968 L9.68832,8.064 L8.064,9.68832 L12.19968,13.824 L8.064,17.95968 L9.68832,19.584 L13.824,15.44832 L17.95968,19.584 L19.584,17.95968 L15.44832,13.824 L19.584,9.68832 L17.95968,8.064 Z"
                id="Shape"
                fill="#FFFFFF"
                fillRule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
const SelectPaymentMethod = ({
  onClose,
  isOpen,
  onSelectStripe,
  amount,
  setAmount,
  getWalletInfo,
}) => {
  const [isStripe, setStripe] = useState(false);
  const [clientToken, setClientToken] = useState(null);
  const [payPalAmount, setPayPalAmount] = useState(amount);
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await (
        await fetch(
          "https://braintree-sdk-demo.herokuapp.com/api/braintree/auth"
        )
      ).json();
      setClientToken(response?.client_token || response?.clientToken);
    })();
  }, []);

  const handleApprove = async (payload) => {
    const values = {
      nonce: payload.nonce,
      wallet_id: users?.wallet?.id,
      payerId: payload?.details?.payerId,
      amount: amount,
      currency: "usd",
      payment_gateway: "paypal",
    };
    const json = await addMoneyToWal(values);
    if (json?.status == 1) {
      // setLoading(false);
      toasts.notifySucces(json.message);
      getWalletInfo(users.wallet.id);
      // onCloseAddmoneyModal();
    } else {
      setLoading(false);
      toasts.notifyError(json.message);
    }
  };

  return (
    <>
      {/* {true && <Loader />} */}
      <Modal
        open={isOpen}
        showCloseIcon={true}
        center
        onClose={onClose}
        classNames={{ modal: "payment-modal" }}
        closeIcon={closeIcon}
      >
        <div className="select-payment-popup">
          <h5 className="modal-title" id="staticBackdropLabel">
            Select payment method
          </h5>
          <input
            className="card_input"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            min={0}
          />
          <div>
            <button
              className="stripe_button"
              id={"pay"}
              onClick={() => {
                onSelectStripe(amount);
              }}
            >
              Stripe
              {/* <Image
              src="/assets/images/stripe.svg"
              height={18}
              width={100}
              alt=""
            /> */}
            </button>
            {/* {!clientToken && <Loader />} */}
            {clientToken ? (
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AX68R3pqTsCdpQ64zdd7vzoVflgReYkfFuYHzVlMKT4OQlWlbD4RzVDdQ66KiWvHmWCgqoXFT5YFnrXk",
                  "data-client-token": clientToken,
                }}
              >
                <BraintreePayPalButtons
                  forceReRender={[amount]}
                  style={{ layout: "horizontal", tagline: false }}
                  createOrder={(data, actions) => {
                    return actions.braintree.createPayment({
                      flow: "checkout",
                      amount: amount,
                      currency: "USD",
                      intent: "capture",
                    });
                  }}
                  onApprove={(data, actions) => {
                    onClose();
                    return actions.braintree
                      .tokenizePayment(data)
                      .then((payload) => {
                        // call server-side endpoint to finish the sale
                        handleApprove(payload);
                      });
                  }}
                />
              </PayPalScriptProvider>
            ) : (
              "Loading token"
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SelectPaymentMethod;

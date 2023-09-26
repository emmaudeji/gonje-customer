import { useEffect, React, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import UpdateBillingInfo from "../../components/Card/UpdateBillingInfo";
import CardService from "../../services/CardService.js";
import Giftcard from "../../services/giftCard.js";
import toasts from "../shared/toast.js";
import Loader from "../Loader";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const SelectPayment = (props) => {
  const { handlepurchase } = props;

  const [loading, setLoading] = useState(false);
  const [openSubscription, setOpenSubscription] = useState(false);

  const users = useSelector((state) => state.users);

  const onOpenSubscriptionModal = () => setOpenSubscription(true);
  const onCloseSubscriptionModal = () => setOpenSubscription(false);

  const [checkedInput, setCheckedInput] = useState(false);
  const [cardDetail, setCardDetail] = useState();
  const [disable, setDisable] = useState(false);
  const [cardText, setCardText] = useState();

  useEffect(() => {
    if (cardDetail === undefined) {
      setCardText("Add card");
      setDisable(true);
    } else {
      setCardText("Change Credit Card ending in ");
      setDisable(false);
    }
  }, [cardDetail]);

  // const card = users.card[0].stripe_card_id;

  const getCardInfo = useCallback((card) => {
    CardService.getCardDetail(card) //getting address detail here

      .then((response) => {
        // console.log("response====", response);

        setCardDetail(response.data.data.last4);
        setCheckedInput(false);
        onCloseSubscriptionModal();
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const purchase = () => {
    var data = {};
    data.user_id = users.id;
    data.user_email = users.email;
    data.amount = props.amount;
    data.source = users.card[0].stripe_card_id;
    data.customerStripeId = users.stripe_cus_id;
    data.currency = "usd";
    data.payment_gateway = "Stripe";
    if (
      data.amount === undefined ||
      data.amount === "" ||
      data.amount === "0"
    ) {
      toasts.notifyError("Amount is required to purchase giftcard");
    } else if (data.amount > 500) {
      toasts.notifyError("Amount can't be greater then 500");
    } else {
      setLoading(true);
      Giftcard.generateGiftCard(data) //getting address detail here

        .then((response) => {
          // console.log("response====", response);
          setLoading(false);
          toasts.notifySucces(response.data.message);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    if (users && typeof users.card !== "undefined" && users.card.length > 0) {
      // console.log(users.card[0].stripe_card_id, "test here ");
      getCardInfo(users.card[0].stripe_card_id);
    }
  }, [users, getCardInfo]);

  const closeIcon = (
    <svg width={55} height={55} viewBox="0 0 55 55">
      <title>Close</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Product_detials"
          transform="translate(-1193.000000, -109.000000)"
        >
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

  return (
    <>
      {loading && <Loader />}
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <div className="gift-wrap">
          <div className="top-heading">
            <h3>Select Payment Method</h3>
          </div>
          <div className="content mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onClick={onOpenSubscriptionModal}
                // checkedInput={checkedInput}
                checked={checkedInput}
                onChange={(e) => setCheckedInput(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {cardText}
                <span>{cardDetail}</span>
              </label>
            </div>
            <p>You can change your payment method in payment account page</p>
            <strong className="total">TOTAL: ${props.amount}</strong>
            <br />
            <button
              disabled={disable}
              type="button"
              className="btn btn-light w-100"
              onClick={() => {
                handlepurchase();
                purchase();
              }}
            >
              purchase
            </button>
          </div>
        </div>

        <Modal
          open={openSubscription}
          showCloseIcon={true}
          center
          onClose={() => {
            setCheckedInput(false);
            onCloseSubscriptionModal();
          }}
          classNames={{ modal: "subscriptionModal" }}
          closeIcon={closeIcon}
        >
          <div className="col-lg-12 subscription   billing-update">
            <Elements stripe={stripePromise}>
              <UpdateBillingInfo getCardInfo={getCardInfo} />
            </Elements>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SelectPayment;

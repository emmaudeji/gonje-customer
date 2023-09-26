import { useEffect, React, useState, Fragment } from "react";
import Image from "next/image";
import { shop } from "../../public/assets";
import { addIcon } from "../../public/assets";
import { useDispatch, useSelector } from "react-redux";
import toasts from "../shared/toast.js";
import CardService from "../../services/CardService.js";
import moment from "moment";

// const moment = require("moment");
import { Elements } from "@stripe/react-stripe-js";
import RedeemCard from "../../components/Card/RedeemCard";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { loadStripe } from "@stripe/stripe-js";
import AddMoney from "../Card/AddMoney";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import SelectPaymentMethod from "./select-payment-method";

const initialOptions = {
  "client-id":
    "AV1-yzLmCcOHLBar7W4Y6ZJ49hCVwxyepJ_ET6VseqNFPIAxN3NoXZB6ALNl4szemNU25lx082p4ptpY",
  currency: "USD",
  intent: "capture",
  "data-client-token":
    "ECBvP2BcQIgpJ76cTONRgScbqoJ4_wtbssLI2YHHXyWdyvAV0E5N-YTss77kOFh4bQ0Qu-Ki1lWjUyO3",
};

const AllTransactions = () => {
  // const getRedeemCardInfo = (card) => {
  //     CardService.getCardDetail(card) //getting address detail here

  //       .then((response) => {
  //         console.log("response====", response);

  //         setCardDetail(response.data.data.last4);
  //         setCheckedInput(false);
  //         onCloseSubscriptionModal();
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  const users = useSelector((state) => state.users);
  const [balance, setBalance] = useState();
  const [walletTrans, setWalletTrans] = useState([]);

  const [openSubscription, setOpenSubscription] = useState(false);

  const onOpenSubscriptionModal = () => setOpenSubscription(true);
  const onCloseSubscriptionModal = () => setOpenSubscription(false);

  const [openAddmoney, setAddmoney] = useState(false);

  const onOpenAddmoneyModal = () => setAddmoney(true);
  const onCloseAddmoneyModal = () => setAddmoney(false);
  const [isOpenStripe, setOpenStripe] = useState(false);

  const [openPaypalmoney, setPaypalmoney] = useState(false);
  const onOpenPaypalmoneyModal = () => setPaypalmoney(true);
  const onClosePaypalmoneyModal = () => setPaypalmoney(false);
  const [amount, setAmount] = useState(0);

  const getWalletInfo = (wallet_id) => {
    const data = {
      wallet_id: wallet_id,
    };
    CardService.walletDetails(data) //getting address detail here

      .then((response) => {
        setBalance(response.data.data[0].current_balance);
        setWalletTrans(response.data.data[0].wallet_transactions);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (users && typeof users.wallet !== "undefined") {
      getWalletInfo(users?.wallet?.id);
    }
  }, [users, !users.wallet]);

  const formatDate = (value) => {
    // 04 OCt, 2021.  4:30pm
    return moment(value).format("DD MMM, YYYY. HH:MM A");
  };

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
    <div className="col-xl-12 col-lg-12">
      <div className="transac-detail">
        <div className="add-mony d-flex justify-content-between">
          <div className="how-much">
            <strong>$ {balance}</strong>
            <p>Current Gonje Wallet Balance</p>
          </div>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className=" btn btn-light me-2"
              onClick={onOpenSubscriptionModal}
            >
              <Image src={addIcon} alt="" />
              REDEEM
            </button>
            <button
              type="button"
              className=" btn btn-light me-2"
              onClick={onOpenAddmoneyModal}
            >
              <Image src={addIcon} alt="" />
              ADD Money
            </button>
            {/* 
            <button
              type="button"
              className=" btn btn-light"
              onClick={onOpenPaypalmoneyModal}
            >
              <Image src={addIcon} />
              ADD Money Through Paypal
            </button> */}
          </div>
          {/* <PayPalScriptProvider
            options={{
              "client-id":
                "AV1-yzLmCcOHLBar7W4Y6ZJ49hCVwxyepJ_ET6VseqNFPIAxN3NoXZB6ALNl4szemNU25lx082p4ptpY",
            }}
          >
            <PayPalButtons style={{ layout: "horizontal" }} />
          </PayPalScriptProvider> */}
        </div>
        <div className="history">
          <div className="top-heading">
            <h3>All Transactions Details</h3>
          </div>

          {walletTrans.length > 0 ? (
            walletTrans.map((result, index) => {
              return (
                <Fragment key={`key_${index}`}>
                  <div className="list">
                    <div className="user-content d-flex">
                      <div>
                        <Image src={shop} alt="" />
                      </div>
                      <div className="shop-details">
                        {/* <strong>Nutch Grocery shop</strong> */}

                        {/* toasts */}
                        {result.transaction_id == null ? (
                          <p>Transcation ID : {result.payment_gateway}</p>
                        ) : (
                          <p>Transcation ID : {result.transaction_id}</p>
                        )}
                        <span>{formatDate(result.updated_at)}</span>
                      </div>
                    </div>
                    <div className="amount">
                      <p>${result.transaction_amount}</p>
                    </div>
                    <div className="trans-type">
                      <p>{result.transaction_status}</p>
                    </div>
                    <div className="status">
                      <p>Success</p>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              );
            })
          ) : (
            <div className="side-rght-inr">
              <div className="empty-txt">Transactions not found.</div>
            </div>
          )}
        </div>
      </div>
      {/* redeeme card*/}
      <Modal
        open={openSubscription}
        showCloseIcon={true}
        center
        onClose={() => {
          onCloseSubscriptionModal();
        }}
        classNames={{ modal: "subscriptionModal" }}
        closeIcon={closeIcon}
      >
        <div className="col-lg-12 subscription coupon-sub">
          <Elements stripe={stripePromise}>
            <RedeemCard
              getWalletInfo={getWalletInfo}
              closeModal={onCloseSubscriptionModal}
            />
          </Elements>
        </div>
      </Modal>
      {/* select payment method modal */}
      <SelectPaymentMethod
        isOpen={openAddmoney}
        getWalletInfo={getWalletInfo}
        amount={amount}
        onClose={() => {
          setAmount(0);
          onCloseAddmoneyModal();
        }}
        onSelectStripe={(money) => {
          setAmount(money);
          setOpenStripe(!isOpenStripe);
        }}
        setAmount={setAmount}
      />
      {/* // add stripe payment */}
      <Modal
        open={isOpenStripe}
        showCloseIcon={true}
        center
        onClose={() => {
          setOpenStripe(!isOpenStripe);
        }}
        classNames={{ modal: "subscriptionModal" }}
        closeIcon={closeIcon}
      >
        <div className="col-lg-12 subscription transaction-bill">
          <Elements stripe={stripePromise}>
            <AddMoney
              onCloseAddmoneyModal={() => {
                onCloseAddmoneyModal();
                setOpenStripe(!isOpenStripe);
              }}
              getWalletInfo={getWalletInfo}
              stripeAmount={amount}
            />
          </Elements>
        </div>
      </Modal>

      {/* <Modal
                open={openPaypalmoney}
                showCloseIcon={true}
                center
                onClose={() => {
                
                    onClosePaypalmoneyModal();
                }}
                classNames={{ modal: "subscriptionModal" }}
                closeIcon={closeIcon}
            >
                <div className="col-lg-12 subscription">
                

                <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider>
                </div>
            </Modal> */}
    </div>
  );
};

export default AllTransactions;

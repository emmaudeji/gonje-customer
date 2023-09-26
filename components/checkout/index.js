import Header from "../layout/Header";
import Menu from "../layout/Menu";
import { useEffect, React, useState } from "react";
import SearchTopbar from "../layout/SearchTopbar";
import YourOrder from "./YourOrder";
import BillingDetail from "./BillingDetail";
import BillingInformation from "./BillingInformation";
import UpdateCard from "../Card/UpdateCard";
import { useDispatch, useSelector } from "react-redux";
import CardService from "../../services/CardService.js";
import checkoutService from "../../services/CheckoutService";
import Loader from "../Loader";
import Router, { useRouter } from "next/router";
import { toast } from "react-toastify";
import ZipZapModal from "./ZipZapModal";


const Checkout = () => {
  const [payment, setPayment] = useState("");
  const [active, setActive] = useState(0);
  const [balance, setBalance] = useState();
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [delivery_fee, setDeliveryFee] = useState("");

  // const handleChange = (event) => {
  //   setPayment(event);
  // };

  const getWalletInfo = (wallet_id) => {
    const data = {
      wallet_id: wallet_id,
    };
    CardService.walletDetails(data) //getting address detail here
      .then((response) => {
        setBalance(response.data.data[0].current_balance);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const orderPlace = (data) => {
    setLoading(true);
    checkoutService
      .placeOrder(data)
      .then((response) => {
        if (response.data.status === 1) {
          // apiReasponse(response.data);
          if (response.data.gateway_name === "zippay") {
            window.location.replace(response.data.data);
          } else {
            toast.success("Order placed Successfully.");
            router.push("/pantry");
          }
        } else {
          toast.error(response.data.message);
        }

        // toasts.notifySucces("Order placed Successfully.");
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  useEffect(() => {
    if (users && typeof users.wallet !== "undefined") {
      getWalletInfo(users?.wallet?.id);
    }
  }, [users, !users.wallet]);

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div className="pro side-body">
        <div className="producttop top-head">

          <SearchTopbar></SearchTopbar>

        </div>

        <div className="main"></div>
        <div className="manage-account">
          <div className="top-heading">
            <h3>Checkout</h3>
          </div>
          {loading && <Loader />}
          <div className="account-info row">

            <BillingDetail
              payment={payment}
              walletBalance={balance}
              orderPlace={orderPlace}
              setDeliveryFee={setDeliveryFee}
              delivery_fee={delivery_fee}
            ></BillingDetail>

            <YourOrder delivery_fee={delivery_fee}></YourOrder>
        
            {/* <ZipZapModal />  */}
            {/* <iframe src="https://sandbox.zip.co/checkout?co=co_5lHP0DOqyqLh8VjHSSBwj6&m=039b44bb-6b55-4ae5-bd69-b257da489746"></iframe>  */}

            <div>

              {/* <div className="payment_type col-xl-6 col-lg-12 ">
                <div className="top-heading pt-2">
                  <h3>Payment Type</h3>
                </div>
                <div className="card_type">
                  <div className="me-2 mb-2">
                    Stripe:{" "}
                    <input
                      type="radio"
                      id="stripe"
                      name="stripe"
                      value="stripe"
                      checked={active == 0}
                      onClick={(e) => {
                        setActive(0);
                        handleChange(e.target.value);
                      }}
                    />
                  </div>

                  <div className="me-2 mb-2">
                    Wallet:{" "}
                    <input
                      type="radio"
                      id="wallet"
                      name="stripe"
                      value="wallet"
                      checked={active == 1}
                      onClick={(e) => {
                        setActive(1);
                        handleChange(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    PayPal:{" "}
                    <input
                      type="radio"
                      id="paypal"
                      name="stripe"
                      value="paypal"
                      checked={active == 2}
                      onClick={(e) => {
                        setActive(2);
                        handleChange(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="amount_name">Amount : ${balance}</div>
              </div> */}

              <UpdateCard></UpdateCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;


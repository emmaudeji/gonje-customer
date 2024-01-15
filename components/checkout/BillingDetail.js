import { useEffect, React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutValidation } from "../shared/Validation.js";
import CheckoutService from "../../services/CheckoutService";
import UserService from "../../services/UserService.js";
import toasts from "../shared/toast.js";
import Router from "next/router";
import Loader from "../Loader.js";
import dynamic from "next/dynamic";
import PaymentType from "./PaymentType";
import { toast } from "react-toastify";
import GooglePlaceAutoComplete from "../GooglePlaceAutoComplete.js";

const BillingDetail = (props) => {
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state.addcarts);
  const userId = useSelector((state) => state.userdetails); //getting user id
  const users = useSelector((state) => state.users);
  const [errors, setErrors] = useState({});
  const [apires, apiReasponse] = useState("");
  const [billingdetail, setBillingDetail] = useState("");
  const [values, setValues] = useState({});
  // const [delivery_fee, setDeliveryFee] = useState("");
  const [isOpen, setOpen] = useState(false);
  // const [payment, setPayment] = useState("");

  // const [clientToken, setClientToken] = useState(null);

  // console.log("cartcart=", cart);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const errors = checkoutValidation(values);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setOpen(true);
    }
  };

  const addressDetail = (users) => {
    setBillingDetail(users.data);
    setValues({
      apt: users?.address[0]?.address?.apt || "",
      address: users?.address[0]?.address?.address || "",
      username: users?.name || "",
      city: users?.address[0]?.address?.city || "",
      state: users?.address[0]?.address?.state || "",
      email: users?.email || "",
      postcode: users?.address[0]?.address?.postcode || "",
      phonenumber: users?.address[0]?.address?.phone || "",
      stripe_cus_id: users?.stripe_cus_id || "",
      stripe_card_id: users?.card[0]?.stripe_card_id || "",
      latitude: users?.address[0]?.latitude,
      longitude: users?.address[0]?.longitude,
    });
  };

  useEffect(() => {
    if (users && typeof users.card !== "undefined" && users.card.length > 0) {
      addressDetail(users);
    }
  }, [users, !users.card]);

  const callOrderApi = ({ payment, payload }) => {
    let billing_address = {};
    let shipping_address = {};
    if (Object.keys(errors).length === 0 && values.username) {
      if (cart && cart.data) {
        (billing_address.postcode = values.postcode),
          (billing_address.apt = values.apt),
          (billing_address.city = values.city),
          (billing_address.state = values.state),
          (billing_address.address = values.address),
          (billing_address.phone = values.phonenumber);

        let Collected_data = {
          billing_address: billing_address,
          shipping_address: billing_address,
          payment_id: "",
          payment_gateway: payment,
          user_id: userId,
          customer_contact: billingdetail
            ? billingdetail.address.phone
            : values.phonenumber,
          coupon_id: 1,
          total: cart.subTotal,
          shop_id: cart.data[0].shop_id,
          discount: 0,
          delivery_fee: props.delivery_fee,
          latitude: values?.latitude,
          longitude: values?.longitude,
        };

        if (payment === "stripe") {
          Collected_data.source = values.stripe_card_id;
          Collected_data.customerStripeId = values.stripe_cus_id;
        }
        if (payment === "zippay") {
          // Collected_data.wallet_id = users.wallet.id;
          console.log(" ZIPPAY=", payload)
        }

        if (payment === "wallet") {
          Collected_data.wallet_id = users.wallet.id;
        }
        if (payment === "paypal") {
          // Collected_data.nonce = payload.nonce;
          // Collected_data.payerId = payload.details.payerId;
          console.log(" PAYPAL===", payload)
        }
        props.orderPlace(Collected_data);
        // orderPlace(Collected_data);
        setLoading(true);
      }
    }
  };

  const setGoogleAddreesObj = (obj) => {
    setValues({
      ...values,
      city: obj?.city || "",
      address: obj?.formattedAddress || "",
      state: obj?.state || "",
      postcode: obj?.zip || "",
      latitude: obj?.lat || "",
      longitude: obj?.lng || "",
    });
  };

  return (
    <>
      {/* {loading && <Loader />} */}
      <div className="col-xl-6 col-lg-12">
        <div className="my-schedule shipping-address check-final">
          <div className="top-heading">
            <h3>Billing Details</h3>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="form">
            
            <div className="mb-1 flex rounded bg-[#f7d594] ">
                <p className="pl-4 py-2">Username:</p>
                <input
                  type="text"
                  className="w-full p-2 overflow-"
                  placeholder=""
                  name="username"
                  onChange={handleChange}
                  value={values.username}
                />
              </div>
              {errors.username ? (
                <div className="shipping_error mb-2">{errors.username}</div>
              ) : null}
              
              <div className="mb-1 flex gap-2 rounded bg-[#f7d594] ">
              <p className="pl-4 py-2">Email:</p>
                <input
                  type="text"
                  className="w-full p-2"
                  placeholder=""
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              {errors.email ? (
                <div className="shipping_error mb-2">{errors.email}</div>
              ) : null}
              
              <div className="mb-1 flex gap-2 rounded bg-[#f7d594] ">
              <p className="pl-4 py-2 ">PhoneNumber:</p>
                <input
                  type="text"
                  className="w-full p-2"
                  name="phonenumber"
                  onChange={handleChange}
                  placeholder=""
                  value={values.phonenumber}
                />
              </div>
              {errors.phonenumber ? (
                <div className="shipping_error mb-2">{errors.phonenumber}</div>
              ) : null}
              
              {/* <div className="mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apt, Suite, etc"
                  name="apt"
                  onChange={handleChange}
                  value={values.apt}
                />
              </div> */}

              <div className="mb-2">
                <GooglePlaceAutoComplete
                  locationData={{
                    latLngA: {
                      lat: parseFloat(values?.latitude),
                      lng: parseFloat(values?.longitude),
                    },
                    latLngB: {
                      lat: parseFloat(cart?.shop_location?.latitude),
                      lng: parseFloat(cart?.shop_location?.longitude),
                    },
                  }}
                  setGoogleAddreesObj={setGoogleAddreesObj}
                  setNewAddress={() => {}}
                  setDeliveryFee={props.setDeliveryFee}
                />
              </div>

              <div className="mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apt, Suite, etc"
                  name="apt"
                  onChange={handleChange}
                  value={values.apt}
                />
              </div>
              {errors.apt ? (
                <div className="shipping_error mb-2">{errors.apt}</div>
              ) : null}
              <div className="mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                />
              </div>
              {errors.address ? (
                <div className="shipping_error mb-2">{errors.address}</div>
              ) : null}
              <div className="mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                  value={values.city}
                />
              </div>
              {errors.city ? (
                <div className="shipping_error mb-2">{errors.city}</div>
              ) : null}
              <div className="mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  name="state"
                  onChange={handleChange}
                  value={values.state}
                />
              </div>
              {errors.state ? (
                <div className="shipping_error mb-2">{errors.state}</div>
              ) : null}

              <div className="mb-1">
                <input
                  type="text"
                  className="form-control mb-1"
                  name="postcode"
                  placeholder="Postal Code"
                  onChange={handleChange}
                  value={values.postcode}
                />

                {errors.postcode ? (
                  <div className="shipping_error mb-2">{errors.postcode}</div>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={
                  cart.subTotal < 50
                  // ||
                  // (props.payment == "wallet" &&
                  //   users.wallet.current_balance < cart.subTotal)
                }
                className="btn "
              >
                PLACE ORDER
              </button>
            </div>
          </form>
        </div>
      </div>

      
      <PaymentType
        walletBalance={props.walletBalance}
        deliveryFee={props.delivery_fee}
        onClose={() => {
          setOpen(!isOpen);
        }}
        amount={cart.subTotal}
        userShippingDetails={values}
        isOpen={isOpen}
        callOrderApi={callOrderApi}
      />
    </>
  );
};
export default BillingDetail;

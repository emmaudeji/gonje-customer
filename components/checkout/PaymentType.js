import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { closeIcon } from "../wallet/select-payment-method";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import PayPal from "./PayPalButton";
import StripePay from "./StripeCheckout";

const PaymentType = ({
  isOpen,
  onClose,
  walletBalance,
  deliveryFee,
  amount,
  callOrderApi,
  userShippingDetails,
}) => {
  const [clientToken, setClientToken] = useState(true);
  const cart = useSelector((state) => state.addcarts);
  const user = JSON.parse(localStorage.getItem("user_detail"));
  return (
    <Modal
      open={isOpen}
      showCloseIcon={true}
      center
      onClose={onClose}
      classNames={{ modal: "payment-modal" }}
      closeIcon={closeIcon}
    >
      <div className="payment_type ">
        <div className="top-heading pt-2">
          <h3>Select Payment Type</h3>
        </div>

        <div className="amount_name">Wallet Balance Amount : ${amount}</div>

        <div className="grid gap-2">
          {/* stripe ===== */}
          <button
            className="text-white font-semibold capitalize text-lg"
            id={"pay"}
            disabled={walletBalance < amount + deliveryFee}
            onClick={() => {
              callOrderApi({ payment: "stripe" });
              onClose();
            }}
          >
            <StripePay
              className="stripe_button"
              id="pay"
              amount={amount}
              deliveryFee={deliveryFee}
              items={cart?.data}
              user={user}
              userShippingDetails={userShippingDetails}
            />
          </button>

          {/* Wallet pay ==== */}
          <button
            className="wallet_bttn stripe_button"
            id={"pay"}
            disabled={walletBalance < amount + deliveryFee}
            onClick={() => {
              callOrderApi({ payment: "wallet" });
              onClose();
            }}
          >
            Wallet
          </button>

          {/* Zip pay ==== */}
          <button
            className="wallet_bttn stripe_button"
            id={"pay"}
            disabled={walletBalance < amount + deliveryFee}
            onClick={() => {
              callOrderApi({ payment: "zippay" });
              onClose();
            }}
          >
            Zip Pay
          </button>

          {/* Paypal === */}
          <button
            disabled={walletBalance < amount + deliveryFee}
            className="h-10"
          >
            <PayPal
              callOrderApi={callOrderApi}
              walletBalance={walletBalance}
              amount={amount}
              deliveryFee={deliveryFee}
            />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentType;

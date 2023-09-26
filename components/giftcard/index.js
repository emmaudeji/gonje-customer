import { useEffect, React, useState } from "react";
import Menu from "../layout/Menu";
import ChooseAmount from "./chooseAmount";
import GiftCard from "./giftCard";
import GiftVoucher from "./giftVoucher";
import SelectPayment from "./selectPayment";
import SendTo from "./sendTo";
import SearchTopbar from "../layout/SearchTopbar";
import Header from "../layout/Header";
import toasts from "../shared/toast.js";

const Giftcard = () => {
  const [amount, setcrAmount] = useState(50);

  const handlepurchase = () => {
    // if(amount === undefined || amount === ""){
    //     toasts.notifyError("Amount is required to purchase giftcard")
    // }else if(amount>500){
    //     toasts.notifyError("Amount can't be greater then 500")
    // }
    // const amountV1 = amount
  };

  // console.log("amount===",amount)

  return (
    <>
      <Header />
      <Menu />
      <div className="pro side-body">
        <div className="producttop top-head">
          <SearchTopbar />
        </div>

        <div className="gift">
          <GiftCard />
          <div className="row my-4">
            <ChooseAmount setcrAmount={setcrAmount} />
            <GiftVoucher />
          </div>
          <div className="row">
            <SendTo />
            <SelectPayment handlepurchase={handlepurchase} amount={amount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Giftcard;

import { useEffect, React, useState } from "react";
import CardService from "../../services/CardService.js";
import toasts from "../shared/toast.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader.js";

const RedeemCard = ({ getWalletInfo, closeModal }) => {
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const coupon_code_value = event.target.elements.coupon_code.value;
    const data = {
      coupon_code: coupon_code_value,
      wallet_id: users?.wallet?.id,
    };
    CardService.RedeemGiftCard(data)
      .then((response) => {
        if (response.data.status == 1) {
          setLoading(false);
          getWalletInfo(response.data.wallet_id);
          toasts.notifySucces(response.data.message);
          closeModal();
        } else {
          // closeModal()
          setLoading(false);
          toasts.notifyError(response.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="col-xl-6 col-lg-12 coupon_card">
        <div className="my-schedule  billing-information shipping-address">
          <div className="top-heading">
            <h3>Coupon Card</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="feilds">
              <lable>Coupon Card</lable>

              <input
                className="customInput"
                type="text"
                placeholder="Coupon Card"
                name="coupon_code"
                required
              />
            </div>

            <button type="submit" className="btn btn-light">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RedeemCard;

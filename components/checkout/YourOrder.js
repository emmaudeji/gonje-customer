import Image from "next/image";
import { useEffect, React, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listingCartProduct } from "../../actions/addcarts.js";

const YourOrder = ({ delivery_fee }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userdetails);
  const cart = useSelector((state) => state.addcarts);
  // console.log("delivery_feedelivery_fee=", delivery_fee);
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("user_detail"));

    dispatch(listingCartProduct({ user_id: users.user_id }))
      .then((data) => {
        // apiReasponse(data);
        // successMsg("");
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch]);

  // console.log("delivery_fee", delivery_fee);

  return (
    <>
      <div className="col-xl-6 col-lg-12">
        <div className="my-schedule shipping-address checkout">
          <div className="top-heading">
            <h3>Your Order</h3>
            <p>Subtotal</p>
          </div>
          <div className="add-items">
            {cart.data &&
              cart.data.map((result, index) => (
                <Fragment key={index}>
                  <div className="w-100 d-flex align-items-center justify-content-between">
                    <div className="item-name d-flex">
                      <div className="item-c">
                        <Image
                          className="img-fluid"
                          src={result.productImage}
                          alt=""
                          height={100}
                          width={100}
                        />
                      </div>
                      <div>
                        {" "}
                        <h4>{result.productName}</h4>
                        <span>{result.productQuantity}</span>
                      </div>
                    </div>
                    <strong>${result.productPrice}</strong>
                  </div>
                  <hr className="w-100" />
                </Fragment>
              ))}

            <div className="total-amount fdfdd">
              <strong>Delivery Fee</strong>
              <span>${delivery_fee ? delivery_fee : 0} </span>
            </div>

            <div className="total-amount fdfdd">
              <strong>Total</strong>
              <span>
                $
                {cart?.subTotal
                  ? delivery_fee
                    ? delivery_fee + cart.subTotal
                    : cart.subTotal
                  : 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default YourOrder;

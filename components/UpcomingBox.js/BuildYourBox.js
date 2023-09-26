import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartProduct, listingCartProduct } from "../../actions/addcarts";
import { retrieveCount } from "../../actions/carts";
import Loader from "../Loader";
import BoxItem from "./BoxItem";

const BuildYourBox = () => {
  const [cartData, setCartData] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const userDeatail = JSON.parse(localStorage.getItem("user_detail"));
    setLoading(true);
    dispatch(listingCartProduct({ user_id: userDeatail?.user_id })).then(
      (res) => {
        if (res.status === 1) {
          setCartData(res);
        }
        setLoading(false);
      }
    );
  }, [dispatch]);

  const updateToCart = ({ quantity, productID, shop_id, value }) => {
    const userDeatail = JSON.parse(localStorage.getItem("user_detail"));
    const userId = userDeatail.user_id;
    if (value == 0) {
      quantity = quantity - 1;
    } else if (value == 1) {
      quantity = quantity + 1;
    } else {
      quantity = 0;
    }
    setLoading(true);
    dispatch(
      addCartProduct({
        user_id: userId,
        product_id: productID,
        shop_id: shop_id,
        product_quantity: quantity,
      })
    )
      .then((data) => {
        if (data.status) {
          dispatch(listingCartProduct({ user_id: userDeatail?.user_id })).then(
            (res) => {
              if (res.status === 1) {
                setCartData(res);
              }
              setLoading(false);
            }
          );
        }

        dispatch(retrieveCount(data.cart_count));
        // successMsg(data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="notifications upcoming-box">
        <div className="row">
          <div className="col-xl-10 col-lg-12 col-md-12 mx-auto">
            <div className="outer-layer-noti">
              <div className="top-heading">
                <h3>Build your box</h3>
              </div>
              <div className="place-order">
                <div className="add-more text-center">
                  <p>Add More to place your order</p>
                </div>
                <div className="subtotal-box p-3 pb-0 d-flex justify-content-end">
                  <strong>
                    Subtotal: <span>${cartData?.subTotal}</span>
                  </strong>
                </div>
                <div className="row p-lg-4 up-box-item">
                  {cartData?.data?.map((item) => {
                    return (
                      <Fragment key={item.productID}>
                        <BoxItem item={item} updateToCart={updateToCart} />
                      </Fragment>
                    );
                  })}
                </div>
                <p className="text-center">
                  {" "}
                  <span style={{ color: "#70AB4B" }}>$50 </span> Order Minimum
                </p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "35%", backgroundColor: "#FF2020" }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar "
                    role="progressbar"
                    style={{ width: "35%", backgroundColor: "#FFCC20" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar "
                    role="progressbar"
                    style={{ width: "30%", backgroundColor: "#70AB4B" }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="progress bg-white mt-2">
                  <div
                    className="progress-bar bg-white "
                    role="progressbar"
                    style={{ width: "30%", textAlign: "end", color: "#000" }}
                  >
                    $50
                  </div>
                  <div
                    className="progress-bar bg-white "
                    role="progressbar"
                    style={{ width: "30%", textAlign: "end", color: "#000" }}
                  >
                    $75
                  </div>
                  <div
                    className="progress-bar bg-white "
                    role="progressbar"
                    style={{ width: "30%", textAlign: "end", color: "#000" }}
                  >
                    $150
                  </div>
                </div>
                <div className="color-indexed d-flex mt-3">
                  <div className="red">
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 10 10"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="My-cart"
                          transform="translate(-1292.000000, -819.000000)"
                          fill="#FF2020"
                        >
                          <g
                            id="Group-16"
                            transform="translate(1292.967241, 814.236434)"
                          >
                            <circle
                              id="Oval"
                              cx="4.37764197"
                              cy="10"
                              r="4.37764197"
                            ></circle>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>Checkout Activation</span>
                  </div>
                  <div className="yellow">
                    <svg
                      width="10px"
                      height="10px"
                      viewBox="0 0 10 10"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="My-cart"
                          transform="translate(-1436.000000, -819.000000)"
                          fill="#FFCC20"
                        >
                          <g
                            id="Group-15"
                            transform="translate(1436.723403, 814.236434)"
                          >
                            <circle
                              id="Oval"
                              cx="4.37764197"
                              cy="10"
                              r="4.37764197"
                            ></circle>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>Free Product Activation</span>
                  </div>
                  <div className="green">
                    <svg
                      width="9px"
                      height="9px"
                      viewBox="0 0 9 9"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="My-cart"
                          transform="translate(-1366.000000, -845.000000)"
                          fill="#70AB4B"
                        >
                          <g
                            id="Group-14"
                            transform="translate(1366.032726, 840.481208)"
                          >
                            <circle
                              id="Oval"
                              cx="4.37764197"
                              cy="9"
                              r="4.37764197"
                            ></circle>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>Free Delivery Activation</span>
                  </div>
                </div>
                {/* <p className="text-center">$50 Order Minimum</p> */}
                <div className="text-center mt-5">
                  <button
                    type="button"
                    disabled={cartData ? cartData?.subTotal < 50 : true}
                    className="btn  w-50"
                    onClick={() => {
                      router.push("/checkout");
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildYourBox;

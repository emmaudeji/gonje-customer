import { useEffect, React, useState } from "react";
import Link from "next/link";
import { listingCartProduct } from "../../actions/addcarts.js";
import { useDispatch, useSelector } from "react-redux";
import { addCartProduct } from "../../actions/addcarts.js";
import { retrieveCount } from "../../actions/carts.js";
import Countdown from "react-countdown";
import moment from "moment";
// var moment = require("moment");
// require("moment-duration-format");
import { retrieveUser } from "../../actions/users";

import UserDataService from "../../services/UserService";
import Image from "next/image";


// fake data to be deleted later
const fakedata = {
  productID: 134,
  productImage : "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/456/conversions/haven_storage-thumbnail.jpg",
  productName : "Haven Storage Semi Double Bed",
  productPrice : 30,
  productQuantity : 1,
  productSubTotalPrice: 30,
  shop_id: 1
}

export default function CartPopup({ onCloseCartModal }) {
  const [apires, apiReasponse] = useState("");
  const [successmsg, successMsg] = useState("");

  const [timer, setTimer] = useState();

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userdetails);
  const users = useSelector((state) => state.users);

  // useEffect(() => {
  //   apiReasponse(apires.append(fakedata))
  // }, [apires])
  

  const updateToCart = (quantity, productID, shop_id, value) => {
    if (value == 0) {
      quantity = quantity - 1;
    } else if (value == 1) {
      quantity = quantity + 1;
    } else {
      quantity = 0;
    }
    dispatch(
      addCartProduct({
        user_id: userId,
        product_id: productID,
        shop_id: shop_id,
        product_quantity: quantity,
      })
    )
      .then((data) => {
        console.log(data.message);
        dispatch(retrieveCount(data.cart_count));
        successMsg(data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    UserDataService.get()
      .then((response) => {
        const fullDaysSeconds = moment.duration("24:0:0").asSeconds();
        const currentTimeSeconds = moment
          .duration(moment(response.data.current_time).format("HH:mm:ss"))
          .asSeconds();
        const timerSeconds = fullDaysSeconds - currentTimeSeconds;

        var duration = moment.duration(timerSeconds, "seconds");
        var formatted = duration.format("HH:mm:ss");
        setTimer(formatted);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    dispatch(listingCartProduct({ user_id: userId }))
      .then((data) => {
        if (data.status === 1) {
          // console.log('ddddd', data)
          const updatedList = [...data.data, fakedata]
          apiReasponse(data);
        }
        successMsg("");
      })
      .catch((e) => {
        console.log(e);
      });
  }, [successmsg, dispatch]);

  return (
    <>
      <div
        className="cart modal1 fade1"
        id="cart"
        tabIndex="-1"
        onClick={(e) => {
          e.stopPropagation();
          onCloseCartModal();
        }}
      >
        <div
          className="modal-dialog modal-dialog-scrollable"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                onClick={(e) => {
                  onCloseCartModal();
                }}
              ></button>
            </div>
            <div className="title">
              <div className="top-heading">
                <h3>Your Cart</h3>
              </div>
            </div>
            <div className="total-item">
              <p>{apires.itemCount} Items</p>
              <p className="total-amount">${apires.subTotal} Subtotal</p>
            </div>
            <div className="modal-body">
              {apires.data &&
                apires.data.map((result, index) => (
                  
                  <div
                    className="buy-item my-2 d-flex justify-content-between"
                    key={index}
                  >
                    <div className="d-flex cart-list-item">
                    {console.log('cartttt', result) }
                      <div className="item-wrap">
                        {result?.productImage && (
                          <Image
                            src={result.productImage}
                            alt=""
                            height={60}
                            width={100}
                          />
                        )}
                      </div>
                      <div className="add-del">
                        <p>{result.productName}</p>
                        <div className="add">
                          <a
                            href="#"
                            onClick={() => {
                              updateToCart(
                                result.productQuantity,
                                result.productID,
                                result.shop_id,
                                2
                              );
                            }}
                          >
                            <svg
                              width="12px"
                              height="16px"
                              viewBox="0 0 12 16"
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
                                  transform="translate(-1367.000000, -176.000000)"
                                  fill="#000000"
                                  fillRule="nonzero"
                                >
                                  <g
                                    id="ic:outline-delete-outline"
                                    transform="translate(1367.000000, 176.286009)"
                                  >
                                    <path
                                      d="M1.26,13.59 C1.26,14.481 1.989,15.21 2.88,15.21 L9.36,15.21 C10.251,15.21 10.98,14.481 10.98,13.59 L10.98,3.87 L1.26,3.87 L1.26,13.59 Z M2.88,5.49 L9.36,5.49 L9.36,13.59 L2.88,13.59 L2.88,5.49 Z M8.955,1.44 L8.145,0.63 L4.095,0.63 L3.285,1.44 L0.45,1.44 L0.45,3.06 L11.79,3.06 L11.79,1.44 L8.955,1.44 Z"
                                      id="Shape"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <span>{result.productQuantity}</span>

                          <a
                            href="#"
                            onClick={() => {
                              updateToCart(
                                result.productQuantity,
                                result.productID,
                                result.shop_id,
                                0
                              );
                            }}
                          >
                            -
                          </a>

                          <a
                            href="#"
                            onClick={() => {
                              updateToCart(
                                result.productQuantity,
                                result.productID,
                                result.shop_id,
                                1
                              );
                            }}
                          >
                            +
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <span>${result.productPrice}</span>
                    </div>
                  </div>
                ))}
            </div>

            <div className="modal-footer d-block">
              <div className="min-order">
                <div className="cart-timer text-center d-flex justify-content-center align-items-center">
                  <svg
                    width="19px"
                    height="19px"
                    viewBox="0 0 19 19"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g
                        id="My-cart"
                        transform="translate(-1364.000000, -675.000000)"
                        stroke="#000000"
                        strokeWidth="2"
                      >
                        <g
                          id="Group-18"
                          transform="translate(1364.000000, 671.000000)"
                        >
                          <g
                            id="akar-icons:clock"
                            transform="translate(0.000000, 4.000000)"
                          >
                            <g
                              id="Group"
                              transform="translate(1.583333, 1.583333)"
                            >
                              <circle
                                id="Oval"
                                cx="7.91666667"
                                cy="7.91666667"
                                r="7.91666667"
                              ></circle>
                              <path
                                d="M10.2916667,11.0833333 L8.38058333,9.17225 C8.08363016,8.87538651 7.91675634,8.47272512 7.91666667,8.05283333 L7.91666667,3.16666667"
                                id="Path"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  {/* <p className="ps-2 mb-0">1112:20:10 Hours</p> */}

                  {moment(timer, "HH:mm:ss", true).isValid() ? (
                    <Countdown
                      date={
                        Date.now() + moment.duration(timer).asMilliseconds()
                      }
                      renderer={({ hours, minutes, seconds }) => {
                        return (
                          <span className="ml-5">
                            {hours}:{minutes}:{seconds}
                          </span>
                        );
                      }}
                    />
                  ) : (
                    timer
                  )}
                </div>
                <hr />
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
                <div className="color-indexed d-flex">
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
              <Link
                href={{
                  pathname: "/checkout",
                }}
              >
                <button
                  type="button"
                  className="btn btn-light w-100"
                  disabled={apires ? apires.subTotal < 50 : true}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

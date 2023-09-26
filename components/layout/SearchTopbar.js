import Router from "next/router";
import { useEffect, React, useState } from "react";
import CartPopup from "./CartPopup";
import CartService from "../../services/CartService";
import MenuToggle from "./MenuToggle";
import { useDispatch, useSelector } from "react-redux";
import { storeUserDetail } from "../../actions/userdetails.js";
import { retrieveUser } from "../../actions/users";
import { retrieveCount } from "../../actions/carts.js";
import CartCount from "./CartCount";
import DropDownMenu from "./DropDownMenu";
import Image from "next/image";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import NotificationToast from "../NotificationToast";
import AppConfig from "../../configs/AppConfig";
import { getNotifications } from "../../actions/getNotifications";

export default function SearchTopbar() {
  const [is_toggle, set_is_toggle] = useState(false);

  const [opencart, openCart] = useState(false);
  const onOpenCartModal = () => openCart(true);
  const onCloseCartModal = () => openCart(false);
  const user = useSelector((state) => state.users);
  const unreadNotificationCount = useSelector((state) => {
    return state.notificationReducer.unreadCount;
  });
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.userdetails);

  const toggleStyle = {
    position: "absolute",
    inset: "0px auto auto 0px",
    margin: "0px",
    transform: "translate(-8px, 50px)",
  };
  const toggleDropdown = () => {
    set_is_toggle(!is_toggle);
  };
  const logout = () => {
    localStorage.clear("user_detail");
    Router.push("/");
  };

  const getCartCount = (userID) => {
    //getting cart count here
    CartService.getCount({ user_id: userID })
      .then((response) => {
        dispatch(retrieveCount(response.data.cartProductsCount));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    // console.log("localstorage=======",localStorage.getItem("user_detail"))
    const user = JSON.parse(localStorage.getItem("user_detail"));

    if (user && user.token) {
      dispatch(storeUserDetail(user.user_id));
    }

    getCartCount(userId);
  }, [userId]);

  useEffect(() => {
    const baseURL = AppConfig.socket_url;
    const socketInit = io(baseURL);
    const user_detail = JSON.parse(localStorage.getItem("user_detail"));
    socketInit.emit("connectCustomerRoom", { id: user_detail.user_id });
    socketInit.on("connectCustomerRoom", (data) => {
      console.log("heeeeee", data);
    });
    socketInit.on("statusChange", function (msg) {
      toast.success(<NotificationToast body={msg} />);
    });

    return () => {
      console.log("heeeeee clear set up");
      socketInit.emit("disconnectCustomerRoom", { id: user_detail.user_id });
    };
  }, []);

  useEffect(() => {
    dispatch(retrieveUser());
    if (unreadNotificationCount === undefined) {
      dispatch(getNotifications({ page: 1 }))
        .then((res) => {})
        .catch((e) => {
          console.log(e);
        });
    }
  }, [dispatch]);

  return (
    <>
      {is_toggle && (
        <div
          className="profile_dropdown_overlay"
          onClick={() => {
            set_is_toggle(!is_toggle);
          }}
        />
      )}
      <div className="products-head">
        <div className="menu">
          <div className="sm-logo">
            <Image
              src="/assets/images/logo.png"
              height={85}
              width={140}
              alt=""
            />
          </div>

          <MenuToggle></MenuToggle>
        </div>

        <div className="search d-flex">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 25 25"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <filter id="filter-1">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0 0 0 0 0.717476 0 0 0 0 0.717476 0 0 0 0 0.717476 0 0 0 1.000000 0"
                ></feColorMatrix>
              </filter>
            </defs>
            <title>noti wefger</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="carbon:search"
                transform="translate(-278.000000, -33.000000)"
                filter="url(#filter-1)"
              >
                <g transform="translate(278.000000, 33.000000)">
                  <rect id="ViewBox" x="0" y="0" width="25" height="25"></rect>
                  <path
                    d="M22.65625,21.5515625 L16.75625,15.6515625 C19.7015885,12.1156323 19.3447838,6.88846095 15.946281,3.78555905 C12.5477782,0.682657153 7.30979525,0.80167397 4.05573461,4.05573461 C0.80167397,7.30979525 0.682657153,12.5477782 3.78555905,15.946281 C6.88846095,19.3447838 12.1156323,19.7015885 15.6515625,16.75625 L21.5515625,22.65625 L22.65625,21.5515625 Z M3.125,10.15625 C3.125,6.27299785 6.27299785,3.125 10.15625,3.125 C14.0395021,3.125 17.1875,6.27299785 17.1875,10.15625 C17.1875,14.0395021 14.0395021,17.1875 10.15625,17.1875 C6.27478268,17.1831944 3.12930557,14.0377173 3.125,10.15625 L3.125,10.15625 Z"
                    id="Shape"
                    fill="#000000"
                    fillRule="nonzero"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <input
            type="text"
            className="form-control seach"
            id="exampleFormControlInput1"
            placeholder="Search.."
          />
        </div>

        <div className="wrapper d-flex">
          <div className="noti dropdown">
            <a
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => {
                Router.push("/notifications");
              }}
            >
              {" "}
              <Image
                src="/assets/images/notifications.svg"
                width={20}
                height={20}
                alt=""
              />
            </a>
            <p>{unreadNotificationCount}</p>
          </div>
          {/* <div className="choose-lang">
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT">EN</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div> */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-target="#cart"
            onClick={() => {
              onOpenCartModal();
            }}
          >
            <svg
              width="26px"
              height="23px"
              viewBox="0 0 26 23"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>cart</title>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dashboard-products"
                  transform="translate(-1299.000000, -33.000000)"
                  fillRule="nonzero"
                >
                  <g
                    id="Group-14"
                    transform="translate(1288.941317, 23.500000)"
                  >
                    <g
                      id="remove-cart"
                      transform="translate(11.000000, 10.000000)"
                    >
                      <circle
                        id="Oval"
                        fill="#0B4870"
                        cx="7.93608"
                        cy="19.29352"
                        r="1.87512"
                      ></circle>
                      <circle
                        id="Oval"
                        fill="#0B4870"
                        cx="21.46192"
                        cy="19.29352"
                        r="1.87512"
                      ></circle>
                      <path
                        d="M23.40792,16.23416 C23.40792,16.46152 23.31568,16.6684 23.16552,16.81872 C23.01648,16.9692 22.8096,17.0612 22.58056,17.0612 L8.73896,17.0612 C8.3348,17.0612 7.99296,16.80216 7.87,16.44072 L7.85496,16.39648 L7.54048,15.40664 L3.45592,2.5812 L3.27248,2.0048 C3.13448,1.5692 3.37424,1.10432 3.81024,0.96512 C3.89296,0.93872 3.9784,0.92624 4.06112,0.92624 C4.41144,0.92624 4.73688,1.14984 4.85016,1.50296 L5.00064,1.97544 L5.53392,3.64872 L6.06096,5.30344 L8.75416,13.7628 L9.08928,14.8136 C9.20376,15.12936 9.48776,15.36376 9.8324,15.40672 L22.58048,15.40672 C23.0372,15.40664 23.40792,15.776 23.40792,16.23416 Z"
                        id="Path"
                        fill="#D3D3D3"
                      ></path>
                      <path
                        d="M23.4076,5.81648 L23.4076,11.59488 C23.4076,12.79176 22.43856,13.7624 21.24168,13.7624 L8.75408,13.7624 L6.0612,5.30304 L23.19192,5.30304 C23.24368,5.30304 23.29408,5.29848 23.34368,5.28944 C23.38576,5.45792 23.4076,5.63464 23.4076,5.81648 Z"
                        id="Path"
                        fill="#2A94F4"
                      ></path>
                      <path
                        d="M5.35392,1.66384 C5.35392,1.89288 5.2616,2.09976 5.11136,2.24872 C4.9624,2.39904 4.75552,2.49136 4.52656,2.49136 L0.872,2.49136 C0.41544,2.49136 0.04456,2.1204 0.04456,1.66384 C0.04456,1.43496 0.13688,1.22808 0.2872,1.07912 C0.43616,0.9288 0.64296,0.83648 0.872,0.83648 L4.52656,0.83648 C4.98304,0.83648 5.35392,1.2076 5.35392,1.66384 Z M18.18552,7.4824 L18.18552,11.49424 C18.18552,11.95048 17.81408,12.32112 17.35768,12.32112 C17.1292,12.32112 16.92248,12.22864 16.7736,12.07832 C16.62328,11.93016 16.53072,11.72272 16.53072,11.49424 L16.53072,7.4824 C16.53072,7.02616 16.90136,6.65552 17.35768,6.65552 C17.58704,6.65552 17.79368,6.748 17.94264,6.89832 C18.09304,7.04712 18.18552,7.254 18.18552,7.4824 Z M11.04256,7.4824 L11.04256,11.49424 C11.04256,11.95048 10.67192,12.32112 10.2148,12.32112 C9.98624,12.32112 9.77952,12.22864 9.63064,12.07832 C9.48024,11.93016 9.38776,11.72272 9.38776,11.49424 L9.38776,7.4824 C9.38776,7.02616 9.7584,6.65552 10.2148,6.65552 C10.44408,6.65552 10.65088,6.748 10.80048,6.89832 C10.95016,7.04712 11.04256,7.254 11.04256,7.4824 Z M14.56032,7.4824 L14.56032,11.49424 C14.56032,11.95048 14.18888,12.32112 13.73256,12.32112 C13.50408,12.32112 13.29728,12.22864 13.1476,12.07832 C12.99728,11.93016 12.9056,11.72272 12.9056,11.49424 L12.9056,7.4824 C12.9056,7.02616 13.27624,6.65552 13.73256,6.65552 C13.96184,6.65552 14.16856,6.748 14.31752,6.89832 C14.46792,7.04712 14.56032,7.254 14.56032,7.4824 Z M21.91824,7.4824 L21.91824,11.49424 C21.91824,11.95048 21.54768,12.32112 21.09128,12.32112 C20.8628,12.32112 20.65528,12.22864 20.50632,12.07832 C20.35592,11.93016 20.26352,11.72272 20.26352,11.49424 L20.26352,7.4824 C20.26352,7.02616 20.63488,6.65552 21.09128,6.65552 C21.31976,6.65552 21.52728,6.748 21.67624,6.89832 C21.82576,7.04712 21.91824,7.254 21.91824,7.4824 Z M10.3808,16.30584 C10.54568,16.46488 10.63024,16.67488 10.6332,16.88648 C10.638,17.09808 10.5608,17.3112 10.40168,17.47584 L8.92608,19.0052 C8.6092,19.3336 8.08464,19.34288 7.75624,19.026 C7.59136,18.86696 7.5064,18.65696 7.50376,18.44536 C7.49904,18.23368 7.57632,18.02064 7.7352,17.856 L9.2108,16.3268 C9.52768,15.99832 10.05232,15.98896 10.3808,16.30584 Z M21.51504,16.07432 C21.744,16.07088 21.95208,16.1604 22.10328,16.30824 C22.25584,16.45496 22.35128,16.66056 22.35456,16.88952 L22.38584,19.01448 C22.39248,19.47072 22.02712,19.84696 21.57064,19.85368 C21.34168,19.85712 21.13336,19.76792 20.98248,19.61976 C20.82984,19.47304 20.7344,19.26744 20.73104,19.03864 L20.69984,16.91376 C20.69304,16.45744 21.05856,16.08104 21.51504,16.07432 Z M24.0188,4.476 C24.0188,4.70456 23.92632,4.91208 23.77592,5.06096 C23.66088,5.17736 23.51128,5.25864 23.34368,5.28936 C23.29408,5.2984 23.24368,5.30296 23.19192,5.30296 L6.0612,5.30296 L5.53408,3.64888 L23.19192,3.64888 C23.64816,3.64896 24.0188,4.01976 24.0188,4.476 Z"
                        id="Shape"
                        fill="#0E538C"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <CartCount></CartCount>{" "}
          </button>

          <div className="profile">
            <div className="dropdown d-flex">
              <Image
                height={50}
                width={50}
                src="/assets/images/user.png"
                alt=""
              />
              <a
                className={`btn btn-secondary user-icon dropdown-toggle ${
                  is_toggle ? "show" : ""
                }`}
                onClick={toggleDropdown}
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name}{" "}
                <svg
                  width="12px"
                  height="7px"
                  viewBox="0 0 12 7"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>drop down</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Dashboard-shop"
                      transform="translate(-1527.000000, -42.000000)"
                      fill="#000000"
                      fillRule="nonzero"
                    >
                      <g
                        id="Group-2"
                        transform="translate(1379.000000, 19.000000)"
                      >
                        <g
                          id="ic:round-keyboard-arrow-down"
                          transform="translate(148.000000, 23.000000)"
                        >
                          <path
                            d="M2.12,0.29 L6,4.17 L9.88,0.29 C10.1318722,0.0381277529 10.498984,-0.0602395593 10.8430479,0.0319520785 C11.1871118,0.124143716 11.4558563,0.392888201 11.5480479,0.736952085 C11.6402396,1.08101597 11.5418722,1.44812776 11.29,1.7 L6.7,6.29 C6.51315541,6.47722809 6.25950947,6.58244403 5.995,6.58244403 C5.73049053,6.58244403 5.47684459,6.47722809 5.29,6.29 L0.7,1.7 C0.512771911,1.51315541 0.407555968,1.25950947 0.407555968,0.995 C0.407555968,0.73049053 0.512771911,0.476844595 0.7,0.29 C1.09,-0.09 1.73,-0.1 2.12,0.29 Z"
                            id="Path"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>

              <ul
                className={`dropdown-menu ${is_toggle ? "show" : ""}`}
                style={toggleStyle}
              >
                <DropDownMenu></DropDownMenu>
                <li>
                  <a className="dropdown-item" onClick={() => logout()}>
                    <Image
                      className="me-2"
                      src="/assets/images/logout-drop.svg"
                      alt=""
                      height={15}
                      width={35}
                    />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="userselection">
        <div className="user-wrap wrapper d-flex">
          {/* <div className="choose-lang">
            <select className="form-select" aria-label="Default select example">
              <option value="DEFAULT">EN</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div> */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-target="#cart"
            onClick={() => {
              onOpenCartModal();
            }}
          >
            <svg
              width="26px"
              height="23px"
              viewBox="0 0 26 23"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>notifications</title>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dashboard-products"
                  transform="translate(-1299.000000, -33.000000)"
                  fillRule="nonzero"
                >
                  <g
                    id="Group-14"
                    transform="translate(1288.941317, 23.500000)"
                  >
                    <g
                      id="remove-cart"
                      transform="translate(11.000000, 10.000000)"
                    >
                      <circle
                        id="Oval"
                        fill="#0B4870"
                        cx="7.93608"
                        cy="19.29352"
                        r="1.87512"
                      ></circle>
                      <circle
                        id="Oval"
                        fill="#0B4870"
                        cx="21.46192"
                        cy="19.29352"
                        r="1.87512"
                      ></circle>
                      <path
                        d="M23.40792,16.23416 C23.40792,16.46152 23.31568,16.6684 23.16552,16.81872 C23.01648,16.9692 22.8096,17.0612 22.58056,17.0612 L8.73896,17.0612 C8.3348,17.0612 7.99296,16.80216 7.87,16.44072 L7.85496,16.39648 L7.54048,15.40664 L3.45592,2.5812 L3.27248,2.0048 C3.13448,1.5692 3.37424,1.10432 3.81024,0.96512 C3.89296,0.93872 3.9784,0.92624 4.06112,0.92624 C4.41144,0.92624 4.73688,1.14984 4.85016,1.50296 L5.00064,1.97544 L5.53392,3.64872 L6.06096,5.30344 L8.75416,13.7628 L9.08928,14.8136 C9.20376,15.12936 9.48776,15.36376 9.8324,15.40672 L22.58048,15.40672 C23.0372,15.40664 23.40792,15.776 23.40792,16.23416 Z"
                        id="Path"
                        fill="#D3D3D3"
                      ></path>
                      <path
                        d="M23.4076,5.81648 L23.4076,11.59488 C23.4076,12.79176 22.43856,13.7624 21.24168,13.7624 L8.75408,13.7624 L6.0612,5.30304 L23.19192,5.30304 C23.24368,5.30304 23.29408,5.29848 23.34368,5.28944 C23.38576,5.45792 23.4076,5.63464 23.4076,5.81648 Z"
                        id="Path"
                        fill="#2A94F4"
                      ></path>
                      <path
                        d="M5.35392,1.66384 C5.35392,1.89288 5.2616,2.09976 5.11136,2.24872 C4.9624,2.39904 4.75552,2.49136 4.52656,2.49136 L0.872,2.49136 C0.41544,2.49136 0.04456,2.1204 0.04456,1.66384 C0.04456,1.43496 0.13688,1.22808 0.2872,1.07912 C0.43616,0.9288 0.64296,0.83648 0.872,0.83648 L4.52656,0.83648 C4.98304,0.83648 5.35392,1.2076 5.35392,1.66384 Z M18.18552,7.4824 L18.18552,11.49424 C18.18552,11.95048 17.81408,12.32112 17.35768,12.32112 C17.1292,12.32112 16.92248,12.22864 16.7736,12.07832 C16.62328,11.93016 16.53072,11.72272 16.53072,11.49424 L16.53072,7.4824 C16.53072,7.02616 16.90136,6.65552 17.35768,6.65552 C17.58704,6.65552 17.79368,6.748 17.94264,6.89832 C18.09304,7.04712 18.18552,7.254 18.18552,7.4824 Z M11.04256,7.4824 L11.04256,11.49424 C11.04256,11.95048 10.67192,12.32112 10.2148,12.32112 C9.98624,12.32112 9.77952,12.22864 9.63064,12.07832 C9.48024,11.93016 9.38776,11.72272 9.38776,11.49424 L9.38776,7.4824 C9.38776,7.02616 9.7584,6.65552 10.2148,6.65552 C10.44408,6.65552 10.65088,6.748 10.80048,6.89832 C10.95016,7.04712 11.04256,7.254 11.04256,7.4824 Z M14.56032,7.4824 L14.56032,11.49424 C14.56032,11.95048 14.18888,12.32112 13.73256,12.32112 C13.50408,12.32112 13.29728,12.22864 13.1476,12.07832 C12.99728,11.93016 12.9056,11.72272 12.9056,11.49424 L12.9056,7.4824 C12.9056,7.02616 13.27624,6.65552 13.73256,6.65552 C13.96184,6.65552 14.16856,6.748 14.31752,6.89832 C14.46792,7.04712 14.56032,7.254 14.56032,7.4824 Z M21.91824,7.4824 L21.91824,11.49424 C21.91824,11.95048 21.54768,12.32112 21.09128,12.32112 C20.8628,12.32112 20.65528,12.22864 20.50632,12.07832 C20.35592,11.93016 20.26352,11.72272 20.26352,11.49424 L20.26352,7.4824 C20.26352,7.02616 20.63488,6.65552 21.09128,6.65552 C21.31976,6.65552 21.52728,6.748 21.67624,6.89832 C21.82576,7.04712 21.91824,7.254 21.91824,7.4824 Z M10.3808,16.30584 C10.54568,16.46488 10.63024,16.67488 10.6332,16.88648 C10.638,17.09808 10.5608,17.3112 10.40168,17.47584 L8.92608,19.0052 C8.6092,19.3336 8.08464,19.34288 7.75624,19.026 C7.59136,18.86696 7.5064,18.65696 7.50376,18.44536 C7.49904,18.23368 7.57632,18.02064 7.7352,17.856 L9.2108,16.3268 C9.52768,15.99832 10.05232,15.98896 10.3808,16.30584 Z M21.51504,16.07432 C21.744,16.07088 21.95208,16.1604 22.10328,16.30824 C22.25584,16.45496 22.35128,16.66056 22.35456,16.88952 L22.38584,19.01448 C22.39248,19.47072 22.02712,19.84696 21.57064,19.85368 C21.34168,19.85712 21.13336,19.76792 20.98248,19.61976 C20.82984,19.47304 20.7344,19.26744 20.73104,19.03864 L20.69984,16.91376 C20.69304,16.45744 21.05856,16.08104 21.51504,16.07432 Z M24.0188,4.476 C24.0188,4.70456 23.92632,4.91208 23.77592,5.06096 C23.66088,5.17736 23.51128,5.25864 23.34368,5.28936 C23.29408,5.2984 23.24368,5.30296 23.19192,5.30296 L6.0612,5.30296 L5.53408,3.64888 L23.19192,3.64888 C23.64816,3.64896 24.0188,4.01976 24.0188,4.476 Z"
                        id="Shape"
                        fill="#0E538C"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <CartCount />
          </button>
          <div className="profile">
            <div className="dropdown d-flex">
              <Image
                height={100}
                width={100}
                src="/assets/images/user.png"
                alt=""
              />
              <a
                className={`btn btn-secondary user-icon dropdown-toggle ${
                  is_toggle ? "show" : ""
                }`}
                onClick={toggleDropdown}
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                John Doe{" "}
                <svg
                  width="12px"
                  height="7px"
                  viewBox="0 0 12 7"
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
                      id="Dashboard-shop"
                      transform="translate(-1527.000000, -42.000000)"
                      fill="#000000"
                      fillRule="nonzero"
                    >
                      <g
                        id="Group-2"
                        transform="translate(1379.000000, 19.000000)"
                      >
                        <g
                          id="ic:round-keyboard-arrow-down"
                          transform="translate(148.000000, 23.000000)"
                        >
                          <path
                            d="M2.12,0.29 L6,4.17 L9.88,0.29 C10.1318722,0.0381277529 10.498984,-0.0602395593 10.8430479,0.0319520785 C11.1871118,0.124143716 11.4558563,0.392888201 11.5480479,0.736952085 C11.6402396,1.08101597 11.5418722,1.44812776 11.29,1.7 L6.7,6.29 C6.51315541,6.47722809 6.25950947,6.58244403 5.995,6.58244403 C5.73049053,6.58244403 5.47684459,6.47722809 5.29,6.29 L0.7,1.7 C0.512771911,1.51315541 0.407555968,1.25950947 0.407555968,0.995 C0.407555968,0.73049053 0.512771911,0.476844595 0.7,0.29 C1.09,-0.09 1.73,-0.1 2.12,0.29 Z"
                            id="Path"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>

              <ul
                className={`dropdown-menu ${is_toggle ? "show" : ""}`}
                style={toggleStyle}
              >
                <DropDownMenu></DropDownMenu>
                <li>
                  <a className="dropdown-item" onClick={() => logout()}>
                    <Image
                      height={15}
                      width={35}
                      className="me-2"
                      src="/assets/images/logout-drop.svg"
                      alt=""
                    />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {opencart ? (
        <>
          <CartPopup onCloseCartModal={onCloseCartModal}></CartPopup>
        </>
      ) : (
        ""
      )}
    </>
  );
}

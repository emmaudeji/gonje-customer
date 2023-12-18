import Router from "next/router";
import { useEffect, React, useState } from "react";
import { Bell, ChevronDown, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

////file import 
import CartPopup from "./CartPopup";
import CartService from "../../services/CartService";
import MenuToggle from "./MenuToggle";
import { storeUserDetail } from "../../actions/userdetails.js";
import { retrieveUser } from "../../actions/users";
import { retrieveCount } from "../../actions/carts.js";
import CartCount from "./CartCount";
import DropDownMenu from "./DropDownMenu";
import NotificationToast from "../NotificationToast";
import AppConfig from "../../configs/AppConfig";
import { getNotifications } from "../../actions/getNotifications";
import { CartDrawer } from "./CartDrawer.jsx";

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
            <title>notification widget</title>
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
              className="py-3 gap-x-3 px-2 flex items-center"
              >
              {" "}
              <Bell fill="#f7d594"/>
            </a>
            <p>{unreadNotificationCount ?? 0}</p>
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
<CartDrawer/>

          <div className="profile">
            <div className="dropdown d-flex">
              <Image
                height={40}
                width={40}
                src="/assets/images/user.png"
                alt=""
              />
              <div
                className={`btn btn-secondary user-icon dropdown-toggle flex items-center gap-x-2 ${
                  is_toggle ? "show" : ""
                }`}
                role="button"
                id="dropdownMenuLink"
                onClick={toggleDropdown}
              >
                <span>{user.name}</span>
                <ChevronDown />
              </div>

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
          {/* <button
            type="button"
            data-bs-target="#cart"
            className="py-3 bg-[#f1f1f1] gap-x-3 px-2 flex items-center"
            onClick={() => {
              onOpenCartModal();
            }}
          >
           <ShoppingCart width={23} height={23} color="#f7d594"/>
            <CartCount />
          </button> */}
<CartDrawer/>

          <div className="profile">
            <div className="dropdown d-flex">
              <Image
                height={60}
                width={60}
                src="/assets/images/user.png"
                alt=""
              />
              <div
                className={`btn btn-secondary user-icon dropdown-toggle flex items-center gap-x-2 ${
                  is_toggle ? "show" : ""
                }`}
                role="button"
                id="dropdownMenuLink"
                onClick={toggleDropdown}
              >
                <span>{user.name}</span>
                <ChevronDown />
              </div>

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


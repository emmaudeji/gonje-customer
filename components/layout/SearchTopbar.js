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
import Link from "next/link.js";

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
      <div className="products-head z-50">
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

        <div className="z-20 wrapper d-flex">
          <div className="noti dropdown">
            <Link
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              href="/notifications"
              className="py-3 gap-x-3 px-2 flex items-center"
            >
              <Bell fill="#f7d594" />
            </Link>
            <p>{unreadNotificationCount}</p>
          </div>
          <CartDrawer />
          <div className="profile">
            <div className="dropdown d-flex">
              <Image
                height={40}
                width={40}
                src="/assets/images/user.png"
                alt=""
              />
              <div
                className={`btn btn-secondary user-icon dropdown-toggle flex items-center gap-x-2${
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
                className={`dropdown-menu ${is_toggle ? "show" : ""} w-[300px]`}
                style={toggleStyle}
              >
                <DropDownMenu />
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
      <div className="userselection">
        <div className="user-wrap wrapper d-flex">
          <CartDrawer />
          <div className="profile">
            <div className="dropdown d-flex">
              <Image
                height={40}
                width={40}
                src="/assets/images/user.png"
                alt=""
              />
              <div
                className={`btn btn-secondary user-icon dropdown-toggle flex items-center gap-x-2  ${
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
                <DropDownMenu />
                <li>
                  <a className="dropdown-item dropdown-item flex gap-x-2 items-center" onClick={() => logout()}>
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

      {/* {opencart ? (
        <>
          <CartPopup onCloseCartModal={onCloseCartModal}></CartPopup>
        </>
      ) : (
        ""
      )} */}
    </>
  );
}

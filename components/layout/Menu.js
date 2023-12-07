import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { storeClassName } from "../../actions/setclass.js";
import { storePageName } from "../../actions/setpage.js";
import MenuFridge from "./MenuFridge.js";
import MenuGrocery from "./MenuGrocery.js";
import MenuRecipe from "./MenuRecipe.js";
import MenuTodaySale from "./MenuTodaySale.js";
import MenuTopDeals from "./MenuTopDeals.js";
import MenuWhatsNew from "./MenuWhatsNew.js";
import { useEffect, React, useState } from "react";
import UserDataService from "../../services/UserService";
import { retrieveUser } from "../../actions/users";
import Image from "next/image";
import { X } from "lucide-react";

export default function Menu() {
  const [isSubscription, setSubscription] = useState();
  const classToggle = useSelector((state) => state.classreducers);

  const user12s = useSelector((state) => state);

  const [users, setUsers] = useState();

  const router = useRouter();
  const dispatch = useDispatch();

  const storeData = () => {
    dispatch(storeClassName(false));
  };

  const changestate = () => {
    dispatch(storePageName("/product/"));
    storeData();
  };

  useEffect(() => {
    dispatch(retrieveUser());
  }, []);

  useEffect(() => {
    setSubscription(user12s.users.subscription_status);
  }, [user12s]);

  return (
    <>
      <div
        className={`main ${classToggle ? "main-content" : ""}`}
        onClick={() => {
          storeData();
        }}
      />
      <div
        className={`aside flex-column vh-100 flex-shrink-0 text-white ${
          classToggle ? "aside-show" : ""
        }`}
        // isSubscription
      >
        {" "}
        <Link
          href="/"
          className="d-flex align-items-center mx-auto mb-3 mb-md-0  text-white text-decoration-none"
        >
          {" "}
          <Image
            height={85}
            width={140}
            className="p-3 img-fluid logo"
            src="/images/logo.svg"
            alt="logo"
          />{" "}
        </Link>
        <hr className="mt-2" />
        <ul className="nav nav-pills flex-column mb-auto">
          <div
            onClick={() => {
              storeData();
            }}
            className="closebtn"
          >
           <X width={30} height={30} fill="#fff"/>
          </div>
          <li className="nav-item">
            {" "}
            <Link
              href="/dashboard"
              onClick={() => changestate()}
              className={`d-flex nav-link ${
                router.pathname == "/dashboard" ? "active" : "text-white"
              }`}
              aria-current="page"
            >
              {" "}
              <div className="icon">
                <Image
                  height={25}
                  width={33}
                  src="/assets/images/home-icon.svg"
                  alt=""
                />
              </div>
              <span className="ms-2">Home / shops</span>{" "}
            </Link>{" "}
          </li>
          <hr className="side-menu-divider" />
          <li>
            {" "}
            <Link
              href="/pantry"
              onClick={() => {
                storeData();
              }}
              className={`d-flex nav-link ${
                router.pathname == "/pantry" ? "active" : "text-whitee"
              }`}
            >
              {" "}
              <div className="icon text-center">
                <Image
                  height={25}
                  width={33}
                  src="/assets/images/shop.svg"
                  alt=""
                />
              </div>
              <span className="ms-2">My Pantry</span>{" "}
            </Link>{" "}
          </li>
          <MenuGrocery/>
          <MenuFridge/>
          <MenuRecipe/>

          {isSubscription == 1 && (
            <>
              <MenuTopDeals></MenuTopDeals>
              <MenuWhatsNew></MenuWhatsNew>
              <MenuTodaySale></MenuTodaySale>
              <hr className="side-menu-divider" />
            </>
          )}

          <li>
            {" "}
            <Link
              href="/giftcard"
              onClick={() => {
                storeData();
              }}
              className={`d-flex nav-link ${
                router.pathname == "/giftcard" ? "active" : "text-whitee"
              }`}
            >
              {" "}
              <div className="icon text-center">
                <Image
                  height={25}
                  width={33}
                  src="/assets/images/gift-box.svg"
                  alt=""
                />
              </div>
              <span className="ms-2">Gift Card</span>{" "}
            </Link>{" "}
          </li>
          {/* <li>
            {" "}
            <a href="#" className="d-flex nav-link text-whitee">
              {" "}
              <div className="icon text-center">
                <img src="/assets/images/transfer.svg" alt="" />
              </div>
              <span className="ms-2">Refferals</span>{" "}
            </a>{" "}
          </li> */}
          <li>
            {" "}
            <Link
              href="/goclub"
              onClick={() => {
                storeData();
              }}
              className={`d-flex nav-link ${
                router.pathname == "/goclub" ? "active" : "text-whitee"
              }`}
            >
              {" "}
              <div className="icon text-center">
                <Image
                  height={25}
                  width={33}
                  src="/assets/images/project-launch.svg"
                  alt=""
                />
              </div>
              <span className="ms-2">Go Club</span>{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

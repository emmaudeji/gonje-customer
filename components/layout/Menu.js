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
  };

  useEffect(() => {
    dispatch(retrieveUser());
  }, []);

  useEffect(() => {
    setSubscription(user12s.users.subscription_status);
  }, [user12s]);

  return (
    <>
    <div className={`main ${classToggle ? "main-content" : ""}`}
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
        <Link href="/" className="d-flex align-items-center mx-auto mb-3 mb-md-0  text-white text-decoration-none">
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
          <a
            onClick={() => {
              storeData();
            }}
            className="closebtn"
          ><svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg></a>
          <li className="nav-item">
            {" "}
            <Link href="/dashboard"
           
                onClick={() => changestate()}
                className={`d-flex nav-link ${
                  router.pathname == "/dashboard" ? "active" : "text-whitee"
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
            <Link href="/pantry"
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
          <MenuGrocery></MenuGrocery>
          <MenuFridge></MenuFridge>
          <MenuRecipe></MenuRecipe>

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
            <Link href="/giftcard"
      
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
            <Link href="/goclub"
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

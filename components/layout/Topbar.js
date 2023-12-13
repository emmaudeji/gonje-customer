import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDownMenu from "./DropDownMenu";
import MenuToggle from "./MenuToggle";
import { io } from "socket.io-client";
import { getNotifications } from "../../actions/getNotifications";
import AppConfig from "../../configs/AppConfig";
import { toast } from "react-toastify";
import NotificationToast from "../NotificationToast";
import { Bell, ChevronDown } from "lucide-react";

export default function Topbar() {
  const dispatch = useDispatch();
  const [is_toggle, set_is_toggle] = useState(false);
  const user = useSelector((state) => state.users);
  const unreadNotificationCount = useSelector((state) => {
    return state.notificationReducer.unreadCount;
  });
  const toggleStyle = {
    position: "absolute",
    inset: "0px auto auto 0px",
    margin: "0px",
    transform: "translate(-8px, 50px)",
  };
  const toggleDropdown = () => {
    set_is_toggle(!is_toggle);
  };
  useEffect(() => {
    if (unreadNotificationCount === undefined) {
      dispatch(getNotifications({ page: 1 }))
        .then((res) => {})
        .catch((e) => {
          console.log(e);
        });
    }
  }, [dispatch]);


  const logout = () => {
    localStorage.clear("user_detail");
    Router.push("/");
  };

  return (
    <div className="top_head_wrapper">
      {is_toggle && (
        <div
          className="profile_dropdown_overlay"
          onClick={() => {
            set_is_toggle(!is_toggle);
          }}
        />
      )}

      <div className=" headd home d-block">
        <div className="menu">
          <div className="sm-logo">
            <Image
              height={85}
              width={140}
              src="/assets/images/logo.png"
              alt=""
            />
          </div>
          <MenuToggle></MenuToggle>
        </div>

        <div className="wrapper d-flex align-items-center">
          {/* <div className="dashboard_logout">
              {" "}
              <a  onClick={() => logout()}>
                Logout
              </a>
            </div> */}
          <div className="noti dropdown">
            <a
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => {
                Router.push("/notifications");
              }}
            >
              <Bell fill="#f7d594"/>
            </a>
            <p>{unreadNotificationCount}</p>
          </div>
          {/* <div className="choose-lang">
            <select className="form-select" aria-label="Default select example">
              <option value="EN">EN</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div> */}

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
    </div>
  );
}

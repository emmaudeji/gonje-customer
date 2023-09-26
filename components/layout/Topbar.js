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
                height={50}
                width={50}
                src="/assets/images/user.png"
                alt=""
              />
              <a
                className={`btn btn-secondary user-icon dropdown-toggle ${
                  is_toggle ? "show" : ""
                }`}
                href="#"
                role="button"
                id="dropdownMenuLink"
                onClick={toggleDropdown}
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
    </div>
  );
}

import Router from 'next/router'
import {  useState } from "react";

export default function Topbar() {
  const [is_toggle, set_is_toggle] = useState(false);
  const toggleStyle = {

    position: "absolute",
     inset: "0px auto auto 0px",
      margin: "0px",
      transform: "translate(-8px, 50px)"
 
  };
  const toggleDropdown = () => {
    set_is_toggle(!is_toggle)
  };
  
  const logout =() =>
    {
        console.log('dd')
        localStorage.clear('user_detail');
        Router.push('/')
    }
  return (
    <>
      
      <div class="top-head home d-block">
					<div class="menu">

            <div className="sm-logo">
              <img src="/assets/images/logo.png" alt="" />
            </div>
            <button id="menu-toggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              </svg>
            </button>
          </div>
      
          <div className="wrapper d-flex">
            {/* <div class="dashboard_logout">
              {" "}
              <a href="javascript:;" onClick={() => logout()}>
                Logout
              </a>
            </div> */}
            <div className="choose-lang">
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
            </div>
            
            <div className="profile">
              <div className="dropdown d-flex">
                <img src="/assets/images/user.png" alt="" />
                <a
                
                  className={`btn btn-secondary user-icon dropdown-toggle ${is_toggle? 'show': ''}`}
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  onClick={toggleDropdown}
                 
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
                    <title>ic:round-keyboard-arrow-down</title>
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
                
                <ul class={`dropdown-menu ${is_toggle? 'show': ''}`} style={toggleStyle} >
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="17px"
                        height="13px"
                        viewBox="0 0 17 13"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1326.000000, -124.000000)"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="fa-solid:box-open"
                                transform="translate(23.875000, 22.464531)"
                              >
                                <rect
                                  id="ViewBox"
                                  x="1.0264"
                                  y="0"
                                  width="16.896"
                                  height="13.5168"
                                ></rect>
                                <path
                                  d="M11.3147387,6.7584 C10.8685787,6.7584 10.4488187,6.5208 10.2217787,6.14064 L8.5242587,3.3264 L6.8293787,6.14064 C6.5996987,6.52344 6.1799387,6.76104 5.7337787,6.76104 C5.6149787,6.76104 5.4961787,6.7452 5.3826587,6.71088 L1.7658587,5.676 L1.7658587,10.3752 C1.7658587,10.76328 2.0298587,11.1012 2.4047387,11.1936 L8.1124187,12.62184 C8.3816987,12.68784 8.6641787,12.68784 8.9308187,12.62184 L14.6437787,11.1936 C15.0186587,11.09856 15.2826587,10.76064 15.2826587,10.3752 L15.2826587,5.676 L11.6658587,6.70824 C11.5523387,6.74256 11.4335387,6.7584 11.3147387,6.7584 Z M16.9273787,3.79632 L15.5677787,1.0824 C15.4859387,0.91872 15.3090587,0.82368 15.1268987,0.84744 L8.5242587,1.6896 L10.9451387,5.70504 C11.0454587,5.87136 11.2460987,5.95056 11.4335387,5.89776 L16.6580987,4.40616 C16.9194587,4.3296 17.0461787,4.0392 16.9273787,3.79632 L16.9273787,3.79632 Z M1.4807387,1.0824 L0.1211387,3.79632 C-0.000301300199,4.0392 0.1290587,4.3296 0.3877787,4.40352 L5.6123387,5.89512 C5.7997787,5.94792 6.0004187,5.86872 6.1007387,5.7024 L8.5242587,1.6896 L1.9189787,0.84744 C1.7368187,0.82632 1.5625787,0.91872 1.4807387,1.0824 Z"
                                  id="Shape"
                                  fill="#000000"
                                  fill-rule="nonzero"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>{" "}
                      Upcoming box
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="15px"
                        height="13px"
                        viewBox="0 0 15 13"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1327.000000, -174.000000)"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="bx:bxs-box"
                                transform="translate(24.875000, 71.043281)"
                              >
                                <rect
                                  id="ViewBox"
                                  x="0"
                                  y="0"
                                  width="16.8"
                                  height="16.8"
                                ></rect>
                                <path
                                  d="M0.523673955,2.1 L14.523674,2.1 L14.523674,4.9 L0.523673955,4.9 L0.523673955,2.1 Z M12.423674,5.6 L1.22367396,5.6 L1.22367396,13.3 C1.22367396,14.0731986 1.85047531,14.7 2.62367396,14.7 L12.423674,14.7 C13.1968726,14.7 13.823674,14.0731986 13.823674,13.3 L13.823674,5.6 L12.423674,5.6 Z M10.323674,9.8 L4.72367396,9.8 L4.72367396,8.4 L10.323674,8.4 L10.323674,9.8 Z"
                                  id="Shape"
                                  fill="#000000"
                                  fill-rule="nonzero"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>{" "}
                      My Order
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="19px"
                        height="17px"
                        viewBox="0 0 19 17"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1325.000000, -226.000000)"
                            fill="#000000"
                            fill-rule="nonzero"
                          >
                            <g
                              id="bx:bxs-cart"
                              transform="translate(1325.398674, 226.122031)"
                            >
                              <path
                                d="M17.8398,3.9879 C17.6717719,3.74506018 17.3953043,3.60009968 17.1,3.6 L4.7997,3.6 L3.7611,1.107 C3.48259585,0.435585209 2.82658381,-0.00151923508 2.0997,-3.94762592e-06 L0,-3.94762592e-06 L0,1.8 L2.0997,1.8 L6.3693,12.0465 C6.50914032,12.3817233 6.83677838,12.6 7.2,12.6 L14.4,12.6 C14.7753,12.6 15.111,12.3669 15.2433,12.0168 L17.9433,4.8168 C18.0468788,4.54025262 18.0082002,4.23048692 17.8398,3.9879 Z"
                                id="Path"
                              ></path>
                              <circle
                                id="Oval"
                                cx="7.65"
                                cy="14.85"
                                r="1.35"
                              ></circle>
                              <circle
                                id="Oval"
                                cx="13.95"
                                cy="14.85"
                                r="1.35"
                              ></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                      My cart
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="17px"
                        height="13px"
                        viewBox="0 0 17 13"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1326.000000, -283.000000)"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="bi:credit-card-2-back-fill"
                                transform="translate(24.375000, 180.877031)"
                              >
                                <rect
                                  id="ViewBox"
                                  x="1"
                                  y="0"
                                  width="16"
                                  height="16"
                                ></rect>
                                <g
                                  id="Group"
                                  transform="translate(0.000000, 2.000000)"
                                  fill="#000000"
                                  fill-rule="nonzero"
                                >
                                  <path
                                    d="M0.0236739551,2 C0.0236739551,0.8954305 0.919104455,0 2.02367396,0 L14.023674,0 C15.1282435,0 16.023674,0.8954305 16.023674,2 L16.023674,7 L0.0236739551,7 L0.0236739551,2 Z M11.523674,3 C11.2475316,3 11.023674,3.22385763 11.023674,3.5 L11.023674,4.5 C11.023674,4.77614237 11.2475316,5 11.523674,5 L13.523674,5 C13.7998163,5 14.023674,4.77614237 14.023674,4.5 L14.023674,3.5 C14.023674,3.22385763 13.7998163,3 13.523674,3 L11.523674,3 Z M0.0236739551,9 L0.0236739551,10 C0.0236739551,11.1045695 0.919104455,12 2.02367396,12 L14.023674,12 C15.1282435,12 16.023674,11.1045695 16.023674,10 L16.023674,9 L0.0236739551,9 Z"
                                    id="Shape"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Manage Account
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="15px"
                        height="19px"
                        viewBox="0 0 15 19"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1327.000000, -334.000000)"
                            fill="#000000"
                            fill-rule="nonzero"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="ic:round-notifications"
                                transform="translate(24.875000, 232.710781)"
                              >
                                <path
                                  d="M7.52483338,18.601 C8.55938338,18.601 9.40583338,17.75455 9.40583338,16.72 L5.64383338,16.72 C5.64383338,17.7588476 6.48598576,18.601 7.52483338,18.601 Z M13.1678334,12.958 L13.1678334,8.2555 C13.1678334,5.368165 11.6254134,2.95108 8.93558338,2.31154 L8.93558338,1.672 C8.93558338,0.891385 8.30544838,0.26125 7.52483338,0.26125 C6.74421838,0.26125 6.11408338,0.891385 6.11408338,1.672 L6.11408338,2.31154 C3.41484838,2.95108 1.88183338,5.35876 1.88183338,8.2555 L1.88183338,12.958 L0.668588378,14.171245 C0.0760733784,14.76376 0.489893378,15.7795 1.32693838,15.7795 L13.7133234,15.7795 C14.5503684,15.7795 14.9735934,14.76376 14.3810784,14.171245 L13.1678334,12.958 Z"
                                  id="Shape"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Notifications
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="15px"
                        height="15px"
                        viewBox="0 0 15 15"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1327.000000, -385.000000)"
                            fill="#000000"
                            fill-rule="nonzero"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="entypo:wallet"
                                transform="translate(24.375000, 283.210781)"
                              >
                                <path
                                  d="M13.423674,4.28156122 L2.17367396,4.28156122 L2.17367396,3.83156122 L12.073674,3.03956122 L12.073674,3.83156122 L13.423674,3.83156122 L13.423674,2.48156122 C13.423674,1.49156122 12.621774,0.796761225 11.642574,0.936261225 L2.60567396,2.22686122 C1.62557396,2.36726122 0.823673955,3.29156122 0.823673955,4.28156122 L0.823673955,13.2815612 C0.823673955,14.2756738 1.62956141,15.0815612 2.62367396,15.0815612 L13.423674,15.0815612 C14.4177865,15.0815612 15.223674,14.2756738 15.223674,13.2815612 L15.223674,6.08156122 C15.223674,5.08744868 14.4177865,4.28156122 13.423674,4.28156122 Z M12.073674,10.5869613 C11.5912046,10.5868005 11.1454704,10.3292576 10.9043749,9.91134652 C10.6632795,9.49343545 10.663451,8.97864681 10.9048249,8.5608965 C11.1461988,8.1431462 11.5921046,7.88590044 12.074574,7.88606115 C12.8204069,7.88630978 13.4248224,8.4911283 13.424574,9.23696122 C13.4243254,9.98279415 12.8195069,10.5872097 12.073674,10.5869613 L12.073674,10.5869613 Z"
                                  id="Shape"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Wallet
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#"  onClick={() => logout()}>
                
                      <svg
                        class="drop-svg"
                        width="19px"
                        height="15px"
                        viewBox="0 0 19 15"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1325.000000, -439.000000)"
                            fill="#000000"
                            fill-rule="nonzero"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="websymbol:logout"
                                transform="translate(23.375000, 337.712031)"
                              >
                                <path
                                  d="M13.666474,3.631 L17.696074,7.5146 L13.666474,11.369 L13.666474,8.7848 L7.63667396,8.7848 L7.63667396,6.2152 L13.666474,6.2152 L13.666474,3.631 Z M11.242874,11.1062 L12.790474,12.6684 C11.272074,14.0894667 9.62714062,14.8 7.85567396,14.8 C5.74354062,14.8 3.96477396,14.1016333 2.51937396,12.7049 C1.07397396,11.3081667 0.351273955,9.56346667 0.351273955,7.4708 C0.351273955,6.1568 0.682207288,4.94013333 1.34407396,3.8208 C2.00594062,2.70146667 2.89897396,1.81816667 4.02317396,1.1709 C5.14737396,0.523633333 6.36647396,0.2 7.68047396,0.2 C9.47140729,0.2 11.169874,0.920266667 12.775874,2.3608 L11.242874,3.9084 C10.133274,2.89613333 8.95067396,2.39 7.69507396,2.39 C6.24480729,2.39 5.02084062,2.89613333 4.02317396,3.9084 C3.02550729,4.92066667 2.52667396,6.1568 2.52667396,7.6168 C2.52667396,8.97946667 3.04010729,10.1523333 4.06697396,11.1354 C5.09384062,12.1184667 6.29834062,12.61 7.68047396,12.61 C8.95554062,12.61 10.1430073,12.1087333 11.242874,11.1062 Z"
                                  id="Shape"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="userselection">
          <div class="user-wrap wrapper d-flex">
            <div class="choose-lang">
              <select class="form-select" aria-label="Default select example">
                <option selected>
                  <span>EN</span>
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <svg
                width="26px"
                height="23px"
                viewBox="0 0 26 23"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>remove-cart</title>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dashboard-products"
                    transform="translate(-1299.000000, -33.000000)"
                    fill-rule="nonzero"
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
              <span class="badge bg-secondary">4</span>
            </button>
            <div class="profile">
              <div class="dropdown d-flex">
                <img src="./assets/images/user.png" alt="" />
                <a
                  class="btn btn-secondary user-icon dropdown-toggle"
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
                    <title>ic:round-keyboard-arrow-down</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dashboard-shop"
                        transform="translate(-1527.000000, -42.000000)"
                        fill="#000000"
                        fill-rule="nonzero"
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

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="17px"
                        height="13px"
                        viewBox="0 0 17 13"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1326.000000, -124.000000)"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="fa-solid:box-open"
                                transform="translate(23.875000, 22.464531)"
                              >
                                <rect
                                  id="ViewBox"
                                  x="1.0264"
                                  y="0"
                                  width="16.896"
                                  height="13.5168"
                                ></rect>
                                <path
                                  d="M11.3147387,6.7584 C10.8685787,6.7584 10.4488187,6.5208 10.2217787,6.14064 L8.5242587,3.3264 L6.8293787,6.14064 C6.5996987,6.52344 6.1799387,6.76104 5.7337787,6.76104 C5.6149787,6.76104 5.4961787,6.7452 5.3826587,6.71088 L1.7658587,5.676 L1.7658587,10.3752 C1.7658587,10.76328 2.0298587,11.1012 2.4047387,11.1936 L8.1124187,12.62184 C8.3816987,12.68784 8.6641787,12.68784 8.9308187,12.62184 L14.6437787,11.1936 C15.0186587,11.09856 15.2826587,10.76064 15.2826587,10.3752 L15.2826587,5.676 L11.6658587,6.70824 C11.5523387,6.74256 11.4335387,6.7584 11.3147387,6.7584 Z M16.9273787,3.79632 L15.5677787,1.0824 C15.4859387,0.91872 15.3090587,0.82368 15.1268987,0.84744 L8.5242587,1.6896 L10.9451387,5.70504 C11.0454587,5.87136 11.2460987,5.95056 11.4335387,5.89776 L16.6580987,4.40616 C16.9194587,4.3296 17.0461787,4.0392 16.9273787,3.79632 L16.9273787,3.79632 Z M1.4807387,1.0824 L0.1211387,3.79632 C-0.000301300199,4.0392 0.1290587,4.3296 0.3877787,4.40352 L5.6123387,5.89512 C5.7997787,5.94792 6.0004187,5.86872 6.1007387,5.7024 L8.5242587,1.6896 L1.9189787,0.84744 C1.7368187,0.82632 1.5625787,0.91872 1.4807387,1.0824 Z"
                                  id="Shape"
                                  fill="#000000"
                                  fill-rule="nonzero"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>{" "}
                      Upcoming box
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="15px"
                        height="13px"
                        viewBox="0 0 15 13"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1327.000000, -174.000000)"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="bx:bxs-box"
                                transform="translate(24.875000, 71.043281)"
                              >
                                <rect
                                  id="ViewBox"
                                  x="0"
                                  y="0"
                                  width="16.8"
                                  height="16.8"
                                ></rect>
                                <path
                                  d="M0.523673955,2.1 L14.523674,2.1 L14.523674,4.9 L0.523673955,4.9 L0.523673955,2.1 Z M12.423674,5.6 L1.22367396,5.6 L1.22367396,13.3 C1.22367396,14.0731986 1.85047531,14.7 2.62367396,14.7 L12.423674,14.7 C13.1968726,14.7 13.823674,14.0731986 13.823674,13.3 L13.823674,5.6 L12.423674,5.6 Z M10.323674,9.8 L4.72367396,9.8 L4.72367396,8.4 L10.323674,8.4 L10.323674,9.8 Z"
                                  id="Shape"
                                  fill="#000000"
                                  fill-rule="nonzero"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>{" "}
                      My Order
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="19px"
                        height="17px"
                        viewBox="0 0 19 17"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1325.000000, -226.000000)"
                            fill="#000000"
                            fill-rule="nonzero"
                          >
                            <g
                              id="bx:bxs-cart"
                              transform="translate(1325.398674, 226.122031)"
                            >
                              <path
                                d="M17.8398,3.9879 C17.6717719,3.74506018 17.3953043,3.60009968 17.1,3.6 L4.7997,3.6 L3.7611,1.107 C3.48259585,0.435585209 2.82658381,-0.00151923508 2.0997,-3.94762592e-06 L0,-3.94762592e-06 L0,1.8 L2.0997,1.8 L6.3693,12.0465 C6.50914032,12.3817233 6.83677838,12.6 7.2,12.6 L14.4,12.6 C14.7753,12.6 15.111,12.3669 15.2433,12.0168 L17.9433,4.8168 C18.0468788,4.54025262 18.0082002,4.23048692 17.8398,3.9879 Z"
                                id="Path"
                              ></path>
                              <circle
                                id="Oval"
                                cx="7.65"
                                cy="14.85"
                                r="1.35"
                              ></circle>
                              <circle
                                id="Oval"
                                cx="13.95"
                                cy="14.85"
                                r="1.35"
                              ></circle>
                            </g>
                          </g>
                        </g>
                      </svg>
                      My cart
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="17px"
                        height="13px"
                        viewBox="0 0 17 13"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1326.000000, -283.000000)"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="bi:credit-card-2-back-fill"
                                transform="translate(24.375000, 180.877031)"
                              >
                                <rect
                                  id="ViewBox"
                                  x="1"
                                  y="0"
                                  width="16"
                                  height="16"
                                ></rect>
                                <g
                                  id="Group"
                                  transform="translate(0.000000, 2.000000)"
                                  fill="#000000"
                                  fill-rule="nonzero"
                                >
                                  <path
                                    d="M0.0236739551,2 C0.0236739551,0.8954305 0.919104455,0 2.02367396,0 L14.023674,0 C15.1282435,0 16.023674,0.8954305 16.023674,2 L16.023674,7 L0.0236739551,7 L0.0236739551,2 Z M11.523674,3 C11.2475316,3 11.023674,3.22385763 11.023674,3.5 L11.023674,4.5 C11.023674,4.77614237 11.2475316,5 11.523674,5 L13.523674,5 C13.7998163,5 14.023674,4.77614237 14.023674,4.5 L14.023674,3.5 C14.023674,3.22385763 13.7998163,3 13.523674,3 L11.523674,3 Z M0.0236739551,9 L0.0236739551,10 C0.0236739551,11.1045695 0.919104455,12 2.02367396,12 L14.023674,12 C15.1282435,12 16.023674,11.1045695 16.023674,10 L16.023674,9 L0.0236739551,9 Z"
                                    id="Shape"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Manage Account
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="15px"
                        height="19px"
                        viewBox="0 0 15 19"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1327.000000, -334.000000)"
                            fill="#000000"
                            fill-rule="nonzero"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="ic:round-notifications"
                                transform="translate(24.875000, 232.710781)"
                              >
                                <path
                                  d="M7.52483338,18.601 C8.55938338,18.601 9.40583338,17.75455 9.40583338,16.72 L5.64383338,16.72 C5.64383338,17.7588476 6.48598576,18.601 7.52483338,18.601 Z M13.1678334,12.958 L13.1678334,8.2555 C13.1678334,5.368165 11.6254134,2.95108 8.93558338,2.31154 L8.93558338,1.672 C8.93558338,0.891385 8.30544838,0.26125 7.52483338,0.26125 C6.74421838,0.26125 6.11408338,0.891385 6.11408338,1.672 L6.11408338,2.31154 C3.41484838,2.95108 1.88183338,5.35876 1.88183338,8.2555 L1.88183338,12.958 L0.668588378,14.171245 C0.0760733784,14.76376 0.489893378,15.7795 1.32693838,15.7795 L13.7133234,15.7795 C14.5503684,15.7795 14.9735934,14.76376 14.3810784,14.171245 L13.1678334,12.958 Z"
                                  id="Shape"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Notifications
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="15px"
                        height="15px"
                        viewBox="0 0 15 15"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1327.000000, -385.000000)"
                            fill="#000000"
                            fill-rule="nonzero"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="entypo:wallet"
                                transform="translate(24.375000, 283.210781)"
                              >
                                <path
                                  d="M13.423674,4.28156122 L2.17367396,4.28156122 L2.17367396,3.83156122 L12.073674,3.03956122 L12.073674,3.83156122 L13.423674,3.83156122 L13.423674,2.48156122 C13.423674,1.49156122 12.621774,0.796761225 11.642574,0.936261225 L2.60567396,2.22686122 C1.62557396,2.36726122 0.823673955,3.29156122 0.823673955,4.28156122 L0.823673955,13.2815612 C0.823673955,14.2756738 1.62956141,15.0815612 2.62367396,15.0815612 L13.423674,15.0815612 C14.4177865,15.0815612 15.223674,14.2756738 15.223674,13.2815612 L15.223674,6.08156122 C15.223674,5.08744868 14.4177865,4.28156122 13.423674,4.28156122 Z M12.073674,10.5869613 C11.5912046,10.5868005 11.1454704,10.3292576 10.9043749,9.91134652 C10.6632795,9.49343545 10.663451,8.97864681 10.9048249,8.5608965 C11.1461988,8.1431462 11.5921046,7.88590044 12.074574,7.88606115 C12.8204069,7.88630978 13.4248224,8.4911283 13.424574,9.23696122 C13.4243254,9.98279415 12.8195069,10.5872097 12.073674,10.5869613 L12.073674,10.5869613 Z"
                                  id="Shape"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Wallet
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <svg
                        class="drop-svg"
                        width="19px"
                        height="15px"
                        viewBox="0 0 19 15"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Drop_down"
                            transform="translate(-1325.000000, -439.000000)"
                            fill="#000000"
                            fill-rule="nonzero"
                          >
                            <g
                              id="Group-5"
                              transform="translate(1302.000000, 101.078750)"
                            >
                              <g
                                id="websymbol:logout"
                                transform="translate(23.375000, 337.712031)"
                              >
                                <path
                                  d="M13.666474,3.631 L17.696074,7.5146 L13.666474,11.369 L13.666474,8.7848 L7.63667396,8.7848 L7.63667396,6.2152 L13.666474,6.2152 L13.666474,3.631 Z M11.242874,11.1062 L12.790474,12.6684 C11.272074,14.0894667 9.62714062,14.8 7.85567396,14.8 C5.74354062,14.8 3.96477396,14.1016333 2.51937396,12.7049 C1.07397396,11.3081667 0.351273955,9.56346667 0.351273955,7.4708 C0.351273955,6.1568 0.682207288,4.94013333 1.34407396,3.8208 C2.00594062,2.70146667 2.89897396,1.81816667 4.02317396,1.1709 C5.14737396,0.523633333 6.36647396,0.2 7.68047396,0.2 C9.47140729,0.2 11.169874,0.920266667 12.775874,2.3608 L11.242874,3.9084 C10.133274,2.89613333 8.95067396,2.39 7.69507396,2.39 C6.24480729,2.39 5.02084062,2.89613333 4.02317396,3.9084 C3.02550729,4.92066667 2.52667396,6.1568 2.52667396,7.6168 C2.52667396,8.97946667 3.04010729,10.1523333 4.06697396,11.1354 C5.09384062,12.1184667 6.29834062,12.61 7.68047396,12.61 C8.95554062,12.61 10.1430073,12.1087333 11.242874,11.1062 Z"
                                  id="Shape"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useCallback, useEffect, useState } from "react";
import Router from "next/router";
import { useFormik } from "formik";
import { verifyPostCode, login } from "./Api/Api";
import { resetData, resetModal } from "./shared/Function.js";
import Register from "./Register";
import PhoneLogin from "./PhoneLogin";
import VerifyOtp from "./VerifyOtp";
// import FacebookLoginComp from "./FacebookLoginComp";
// import GoogleLoginComp from "./GoogleLoginComp";
// import { CirclesToRhombusesSpinner } from "react-epic-spinners";
// import { route } from "next/dist/server/router";
// import Loader from "./Loader";
import GifLoader from "./GifLoader";
import Image from "next/image";


export default function NavLayout({ isOpenGetStarted, toggleGetStarted }) {

  const [apimsgs, apiSetmsgs] = useState({});
  const [classes, setclasses] = useState();
  // const [open, setOpen] = useState(isOpenGetStarted); Router
  const [open, setOpen] = useState(false);
  const [is_show_phone, set_is_show_phone] = useState(false);
  const [is_show_otpverify, set_is_show_otpverify] = useState(false);
  const [is_toggle, set_is_toggle] = useState(true);
  const [loading, setLoading] = useState(false);
  const onOpenModal = () => {
    toggleGetStarted(true);
    setOpen(true);
  };
  const onCloseModal = () => {
    toggleGetStarted(false);
    setOpen(false);
  };
  const [opensignin, setOpenSignin] = useState(false);
  const onOpenSigninModal = () => setOpenSignin(true);
  const onCloseSigninModal = () => setOpenSignin(false);
  const [opensignup, setOpenSignup] = useState(false);
  const [openphone, setOpenPhone] = useState(false);
  const [openotpverify, setOpenotpVerify] = useState(false);
  const onOpenSignupModal = () => setOpenSignup(true);
  const onCloseSignupModal = () => setOpenSignup(false);
  const onClosePoneModal = () => setOpenPhone(false);
  const onCloseOtpVerifyModal = () => setOpenotpVerify(false);
  const [isVisible, setVisibility] = useState(false);

  const [isLoading, setIsLoading] = useState(0);

  // useEffect(() => {
  //   setOpen(isOpenGetStarted);
  // }, [isOpenGetStarted]);

  const toggleModelState = () => {
    toggleGetStarted(false);
    setOpen(false);
    setOpenSignin(false);
    setOpenSignup(true);
  };

  const toggle = () => {
    setOpenSignup(false);
  };
  const modelToggle = () => {
    setOpenSignin(true);
    setOpenSignup(false);
    setOpenPhone(false);
  };

  const closeAllModel = () => {
    setOpenSignin(false);
    setOpenSignup(false);
    set_is_show_phone(true);
    setOpenPhone(true);
    set_is_show_otpverify(false);
    setOpenotpVerify(false);
  };
  const openSingin = () => {
    setOpenSignin(true);
    setOpenSignup(false);
  };
  const closephone = () => {
    set_is_show_phone(false);
    setOpenPhone(false);
  };
  const closephonelogin = () => {
    set_is_show_phone(false);
    setOpenPhone(false);

    set_is_show_otpverify(true);
    setOpenotpVerify(true);
  };

  const navBarToggler = () => {
    set_is_toggle(!is_toggle);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      postcode: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.email.length === 0) {
        errors.email = "This field is required";
      }
      if (typeof values.email !== "undefined") {
        var pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(values.email)) {
          errors.email = "Please enter valid email address.";
        }
      }
      if (values.postcode.length === 0) {
        errors.postcode = "This field is required";
        // } else if (typeof values.postcode !== "undefined") {
        //   if (values.postcode.length < 6) {
        //     errors.postcode = "Please add at least 6 charachter.";
        //   }
      }

      return errors;
    },
    onSubmit: async (values) => {
      const json = await verifyPostCode(values);
      if (json.data.status == 2) {
        setclasses("alert alert-danger");
        apiSetmsgs({
          msg: json.data.message,
        });
        resetData(() =>
          apiSetmsgs({
            msg: "",
          })
        );
      } else if (json.data.status == 3) {
        setclasses("alert alert-danger");
        apiSetmsgs({
          msg: json.data.message,
        });
        resetData(() =>
          apiSetmsgs({
            msg: "",
          })
        );
      } else {
        setclasses("alert-success");
        apiSetmsgs({
          msg: json.message,
        });

        resetData(() =>
          apiSetmsgs({
            msg: "",
          })
        );

        resetModal(() => toggleModelState());
      }
    },
  });

  const loginformik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.email.length === 0) {
        errors.email = "This field is required";
      }
      if (typeof values.email !== "undefined") {
        var pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(values.email)) {
          errors.email = "Please enter valid email address.";
        }
      }
      if (values.password.length === 0) {
        errors.password = "This field is required";
      } else if (typeof values.password !== "undefined") {
        if (values.password.length < 6) {
          errors.password = "Please add at least 6 charachter.";
        }
      }

      return errors;
    },
    onSubmit: async (values) => {
      // setIsLoading(1)
      // debugger

      setLoading(true);
      const json = await login(values);
      console.log("jsonjson login", json);

      if (json.status == 1) {
        setLoading(false);
        setclasses("alert-success");
        apiSetmsgs({
          msg: json.message,
        });
        localStorage.setItem("user_detail", JSON.stringify(json));
        setLoading(false);
        Router.push("/dashboard");
      } else {
        setLoading(false);
        setclasses("alert alert-danger");
        apiSetmsgs({
          msg: json.message,
        });
      }
      resetData(() =>
        apiSetmsgs({
          msg: "",
        })
      );
    },
  });

  if (loading) {
    return <GifLoader />;
  }

  return (
    <>
      {/* {loading && <Loader/>} */}
      <header>
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <div className="header-oter">
              <div className="logo">
                <a
                  className="navbar-brand"
                  onClick={() => {
                    Router.push("/");
                  }}
                >
                  <Image
                    src="/images/logo.svg"
                    layout="fixed"
                    height={55}
                    width={124}
                    alt=""
                  />
                </a>
              </div>
                

              {/*desktopnav  */}

              <div className="hidden md:flex  rightmenus">
                <div
                  className={`navbar-collapse`}
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav  z-50">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        onClick={() => {
                          Router.push("/howItworks");
                        }}
                      >
                        How it works
                        {/* <img src="images/arrow1.svg" /> */}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        onClick={() => {
                          Router.push("/aboutUs");
                        }}
                      >
                        About Us
                        {/* <img src="images/arrow1.svg" /> */}
                      </a>
                    </li>
                    
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        type="button"
                        href="/signin"
                        // onClick={onOpenSigninModal}
                        onClick={() => Router.push('/signin/customer')}
                      >
                        Sign in
                      </a>
                      {/* <Modal
                        open={opensignin}
                        showCloseIcon={false}
                        center
                        onClose={onCloseSigninModal}
                      >
                        <div className="modal1 homepup" id="signin">
                          <div className="modal-dialog1 modal-lg">
                            <div className="modal-content1">
                              <button type="button" data-bs-dismiss="modal">
                                <Image
                                  src="/images/vendoricon4.png"
                                  onClick={onCloseSigninModal}
                                  height={54}
                                  width={54}
                                  alt=""
                                />
                              </button>
                              <form onSubmit={loginformik.handleSubmit}>
                                <div className="modal-body">
                                  <div className="popuplogo">
                                    <Image
                                      src="/images/logo.svg"
                                      layout="fixed"
                                      height={92}
                                      width={188}
                                      alt=""
                                      // blurDataURL="/images/logo.png"
                                      // placeholder="blur"
                                    />
                                  </div>
                                  <div className="popuptxt">
                                    <h2>
                                      Login with <span>Gonje</span>
                                    </h2>
                                  </div>

                                  {isLoading ? (
                                    <CirclesToRhombusesSpinner color="#fff" />
                                  ) : null}
                                  <div className="newsletter-oter">
                                    {apimsgs.msg && (
                                      <div className={classes}>
                                        {classes !== "alert-success" ? (
                                          <Image
                                            src="/images/error_icon.svg"
                                            height={20}
                                            width={20}
                                            alt=""
                                          />
                                        ) : (
                                          <Image
                                            src="/images/success.svg"
                                            height={20}
                                            width={20}
                                            alt=""
                                          />
                                        )}{" "}
                                        {apimsgs.msg}
                                      </div>
                                    )}
                                    <input
                                      onChange={loginformik.handleChange}
                                      name="email"
                                      value={loginformik.values.email}
                                      type="text"
                                      placeholder="Enter your email"
                                    />

                                    {loginformik.errors.email ? (
                                      <div>{loginformik.errors.email}</div>
                                    ) : null}
                                    <div className="password_wrapper d-flex">
                                      <input
                                        type={`${
                                          !isVisible ? "password" : "text"
                                        }`}
                                        placeholder="Password"
                                        onChange={loginformik.handleChange}
                                        name="password"
                                        value={loginformik.values.password}
                                      />
                                      <i
                                        onClick={() => {
                                          setVisibility(!isVisible);
                                        }}
                                        className={`fa ${
                                          !isVisible ? "fa-eye" : "fa-eye-slash"
                                        }`}
                                      />
                                    </div>
                                    {loginformik.errors.password ? (
                                      <div>{loginformik.errors.password}</div>
                                    ) : null}

                                    <input
                                      type="submit"
                                      className="bttn"
                                      value="Login"
                                    />
                                  </div>
                                  <div className="or">
                                    <h4>OR</h4>
                                  </div>
                                  <div className="gmail-iphone">
                                    <ul>
                                      <li className="gmalbtn">
                                        <GoogleLoginComp></GoogleLoginComp>
                                        <a>
                                          <Image
                                            height={19}
                                            width={30}
                                            src="/images/googleicon.svg"
                                            alt=""
                                          />
                                        </a>
                                      </li>

                                      <li className="facebookbtn">
                                        <FacebookLoginComp></FacebookLoginComp>
                                      </li>

                                      <li className="phonebtn">
                                        <a
                                          onClick={() => {
                                            closeAllModel();
                                          }}
                                        >
                                          <Image
                                            height={19}
                                            width={30}
                                            src="/images/phoneicon.svg"
                                            alt=""
                                          />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="signuplnk">
                                    <h4>
                                      Don&apos;t have any account?
                                      <a
                                        onClick={() => {
                                          onOpenModal();
                                          onCloseSigninModal();
                                        }}
                                      >
                                        Signup
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </Modal> */}
                    </li>

                    <li className="nav-item getstartedbtn bttn">
                      <a
                        // onClick={onOpenModal}
                        onClick={()=>Router.push('/signup/customer')}
                        className="nav-link bttn"
                        type="button"
                      >
                        Get Started
                      </a>

                      {/* <Modal
                        open={open}
                        showCloseIcon={false}
                        center
                        onClose={onCloseModal}
                      >
                        <div className="modal1 homepup getstart-popup">
                          <div className="modal-dialog1 modal-lg">
                            <div className="modal-content1">
                              <button type="button" onClick={onCloseModal}>
                                <Image
                                  src="/images/vendoricon4.png"
                                  height={54}
                                  width={54}
                                  alt=""
                                />
                              </button>

                              <div className="modal-body">
                                <div className="popupvector">
                                  <Image
                                    src="/images/popimg1.png"
                                    height={201}
                                    width={228}
                                    alt=""
                                  />
                                </div>
                                <div className="popuptxt">
                                  <h2>
                                    Check if we deliver to
                                    <br /> your address
                                  </h2>
                                  <p>
                                    We deliver only to certain addresses, To
                                    check if
                                    <br />
                                    we deliver to your area either your ZIP
                                    below
                                  </p>
                                </div>
                                <form onSubmit={formik.handleSubmit}>
                                  <div className="newsletter-oter">
                                    {apimsgs.msg && (
                                      <div className={classes}>
                                        {classes ? (
                                          <Image
                                            src="/images/error_icon.svg"
                                            height={20}
                                            width={20}
                                            alt=""
                                          />
                                        ) : (
                                          ""
                                        )}{" "}
                                        {apimsgs.msg}
                                      </div>
                                    )}

                                    <input
                                      onChange={formik.handleChange}
                                      name="email"
                                      value={formik.values.email}
                                      type="text"
                                      placeholder="Enter your email"
                                    />
                                    {formik.errors.email ? (
                                      <div>{formik.errors.email}</div>
                                    ) : null}

                                    <input
                                      onChange={formik.handleChange}
                                      name="postcode"
                                      value={formik.values.postcode}
                                      type="text"
                                      placeholder="Zip/Post Code"
                                    />
                                    {formik.errors.postcode ? (
                                      <div>{formik.errors.postcode}</div>
                                    ) : null}
                                    <input
                                      type="submit"
                                      className="bttn"
                                      value="Submit"
                                    />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal> */}
                    </li>
                  </ul>
                </div>
              </div>


              {/* mobile */}
              <button
                className="navbar-toggler collapsed"
                type="button"
                onClick={() => {
                  navBarToggler();
                }}
              >
                <span className="navbar-toggler-icon">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>

              <div className="rightmenus">
                <div
                  className={`navbar-collapse ${is_toggle ? "collapse" : ""}`}
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav  z-50">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        onClick={() => {
                          Router.push("/howItworks");
                        }}
                      >
                        How it works
                        {/* <img src="images/arrow1.svg" /> */}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        onClick={() => {
                          Router.push("/aboutUs");
                        }}
                      >
                        About Us
                        {/* <img src="images/arrow1.svg" /> */}
                      </a>
                    </li>
                    
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        type="button"
                        // onClick={onOpenSigninModal}
                        onClick={()=>Router.push(`/signin/customer`)}
                      >
                        sign in
                      </a>
                      {/* <Modal
                        open={opensignin}
                        showCloseIcon={false}
                        center
                        onClose={onCloseSigninModal}
                      >
                        <div className="modal1 homepup" id="signin">
                          <div className="modal-dialog1 modal-lg">
                            <div className="modal-content1">
                              <button type="button" data-bs-dismiss="modal">
                                <Image
                                  src="/images/vendoricon4.png"
                                  onClick={onCloseSigninModal}
                                  height={54}
                                  width={54}
                                  alt=""
                                />
                              </button>
                              <form onSubmit={loginformik.handleSubmit}>
                                <div className="modal-body">
                                  <div className="popuplogo">
                                    <Image
                                      src="/images/logo.svg"
                                      layout="fixed"
                                      height={92}
                                      width={188}
                                      alt=""
                                      // blurDataURL="/images/logo.png"
                                      // placeholder="blur"
                                    />
                                  </div>
                                  <div className="popuptxt">
                                    <h2>
                                      Login with <span>Gonje</span>
                                    </h2>
                                  </div>

                                  {isLoading ? (
                                    <CirclesToRhombusesSpinner color="#fff" />
                                  ) : null}
                                  <div className="newsletter-oter">
                                    {apimsgs.msg && (
                                      <div className={classes}>
                                        {classes !== "alert-success" ? (
                                          <Image
                                            src="/images/error_icon.svg"
                                            height={20}
                                            width={20}
                                            alt=""
                                          />
                                        ) : (
                                          <Image
                                            src="/images/success.svg"
                                            height={20}
                                            width={20}
                                            alt=""
                                          />
                                        )}{" "}
                                        {apimsgs.msg}
                                      </div>
                                    )}
                                    <input
                                      onChange={loginformik.handleChange}
                                      name="email"
                                      value={loginformik.values.email}
                                      type="text"
                                      placeholder="Enter your email"
                                    />

                                    {loginformik.errors.email ? (
                                      <div>{loginformik.errors.email}</div>
                                    ) : null}
                                    <div className="password_wrapper d-flex">
                                      <input
                                        type={`${
                                          !isVisible ? "password" : "text"
                                        }`}
                                        placeholder="Password"
                                        onChange={loginformik.handleChange}
                                        name="password"
                                        value={loginformik.values.password}
                                      />
                                      <i
                                        onClick={() => {
                                          setVisibility(!isVisible);
                                        }}
                                        className={`fa ${
                                          !isVisible ? "fa-eye" : "fa-eye-slash"
                                        }`}
                                      />
                                    </div>
                                    {loginformik.errors.password ? (
                                      <div>{loginformik.errors.password}</div>
                                    ) : null}

                                    <input
                                      type="submit"
                                      className="bttn"
                                      value="Login"
                                    />
                                  </div>
                                  <div className="or">
                                    <h4>OR</h4>
                                  </div>
                                  
                                  <div className="gmail-iphone z-30">
                                    <ul>
                                      <li className="gmalbtn">
                                      
                                       
                                       <a>
                                       <GoogleLoginComp>
                                       </GoogleLoginComp>
                                          
                                        </a>
                                          <Image
                                            height={19}
                                            width={30}
                                            src="/images/googleicon.svg"
                                            alt=""
                                          />
                                      </li>

                                      <li className="facebookbtn">
                                        <FacebookLoginComp></FacebookLoginComp>
                                      </li>

                                      <li className="phonebtn">
                                        <a
                                          onClick={() => {
                                            closeAllModel();
                                          }}
                                        >
                                          <Image
                                            height={19}
                                            width={30}
                                            src="/images/phoneicon.svg"
                                            alt=""
                                          />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="signuplnk">
                                    <h4>
                                      Don&apos;t have any account?
                                      <a
                                        onClick={() => {
                                          onOpenModal();
                                          onCloseSigninModal();
                                        }}
                                      >
                                        Signup
                                      </a>
                                    </h4>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </Modal> */}
                    </li>
                    
                    <li className="nav-item getstartedbtn bttn">
                      <a
                        onClick={onOpenModal}
                        className="nav-link bttn"
                        type="button"
                      >
                        Get Started
                      </a>

                      {/* <Modal
                        open={open}
                        showCloseIcon={false}
                        center
                        onClose={onCloseModal}
                      >
                        <div className="modal1 homepup getstart-popup">
                          <div className="modal-dialog1 modal-lg">
                            <div className="modal-content1">
                              <button type="button" onClick={onCloseModal}>
                                <Image
                                  src="/images/vendoricon4.png"
                                  height={54}
                                  width={54}
                                  alt=""
                                />
                              </button>

                              <div className="modal-body">
                                <div className="popupvector">
                                  <Image
                                    src="/images/popimg1.png"
                                    height={201}
                                    width={228}
                                    alt=""
                                  />
                                </div>
                                <div className="popuptxt">
                                  <h2>
                                    Check if we deliver to
                                    <br /> your address
                                  </h2>
                                  <p>
                                    We deliver only to certain addresses, To
                                    check if
                                    <br />
                                    we deliver to your area either your ZIP
                                    below
                                  </p>
                                </div>
                                <form onSubmit={formik.handleSubmit}>
                                  <div className="newsletter-oter">
                                    {apimsgs.msg && (
                                      <div className={classes}>
                                        {classes ? (
                                          <Image
                                            src="/images/error_icon.svg"
                                            height={20}
                                            width={20}
                                            alt=""
                                          />
                                        ) : (
                                          ""
                                        )}{" "}
                                        {apimsgs.msg}
                                      </div>
                                    )}

                                    <input
                                      onChange={formik.handleChange}
                                      name="email"
                                      value={formik.values.email}
                                      type="text"
                                      placeholder="Enter your email"
                                    />
                                    {formik.errors.email ? (
                                      <div>{formik.errors.email}</div>
                                    ) : null}

                                    <input
                                      onChange={formik.handleChange}
                                      name="postcode"
                                      value={formik.values.postcode}
                                      type="text"
                                      placeholder="Zip/Post Code"
                                    />
                                    {formik.errors.postcode ? (
                                      <div>{formik.errors.postcode}</div>
                                    ) : null}
                                    <input
                                      type="submit"
                                      className="bttn"
                                      value="Submit"
                                    />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>



        <Modal
          open={opensignup}
          showCloseIcon={false}
          center
          onClose={onCloseSignupModal}
        >
          <Register
            close={toggle}
            modelToggle={modelToggle}
            opensignin={openSingin}
            closeAllModel={closeAllModel}
          >
            {" "}
          </Register>
        </Modal>

        {is_show_phone ? (
          <Modal
            open={openphone}
            showCloseIcon={false}
            center
            onClose={onClosePoneModal}
          >
            <PhoneLogin
              modelToggle={modelToggle}
              closephone={closephone}
              closephonelogin={closephonelogin}
            ></PhoneLogin>
          </Modal>
        ) : (
          ""
        )}

        {is_show_otpverify ? (
          <Modal
            open={openotpverify}
            showCloseIcon={false}
            center
            onClose={onCloseOtpVerifyModal}
          >
            <VerifyOtp
              closeAllModel={closeAllModel}
              onCloseOtpVerify={onCloseOtpVerifyModal}
            ></VerifyOtp>{" "}
          </Modal>
        ) : (
          ""
        )}
      </header>
    </>
  );
}

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
import Link from "next/link.js";

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
                <Link href={`/`} className="navbar-brand">
                  <div className="relative w-32 h-20">
                    <Image
                      src="https://backendapi.gonje.com/public/gonje-storage/public/images/1_transparent_darkgreen.png"
                      alt="Gonje Logo"
                      fill={true}
                      className="bg-cover bg-center"
                    />
                  </div>
                </Link>
              </div>

              {/*desktopnav  */}

              <div className="hidden md:flex  rightmenus">
                <div className={`navbar-collapse`} id="collapsibleNavbar">
                  <ul className="navbar-nav  z-50">
                    {[
                      { href: "/howItworks", label: "How it works" },
                      { href: "/aboutUs", label: "About Us" },
                      { href: "/signin/customer", label: "Sign in" },
                      // { href: "/signup/customer", label: "Get Started" },
                    ].map((link, index) => (
                      <li className="nav-item" key={index}>
                        <Link href={link.href} className="nav-link">
                          {link.label}
                          {/* <img src="images/arrow1.svg" /> */}
                        </Link>
                      </li>
                    ))}
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
                        onClick={() => Router.push(`/signin/customer`)}
                      >
                        sign in
                      </a>
                    </li>

                    <li className="nav-item getstartedbtn bttn">
                      <a
                        onClick={onOpenModal}
                        className="nav-link bttn"
                        type="button"
                      >
                        Get Started
                      </a>
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

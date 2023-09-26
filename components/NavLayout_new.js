import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useCallback, useEffect, useState } from "react";

import { useFormik } from "formik";
import { verifyPostCode } from "./Api/Api";
import { resetData } from "./shared/Function.js";
import Register from "./Register";
import Image from "next/image";

export default function NavLayout() {
  const [apimsgs, apiSetmsgs] = useState({});
  const [classes, setclasses] = useState();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [opensignin, setOpenSignin] = useState(false);

  const onOpenSigninModal = () => setOpenSignin(true);
  const onCloseSigninModal = () => setOpenSignin(false);

  const [opensignup, setOpenSignup] = useState(false);

  const onOpenSignupModal = () => setOpenSignup(true);
  const onCloseSignupModal = () => setOpenSignup(false);

  const [modal, setModal] = useState(false);

  const toggleModelState = () => {
    setOpenSignin(false);
    setOpenSignup(true);
  };
  const toggle = () => {
    setOpenSignup(false);
  };
  const modelToggle = () => {
    setOpenSignin(true);
    setOpenSignup(false);
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
      } else if (typeof values.postcode !== "undefined") {
        if (values.postcode.length < 6) {
          errors.postcode = "Please add at least 6 charachter.";
        }
      }

      return errors;
    },
    onSubmit: async (values) => {
      const json = await verifyPostCode(values);
      if (json.data == 2) {
        setclasses("alert alert-danger");
        apiSetmsgs({
          msg: json.message,
        });
      } else if (json.data == 3) {
        setclasses("alert alert-danger");
        apiSetmsgs({
          msg: json.message,
        });
      } else {
        setclasses("alert-success");
        apiSetmsgs({
          msg: json.message,
        });
      }
      resetData(() =>
        apiSetmsgs({
          error: "",
        })
      );
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
      console.log(values);
    },
  });

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <div className="header-oter">
              <div className="logo">
                <a className="navbar-brand">
                  <Image
                    layout="fixed"
                    height={75}
                    width={154}
                    src="/images/logo.png"
                    alt=""
                  />
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>
              <div className="rightmenus">
                <div
                  className="collapse navbar-collapse"
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link">
                        About Us
                        {/* <img src="images/arrow.svg" /> */}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        type="button"
                        onClick={onOpenSigninModal}
                      >
                        sign in
                      </a>
                      <Modal
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
                                  height={54}
                                  width={54}
                                  src="/images/vendoricon4.png"
                                  alt=""
                                />
                              </button>
                              <form onSubmit={loginformik.handleSubmit}>
                                <div className="modal-body">
                                  <div className="popuplogo">
                                    <Image
                                      layout="fixed"
                                      height={92}
                                      width={188}
                                      src="/images/logo.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="popuptxt">
                                    <h2>
                                      Login with <span>Gonje</span>
                                    </h2>
                                  </div>
                                  <div className="newsletter-oter">
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
                                    <input
                                      type="text"
                                      placeholder="Password"
                                      onChange={loginformik.handleChange}
                                      name="password"
                                      value={loginformik.values.password}
                                    />
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
                                        <a>
                                          <Image
                                            height={19}
                                            width={30}
                                            src="/images/facebookicon.svg"
                                            alt=""
                                          />
                                        </a>
                                      </li>
                                      <li className="phonebtn">
                                        <a>
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
                                          toggleModelState();
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
                      </Modal>
                    </li>
                    <li className="nav-item getstartedbtn bttn">
                      <a
                        onClick={onOpenModal}
                        className="nav-link bttn"
                        type="button"
                        // className="bttn"
                      >
                        Get Started
                      </a>

                      <Modal
                        open={open}
                        showCloseIcon={false}
                        center
                        onClose={onCloseModal}
                      >
                        <div className="modal1 homepup">
                          <div className="modal-dialog1 modal-lg">
                            <div className="modal-content1">
                              <button type="button" onClick={onCloseModal}>
                                <Image
                                  height={54}
                                  width={54}
                                  src="/images/vendoricon4.png"
                                  alt=""
                                />
                              </button>

                              <div className="modal-body">
                                <div className="popupvector">
                                  <Image
                                    layout="fixed"
                                    height={92}
                                    width={188}
                                    src="/images/popimg1.png"
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
                                            height={20}
                                            width={20}
                                            src="/images/error_icon.svg"
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
                                      placeholder="Post Code"
                                    />
                                    {formik.errors.postcode ? (
                                      <div>{formik.errors.postcode}</div>
                                    ) : null}
                                  </div>
                                  <input
                                    type="submit"
                                    className="bttn"
                                    value="Submit"
                                  />
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal>
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
          <Register close={toggle} modelToggle={modelToggle}></Register>
        </Modal>
      </header>
    </>
  );
}

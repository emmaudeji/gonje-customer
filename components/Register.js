import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import { register } from "./Api/Api";
import { resetData } from "./shared/Function.js";
import FacebookLoginComp from "./FacebookLoginComp";
import GoogleLoginComp from "./GoogleLoginComp";
import Router from "next/router";
import Image from "next/image";
import Loader from "./Loader";
export default function Register({ close, modelToggle, closeAllModel }) {
  const [apimsgs, apiSetmsgs] = useState({});
  const [classes, setclasses] = useState();
  const [isLoading, setLoading] = useState(false);

  const registerformik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.first_name.length === 0) {
        errors.first_name = "This field is required";
      }
      if (values.last_name.length === 0) {
        errors.last_name = "This field is required";
      }

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
      setLoading(true);
      const json = await register(values);
      if (json.status == 2) {
        setLoading(false);
        setclasses("alert alert-danger");
        apiSetmsgs({
          msg: "The email has already been taken",
        });
      } else if (json.status == 3) {
        setLoading(false);
        setclasses("alert alert-danger");
        apiSetmsgs({
          msg: json.message,
        });
      } else {
        setLoading(false);
        setclasses("alert-success");
        apiSetmsgs({
          msg: json.message,
        });
        localStorage.setItem("user_detail", JSON.stringify(json));
        closeAllModel();
        console.log('SIGNUPDATA', json)
      }
      resetData(() =>
        apiSetmsgs({
          error: "",
        })
      );
      setLoading(false);
    },
  });
  
  return (
    <>
      {isLoading && <Loader />}
      <div className="modal1 homepup" id="signuppopup">
        <div className="modal-dialog1 modal-lg1">
          <div className="modal-content1">
            <button
              type="button"
              data-bs-dismiss="modal"
              onClick={() => close()}
            >
              <Image
                src="/images/vendoricon4.png"
                height={50}
                width={50}
                alt=""
              />
            </button>

            <div className="modal-body1">
              <div className="popuplogo">
                <Image src="/images/logo.svg" height={75} width={154} alt="" />
              </div>
              <div className="popuptxt">
                <h2>
                  SignUp with <span>Gonje</span>
                </h2>
              </div>
              <form onSubmit={registerformik.handleSubmit}>
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
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    onChange={registerformik.handleChange}
                    value={registerformik.values.first_name}
                  />
                  {registerformik.errors.first_name ? (
                    <div>{registerformik.errors.first_name}</div>
                  ) : null}
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={registerformik.handleChange}
                    value={registerformik.values.last_name}
                  />
                  {registerformik.errors.last_name ? (
                    <div>{registerformik.errors.last_name}</div>
                  ) : null}
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={registerformik.handleChange}
                    value={registerformik.values.email}
                  />
                  {registerformik.errors.email ? (
                    <div>{registerformik.errors.email}</div>
                  ) : null}
                  <input
                    type="Password"
                    name="password"
                    placeholder="password"
                    onChange={registerformik.handleChange}
                    value={registerformik.values.password}
                  />
                  {registerformik.errors.password ? (
                    <div>{registerformik.errors.password}</div>
                  ) : null}

                  <input type="submit" className="bttn" value="Sign Up" />
                </div>
              </form>
              <div className="or">
                <h4>OR</h4>
              </div>

              {/* <div className="gmail-iphone">
                <ul>
                  <li className="gmalbtn">
                    
                    <GoogleLoginComp></GoogleLoginComp>
                        <a><img src="images/googleicon.svg" /></a>
                  </li>

                  <li className="facebookbtn">
                    <FacebookLoginComp></FacebookLoginComp>
                  </li>
                  <li className="phonebtn">
                    <a  onClick={() => {
                      closeAllModel();
                    }}>
                      <img src="images/phoneicon.svg" /></a></li>
                </ul>
              </div> */}

              <div className="signuplnk">
                <h4>
                  Don&apos;t have any account?
                  <a onClick={() => modelToggle()}>Login</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

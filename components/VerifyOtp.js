import { useFormik } from "formik";
import { verifyOtp } from "./Api/Api";
import { resetData } from "./shared/Function.js";
import Router from "next/router";
import { useCallback, useEffect, useState, useRef } from "react";
import Timer from "./shared/Timer";
import Image from "next/image";
import Loader from "./Loader";

export default function VerifyOtp({ closeAllModel, onCloseOtpVerify }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const [apimsgs, apiSetmsgs] = useState({});
  const [classes, setclasses] = useState();
  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
      sixth: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.first.length === 0) {
        errors.first = "This field is required1";
        if (firstInput.current) firstInput.current.focus();
      } else if (values.second.length === 0) {
        errors.first = "This field is required";
        if (secondInput.current) secondInput.current.focus();
      } else if (values.third.length === 0) {
        errors.first = "This field is required";
        if (thirdInput.current) thirdInput.current.focus();
      } else if (values.fourth.length === 0) {
        errors.first = "This field is required";
        if (fourthInput.current) fourthInput.current.focus();
      } else if (values.fifth.length === 0) {
        errors.first = "This field is required";
        if (fifthInput.current) fifthInput.current.focus();
      } else if (values.sixth.length === 0) {
        errors.first = "This field is required";
        if (sixthInput.current) sixthInput.current.focus();
      }

      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);

      const json = await verifyOtp(values);
      if (json.status == 0) {
        setclasses("alert alert-danger");
        apiSetmsgs({
          msg: json.message,
        });
      } else {
        setclasses("alert-success");
        apiSetmsgs({
          msg: json.message,
        });
        onCloseOtpVerify();

        const user = localStorage.getItem("user_detail");
        const userObj = JSON.parse(user);
        localStorage.removeItem("opt_verify");
        if (!userObj) {
          localStorage.setItem("user_detail", JSON.stringify(json));
          Router.push("/dashboard");
        } else {
          Router.push("/shipping_detail");
        }
      }
      resetData(() =>
        apiSetmsgs({
          error: "",
        })
      );
      setLoading(false);
    },
  });
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  useEffect(() => {
    if (firstInput.current) firstInput.current.focus();
  }, [firstInput]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="modal1 homepup" id="sendcopopup">
        <div className="modal-dialog1 modal-lg1">
          <div className="modal-content1">
            <button type="button" onClick={() => onCloseOtpVerify()}>
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
                <h2>Enter OTP</h2>
              </div>

              <Timer expiryTimestamp={time}></Timer>
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
                  <div className="codeinputs">
                    {formik.errors.first ? (
                      <div>{formik.errors.first}</div>
                    ) : null}
                    <input
                      type="text"
                      ref={firstInput}
                      name="first"
                      maxLength="1"
                      onChange={formik.handleChange}
                      value={formik.values.first}
                    />
                    <input
                      type="text"
                      ref={secondInput}
                      maxLength="1"
                      name="second"
                      onChange={formik.handleChange}
                      value={formik.values.second}
                    />
                    <input
                      type="text"
                      ref={thirdInput}
                      maxLength="1"
                      name="third"
                      onChange={formik.handleChange}
                      value={formik.values.third}
                    />
                    <input
                      type="text"
                      ref={fourthInput}
                      maxLength="1"
                      name="fourth"
                      onChange={formik.handleChange}
                      value={formik.values.fourth}
                    />
                    <input
                      type="text"
                      ref={fifthInput}
                      maxLength="1"
                      name="fifth"
                      onChange={formik.handleChange}
                      value={formik.values.fifth}
                    />
                    <input
                      type="text"
                      ref={sixthInput}
                      maxLength="1"
                      name="sixth"
                      onChange={formik.handleChange}
                      value={formik.values.sixth}
                    />
                  </div>
                  <input type="submit" className="bttn" value="SUBMIT" />
                </div>
              </form>

              <div className="signuplnk">
                <h4>
                  Send <a onClick={() => closeAllModel()}>OTP</a> again
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

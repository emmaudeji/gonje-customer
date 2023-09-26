import { useFormik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { phonenumberLogin } from "./Api/Api";
import { resetData } from "./shared/Function.js";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Image from "next/image";
import Loader from "./Loader";

export default function PhoneLogin({
  modelToggle,
  closephone,
  closephonelogin,
}) {
  const [apimsgs, apiSetmsgs] = useState({});
  const [classes, setclasses] = useState();
  const [values, setValues] = useState();
  const [state, setState] = useState();
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValues(event);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (values === undefined || values.length < 3) {
      setState("This field is required");
      return;
    } else if (typeof values.length !== "undefined") {
      if (values.length < 10) {
        setState("Please add at least 10 charachter.");
        return;
      } else {
        setState("");
      }
    }
    const json = await phonenumberLogin(values);

    if (json.status == 1) {
      setclasses("alert alert-danger");
      apiSetmsgs({
        msg: "The email has already been taken",
      });
    } else if (json.status == 3) {
      setclasses("alert alert-danger");
      apiSetmsgs({
        msg: json.message,
      });
    } else {
      localStorage.setItem("opt_verify", JSON.stringify(json));
      setclasses("alert-success");
      apiSetmsgs({
        msg: json.message,
      });
      closephonelogin();
    }
    resetData(() =>
      apiSetmsgs({
        error: "",
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    const opt_verify = localStorage.getItem("opt_verify");

    const opt_verify_obj = JSON.parse(opt_verify);

    if (opt_verify_obj) {
      if (opt_verify_obj.phone_number) {
        setValues(opt_verify_obj.phone_number);
      }
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className="modal1 homepup" id="phonepopup">
        <div className="modal-dialog1 modal-lg1">
          <div className="modal-content1">
            <button type="button" onClick={() => closephone()}>
              <Image
                height={50}
                width={50}
                src="/images/vendoricon4.png"
                alt=""
              />
            </button>

            <div className="modal-body">
              <div className="popuplogo">
                <Image height={75} width={154} src="/images/logo.svg" alt="" />
              </div>
              <div className="popuptxt">
                <h2>
                  Login with your mobile number. We&apos;ll send you a code
                  <br /> to the given mobile number to login into your
                  <br /> account.
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
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
                  <PhoneInput
                    international
                    defaultCountry="US"
                    onChange={handleChange}
                    value={values}
                  />
                  {state ? <div>{state}</div> : ""}

                  <input type="submit" className="bttn" value="Send Code" />
                </div>
              </form>
              <div className="signuplnk">
                <h4>
                  Back to <a onClick={() => modelToggle()}>Login</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

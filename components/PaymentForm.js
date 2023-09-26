import { useFormik } from "formik";
import validator from "validator";
import { useCallback, useEffect, useState } from "react";
import { saveCard } from "./Api/Api";
import { resetData } from "./shared/Function.js";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { retrieveUser } from "../actions/users";
import Image from "next/image";
export default function PaymentForm() {
  const dispatch = useDispatch();
  const [apimsgs, apiSetmsgs] = useState({});
  const [classes, setclasses] = useState();
  const [zipcode, setzipcode] = useState();
  const users = useSelector((state) => state.users);
  const skip = () => {
    Router.push("/delivery_date");
  };
  const formik = useFormik({
    initialValues: {
      type: "",
      expiration: "",
      zipcode: "",
      cvv: "",
      card: "",
    },
    validate: (values) => {
      let errors = {};
      var regYear =
        /^2021|2022|2023|2024|2025|2026|2027|2028|2029|2030|2031|2032|2033$/;
      var regCVV = /^[0-9]{3,3}$/;

      if (values.type.length === 0) {
        errors.type = "This field is required";
      }
      if (values.card.length === 0) {
        errors.card = "This field is required";
      } else {
        if (!validator.isCreditCard(values.card)) {
          errors.card = "Enter valid CreditCard Number!";
        }
      }
      if (values.cvv.length === 0) {
        errors.cvv = "This field is required";
      } else if (!regCVV.test(values.cvv)) {
        errors.cvv = "Please enter 3 numbers for your cvv.";
      }
      if (values.expiration.length === 0) {
        errors.expiration = "This field is required";
      } else if (!regYear.test(values.expiration)) {
        errors.expiration = "Please select a valid expiry date.";
      }

      return errors;
    },
    onSubmit: async (values) => {
      const json = await saveCard(values);
      if (json.status == 1) {
        setclasses("alert-success");
        apiSetmsgs({
          msg: json.message,
        });
        Router.push("/delivery_date");
      }
      resetData(() =>
        apiSetmsgs({
          error: "",
        })
      );
    },
  });

  useEffect(() => {
    dispatch(retrieveUser());
  }, [dispatch]);

  useEffect(() => {
    const user_detail = localStorage.getItem("user_detail_postcode");
    const user_detail_obj = JSON.parse(user_detail);

    setzipcode(user_detail_obj);
  }, [users]);
  return (
    <>
      <div className="shippingotter">
        <div className="shippinglogo">
          <Image src="/images/logo.png" height={75} width={154} alt="" />
        </div>
        <div className="shippinginr">
          <div className="shippingsteps">
            <ul>
              <li className="activesteps">
                <span>
                  <Image
                    src="/images/shoping-detail/tick.svg"
                    height={30}
                    width={30}
                    alt=""
                  />
                </span>
                <h4>Shipping Address</h4>
              </li>
              <li className="activesteps">
                <span>
                  <Image
                    src="/images/shoping-detail/tick.svg"
                    height={30}
                    width={30}
                    alt=""
                  />
                </span>
                <h4>Payment Details</h4>
              </li>
              <li>
                <span>
                  <Image
                    height={30}
                    width={30}
                    src="/images/shoping-detail/tick.svg"
                    alt=""
                  />
                </span>
                <h4>Delivery Date</h4>
              </li>
            </ul>
          </div>

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
          <form onSubmit={formik.handleSubmit}>
            <div className="paymentmthod_otr">
              <div className="paymentmthod">
                <lable>Select Payment Method</lable>

                <select
                  name="type"
                  defaultValue=""
                  value={formik.values.ctypeard}
                  onChange={formik.handleChange}
                >
                  <option disabled={true} value="">
                    Payment Method
                  </option>
                  <option>Visa Card</option>
                  <option>Master Card</option>
                </select>
                {formik.errors.type ? (
                  <div className="formik_error">{formik.errors.type}</div>
                ) : null}
              </div>
            </div>
            <div className="shippingform">
              <div className="feilds">
                <lable>Credit or debit Card</lable>
                <input
                  placeholder="Credit or debit Card"
                  type="text"
                  value={formik.values.card}
                  name="card"
                  onChange={formik.handleChange}
                />
                {formik.errors.card ? (
                  <div className="formik_error">{formik.errors.card}</div>
                ) : null}
              </div>
              <div className="doublefeilds">
                <div className="feilds">
                  <lable>Expiration</lable>
                  <input
                    placeholder=" MM/YYYY"
                    type="text"
                    onChange={formik.handleChange}
                    name="expiration"
                    value={formik.values.expiration}
                  />
                  {formik.errors.expiration ? (
                    <div className="formik_error">
                      {formik.errors.expiration}
                    </div>
                  ) : null}
                </div>
                <div className="feilds">
                  <lable>CVV</lable>
                  <input
                    placeholder="CVV"
                    type="text"
                    value={formik.values.cvv}
                    name="cvv"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.cvv ? (
                    <div className="formik_error">{formik.errors.cvv}</div>
                  ) : null}
                </div>
                <div className="feilds">
                  <lable>Zip Code</lable>
                  <input
                    placeholder="Zip code"
                    type="text"
                    value={zipcode}
                    readOnly
                    name="zipcode"
                  />
                </div>
              </div>
              {/* <div className="feilds giftcards">
                <lable>
                  <a >
                    <img src="images/shoping-detail/plus.svg" />
                  </a>
                  Apply Code for gift Coupon
                </lable>
                <input type="text" />
              </div> */}
              <div className="continuebtn">
                <input type="submit" className="bttn" value="Continue" />
              </div>
            </div>
          </form>
          <div className="payment_skip">
            <a onClick={() => skip()}>Skip</a>
          </div>
        </div>
      </div>
    </>
  );
}

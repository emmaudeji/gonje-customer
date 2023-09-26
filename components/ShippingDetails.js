import { useFormik } from "formik";
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import { ShippingAddress } from "./Api/Api";
import { resetData } from "./shared/Function.js";
import { useDispatch, useSelector } from "react-redux";
import { retrieveUser } from "../actions/users";
import { shipppingDetailValidation } from "./shared/Validation.js";
import GooglePlaceAutoComplete from "./GooglePlaceAutoComplete";
import Image from "next/image";
import Loader from "./Loader";
export default function ShippingDetails() {
  const [apimsgs, apiSetmsgs] = useState({});
  const [classes, setclasses] = useState();
  const [phone, setphone] = useState();
  const [postcode, setpostcode] = useState();
  const [province, setprovince] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [city, setcity] = useState();
  const [apt, setapt] = useState();
  const [address, setaddress] = useState();
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  const users = useSelector((state) => state.users);

  const setGoogleAddreesObj = (obj) => {
    if (obj && obj.formattedAddress) {
      setaddress(obj.formattedAddress);
    } else {
      setaddress("");
    }
    if (obj && obj.zip) {
      setpostcode(obj.zip);
    } else {
      setpostcode("");
    }
    if (obj && obj.province) {
      setprovince(obj.province);
    } else {
      if (obj && obj.state) {
        setprovince(obj.state);
      } else {
        setprovince("");
      }
    }

    if (obj && obj.city) {
      setcity(obj.city);
    } else {
      setcity("");
    }
    if (obj && obj.lat) {
      setLat(obj.lat);
    } else {
      setLat("");
    }
    if (obj && obj.lng) {
      setLng(obj.lng);
    } else {
      setLng("");
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveUser());
  }, [dispatch]);

  useEffect(() => {
    if (users.profile && users.profile.contact !== "undefined") {
      setphone(users.profile.contact);
    }
  }, [users]);

  const setNewAddress = (value) => {
    if (value && value.label !== "undefined") {
      setaddress(value.label);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const errorsObj = shipppingDetailValidation({
      address: address,
      apt: apt,
      city: city,
      province: province,
      postcode: postcode,
    });
    setErrors(errorsObj);
    if (Object.keys(errorsObj).length === 0 && address) {
      setLoading(true);

      let json;
      (async function fetchData() {
        json = await ShippingAddress({
          address: address,
          apt: apt,
          city: city,
          province: province,
          postcode: postcode,
          phonenumber: phone,
          latitude: lat,
          longitude: lng,
        });
        if (json?.status == 1) {
          setclasses("alert-success");
          apiSetmsgs({
            msg: json.message,
          });

          Router.push("/payment_detail");
        } else {
          setclasses("alert alert-danger");
          apiSetmsgs({
            msg: json?.message,
          });
        }
      })();

      resetData(() =>
        apiSetmsgs({
          msg: "",
        })
      );
      setLoading(false);
    }
  };

  // useEffect(() => {

  // }, [errors, address, apt, city, phone, postcode, province]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="container">
        <div className="shippingotter">
          <div className="shippinglogo">
            <Image height={75} width={154} src="/images/logo.svg" alt="" />
          </div>
          <div className="shippinginr">
            <div className="shippingsteps">
              <ul>
                <li className="activesteps">
                  <span>
                    <Image
                      height={30}
                      width={30}
                      src="/images/shoping-detail/tick.svg"
                      alt=""
                    />
                  </span>
                  <h4>Shipping Address</h4>
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
            <div className="shippingform">
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
              <form onSubmit={handleFormSubmit}>
                <div className="feilds">
                  <lable>Enter Address</lable>

                  <GooglePlaceAutoComplete
                    setGoogleAddreesObj={setGoogleAddreesObj}
                    setNewAddress={setNewAddress}
                  />
                </div>

                {errors.address ? (
                  <div className="shipping_error">{errors.address}</div>
                ) : null}

                <div className="feilds">
                  <lable>Apt, Suite, etc</lable>
                  <input
                    type="text"
                    placeholder="Apt, Suite, etc"
                    name="apt"
                    value={apt}
                    onChange={(e) => setapt(e.target.value)}
                  />
                </div>
                {errors.apt ? (
                  <div className="shipping_error">{errors.apt}</div>
                ) : null}

                <div className="feilds selectfeilds">
                  <lable>City</lable>

                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                  />
                </div>
                {errors.city ? (
                  <div className="shipping_error">{errors.city}</div>
                ) : null}
                <div className="feilds selectfeilds">
                  <lable>State</lable>

                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={province}
                    onChange={(e) => setprovince(e.target.value)}
                  />
                </div>
                {errors.province ? (
                  <div className="shipping_error">{errors.province}</div>
                ) : null}
                <div className="shipping_doublefeilds">
                  <div className="doublefeilds1">
                    <div className="feilds">
                      <lable>Zip Code</lable>
                      <input
                        type="text"
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        placeholder="Zip Code"
                        name="zipcode"
                        value={postcode}
                        onChange={(e) => setpostcode(e.target.value)}
                      />
                    </div>

                    {errors.postcode ? (
                      <div className="shipping_error">{errors.postcode}</div>
                    ) : null}
                  </div>
                  <div className="doublefeilds1">
                    <div className="feilds">
                      <lable>Phone Number</lable>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phonenumber"
                        value={phone}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="continuebtn">
                  <input type="submit" className="bttn" value="Continue" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

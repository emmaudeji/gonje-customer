import { useFormik } from "formik";

import { useCallback, useEffect, useState } from "react";
import { resetData } from "./shared/Function.js";
import { newsletter } from "./Api/Api";
import Image from "next/image";
import Fade from 'react-reveal/Fade';


export default function Newsletter() {
  const [apimsgs, apiSetmsgs] = useState({});
  const [classes, setclasses] = useState();
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
          // errors.postcode = "Please add at least 6 charachter.";
        }
      }

      return errors;
    },
    onSubmit: async (values) => {
      const json = await newsletter(values);

      if (json.status == 200) {
        setclasses("alert-success");
        apiSetmsgs({
          msg: json.message,
        });
      } else {
        setclasses("alert alert-danger");
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
  return (
    <>
      <section className="newslettersec">
      <Fade top>
      <div className="container">
          <div
            className="heading wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <h2 className="capitalize">sign up to newsletter</h2>
            <p>
              Sign up now to get the exclusive deals and offers, money-saving
              promotions straight to your inbox.
            </p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div
              className="newsletter-oter wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
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
                name="email"
                value={formik.values.email}
                placeholder="Enter your email"
                onChange={formik.handleChange}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <input
                type="text"
                name="postcode"
                value={formik.values.postcode}
                placeholder="Post Code"
                onChange={formik.handleChange}
              />
              {formik.errors.postcode ? (
                <div>{formik.errors.postcode}</div>
              ) : null}
              <input type="submit" className="bttn" value="Submit" />
            </div>
          </form>
        </div>
        </Fade>
        
      </section>
    </>
  );
}

import { useFormik } from "formik";

import { useCallback, useEffect, useState } from "react";
import { resetData } from "./shared/Function.js";
import { newsletter } from "./Api/Api";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { useToast } from "@/components/ui/use-toast";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { NewsletterForm } from "./MailChimpForm";
export default function Newsletter() {
  const { toast } = useToast();
  const url =
    "https://gonje.us20.list-manage.com/subscribe/post?u=8293c49fe797c04b3b9f52c23&amp;id=b040c42304";
  const [apimsgs, apiSetmsgs] = useState({});
  const [classes, setclasses] = useState();

  const handleSubmit = (e, subscribe, status, message) => {
    e.preventDefault();
    console.log(e.target);
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
          // errors.postcode = "Please add at least 6 charachter.";
        }
      }

      return errors;
    },
    onSubmit: async (values, test, test2) => {},
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
              <h2 className="capitalize">sign up to our newsletter</h2>
              <p>
                Sign up now to get the exclusive deals and offers, money-saving
                promotions straight to your inbox.
              </p>
            </div>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <>
                  <div className="">
                    <NewsletterForm
                      {...{ status, message }}
                      onValidated={(formData) => subscribe(formData)}
                    />
                  </div>
                </>
              )}
            />
          </div>
        </Fade>
      </section>
    </>
  );
}

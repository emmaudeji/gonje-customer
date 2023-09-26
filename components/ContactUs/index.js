import Image from "next/image";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { validateEmail, validatePhone } from "../../util";
import { contactUs } from "../Api/Api";
import toasts from "../shared/toast";

const InitialValues = {
  name: "",
  email: "",
  message: "",
  phone: "",
};

const ContactUsPage = () => {
  const [values, SetValues] = useState(InitialValues);
  const [errors, setErrors] = useState(InitialValues);

  const handleChange = (event) => {
    const key = event?.target ? event?.target?.name : "phone";
    const value = event?.target ? event?.target?.value : event;
    SetValues({ ...values, [key]: value });
    setErrors(InitialValues);
  };

  const handleSubmit = async () => {
    const error = checkContactUsFields();
    setErrors(error);
    const isAnyError = Object.values(error).filter((el) => !!el);
    if (isAnyError.length === 0) {
      const response = await contactUs(values);
      toasts.notifySucces(response.message);
      SetValues(InitialValues);
    }
  };

  const checkContactUsFields = () => {
    const error = {};
    Object.keys(values).forEach((key) => {
      const item = values[key];
      if (!item) {
        error[key] = `${key} is required`;
      } else if (key == "email") {
        error[key] = validateEmail(item) || "";
      } else if (key == "phone") {
        error[key] = validatePhone(item) || "";
      }
    });
    return error;
  };

  return (
    <>
      <section className="Hows-its-works">
        <div className="top-part text-center">
          <h2>Contact Us</h2>
        </div>
      </section>

      <section className="delivery-door bg-white">
        <div className="container">
          <div className="row ">
            <div className="col-xl-6">
              <div className="img-wrap">
                <div>
                  <p className="pt-5">
                  <span className="fw-bold"><br></br><br></br> We&apos;re thrilled to hear from you! Whether you have questions,<br></br> suggestions, or feedback, our team is ready to
                   assist you. Please feel free to reach out to us.
                  </span> 
                   <br></br> <br></br><span className="fw-bold">Customer Support</span><br></br>
                  Our dedicated customer support team is here to address any <br></br>inquiries or concerns you may have. 
                  We value your experience with our platform, and our representatives are committed to providing 
                  prompt and <br></br> helpful assistance.



                    
                  </p>

                  <div className="company_detail">
                    <div className="email d-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                      </svg>
                      <p className="mb-0 ">info@onjegroup.com.au </p>
                    </div>
                    <div className="email d-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
                      </svg>
                      <p className="mb-0 ">1800 749 277</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="heading wow fadeInUp">
                <h2>Contact Form </h2>
              </div>
              <form>
                <div className="newsletter-oter wow fadeInUp contact_us_form">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p>{errors.name}</p>}
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p>{errors.email}</p>}
                  <div className="contact_phone">
                    <PhoneInput
                      international
                      defaultCountry="US"
                      onChange={handleChange}
                      value={values.phone}
                    />
                  </div>
                  {errors.phone && <p>{errors.phone}</p>}
                  <textarea
                    type="text"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  />
                  <p>{errors.message}</p>
                  <button
                    type="button"
                    className="bttn contact_submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;

import { useEffect, React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const BillingInformation = () => {
  return (
    <>
      <div className="col-xl-6 col-lg-12 card_information">
        <div className="my-schedule  billing-information shipping-address mt-lg-4">
          <div className="top-heading">
            <h3>Billing Information</h3>
          </div>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Credit/Debit Card
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="enter credit/debit card number"
              />
            </div>
            <div className="row g-3">
              <div className="col-md-4">
                <label htmlFor="inputEmail4" className="form-label">
                  Expiration
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter Expiration date"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputPassword4" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter CVV"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputPassword4" className="form-label">
                  ZIP CODE
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter ZIP code"
                />
              </div>
            </div>
            <button type="button" className="btn btn-light">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default BillingInformation;

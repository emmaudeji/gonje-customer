import Image from "next/image";
import React from "react";
import MailChimp from "../MailChimp";

const HowItWorksPage = () => {
  return (
    <>
      <section className="Hows-its-works">
        <div className="top-part text-center">
          <h2>How its works</h2>
        </div>
      </section>
      <section className="works-steps">
        <div className="container bg-white">
          <div className="row">
            <div className="col-lg-8">
              <div className="outer-wrap d-flex">
                <Image
                  layout="fixed"
                  height={92}
                  width={210}
                  src="/images/first.svg"
                  alt=""
                />
                <div className="choose-product">
                  <h4>choose product</h4>
                  <p className="mb-2">
                    Discover food items or products from a pool of retailers.
                    Add products to your virtual basket. Adjust the items by
                    tapping on + or - icons. You can add or remove items from
                    your cart anytime. Now, schedule a delivery time, enter your
                    shipping address and payment information. Select either the
                    Automatic or Manual Checkout option. Select your payment
                    method, fill in card details, and Submit.
                  </p>
                  <MailChimp />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="img-wrap-point text-center">
                <Image
                  src="/images/first-point.svg"
                  alt=""
                  layout="fixed"
                  height={246}
                  width={235}
                />
              </div>
            </div>
          </div>
          <div className="downn-arrow text-center">
            <Image
              layout="fixed"
              height={100}
              width={100}
              src="/images/down-arrow-steps.svg"
              alt=""
            />
          </div>
          <div className="row secnd-step">
            <div className="col-lg-4">
              <div className="img-wrap-point text-center">
                <Image
                  layout="fixed"
                  height={245}
                  width={362}
                  src="/images/steps-sec.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="outer-wrap no-2 d-flex">
                <div className="choose-product">
                  <h4>Payment</h4>
                  <p className="mb-2">
                    {" "}
                    In the next step, you need to choose the Payment option. We
                    accept different payment methods - all major credit and
                    debit cards (including Mastercard, Visa). Apart from that,
                    we accept payment using Google Pay, Apple Pay, Paypal,
                    afterpay, Zip, and Klarna.{" "}
                  </p>
                  <MailChimp />
                </div>
                <Image
                  layout="fixed"
                  height={92}
                  width={210}
                  src="/images/second-point.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="downn-arrow text-center">
            <Image
              layout="fixed"
              height={100}
              width={100}
              src="/images/down-arrow-steps.svg"
              alt=""
            />
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="outer-wrap d-flex">
                <Image
                  layout="fixed"
                  height={92}
                  width={210}
                  src="/images/third-point.svg"
                  alt=""
                />
                <div className="choose-product">
                  <h4>We Process</h4>
                  <p className="mb-2">
                    Once we receive your order request, the details of the order
                    are sent to inventory. Generally, orders are processed
                    within 24 hours. Order is picked, packed, and shipped to
                    your doorstep.{" "}
                  </p>
                  <MailChimp />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-wrap-point text-center">
                <Image
                  layout="fixed"
                  height={262}
                  width={335}
                  src="/images/fourth-point-img.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="downn-arrow text-center">
            <Image
              layout="fixed"
              height={100}
              width={100}
              src="/images/down-arrow-steps.svg"
              alt=""
            />
          </div>
          <div className="row secnd-step">
            <div className="col-lg-4">
              <div className="img-wrap-point text-center">
                <Image
                  layout="fixed"
                  height={200}
                  width={390}
                  src="/images/fourth-point-imga.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="outer-wrap no-2 d-flex">
                <div className="choose-product">
                  <h4>Product Delivered</h4>
                  <p className="mb-2">
                    After packing the order, the next step is to deliver it to
                    your doorstep. You can track the order delivery in real-time
                    on the Gonje platform. Orders will be shipped the same day
                    only if you place them before 11 am from Monday to Friday.{" "}
                  </p>
                  <MailChimp />
                </div>
                <Image
                  layout="fixed"
                  height={100}
                  width={200}
                  src="/images/fourth-point.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const AboutUsPage = () => {
  const router = useRouter();
  return (
    <>
      <section className="Hows-its-works">
        <div className="top-part text-center">
          <h2>About Us</h2>
        </div>
      </section>
      <section className="top-instructions">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6">
              <div className="wrap d-flex align-items-start ">
                <div className="icon">
                  {" "}
                  <Image
                    height={100}
                    width={100}
                    src="/images/Fastdelivery.svg"
                    alt=""
                  />
                </div>
                <div className="free-shipping">
                  <h5>Free Shipping</h5>
                  <p>On all orders over $75.00</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="wrap d-flex align-items-start">
                <div className="icon">
                  {" "}
                  <Image
                    layout="fixed"
                    height={100}
                    width={100}
                    src="/images/easyReturn.svg"
                    alt=""
                  />
                </div>
                <div className="free-shipping">
                  <h5>Easy 30 Days Returns</h5>
                  <p>30 days money back</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="wrap d-flex align-items-start ">
                <div className="icon">
                  {" "}
                  <Image
                    layout="fixed"
                    height={100}
                    width={100}
                    src="/images/Return.svg"
                    alt=""
                  />
                </div>
                <div className="free-shipping">
                  <h5>100% Payment Secure</h5>
                  <p>PayPal / MasterCard / Visa</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6">
              <div className="wrap d-flex align-items-start ">
                <div className="icon">
                  {" "}
                  <Image
                    layout="fixed"
                    height={100}
                    width={100}
                    src="/images/24-7support.svg"
                    alt=""
                  />{" "}
                </div>
                <div className="free-shipping">
                  <h5>24/7 Support</h5>
                  <p>We will be at your service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fresh-product">
        <div className="container">
          <div className="row ">
            <div className="col-xl-6">
              <div className="img-wrap">
                <Image
                  layout="fixed"
                  height={400}
                  width={400}
                  className="img-fluid"
                  src="/images/AboutUs.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-3 content-left">
                <strong>About Us</strong>
                <p>
                  {" "}
                  {/* Gonje is an innovative e-commerce platform for local suppliers
                  and independent food producers. Established in Melbourne,
                  Australia 2014, Gonje is focused on bridging the intercultural
                  gap through food, encouraging local suppliers to be more
                  competitive in the current disruptive environment. Our goal is
                  to create opportunities for suppliers whilst providing options
                  of unique flavors, intercontinental food products, and
                  ingredients to customers in their locality. Furthermore, we
                  help users shop from local producers, independent retailers. */}
                  Gonje is an innovative online marketplace for local farmers
                  and independent food producers. Established in 2021 in
                  Australia, Gonje is working on bridging culture through food
                  and encouraging local farming produce. We help customers
                  discover unique flavors, intercontinental food, and
                  ingredients. Furthermore, we help users shop from local
                  producers, independent retailers in your locality.
                </p>
                <button
                  type="button"
                  className="btn btn-success main-butn"
                  onClick={() => {
                    router.push("/contactUs");
                  }}
                >
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="delivery-door our-vision">
        <div className="container">
          <div className="upper-head mt-5 text-center">
            <h4>Our Vision</h4>
            <p>
              {" "}
              Our vision is to promote cross-cultural awareness through food and
              enable local producers and food retailers to thrive online. We
              help independent retailers and farmers to showcase their
              businesses online and sell their best produce effectively in a
              local marketplace. We focus on providing organic, fresh produce
              that would be helping in reducing carbon footprints.
            </p>
          </div>
        </div>
      </section>
      <section className="delivery-door bg-white">
        <div className="container">
          <div className="upper-head mt-5 text-center">
            <h4>Our Mission</h4>
            <p>
              {" "}
              Our mission is to provide a simple yet robust platform for a
              growing community of dedicated shoppers. Gonje connects people,
              and vendors best in the food & grocery industry, enabling
              customers to shop more conveniently while empowering and
              protecting local or intercultural communities. We also focus on
              social procurement to bring public health and environmental
              benefits to communities. Offering high-quality products from
              suppliers whilst providing excellent solutions to customers. Gonje
              is the only platform that connects multi-cultural suppliers to
              customers, creating a hub for those passionate about unique
              ingredients and food products, making us the best at what we do.
            </p>
          </div>
          <div className="row mt-5 ms-0 me-0">
            <div className="col-xl-4 col-lg-6">
              <Image
                layout="responsive"
                height={35}
                width={50}
                className="img-fluid mb-2"
                src="/images/door-img.png"
                alt=""
              />
            </div>
            <div className="col-xl-4 col-lg-6">
              <Image
                layout="responsive"
                height={35}
                width={50}
                className="img-fluid mb-2"
                src="/images/door-img2.png"
                alt=""
              />
            </div>
            <div className="col-xl-4 col-lg-6">
              <Image
                layout="responsive"
                height={35}
                width={50}
                className="img-fluid mb-2 "
                src="/images/door-img3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;

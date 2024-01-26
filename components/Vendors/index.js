import Image from "next/image";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import React from "react";
// get started
const VendorsPage = () => {
  const router = useRouter();
  return (
    <>
      <section className="Hows-its-works">
        <div className="top-part text-center">
          <Fade top>
            <h2>Vendors</h2>
          </Fade>
        </div>
      </section>
      <section className="fresh-product">
        <div className="container">
          <div className="row items-center">
            {/* //TODO:seperate each sections into their own grid */}
            <Fade left>
              <div className="col-xl-6">
                <div className="img-wrap">
                  <Image
                    height={700}
                    width={600}
                    className="img-fluid"
                    src="/images/img-vendor-bg.png"
                    alt=""
                  />
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-6 mt-5">
                <div className="ps-3 content-left">
                  <strong>Join a Vibrant Community of Vendors</strong>
                  <p>
                    {" "}
                    For vendors, becoming a member of Gonje is a transformative
                    step that opens doors to limitless opportunities and paves
                    the way for unparalleled growth in the competitive world of
                    ecommerce. As a vendor on our platform, you gain access to
                    an array of exclusive benefits and resources such as
                    inventory management, quote requests, quote management,
                    analytics, HR tools and a whole lot more designed to propel
                    your business to new heights.
                    {/* As a Gonje vendor, you become part of a vibrant and supportive community of like-minded sellers, each driven by a passion for success and a commitment to excellence. Engage with fellow vendors, connect with suppliers, share insights, and collaborate on industry best practices. Our community spirit fosters collaboration, knowledge-sharing, and growth, empowering you to learn from others and stay updated with the latest ecommerce trends. */}
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-xl-6 py-5 mt-5">
                <div className="ps-3 content-left">
                  <strong>
                    Enjoy Seamless Order Management System and Utilize
                    Innovative Marketing Tools
                  </strong>
                  <p>
                    {" "}
                    Simplify the order fulfillment process with Gonje's seamless
                    and efficient order management system. From order processing
                    to shipping and delivery, our platform ensures that each
                    transaction is handled smoothly, leaving your customers
                    satisfied with their purchases.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-6 d-none d-sm-none d-md-none d-lg-none d-xl-block py-5">
                <div className="img-wrap">
                  <Image
                    layout="fixed"
                    height={700}
                    width={500}
                    className="img-fluid"
                    src="/images/img-vendor-white.png"
                    alt=""
                  />
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className="col-xl-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
                <div className="img-wrap">
                  <Image
                    layout="fixed"
                    height={700}
                    width={400}
                    className="img-fluid"
                    src="/images/gonje-info-icon-4.png"
                    alt=""
                  />
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-6">
                <div className="ps-3 content-left pt-5 mt-5">
                  <strong>Management Tools</strong>
                  <p>
                    {" "}
                    Minimize administrative burden and focus on delivering an
                    exceptional customer experience with our hassle-free order
                    management system.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-xl-6">
                <div className="ps-3 content-left pt-5 mt-5">
                  <strong>Marketing Tools</strong>
                  <p>
                    {" "}
                    At Gonje, we believe in equipping our vendors with the
                    latest marketing tools to enhance their visibility and
                    attract more customers.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
                <div className="img-wrap">
                  <Image
                    layout="fixed"
                    height={400}
                    width={400}
                    className="img-fluid"
                    src="/images/gonje-info-icon-2.png"
                    alt=""
                  />
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-xl-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
                <div className="img-wrap">
                  <Image
                    layout="fixed"
                    height={400}
                    width={400}
                    className="img-fluid"
                    src="/images/gonje-info-icon-3.png"
                    alt=""
                  />
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-6">
                <div className="ps-3 content-left pt-5 mt-5">
                  <strong>New Features</strong>
                  <p>
                    {" "}
                    Benefit from innovative marketing features such as
                    personalized recommendations, targeted promotions, and
                    seasonal campaigns.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-xl-6">
                <div className="ps-3 content-left pt-5 mt-5">
                  <strong>Analytics</strong>
                  <p>
                    {" "}
                    Our data-driven marketing strategies will help you engage
                    customers, boost conversion rates, and establish your brand
                    as a customer favorite.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
                <div className="img-wrap">
                  <Image
                    layout="fixed"
                    height={400}
                    width={400}
                    className="img-fluid"
                    src="/images/gonje-info-icon-1.png"
                    alt=""
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="delivery-door our-vision">
        <div className="container">
          <Fade top>
            <div className="upper-head mt-5 text-center">
              <h4>Showcase to a Broad Customer Base</h4>
              <p>
                {" "}
                Gonje offers you an extensive and diverse customer base, giving
                your products unparalleled exposure to a vast audience of eager
                shoppers. With a vibrant and engaged community of customers
                actively seeking unique offerings, your products will find their
                way into the hands of those who truly appreciate and value them.
                Showcase your range of goods with confidence, knowing that your
                brand will be represented in front of a dynamic customer base
                actively seeking high-quality products.
              </p>
              {/* <button
                  type="button"
                  className="btn btn-success main-butn"
                  onClick={() => {
                    router.push("/contactUs");
                  }}
                >
                  Get Started
                </button> */}
            </div>
          </Fade>
        </div>
      </section>
      <section className="delivery-door bg-white">
        <div className="container">
          <Fade top>
            <div className="upper-head mt-5 text-center">
              <h4>Boost Your Business and Expand Your Reach</h4>
              <p>
                {" "}
                Dissolve the barriers of traditional selling and expand your
                business beyond geographical boundaries. By joining Gonje, you
                can reach customers from different corners of the globe,
                allowing you to tap into new markets and demographics. Our
                platform's reach extends far and wide, offering your brand the
                potential to connect with a diverse and international clientele.
                Embrace new opportunities and discover untapped markets as you
                take your brand to exciting new territories. Gonje provides
                vendors with a robust and user-friendly platform that
                streamlines every aspect of the selling process. From managing
                product listings to tracking sales and handling inventory, our
                intuitive interface makes it easy for you to navigate and
                efficiently manage your business operations. Stay in control,
                stay informed, and make data-driven decisions to optimize your
                performance and drive success.
              </p>
              {/* <button
                  type="button"
                  className="btn btn-success main-butn"
                  onClick={() => {
                    router.push("/contactUs");
                  }}
                >
                  Get Started
                </button> */}
            </div>
          </Fade>

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

export default VendorsPage;

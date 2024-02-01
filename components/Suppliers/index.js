import Image from "next/image";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
///
import MailChimp from "@/components/MailChimp";
// get started
const SuppliersPage = () => {
  const router = useRouter();
  return (
    <>
      <section className="Hows-its-works">
        <div className="top-part text-center">
          <Fade top>
            <h2>Suppliers</h2>
          </Fade>
        </div>
      </section>

      <section className="fresh-product">
        <div className="container">
          <div className="row items-center">
            <Fade left>
              <div className="col-xl-6">
                <div className="img-wrap">
                  <Image
                    layout="fixed"
                    height={350}
                    width={600}
                    className="img-fluid"
                    src="/images/img-supplier-bg.png"
                    alt=""
                  />
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-6">
                <div className="ps-3 content-left pt-5 mt-5">
                  <strong>Be Part of an Esteemed Group of Suppliers</strong>
                  <p>
                    {" "}
                    {/* Joining Gonje elevates you to an esteemed group of suppliers who are committed to excellence and innovation. As part of our exclusive community, you gain recognition for your dedication to delivering top-tier products and exceptional service.  */}
                    Stand out in the market as a trusted supplier, and leverage
                    our platform that provides you with features such as quote
                    management, inventory management, HR tools, order
                    management, delivery management and a whole lot more to
                    amplify your brand reputation and increase your market
                    presence.
                  </p>

                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-xl-6">
                <div className="ps-3 content-left pt-5 mt-5">
                  <strong>Establish Fruitful Partnerships</strong>
                  <p>
                    {" "}
                    Gonje serves as a platform to facilitate meaningful and
                    fruitful partnerships between suppliers and vendors. We are
                    committed to creating an environment that fosters
                    collaboration, trust, and growth.{" "}
                    {/* As a supplier on our platform, you have the opportunity to connect with like-minded vendors who share a passion for excellence and quality. 
                  Together, you can drive success for all stakeholders involved, creating a win-win scenario for the entire ecosystem.                */}
                  </p>
                  {/* <button
                  type="button"
                  className="btn btn-success main-butn"
                  onClick={() => {
                    router.push("/contactUs");
                  }}
                >
                  Get started
                </button> */}
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-6 d-none d-sm-none d-md-none d-lg-none d-xl-block">
                <div className="img-wrap">
                  <Image
                    layout="fixed"
                    height={350}
                    width={600}
                    className="img-fluid"
                    src="/images/img-supplier-white.png"
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
                    src="/images/gonje-info-icon-4.png"
                    alt=""
                  />
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-xl-6">
                <div className="ps-3 pt-5 mt-5 content-left">
                  <strong>Management Tools</strong>
                  <p>
                    {" "}
                    Our streamlined quotes and order management system allow you
                    to prioritize an outstanding business experience while
                    minimizing administrative tasks.
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
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-6 py-5">
                <div className="ps-3 pt-5 mt-5">
                  <strong>Marketing Tools</strong>
                  <p>
                    {" "}
                    Gonje is committed to empowering vendors by providing
                    cutting-edge marketing tools, enabling them to boost
                    visibility and attract a broader customer base.
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
              </div>
            </Fade>

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
            <div className="col-xl-6">
              <div className="ps-3 pt-5 mt-5 content-left">
                <strong>New Features</strong>
                <p className="mb-2">
                  {" "}
                  Enjoy the advantages of our innovative marketing features,
                  including personalized recommendations, targeted promotions,
                  and seasonal campaigns.{" "}
                </p>
                <MailChimp/>

              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-3 pt-5 mt-5 content-left">
                <strong>Analytics</strong>
                <p className="mb-3">
                  {" "}
                  Employing data-driven marketing strategies, we assist you in
                  captivating vendors, increasing conversion rates, and
                  establishing your brand as a customer favorite.{" "}
                </p>
                <MailChimp/>

              </div>
            </div>
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
          </div>
        </div>
      </section>
      <section className="delivery-door our-vision">
        <div className="container">
          <div className="upper-head mt-5 text-center">
            <h4>
              Gain Access to a Network of Reliable Vendors and Optimize Supply
              Chain Efficiency
            </h4>
            <p className="mb-2">
              {" "}
              By becoming a supplier on Gonje, you gain access to a vast network
              of reliable vendors eager to collaborate and showcase your
              products to their discerning customer base. Our platform acts as a
              bridge, connecting you with vendors who are actively seeking
              top-notch products to offer to their vendors. Leverage the power
              of our marketplace to reach new markets and expand your customer
              reach beyond borders. At Gonje, we understand the importance of an
              efficient supply chain in delivering timely and superior products
              to vendors. As a member, you can streamline your supply chain
              operations and ensure timely deliveries to vendors, enhancing
              their ability to meet customer demands promptly. By optimizing the
              supply chain, you contribute to a seamless shopping experience for
              vendors, boosting customer satisfaction and loyalty.
            </p>
            <MailChimp/>

          </div>
        </div>
      </section>
      <section className="delivery-door bg-white">
        <div className="container">
          <div className="upper-head mt-5 text-center">
            <h4>Seamlessly Manage Quote Requests and Negotiate Deals</h4>
            <p className="mb-2">
              {" "}
              Gonje streamlines the process of managing quote requests, ensuring
              a hassle-free experience for suppliers. Our intuitive interface
              allows you to view and respond to quote requests from vendors
              efficiently. Seamlessly navigate through requests, submit quotes,
              and present your products with clarity and precision, fostering a
              smoother and more transparent communication process. Negotiations
              play a pivotal role in forging successful partnerships, and we
              equip you with the tools to handle negotiations with ease.
              Leverage our platform's negotiation features to communicate with
              vendors, address queries, and reach mutually beneficial
              agreements. Efficiently manage the entire negotiation process,
              establishing a strong foundation for productive and long-lasting
              partnerships.
            </p>
            <MailChimp/>

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

export default SuppliersPage;

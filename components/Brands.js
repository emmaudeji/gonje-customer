import Image from "next/image";
import Link from "next/link";
import "react-responsive-modal/styles.css";
import Fade from "react-reveal/Fade";
import MailChimp from "./MailChimp";

export default function Brands({ toggleGetStarted }) {
  return (
    <>
      <section className="brandssec">
        <div className="container">
          <div className="row justify-content-between">
            <Fade left>
              <div className="col-xl-6 col-lg-12 brandbubbls">
                <div className="brandscrcles">
                  <div
                    className="brandcecleimg brandclecle1 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    <div className="relative md:w-32 md:h-24 w-8 h-8 lg:mx-auto mx-1">
                      <Image
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/britannia-logo.png"
                        fill={true}
                        // objectFit="scale-down"
                        alt="britannia-logo"
                        className=" object-contain bg-cover lg:mt-1 !mt-12"
                        quality={30}
                      />
                    </div>
                  </div>
                  <div
                    className="brandcecleimg brandclecle2 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    <div className="relative md:w-32 md:h-24 w-12 h-12 lg:mx-auto mx-2 mt-4">
                      <Image
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/kelloggs-logo.png"
                        fill={true}
                        // objectFit="scale-down"
                        alt="britannia-logo"
                        className=" object-contain bg-cover lg:mt-1 !mt-12"
                        quality={30}
                      />
                    </div>
                  </div>
                  <div
                    className=" brandcecleimg brandclecle3 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                  >
                    <div className="relative md:w-32 md:h-24 w-8 h-8 lg:mx-auto mx-3">
                      <Image
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/cadbury-logo.png"
                        fill={true}
                        // objectFit="scale-down"
                        alt="britannia-logo"
                        className=" object-contain bg-cover lg:mt-1 !mt-12"
                        quality={30}
                      />
                    </div>
                  </div>
                  <div
                    className="brandcecleimg brandclecle4 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.8s"
                  >
                    <div className="relative md:w-32 md:h-24 w-16 h-12 lg:mx-auto mx-2 mt-4">
                      <Image
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/everest-logo.png"
                        fill={true}
                        // objectFit="scale-down"
                        alt="britannia-logo"
                        className=" object-contain bg-cover lg:mt-1 !mt-12"
                        quality={30}
                      />
                    </div>
                  </div>
                  <div
                    className="brandcecleimg brandclecle5 wow fadeInUp pr-5"
                    data-wow-duration="1s"
                    data-wow-delay="0.9s"
                  >
                    <div className="relative md:w-32 md:h-24 w-8 h-8 lg:mx-auto mx-3">
                      <Image
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/nestle-logo.png"
                        fill={true}
                        // objectFit="scale-down"
                        alt="britannia-logo"
                        className=" object-contain bg-cover lg:mt-1 !mt-12"
                        quality={30}
                      />
                    </div>
                  </div>
                  <div
                    className="brandcecleimg brandclecle6 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="1.2s"
                  >
                    <div className="relative md:w-32 md:h-24 w-8 h-8 lg:mx-auto mx-3">
                      <Image
                        src="https://backendapi.gonje.com/public/gonje-storage/public/images/malta-guiness-1.png"
                        fill={true}
                        // objectFit="scale-down"
                        alt="britannia-logo"
                        className=" object-contain bg-cover lg:mt-1 !mt-12"
                        quality={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-xl-6 col-lg-12 brandtxt">
                <div className="heading">
                  <h2
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    Our Brands
                  </h2>
                </div>
                <div className="brandpara">
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    {/* Experience the assurance of authenticity and the delight of products designed to enhance your lifestyle.
                   Expand your offerings, gain credibility, and enhance your market position with our esteemed brand partners.
                   With the Gonje Marketplace Brands, you can confidently explore a collection of 
                   brands that have earned the trust and loyalty of customers worldwide. */}
                    With a variety of online grocery stores and delivery
                    services, you can now do all of your grocery shopping
                    online. <br />
                    We have a wide variety of grocery products available at our
                    stores, allowing you to purchase groceries through a channel
                    that is convenient for you.
                    <br />
                    Buy groceries online and have them delivered to your home,
                    making it a handy and speedy process.
                    <br /> You can pay for your purchases with bank transfer,
                    credit cards, cash, coupons, or internet banking.
                  </p>
                  {/* <p
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  We connect buyers and sellers of natural, organic,
                  environmentally sound products. We find the best suppliers and
                  makers of natural and organic products.
                </p> */}
                </div>

                <MailChimp />
              </div>{" "}
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import "react-responsive-modal/styles.css";
import Fade from 'react-reveal/Fade';

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
                  <Image
                    src="/images/britannia-logo.png"
                    layout="fixed"
                    height={80}
                    width={90}
                    objectFit="scale-down"
                    alt=""
                  />
                </div>
                <div
                  className="brandcecleimg brandclecle2 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <Image
                    layout="fixed"
                    height={20}
                    width={70}
                    objectFit="scale-down"
                    src="/images/kelloggs-logo.png"
                    alt=""
                  />
                </div>
                <div
                  className=" brandcecleimg brandclecle3 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <Image
                    layout="fixed"
                    height={100}
                    width={100}
                    src="/images/cadbury-logo.png"
                    alt=""
                  />
                </div>
                <div
                  className="brandcecleimg brandclecle4 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.8s"
                >
                  <Image
                    layout="fixed"
                    height={40}
                    width={90}
                    objectFit="scale-down"
                    src="/images/everest-logo.png"
                    alt=""
                  />
                </div>
                <div
                  className="brandcecleimg brandclecle5 wow fadeInUp pr-5"
                  data-wow-duration="1s"
                  data-wow-delay="0.9s"
                >
                  <Image
                    layout="fixed"
                    height={39}
                    width={150}
                    objectFit="scale-down"

                    src="/images/nestle-logo.png"
                    alt=""
                  />
                </div>
                <div
                  className="brandcecleimg brandclecle6 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1.2s"
                >
                  <Image
                    layout="fixed"
                    height={100}
                    width={100}
                    objectFit="scale-down"

                    alt=""
                    src="/images/malta-guiness-1.png"
                  />
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
                  
                  With a variety of online grocery stores and delivery services,
                  you can now do all of your grocery shopping online. <br />
                  We have a wide variety of grocery products available at our
                  stores, allowing you to purchase groceries through a channel
                  that is convenient for you.
                  <br />
                  Buy groceries online and have them delivered to your home,
                  making it a handy and speedy process.
                  <br /> You can pay for your purchases with bank transfer, credit cards, cash,
                  coupons, or internet banking.
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

              <div className="brandbtn">
                <Link
                  className="bttn wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.8s"
                  href={`/signin/customer`}
                >
                  Get Started
                </Link>
              </div>
            </div>        </Fade>
           
           
          </div>
        </div>
      </section>
    </>
  );
}

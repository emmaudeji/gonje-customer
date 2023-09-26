import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
export default function Footer({ toggleGetStarted }) {
  const route = useRouter();
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="footeinr">
                <h3>GOnje Market</h3>
                <p>
                  We connect buyers and sellers of natural, organic,
                  environmentally sound products.{" "}
                </p>
                <div className="footermail">
                  <input type="text" placeholder="Enter email address" />
                  <a
                    className="bttn"
                    onClick={() => {
                      toggleGetStarted(true);
                    }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div className="footeinr">
                <h3>The Company</h3>
                <ul className="footerlinks">
                  {/* <li>
                    <a>Sign Up</a>
                  </li>
                  <li>
                    <a>Our Process</a>
                  </li> */}
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        route.push("/terms");
                      }}
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  {/* <li>
                    <a>Shopes</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
            >
              <div className="footeinr">
                <h3>Customer Service</h3>
                <ul className="footerlinks">
                  <li>
                    <a
                      onClick={() => {
                        route.push("/contactUs");
                      }}
                    >
                      Help & Contact Us
                    </a>
                  </li>
                 
                  {/* <li>
                    <a>Return & Refund</a>
                  </li>
                  <li>
                    <a  <a
                      onClick={() => {
                        route.push("/terms");
                      }}
                    >
                      Help & Contact Us
                    </a>>Terms & Condition</a>
                  </li>
                  <li>
                    <a>Refer Friends</a>
                  </li> */}
                  <li>
                    <a
                      onClick={() => {
                        route.push("/faq");
                      }}
                    >
                      Faq
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <div className="footeinr">
                <h3>Address</h3>
                <p>
                  ABN - 46 649 251 007 <br />
                  Suite 227, 139 Cardigan St, Carlton Vic 3053
                </p>
                <p>
                  Parcel Collect 10143 43082, 341 Barry Road,
                  Campbellfield VIC 3061
                </p>
                <p>Tel – 1800 749 277</p>
                <p>Email – info@onjegroup.com.au</p>
                <ul className="footersocial-icons">
                  <li>
                    <a>
                      <Image
                        layout="fixed"
                        height={47}
                        width={47}
                        src="/images/fb.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <Image
                        layout="fixed"
                        height={47}
                        width={47}
                        src="/images/twitter.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <Image
                        layout="fixed"
                        height={47}
                        width={47}
                        src="/images/youtube.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copywrite">
          <div
            className="container wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <p> © {moment().format("YYYY")} Gonjegroup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

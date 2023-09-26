import Header from "../components/Header";
import Footer from "../components/Footer";
import DeliveryDate from "../components/DeliveryDate";
import Image from "next/image";
const deliverydates = () => {
  return (
    <>
      <Header></Header>

      <div className="body-wrapper">
        <div className="commonbg deliverdate">
          <div className="container">
            <div className="shippingotter">
              <div className="shippinglogo">
                <Image height={75} width={154} src="/images/logo.svg" alt="" />
              </div>
              <div className="shippinginr">
                <div className="shippingsteps">
                  <ul>
                    <li className="activesteps">
                      <span>
                        <Image
                          height={30}
                          width={30}
                          src="/images/shoping-detail/tick.svg"
                          alt=""
                        />
                      </span>
                      <h4>Shipping Address</h4>
                    </li>
                    <li className="activesteps">
                      <span>
                        <Image
                          height={30}
                          width={30}
                          src="/images/shoping-detail/tick.svg"
                          alt=""
                        />
                      </span>
                      <h4>Payment Details</h4>
                    </li>
                    <li className="activesteps">
                      <span>
                        <Image
                          height={30}
                          width={30}
                          src="/images/shoping-detail/tick.svg"
                          alt=""
                        />
                      </span>
                      <h4>Delivery Date</h4>
                    </li>
                  </ul>
                </div>
                <DeliveryDate></DeliveryDate>
              </div>
            </div>
          </div>
          <div className="shipping-topimg">
            <Image
              height={100}
              width={603}
              src="/images/shoping-detail/topimg.svg"
              alt=""
            />
          </div>
          <div className="shipping-rightimg">
            <Image
              height={763}
              width={137}
              src="/images/shoping-detail/rightimg.png"
              alt=""
            />
          </div>
          <div className="shipping-bottomimg">
            <Image
              height={141}
              width={664}
              src="/images/shoping-detail/bottomimg.svg"
              alt=""
            />
          </div>
          <div className="shipping-leftimg">
            <Image
              height={577}
              width={277}
              src="/images/shoping-detail/leftimg.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};
export default deliverydates;

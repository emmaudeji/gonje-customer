import Header from "../components/Header";
import PaymentForm from "../components/PaymentForm";
import Footer from "../components/Footer";
import CardDetailForm from "../components/Card/CardDetailForm";
import Card from "../components/Card";
import Image from "next/image";
const Payment = () => {
  return (
    <>
      <Header></Header>
      <div className="body-wrapper">
        <div className="commonbg paymentdetail ">
          <div className="container">
            <Card></Card>
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
export default Payment;

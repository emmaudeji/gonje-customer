import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCallback, useEffect, useState } from "react";
import Router from "next/router";
export default function DeliveryDateComp() {
  const [setalldate, setalldates] = useState({});
  // setalldates(1);

  var today = new Date();

  let alldates = [];

  var all = new Array();
  for (var i = 0; i <= 7; today.setDate(today.getDate() + 1), i++) {
    alldates.push(new Date(today));
    all[i] = i;
  }

  const continuebtn = () => {
    Router.push("/dashboard");
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <a className="nav-link" type="button" onClick={test}>
        sign in
      </a>
      <div className="shippingform">
        <div className="deliverhdng">
          <h2>Select Delivery Date</h2>
        </div>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          <div className="deliveryslider slider">
            <div className="deliverinr deliveractive">
              <div className="delivertxt">
                <h3>
                  {" "}
                  <span>Dec</span>
                </h3>
                <h4>Wednedsay</h4>
              </div>
            </div>
          </div>
        </Carousel>
        <div className="continuebtn">
          <a onClick={continuebtn}>Continue</a>
        </div>
      </div>
    </>
  );
}

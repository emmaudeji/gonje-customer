import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCallback, useEffect, useState } from "react";
import Router from "next/router";
import { fetchDeliveryData } from "./Api/Api.js";
export default function DeliveryDateComp() {
  const [setdate0, setDates0] = useState([]);
  const [setdate1, setdates1] = useState([]);
  const [setdate2, setdates2] = useState([]);
  const [setdate3, setdates3] = useState([]);
  const [response, setResponse] = useState();

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
      items: 4,
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

  useEffect(() => {
    const fetchData = async () => {
      const postcode = localStorage.getItem("user_detail_postcode");
      const json = await fetchDeliveryData({ postcode });
      setResponse(json);
      if (json.length !== 0 && json !== "undefined") {
        setDates0(json?.data[0]?.split(" "));
        setdates1(json?.data[1]?.split(" "));
        setdates2(json?.data[2]?.split(" "));
        setdates3(json?.data[3]?.split(" "));
      }
    };
    fetchData();
  }, []);

  // if (!response?.shop_id) {
  //   return <p>Oops..! Sorry, We dont have any shop there</p>;
  // }

  return (
    <>
      <div className="shippingform">
        {!response?.shop_id ? (
          <p>Oops..! Sorry, We dont have any shop there</p>
        ) : (
          <>
            <div className="deliverhdng">
              <h2>Estimated Delivery Dates</h2>
            </div>

            <div className="row d-flex">
              <div className="col deliveryslider slider">
                <div className="deliverinr ">
                  <div className="delivertxt">
                    <h3>
                      {" "}
                      {setdate0?.length > 0 && setdate0[0]}
                      <span>{setdate0?.length > 0 && setdate0[1]}</span>
                    </h3>
                    <h4>{setdate0?.length > 0 && setdate0[2]}</h4>
                  </div>
                </div>
              </div>
              <div className="col deliveryslider slider">
                <div className="deliverinr ">
                  <div className="delivertxt">
                    <h3>
                      {setdate1?.length > 0 && setdate1[0]}
                      <span>{setdate1?.length > 0 && setdate1[1]}</span>
                    </h3>
                    <h4>{setdate1?.length > 0 && setdate1[2]}</h4>
                  </div>
                </div>
              </div>
              <div className="col  deliveryslider slider">
                <div className="deliverinr ">
                  <div className="delivertxt">
                    <h3>
                      {setdate2?.length > 0 && setdate2[0]}
                      <span>{setdate2?.length > 0 && setdate2[1]}</span>
                    </h3>
                    <h4>{setdate2?.length > 0 && setdate2[2]}</h4>
                  </div>
                </div>
              </div>
              <div className="col deliveryslider slider">
                <div className="deliverinr ">
                  <div className="delivertxt">
                    <h3>
                      {setdate3?.length > 0 && setdate3[0]}
                      <span>{setdate3?.length > 0 && setdate3[1]}</span>
                    </h3>
                    <h4>{setdate3?.length > 0 && setdate3[2]}</h4>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="continuebtn">
          <a onClick={continuebtn}>Continue</a>
        </div>
      </div>
    </>
  );
}

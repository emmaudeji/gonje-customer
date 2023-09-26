import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCallback, useEffect, useState } from "react";
import Router from "next/router";
export default function DeliveryDateComp() {
  const month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sept";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
  let currentDate = new Date();

  var date1 = new Date(currentDate);
  date1.setDate(currentDate.getDate() + 1);

  var date2 = new Date(date1);
  date2.setDate(date1.getDate() + 1);
  var date3 = new Date(date2);
  date3.setDate(date2.getDate() + 1);
  var date4 = new Date(date3);
  date4.setDate(date3.getDate() + 1);
  var date5 = new Date(date4);
  date5.setDate(date4.getDate() + 1);

  let day = currentDate.getDay();
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let name = month[currentDate.getMonth()];
  const [setalldate0, setalldates0] = useState({
    cDay: currentDate.getDate(),
    cMonth: month[currentDate.getMonth()],
    cDayText: daylist[day],
  });

  const [setalldate1, setalldates1] = useState({
    cDay: currentDate.getDate() + 1,
    cMonth: month[date1.getMonth()],
    cDayText: daylist[date1.getDay()],
  });
  const [setalldate2, setalldates2] = useState({
    cDay: currentDate.getDate() + 2,
    cMonth: month[date2.getMonth()],
    cDayText: daylist[date2.getDay()],
  });
  const [setalldate3, setalldates3] = useState({
    cDay: currentDate.getDate() + 3,
    cMonth: month[date2.getMonth()],
    cDayText: daylist[date3.getDay()],
  });
  const [setalldate4, setalldates4] = useState({
    cDay: currentDate.getDate() + 4,
    cMonth: month[date2.getMonth()],
    cDayText: daylist[date4.getDay()],
  });
  const [setalldate5, setalldates5] = useState({
    cDay: currentDate.getDate() + 5,
    cMonth: month[date2.getMonth()],
    cDayText: daylist[date5.getDay()],
  });
  var today = new Date();

  let alldates = [];

  var all = new Array();
  for (var i = 0; i <= 7; today.setDate(today.getDate() + 1), i++) {
    alldates.push(new Date(today));
    all["date" + i] = new Date(today);
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
    getCategory(shopId);
  }, []);
  return (
    <>
      <div className="shippingform">
        <div className="deliverhdng">
          <h2>Select Delivery Date</h2>
        </div>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showArrows={true}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {/* 
                    <div className="deliveryslider slider">
                        <div className="deliverinr deliveractive">
                            <div className="delivertxt">
                                <h3>{setalldate0.cDay} <span>{setalldate0.cMonth}</span></h3>
                                <h4>{setalldate0.cDayText}</h4>
                            </div>
                        </div>

                    </div>
                    <div className="deliveryslider slider">
                        <div className="deliverinr">
                            <div className="delivertxt">
                                <h3>{setalldate1.cDay} <span>{setalldate1.cMonth}</span></h3>
                                <h4>{setalldate1.cDayText}</h4>
                            </div>
                        </div>

                    </div> */}
          <div className="deliveryslider slider">
            <div className="deliverinr deliveractive">
              <div className="delivertxt">
                <h3>
                  {setalldate2.cDay} <span>{setalldate2.cMonth}</span>
                </h3>
                <h4>{setalldate2.cDayText}</h4>
              </div>
            </div>
          </div>
          <div className="deliveryslider slider">
            <div className="deliverinr ">
              <div className="delivertxt">
                <h3>
                  {setalldate3.cDay} <span>{setalldate3.cMonth}</span>
                </h3>
                <h4>{setalldate3.cDayText}</h4>
              </div>
            </div>
          </div>
          <div className="deliveryslider slider">
            <div className="deliverinr">
              <div className="delivertxt">
                <h3>
                  {setalldate4.cDay} <span>{setalldate4.cMonth}</span>
                </h3>
                <h4>{setalldate4.cDayText}</h4>
              </div>
            </div>
          </div>
          <div className="deliveryslider slider">
            <div className="deliverinr">
              <div className="delivertxt">
                <h3>
                  {setalldate5.cDay} <span>{setalldate5.cMonth}</span>
                </h3>
                <h4>{setalldate5.cDayText}</h4>
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

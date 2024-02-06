import Header from "../layout/Header";
import Menu from "../layout/Menu";

import Topbar from "../layout/Topbar";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveDeliveryDate } from "../../actions/deliverydates";
import { useRouter } from "next/router";
import StartShopping from "./StartShopping";
import moment from "moment";
import Link from "next/link";
export default function DeliverySchedule({ shopId }) {
  const [cday, setcday] = useState();
  const [cdate, setcdate] = useState();
  const [cmonth, setcmonth] = useState();
  const [splitmonth, setsplitmonth] = useState();
  const [nextsplitmonth, setnextsplitmonth] = useState();
  const [ndate, setndate] = useState();
  const [nday, setnday] = useState();
  const [nmonth, setnmonth] = useState();

  const router = useRouter();
  const dispatch = useDispatch();

  const deliverydates = useSelector((state) => state.deliverydates);

  useEffect(() => {
    localStorage.setItem("shop_id", shopId);
    dispatch(retrieveDeliveryDate({ shop_id: shopId }));
  }, [shopId, dispatch]);

  useEffect(() => {
    if (
      deliverydates.length !== 0 &&
      deliverydates.current_date !== "undefined"
    ) {
      const current_date = deliverydates.current_date;
      const current_date_split = current_date.split(" ");

      setsplitmonth(current_date_split[1].substr(0, 3));
      setcday(current_date_split[0]);
      setcmonth(current_date_split[1]);
      setcdate(current_date_split[2]);
    }
    if (
      deliverydates.length !== 0 &&
      deliverydates.next_delivery_date !== "undefined"
    ) {
      const next_delivery_date = deliverydates.next_delivery_date;
      const next_delivery_split = next_delivery_date.split("-");
      setndate(next_delivery_split[2]);
      setnday(next_delivery_split[1]);
      setnmonth(next_delivery_split[1]);
      setnextsplitmonth(next_delivery_split[1].substr(0, 3));
    }
  }, [deliverydates]);

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div className="side-body">
        <Topbar></Topbar>
        <div className="main"></div>
        <div className="current-delivery">
          <div className="top-heading">
            <h3>Current Delivery schedule</h3>
            <div className="row mt-5 mb-4">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="outer-wrap d-flex">
                  <div className="next-delivery">
                    <strong>Next Delivery</strong>
                    {/* <p>
                      lorem ipsum doller cont <br />
                      dummy text is here
                    </p> */}
                  </div>

                  <div className="delivery-time">
                    <strong>
                      {moment(deliverydates.next_delivery_date).format("dddd")}
                    </strong>
                    <p>
                      {moment(deliverydates.next_delivery_date).format("DD")}th
                    </p>
                    <span>
                      {moment(deliverydates.next_delivery_date).format("MMMM")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="shop-wrap d-flex">
                  <div className="next-delivery shop-detils">
                    <strong>Shopping Window</strong>
                    {/* <p>
                      lorem ipsum doller cont <br />
                      dummy text is here
                    </p> */}
                  </div>
                  <div className="delivery-time shop-time">
                    <strong>
                      {splitmonth} {cdate}th <br />
                      12 am GMT+11
                    </strong>
                    <p>To</p>
                    <span>
                      {nextsplitmonth} {ndate}th <br />
                      12 am GMT+11
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="another-head">Want to shop now?</h3>
            <p className="text-center sub-head">
              Change your preferred delivery day
            </p>
            <div className="row justify-content-center mt-5">
              <div className="col-lg-6 col-md-12">
                <div className="start-shop text-center">
                  <strong>
                    Delivery On{" "}
                    {moment(deliverydates.next_delivery_date).format("dddd")}{" "}
                    {moment(deliverydates.next_delivery_date).format("MMMM")} -{" "}
                    {moment(deliverydates.next_delivery_date).format("DD")}{" "}
                  </strong>
                  <p>$50 Order Minimum</p>
                  <StartShopping shopId={shopId}></StartShopping>
                </div>
              </div>
            </div>
            <div className="py-4">
              <h3 className="another-head">Check out our products</h3>
              <p className="text-center sub-head">
                Check your preffered product
              </p>
              <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-md-12">
                  <div className="start-shop text-center py-8">
                    <Link href={`/product/${shopId}`}>
                      <button className="text-black linear rounded-md bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
                        Discover now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { useEffect, React, useState } from "react";
import Moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { retrieveOrder } from "../../actions/pantry.js";
import Reorder from "./Reorder.js";
import Loader from "../Loader.js";
import Image from "next/image";
import { useRouter } from "next/router";
import { zipPayCheckout } from "../Api/Api.js";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Orders() {
  const [apires, apiReasponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [onload, setonload] = useState(true);
  const [page, setPage] = useState(1);
  const [loaderdata, setloaderdata] = useState(false);

  const route = useRouter();

  const orders = useSelector((state) => state.pantry);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveOrder(page));
  }, []);

  useEffect(() => {
    if (orders) {
      apiReasponse(orders || []);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [orders]);

  useEffect(() => {
    if (route.query && Object.keys(route.query).length !== 0) {
      if (route.query.result === "approved") {
        setLoading(true);
        zipPayCheckout(route.query.checkoutId).then((res) => {
          setLoading(false);
          dispatch(retrieveOrder());
          route.push("/pantry");
        });
      }
    }
  }, [route]);

  const handleLoadMore = () => {
    setPage((page) => page + 1);
    dispatch(retrieveOrder(page + 1))
      .then((res) => {
        if (res.data.data.length === 0) {
          setonload(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="row pantry fruits">
        <InfiniteScroll
          dataLength={apires.length || 0}
          next={handleLoadMore}
          hasMore={onload}
          loader={apires.length > 0 && <p>Loading.... </p>}
        >
          {apires.length > 0 ? (
            apires.map((result, index) => (
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-sm-12 p-2"
                key={index}
              >
                <div className="outer-wrap">
                  <div className="order-status ">
                    <div className="order-id">
                      <strong>Order #{result.id}</strong>
                      <p>{Moment(result.created_at).format("DD-MMM-YYYY")}</p>
                    </div>
                    <div
                      className={`order-process ${
                        result.status.name == "Rejected" ? "rejected" : ""
                      }`}
                    >
                      <p>{`${result.status.name}`}</p>
                      {/* <p>{`${result.status.name}\n${result.tracking_number}`}</p> */}
                    </div>
                  </div>

                  <div className="common_div">
                    <div className="tracking">
                      <hr />
                      <div className="tracking d-flex">
                        <p>Tracking No :</p>
                        <p className="tracking-no">{result.tracking_number}</p>
                      </div>
                    </div>
                    <div className="pantry_products">
                      {result.products &&
                        result.products.map((proresult, proindex) => (
                          <div className="item-detail d-flex" key={proindex}>
                            <div className="item-img">
                              {proresult.image &&
                              proresult.image.hasOwnProperty("thumbnail") ? (
                                <Image
                                  src={proresult.image.thumbnail}
                                  alt=""
                                  height={80}
                                  width={80}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="item-name">
                              <strong>{proresult.name}</strong>
                              <p>{proresult.description.substring(0, 60)}</p>
                              <div className="p-qty d-flex justify-content-between">
                                <p>${proresult.pivot.unit_price}</p>
                                <p>Qty:{proresult.pivot.order_quantity}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <hr className="second-divider" />
                  <div className="checkout d-flex justify-content-between">
                    <div className="total-items">
                      <p>X{result.products.length} items</p>
                      <strong>${result.amount}</strong>
                    </div>
                    <Reorder order_id={result.id}></Reorder>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="side-rght-inr">
              <div className="empty-txt">product&apos;s not found.</div>
            </div>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
}

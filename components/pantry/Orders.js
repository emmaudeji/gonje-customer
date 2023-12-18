import { useEffect, React, useState } from "react";
import Moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";

///
import { retrieveOrder } from "../../actions/pantry.js";
import Reorder from "./Reorder.js";
import Loader from "../Loader.js";
import { zipPayCheckout } from "../Api/Api.js";
import { EmptyState } from "../dashboard/EmptyState.jsx";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus } from "lucide-react";

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
                                  height={50}
                                  width={50}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="item-name">
                              <strong>{proresult.name}</strong>
                              <div className="p-qty d-flex justify-content-between">
                                <p>${proresult.pivot.unit_price}</p>
                                <p>Qty:{proresult.pivot.order_quantity}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div className="px-3 flex justify-between border-t py-2">
                        <div>
                          <h3>Total:</h3>
                        </div>

                        <div className="total-items">
                          <p>X{result.products.length} items</p>
                          <strong>${result.amount}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="second-divider" />
                  <div className="checkout flex flex-col md:flex-row gap-y-4  justify-content-between px-4 py-2">
                    <UpdateDelivery />
                    <Reorder order_id={result.id}></Reorder>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="">
              <EmptyState errorName={`Product's not found.`} />
            </div>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
}

const UpdateDelivery = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button type="button" className="flex gap-x-2 text-sm h-9 bg-gonje-green w-full">
          <Plus size={16} />
          <span>Update</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-red-700 text-white">Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-gonje-green">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

import ProductService from "../../services/ProductService";
import { useCallback, useEffect, useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import InfiniteScroll from "react-infinite-scroll-component";
import TimeAgoTag from "./TimeAgoTag";
import Loader from "../Loader";
import { EmptyState } from "@/components/dashboard/EmptyState";
import Image from "next/image";
import { SingleProduct } from "../products/ProductDetail";

export default function TodaysSale({ shopId }) {
  const [loading, setLoading] = useState(false);

  const [apiproduct, apiProduct] = useState("");
  const [page, setPage] = useState(1);
  const [loaderdata, setloaderdata] = useState(false);
  const [onload, setonload] = useState(true);
  const getProducts = useCallback(() => {
    let Collected_data = "shop_id=" + shopId + "&page=" + page;
    ProductService.TodaysSale(shopId).then((response) => {
      if (page == 1) {
        setLoading(false);
        apiProduct(response.data.data.data);
        console.log("test data", response.data.data.data);
        if (response.data.data.last_page <= page) {
          setloaderdata(false);
        } else {
          setloaderdata(true);
        }
      } else {
        setLoading(false);
        if (response.data.data.last_page <= page) {
          setloaderdata(false);
        } else {
          setloaderdata(true);
        }
        apiProduct((apiproduct) => [...apiproduct, ...response.data.data.data]);
      }
    });
  }, [shopId, page, action]);

  const handleLoadMore = (e) => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    if (shopId !== undefined && shopId != "") {
      setLoading(true);
      getProducts(shopId);
    }
  }, [shopId, page, getProducts]);

  return (
    <>
      {loading && <Loader />}
      <div className="bg-white categories top-deal pt-3">
        <div className="fruits row justify-content-center">
          <InfiniteScroll
            dataLength={apiproduct.length}
            next={(e) => (onload ? handleLoadMore(e) : "")}
            hasMore={true}
            loader={loaderdata ? <h4>Loading...</h4> : ""}
          >
            {apiproduct.length ? (
              apiproduct.map((productresult, productindex) => (
                <div>
                  <SingleProduct
                    productindex={productindex}
                    productresult={productresult}
                    key={productindex}
                  />
                </div>
              ))
            ) : (
              <div className="container py-4 h-full">
                <EmptyState />
              </div>
            )}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}

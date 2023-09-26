import ProductService from "../../services/ProductService";
import { useCallback, useEffect, useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import InfiniteScroll from "react-infinite-scroll-component";
import TimeAgoTag from "./TimeAgoTag";
import Loader from "../Loader";
import Image from "next/image";

export default function Products({ shopId, action }) {
  const [loading, setLoading] = useState(false);

  const [apiproduct, apiProduct] = useState("");
  const [page, setPage] = useState(1);
  const [loaderdata, setloaderdata] = useState(false);
  const [onload, setonload] = useState(true);
  const getProducts = useCallback(() => {
    let Collected_data = "shop_id=" + shopId + "&page=" + page;

    ProductService.getproductdata(Collected_data, action)
      .then((response) => {
        if (page == 1) {
          setLoading(false);
          apiProduct(response.data.data.data);
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
          apiProduct((apiproduct) => [
            ...apiproduct,
            ...response.data.data.data,
          ]);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
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
      <div className="categories top-deal pt-3">
        <div className="fruits row justify-content-center">
          <InfiniteScroll
            dataLength={apiproduct.length}
            next={(e) => (onload ? handleLoadMore(e) : "")}
            hasMore={true}
            loader={loaderdata ? <h4>Loading...</h4> : ""}
          >
            {apiproduct.length ? (
              apiproduct.map((productresult, productindex) => (
                <a className="fruit-price" key={productindex}>
                  <div className="item-img">
                    {productresult.image &&
                    productresult.image.hasOwnProperty("thumbnail") ? (
                      <Image
                        src={productresult.image.thumbnail}
                        alt=""
                        height={80}
                        width={80}
                        layout="fixed"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <strong>{productresult.name}</strong>
                  <p className="info">
                    {productresult.description ? (
                      <>{productresult.description.substring(0, 100)}</>
                    ) : (
                      ""
                    )}
                  </p>
                  {action != 1 ? (
                    <>
                      {productresult.sale_price > 0 ? (
                        <p className="price">
                          <strike>${productresult.price}</strike>$
                          {productresult.sale_price}
                        </p>
                      ) : (
                        <p className="price">${productresult.price}</p>
                      )}{" "}
                    </>
                  ) : (
                    <>
                      <TimeAgoTag
                        timeago={productresult.created_at}
                      ></TimeAgoTag>
                      <p className="price">${productresult.price}</p>
                    </>
                  )}
                  <div className="quantity d-flex">
                    <div className="items d-flex">
                      <p>Qty</p>
                      <strong>{productresult.quantity}</strong>
                    </div>
                    <AddToCartBtn slug={productresult.slug}></AddToCartBtn>
                  </div>
                  {action != 1 && productresult.discount > 0 ? (
                    <div className="offer">-{productresult.discount}%</div>
                  ) : (
                    ""
                  )}
                </a>
              ))
            ) : (
              <div className="side-rght-inr">
                <div className="empty-txt">product&apos;s not found.</div>
              </div>
            )}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}

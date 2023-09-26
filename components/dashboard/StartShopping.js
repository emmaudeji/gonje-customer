import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import Router from "next/router";
import { storeShopId } from "../../actions/shops.js";
export default function StartShopping({ shopId }) {
  const dispatch = useDispatch();
  const pageName = useSelector((state) => state.pagereducers);
  const storeData1 = () => {
    dispatch(storeShopId(shopId));
    // const shopID = shopId || localStorage.getItem("")
    localStorage.setItem("shop_id", shopId);
    // Router.push(pageName + shopId);
    Router.push("/product/" + shopId);
  };

  return (
    <>
      <button type="button" className="btn btn-primary">
        {" "}
        {/* <Link
          href={{
            pathname: "/product/[id]",
            query: { id: shopId },
          }}
        > */}
        <a
          href="#"
          onClick={() => {
            storeData1();
          }}
        >
          {" "}
          Start Shopping
        </a>
        {/* </Link> */}
      </button>
    </>
  );
}

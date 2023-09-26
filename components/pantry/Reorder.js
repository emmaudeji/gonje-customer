import { useEffect, React, useState } from "react";
import { addCartProduct } from "../../actions/addcarts.js";
import { useDispatch, useSelector } from "react-redux";
import { retrieveCount } from "../../actions/carts.js";
import ProductService from "../../services/ProductService";
import { listingCartProduct } from "../../actions/addcarts.js";
import Router from "next/router";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Reorder({ order_id }) {
  const [apires, apiReasponse] = useState("");
  const userId = useSelector((state) => state.userdetails);

  const dispatch = useDispatch();
  const reOrder = (order_id) => {
    //open pop show  product's detail
    ProductService.reorderproduct(order_id)
      .then((data) => {
        if (data.data.status === true) {
          apiReasponse(data.message);
          dispatch(retrieveCount(data.data.cart_count));
          dispatch(listingCartProduct({ user_id: userId }));
          Router.push("/checkout");
        } else {
          toast.error(data.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="re-order">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            reOrder(order_id);
          }}
        >
          <Image
            src="/assets/images/cart-1.svg"
            height={12}
            width={20}
            alt=""
          />
          Re Order
        </button>
      </div>
    </>
  );
}

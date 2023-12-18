import { addCartProduct } from "../../actions/addcarts.js";
import { retrieveCount } from "../../actions/carts.js";
import ProductService from "../../services/ProductService";
import { listingCartProduct } from "../../actions/addcarts.js";
import { Button } from "@/components/ui/button";

///
import { useEffect, React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { toast } from "react-toastify";
import { ShoppingCart } from "lucide-react";

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
        <Button
          type="button"
          className="flex gap-x-2 text-sm h-9 w-full"
          onClick={() => {
            reOrder(order_id);
          }}
        >
          <ShoppingCart size={16}/>
          <span>Re Order</span>
        </Button>
      </div>
    </>
  );
}



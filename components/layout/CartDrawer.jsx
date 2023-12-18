import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
/////
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { listingCartProduct } from "../../actions/addcarts.js";
import { addCartProduct } from "../../actions/addcarts.js";
import { retrieveCount } from "../../actions/carts.js";
import UserDataService from "../../services/UserService";
import Countdown from "react-countdown";
import moment from "moment";
import Image from "next/image";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import CartCount from "./CartCount.js";

export const CartDrawer = () => {
  const [apires, setApiResponse] = useState("");
  const [successmsg, successMsg] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [timer, setTimer] = useState();

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userdetails);
  const users = useSelector((state) => state.users);

  const AddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const ReduceQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const updateToCart = (quantity, productID, shop_id, value) => {
    if (value == 0) {
      quantity = quantity - 1;
    } else if (value == 1) {
      quantity = quantity + 1;
    } else {
      quantity = 0;
    }
    dispatch(
      addCartProduct({
        user_id: userId,
        product_id: productID,
        shop_id: shop_id,
        product_quantity: quantity,
      })
    )
      .then((data) => {
        // console.log(data.message);
        dispatch(retrieveCount(data.cart_count));
        successMsg(data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    UserDataService.get()
      .then((response) => {
        const fullDaysSeconds = moment.duration("24:0:0").asSeconds();
        const currentTimeSeconds = moment
          .duration(moment(response.data.current_time).format("HH:mm:ss"))
          .asSeconds();
        const timerSeconds = fullDaysSeconds - currentTimeSeconds;

        var duration = moment.duration(timerSeconds, "seconds");
        var formatted = duration.format("HH:mm:ss");
        setTimer(formatted);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    dispatch(listingCartProduct({ user_id: userId }))
      .then((data) => {
        if (data.status === 1) {
          // console.log('ddddd', data)
          // const updatedList = [...data.data, fakedata]
          setApiResponse(data);
          console.log(data);
        }
        successMsg("");
      })
      .catch((e) => {
        console.log(e);
      });
  }, [successmsg, dispatch]);

  return (
    <Sheet>
      <SheetTrigger>
        <button
          type="button"
          className="py-3 bg-[#f1f1f1] gap-x-3 px-2 flex items-center"
          data-bs-target="#cart"
        >
          <ShoppingCart width={23} height={23} color="#f7d594" />
          <CartCount />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-start justify-between mb-5">
            <SheetTitle>Checkout</SheetTitle>
            <SheetClose className="ml-3 flex h-7 items-center">
              <button type="button" className="relative -m-2 p-2">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close checkout</span>
                <X className="h-6 w-6" />
              </button>
            </SheetClose>
          </div>
        </SheetHeader>
        <ul role="list" className="-my-6 divide-y divide-gray-200 space-y-3">
          {apires.data &&
            apires.data.map((result, index) => (
              <li key={index} className="flex py-6">
                <div className="h-10 w-10 md:h-16 md:w-16 relative flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  {result?.productImage && (
                    <Image
                      src={result.productImage}
                      alt=""
                      fill={true}
                      className="h-full w-full object-cover object-center"
                    />
                  )}
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-sm md:text-base font-medium text-gray-900">
                      <h3>{result.productName}</h3>
                      <p className="ml-4">${result.productPrice}</p>
                    </div>
                    <div className="flex gap-x-4 my-4 items-center">
                      <Minus
                        onClick={() => {
                          ReduceQuantity();
                          updateToCart(
                            result.productQuantity,
                            result.productID,
                            result.shop_id,
                            quantity
                          );
                        }}
                      />
                      <span className="text-sm border rounded-md px-3 border-gonje-green">
                        {result.productQuantity}
                      </span>
                      <Plus
                        onClick={() => {
                          AddQuantity();
                          updateToCart(
                            result.productQuantity,
                            result.productID,
                            result.shop_id,
                            quantity
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">
                      Qty {result.productQuantity}
                    </p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-red-600 cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${apires.subTotal}</p>
          </div>
          {/* <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> */}
          <Link
            href={{
              pathname: "/checkout",
            }}
            className="mt-6 flex flex-col justify-center"
          >
                       
            <Button href="#" className="bg-gonje-green w-full">
              Checkout
            </Button>
          </Link>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <SheetClose type="button" className="font-medium text-gonje">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </SheetClose>
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

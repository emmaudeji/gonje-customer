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
import {
  clearCartProduct,
  listingCartProduct,
} from "../../actions/addcarts.js";
import { addCartProduct } from "../../actions/addcarts.js";
import { retrieveCount } from "../../actions/carts.js";
import UserDataService from "../../services/UserService";
import Countdown from "react-countdown";
import moment from "moment";
import Image from "next/image";
import {
  CheckCircle2,
  Minus,
  Plus,
  ShoppingCart,
  Trash,
  X,
} from "lucide-react";
import CartCount from "./CartCount.js";

export const CartDrawer = () => {
  const [apires, setApiResponse] = useState("");
  const [successmsg, successMsg] = useState("");
  const [cartResponseMessage, setCartResponseMessage] = useState("");
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

  const updateToCart = (quantity, productID, shop_id) => {
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
        successMsg(data.message);
        setCartResponseMessage(data.message);
        dispatch(retrieveCount(data.cart_count));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const clearCart = () => {
    dispatch(clearCartProduct())
      .then((data) => {
        console.log(data);
        fetchData();
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
  const fetchData = async () => {
    try {
      dispatch(listingCartProduct({ user_id: userId }))
        .then((response) => {
          if (response.status === 1) {
            setApiResponse(response);
            successMsg(""); // Make sure this function exists
            setCartResponseMessage("");
            // console.log("response", response);
          } else {
            setApiResponse("");
            successMsg("");
            setCartResponseMessage("");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [successmsg, dispatch]);
  // console.log("cartResponse", cartResponseMessage);
  // console.log("success message:", successmsg);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="py-2 lg:py-3 bg-[#f1f1f1] gap-x-3 px-2 flex items-center"
          data-bs-target="#cart"
          onClick={() => fetchData()}
        >
          <ShoppingCart width={23} height={23} color="#f7d594" />
          <CartCount />
        </button>
      </SheetTrigger>
      <SheetContent className="">
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
        {apires.data && (
          <button
            className="flex justify-end items-center gap-x-1 text-red-600 my-2 sticky top-0"
            name="clear-cart"
            title="clear cart"
            aria-label="clear cart"
            onClick={clearCart}
          >
            <Trash size={16} />
            <p>Clear Cart</p>
          </button>
        )}
        <ul
          role="list"
          className="-my-6 py-4 divide-y divide-gray-200 space-y-3 px-3 max-h-[50%] lg:max-h-[70%] overflow-y-scroll"
        >
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
                          updateToCart(
                            result.productQuantity - 1,
                            result.productID,
                            result.shop_id
                          );
                        }}
                      />
                      <span className="text-sm border rounded-md px-3 py-1 border-gonje-green">
                        {result.productQuantity}
                      </span>
                      <Plus
                        onClick={() => {
                          updateToCart(
                            result.productQuantity + 1,
                            result.productID,
                            result.shop_id
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
                        onClick={() => {
                          updateToCart(0, result.productID, result.shop_id);
                        }}
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
          <div className="mt-4 space-y-4">
            {apires.subTotal <= 49 && (
              <div className="text-sm flex gap-x-2 text-red-700">
                <CheckCircle2 className="" />
                <span>Orders have to be above $49</span>
              </div>
            )}
            {apires.subTotal >= 75 && (
              <div className="text-sm flex gap-x-2">
                <CheckCircle2 className="text-gonje-green" />
                <span>You qualify for a free gift</span>
              </div>
            )}
            {apires.subTotal >= 150 && (
              <div className="text-sm flex gap-x-2">
                <CheckCircle2 className="text-gonje-green" />
                <span>You qualify for free delivery</span>
              </div>
            )}
          </div>

          {apires.subTotal <= 50 ? (
            ""
          ) : (
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
          )}

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

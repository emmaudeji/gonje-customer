import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Router from "next/router";
import { storePageName } from "../../actions/setpage.js";
import Image from "next/image";
export default function MenuGrocery({storeData}) {
  const shopID = useSelector((state) => state.shops);
  const router = useRouter();
  const dispatch = useDispatch();
  const menuGrocery = () => {
    const shopID = localStorage.getItem("shop_id");
    dispatch(storePageName("/product/"));
    if (!shopID || shopID == 0) {
      Router.push("/dashboard");
      storeData()
    } else {
      Router.push("/product/" + shopID);
      storeData()
    }
  };

  return (
    <>
      <li>
        {" "}
        <a
          onClick={() => menuGrocery()}
          href="#"
          className={`d-flex nav-link ${
            router.pathname == "/product/[shopId]" ? "active" : "text-whitee"
          }`}
        >
          {" "}
          <div className="icon text-center">
            <Image
              height={25}
              width={33}
              src="/assets/images/shopping-basket.svg"
              alt=""
            />
          </div>
          <span className="ms-2">Products</span>{" "}
        </a>{" "}
      </li>
    </>
  );
}

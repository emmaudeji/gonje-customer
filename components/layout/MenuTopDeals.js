import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Router from "next/router";
import { storePageName } from "../../actions/setpage.js";
import Image from "next/image";
export default function MenuTopDeals() {
  const shopID = useSelector((state) => state.shops);
  const router = useRouter();
  const dispatch = useDispatch();

  const menuTopDeals = () => {
    dispatch(storePageName("/topdeals/"));
    const shopID = localStorage.getItem("shop_id");
    if (!shopID || shopID == 0) {
      Router.push("/dashboard");
    } else {
      Router.push("/topdeals/" + shopID);
    }
  };
  return (
    <>
      <li>
        {" "}
        <a
          href="#"
          onClick={() => menuTopDeals()}
          className={`d-flex nav-link ${
            router.pathname == "/topdeals/[shopId]" ? "active" : "text-whitee"
          }`}
        >
          {" "}
          <div className="icon text-center">
            <Image
              height={25}
              width={33}
              src="/assets/images/offers.svg"
              alt=""
            />
          </div>
          <span className="ms-2">Top Deals</span>{" "}
        </a>{" "}
      </li>
    </>
  );
}

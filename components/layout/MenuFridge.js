import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import Router from "next/router";
import { storePageName } from "../../actions/setpage.js";
import Image from "next/image";
export default function MenuFridge() {
  // const shopID = useSelector((state) => state.shops);
  // const shopID = useSelector((state) => state.shops);
  const router = useRouter();
  const dispatch = useDispatch();
  const menuFridge = () => {
    const shopID = localStorage.getItem("shop_id");
    dispatch(storePageName("/fridge/"));
    if (!shopID || shopID == 0) {
      Router.push("/dashboard");
    } else {
      Router.push("/fridge/" + shopID);
    }
  };

  return (
    <>
      <li>
        {" "}
        <a
          onClick={() => menuFridge()}
          href="#"
          className={`d-flex nav-link ${
            router.pathname == "/fridge/[shopId]" ? "active" : "text-whitee"
          }`}
        >
          {" "}
          <div className="icon text-center">
            <Image
              height={25}
              width={33}
              src="/assets/images/fridge.svg"
              alt=""
            />
          </div>
          <span className="ms-2">Fridge</span>{" "}
        </a>{" "}
      </li>
    </>
  );
}

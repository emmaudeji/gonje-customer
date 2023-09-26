import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Router from "next/router";
import { storePageName } from "../../actions/setpage.js";
import Image from "next/image";
export default function MenuTodaySale() {
  // const shopID = useSelector((state) => state.shops);
  const router = useRouter();
  const dispatch = useDispatch();
  const menuTodaySale = () => {
    dispatch(storePageName("/todaysale/"));
    const shopID = localStorage.getItem("shop_id");
    if (!shopID || shopID == 0) {
      Router.push("/dashboard");
    } else {
      Router.push("/todaysale/" + shopID);
    }
  };

  return (
    <>
      <li>
        {" "}
        <a
          href="#"
          onClick={() => menuTodaySale()}
          className={`d-flex nav-link ${
            router.pathname == "/todaysale/[shopId]" ? "active" : "text-whitee"
          }`}
        >
          {" "}
          <div className="icon text-center">
            <Image
              height={25}
              width={33}
              src="/assets/images/sale(1).svg"
              alt=""
            />
          </div>
          <span className="ms-2">Today Sale</span>{" "}
        </a>{" "}
      </li>
    </>
  );
}

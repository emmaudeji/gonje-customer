import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Router from "next/router";
import { storePageName } from "../../actions/setpage.js";
import Image from "next/image";

export default function MenuWhatsNew() {
  const shopID = useSelector((state) => state.shops);
  const router = useRouter();
  const dispatch = useDispatch();
  const menuWhatsNew = () => {
    const shopID = localStorage.getItem("shop_id");
    dispatch(storePageName("/whatsnew/"));
    if (!shopID || shopID == 0) {
      Router.push("/dashboard");
    } else {
      Router.push("/whatsnew/" + shopID);
    }
  };

  return (
    <>
      <li>
        {" "}
        <a
          href="#"
          onClick={() => menuWhatsNew()}
          className={`d-flex nav-link ${
            router.pathname == "/whatsnew/[shopId]" ? "active" : "text-whitee"
          }`}
        >
          {" "}
          <div className="icon text-center">
            <Image
              height={25}
              width={33}
              src="/assets/images/new-items.svg"
              alt=""
            />
          </div>
          <span className="ms-2">What&apos;s New!</span>{" "}
        </a>{" "}
      </li>
    </>
  );
}

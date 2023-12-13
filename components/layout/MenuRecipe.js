import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Router from "next/router";
import { storePageName } from "../../actions/setpage.js";
import Image from "next/image";
export default function MenuRecipe({storeData}) {
  // const shopID = useSelector((state) => state.shops);
  const router = useRouter();
  const dispatch = useDispatch();
  const menuRecipe = () => {
    dispatch(storePageName("/recipes/"));
    const shopID = localStorage.getItem("shop_id");
    if (!shopID || shopID == 0) {
      Router.push("/dashboard");
      storeData()
    } else {
      Router.push("/recipes/" + shopID);
      storeData()
    }
  };
  return (
    <>
      <li>
        {" "}
        <a
          href="#"
          onClick={() => menuRecipe()}
          className={`d-flex nav-link ${
            router.pathname == "/recipes/[shopId]" ? "active" : "text-whitee"
          }`}
        >
          {" "}
          <div className="icon text-center">
            <Image
              height={25}
              width={33}
              src="/assets/images/kitchen-book.svg"
              alt=""
            />
          </div>
          <span className="ms-2">My Recipes</span>{" "}
        </a>{" "}
      </li>
      <hr className="side-menu-divider" />
    </>
  );
}

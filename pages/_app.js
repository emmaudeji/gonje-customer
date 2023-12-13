import "../public/css/marquee.css";
import "../public/css/style.css";
import "react-toastify/dist/ReactToastify.css";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "@stripe/stripe-js";

import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "../store";
import Common from "../components/shared/Common";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Toaster } from "@/components/ui/toaster";

// import "../styles/Home.module.css"
//TODO://Put the toaster in a layout component
export const publicPaths = [
  "/",
  "/howItworks",
  "/aboutUs",
  "/contactUs",
  "/faq",
  "/vendors",
  "/suppliers",
  "/privacy_policies",
  "/signin",
  "/signin/customer",
  "/signin/vendor",
  "/signin/supplier",
  "/signup",
  "/signup/customer",
  "/signup/vendor",
  "/signup/supplier",
  "/vendor-select",
  "/terms",
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [localData, setLocalData] = useState();

  useEffect(() => {
    const user_detail = JSON.parse(localStorage.getItem("user_detail"));
    const isPublic =
      publicPaths.includes(router.asPath) ||
      router.asPath.startsWith("/signup") ||
      router.asPath.startsWith("/signin");

    setLocalData({
      isPublic: isPublic,
      isPrivate: !isPublic && user_detail,
    });

    if (!isPublic && !user_detail) {
      router.push("/");
    }
  }, [router.asPath]);

  if (!localData) {
    return <></>;
  }
  return (
    <Provider store={store}>
      {localData.isPrivate || localData.isPublic ? (
        <>
          <Common>
            <Component {...pageProps} />
            <Toaster />
          </Common>
        </>
      ) : null}
    </Provider>
  );
}

export default MyApp;

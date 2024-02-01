import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <section>
      <div className="hidden sm:block fixed top-0 left-0 w-full h-full   ">
        <Image
          src="/bg.png"
          alt="bg img"
          className="w-full h-full object-cover"
          fill={true}
        />
      </div>
      <div className="h-screen items-center absolute py-14 top-0 left-0 w-screen  flex justify-center z-20">
        <div className="shadow sm:w-[520px] p-4   bg-white rounded-xl ">
          <div className="grid justify-center gap- pb-6 text-center">
            <div className=" flex justify-center w-full pb-3">
              <Link href="/">
                <Image
                  alt="logo"
                  loading="lazy"
                  width={90}
                  height={64}
                  decoding="async"
                  data-nimg={1}
                  src="/logo.png"
                  style={{ color: "transparent" }}
                />
              </Link>
            </div>
            <p className="font-semibold text-xl">Forgot Password</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;

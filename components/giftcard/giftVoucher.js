import React from "react";
import Image from "next/image";
import { coupon } from "../../public/assets";

const GiftVoucher = () => {
  return (
    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
      <div className="coupon">
        <Image src={coupon} alt="" />
      </div>
    </div>
  );
};

export default GiftVoucher;

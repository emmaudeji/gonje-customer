import React from "react";
import Image from "next/image";
import { giftBanner } from "../../public/assets";

const GiftCard = () => {
  return (
    <div className="gift-banner text-center">
      <Image src={giftBanner} alt="" />
    </div>
  );
};

export default GiftCard;

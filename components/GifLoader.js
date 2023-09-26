import React from "react";
import Image from "next/image";

const GifLoader = () => {
  return (
    <div className="overlay_loader  w-100">
      <div className="gif_loader">
        <Image
          src="/assets/images/fruitloader.gif"
          width={400}
          height={200}
          alt=""
        />
      </div>
    </div>
  );
};

export default GifLoader;

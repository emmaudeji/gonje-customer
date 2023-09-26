import Header from "../layout/Header";
import Menu from "../layout/Menu";
import { useEffect, React, useState } from "react";

import FridgeCarousel from "./FridgeCarousel";

const Fridge = ({ shopId }) => {
  
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div className="pro side-body">
      
          <FridgeCarousel shopId={shopId}></FridgeCarousel>
      
      </div>
    </>
  );
};
export default Fridge;

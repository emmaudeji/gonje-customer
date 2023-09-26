import Header from "../layout/Header";
import Menu from "../layout/Menu";
import SearchTopbar from "../layout/SearchTopbar";
import { useEffect, React, useState } from "react";
import Products from "../commonProductDeals/Products";

const TodaySale = ({ shopId }) => {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div className="pro side-body">
        <div className="producttop top-head">
          <SearchTopbar></SearchTopbar>
        </div>
        <div className="main"></div>
        <Products shopId={shopId} action="2"></Products>
      </div>
    </>
  );
};
export default TodaySale;

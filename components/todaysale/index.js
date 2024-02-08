import Header from "../layout/Header";
import Menu from "../layout/Menu";
import SearchTopbar from "../layout/SearchTopbar";
import { useEffect, React, useState } from "react";
import Products from "../commonProductDeals/Products";
import TodaysSale from "../commonProductDeals/TodaysSale";

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
        <TodaysSale shopId={shopId} />
      </div>
    </>
  );
};
export default TodaySale;

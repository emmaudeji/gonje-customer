import React from "react";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import SearchTopbar from "../layout/SearchTopbar";
import BuildYourBox from "./BuildYourBox";

const upcomingBox = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="pro side-body">
        <div className="producttop top-head">
          <SearchTopbar />
        </div>
        <div className="main"></div>
        <BuildYourBox />
      </div>
    </>
  );
};

export default upcomingBox;

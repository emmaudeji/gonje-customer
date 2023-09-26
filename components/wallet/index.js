import React from "react";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import SearchTopbar from "../layout/SearchTopbar";
import AllTransactions from "./allTransactions";
import TotalPoints from "./totalPoints";

const Wallet = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="pro side-body">
        <div className="producttop top-head">
          <SearchTopbar />
        </div>
      </div>
      <div className="wallet">
        <div className="account-info row">
          <AllTransactions />
        </div>
      </div>
    </>
  );
};

export default Wallet;

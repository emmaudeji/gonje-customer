import React from "react";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import SearchTopbar from "../layout/SearchTopbar";
import NotificationsContainer from "./NotificationsContainer";

const NotificationsPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="pro side-body">
        <div className="producttop top-head">
          <SearchTopbar />
        </div>
        <NotificationsContainer />
      </div>
    </>
  );
};

export default NotificationsPage;

import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <Menu />
      <section className="md:ml-[227px] relative transition duration-400 ease-linear ml-0">
        <Topbar/>
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;

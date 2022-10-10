import React from "react";
import MainContainer from "./MainContainer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = (props: any) => {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="inline-container">
        <MainContainer />
        <SideBar />
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import "../../../assets/css/admin.css";
import Topbar from "./navs/Topbar";
import Sidebar from "./navs/Sidebar";

function UserLayout({ SidebarNav, TopbarNav, children }) {
  return (
    <>
      <Topbar TopbarNav={TopbarNav} />
      <Sidebar SidebarNav={SidebarNav} />
    </>
  );
}

export default UserLayout;
